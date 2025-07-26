import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(__dirname, '../public/optimized');
const backupDir = path.join(__dirname, '../public/backup-original');

// Create backup directory
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

function copyFile(src, dest) {
  try {
    fs.copyFileSync(src, dest);
    return true;
  } catch (error) {
    console.error(`Error copying ${src} to ${dest}:`, error.message);
    return false;
  }
}

function replaceImages(sourceDir, targetDir, backupDir, relativePath = '') {
  const files = fs.readdirSync(sourceDir);
  
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, relativePath, file);
    const backupPath = path.join(backupDir, relativePath, file);
    const stat = fs.statSync(sourcePath);
    
    if (stat.isDirectory()) {
      // Skip the optimized directory itself
      if (file === 'optimized' || file === 'backup-original') {
        continue;
      }
      
      // Create subdirectories in backup
      const subBackupDir = path.join(backupDir, relativePath, file);
      if (!fs.existsSync(subBackupDir)) {
        fs.mkdirSync(subBackupDir, { recursive: true });
      }
      
      replaceImages(sourcePath, targetDir, backupDir, path.join(relativePath, file));
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        // Check if optimized version exists
        const originalPath = path.join(publicDir, relativePath, file);
        
        if (fs.existsSync(originalPath)) {
          // Backup original
          const backupFilePath = path.join(backupDir, relativePath);
          if (!fs.existsSync(backupFilePath)) {
            fs.mkdirSync(backupFilePath, { recursive: true });
          }
          
          console.log(`Backing up: ${file}`);
          copyFile(originalPath, backupPath);
          
          // Replace with optimized version
          console.log(`Replacing: ${file}`);
          if (copyFile(sourcePath, originalPath)) {
            console.log(`✓ Replaced ${file} with optimized version`);
          }
        }
      }
    }
  }
}

async function main() {
  console.log('Starting image replacement...');
  console.log(`Optimized directory: ${optimizedDir}`);
  console.log(`Target directory: ${publicDir}`);
  console.log(`Backup directory: ${backupDir}`);
  
  if (!fs.existsSync(optimizedDir)) {
    console.error('Optimized directory not found!');
    return;
  }
  
  // Replace images
  replaceImages(optimizedDir, publicDir, backupDir);
  
  console.log('\n✅ Image replacement complete!');
  console.log('\nSummary:');
  console.log('- Original images backed up to /public/backup-original/');
  console.log('- Optimized images now in use');
  console.log('- WebP versions available for modern browsers');
  console.log('\nNext steps:');
  console.log('1. Test the website to ensure images load correctly');
  console.log('2. Deploy to Vercel to see performance improvements');
  console.log('3. Consider implementing WebP support for even better performance');
}

main().catch(console.error);
