import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, "../public");
const outputDir = path.join(__dirname, "../public/optimized");

// Create optimized directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const jpegQuality = 80;
const pngQuality = 80;
const webpQuality = 80;
const maxWidth = 1920;
const maxHeight = 1080;

async function optimizeImage(inputPath, outputPath, filename) {
  try {
    const ext = path.extname(filename).toLowerCase();
    const nameWithoutExt = path.basename(filename, ext);

    let pipeline = sharp(inputPath);

    // Get image metadata
    const metadata = await pipeline.metadata();
    console.log(
      `Processing ${filename}: ${metadata.width}x${metadata.height} (${(
        fs.statSync(inputPath).size /
        1024 /
        1024
      ).toFixed(2)}MB)`
    );

    // Resize if too large
    if (metadata.width > maxWidth || metadata.height > maxHeight) {
      pipeline = pipeline.resize(maxWidth, maxHeight, {
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    // Optimize based on file type
    if (ext === ".jpg" || ext === ".jpeg") {
      await pipeline
        .jpeg({ quality: jpegQuality, progressive: true })
        .toFile(path.join(outputPath, filename));

      // Also create WebP version
      await sharp(inputPath)
        .resize(maxWidth, maxHeight, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: webpQuality })
        .toFile(path.join(outputPath, `${nameWithoutExt}.webp`));
    } else if (ext === ".png") {
      await pipeline
        .png({ quality: pngQuality, compressionLevel: 9 })
        .toFile(path.join(outputPath, filename));

      // Also create WebP version
      await sharp(inputPath)
        .resize(maxWidth, maxHeight, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: webpQuality })
        .toFile(path.join(outputPath, `${nameWithoutExt}.webp`));
    }

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(path.join(outputPath, filename)).size;
    const savings = (
      ((originalSize - optimizedSize) / originalSize) *
      100
    ).toFixed(1);

    console.log(
      `✓ ${filename}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(
        optimizedSize /
        1024 /
        1024
      ).toFixed(2)}MB (${savings}% smaller)`
    );
  } catch (error) {
    console.error(`Error processing ${filename}:`, error.message);
  }
}

async function processDirectory(dir, outputDir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const subOutputDir = path.join(outputDir, file);
      if (!fs.existsSync(subOutputDir)) {
        fs.mkdirSync(subOutputDir, { recursive: true });
      }
      await processDirectory(filePath, subOutputDir);
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        await optimizeImage(filePath, outputDir, file);
      }
    }
  }
}

async function main() {
  console.log("Starting image optimization...");
  console.log(`Input directory: ${publicDir}`);
  console.log(`Output directory: ${outputDir}`);

  await processDirectory(publicDir, outputDir);

  console.log("\n✅ Image optimization complete!");
  console.log("\nNext steps:");
  console.log("1. Review the optimized images in /public/optimized/");
  console.log("2. Replace the original images with optimized versions");
  console.log("3. Update your code to use WebP format where supported");
}

main().catch(console.error);
