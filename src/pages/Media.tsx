
import React, { useState } from 'react';
import { Calendar, Play, ExternalLink, Search, Filter, Eye } from 'lucide-react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('press');
  const [searchTerm, setSearchTerm] = useState('');

  const pressReleases = [
    {
      id: 1,
      title: "Sangam Centre Releases Comprehensive Study on India's Digital Infrastructure",
      date: "December 18, 2024",
      excerpt: "New research highlights critical policy imperatives for accelerating India's digital transformation while ensuring inclusive access across rural and urban areas.",
      link: "#"
    },
    {
      id: 2,
      title: "Climate Finance Report Calls for Enhanced International Cooperation",
      date: "November 25, 2024",
      excerpt: "Latest publication examines global climate finance mechanisms and their applicability to India's sustainable development goals and net-zero commitments.",
      link: "#"
    },
    {
      id: 3,
      title: "Urban Governance Study Reveals Administrative Challenges in Delhi",
      date: "October 15, 2024",
      excerpt: "Comprehensive analysis of Delhi's governance structures provides actionable recommendations for improving administrative efficiency and citizen services.",
      link: "#"
    }
  ];

  const mediaAppearances = [
    {
      id: 1,
      title: "Dr. Rajesh Kumar on Economic Recovery Strategies",
      outlet: "NDTV 24x7",
      type: "TV Interview",
      date: "December 20, 2024",
      topic: "Post-pandemic economic resilience and policy frameworks",
      duration: "15 minutes",
      link: "#"
    },
    {
      id: 2,
      title: "Prof. Meera Sharma Discusses Education Policy Reforms",
      outlet: "The Hindu",
      type: "Newspaper Article",
      date: "December 12, 2024",
      topic: "NEP implementation and quality enhancement strategies",
      duration: "Op-Ed",
      link: "#"
    },
    {
      id: 3,
      title: "Panel Discussion on Digital Governance",
      outlet: "CNN-News18",
      type: "Panel Discussion",
      date: "November 28, 2024",
      topic: "Technology policy and digital transformation challenges",
      duration: "30 minutes",
      link: "#"
    },
    {
      id: 4,
      title: "Climate Policy Analysis",
      outlet: "Business Standard",
      type: "Newspaper Article",
      date: "November 18, 2024",
      topic: "India's climate commitments and financing mechanisms",
      duration: "Analysis",
      link: "#"
    }
  ];

  const newsVideos = [
    {
      id: 1,
      title: "Policy Dialogue: India's Economic Resilience",
      description: "Highlights from our recent conference on post-pandemic economic recovery strategies",
      date: "December 10, 2024",
      duration: "12:45",
      views: "2,400",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=225&fit=crop"
    },
    {
      id: 2,
      title: "Workshop Insights: Data Governance in India",
      description: "Key takeaways from our workshop on data protection and privacy laws",
      date: "November 22, 2024",
      duration: "8:30",
      views: "1,800",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Climate Finance Roundtable Discussion",
      description: "Expert discussions on financing India's green transition",
      date: "October 30, 2024",
      duration: "15:20",
      views: "3,200",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=225&fit=crop"
    }
  ];

  const mediaKit = [
    {
      title: "Organization Fact Sheet",
      description: "Key information about Delhi Chapter | Sangam Centre, our mission, and research areas",
      format: "PDF",
      size: "2.1 MB"
    },
    {
      title: "Leadership Profiles",
      description: "Biographical information and expertise areas of our senior researchers",
      format: "PDF",
      size: "1.8 MB"
    },
    {
      title: "High-Resolution Logos",
      description: "Official logos and branding materials in various formats",
      format: "ZIP",
      size: "3.2 MB"
    },
    {
      title: "Recent Research Highlights",
      description: "Summary of our latest publications and key findings",
      format: "PDF",
      size: "2.5 MB"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#10b981] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Media Centre
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Access our latest press releases, media appearances, and
              multimedia content covering India's policy landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
              {[
                { id: "press", label: "Press Releases" },
                { id: "appearances", label: "Media Appearances" },
                { id: "videos", label: "Videos" },
                { id: "media-kit", label: "Media Kit" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      {activeTab === "press" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Press Releases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Latest announcements and news from Delhi Chapter | Sangam
                Centre.
              </p>
            </div>

            <div className="space-y-8">
              {pressReleases.map((release) => (
                <article
                  key={release.id}
                  className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                      Press Release
                    </span>
                    <span className="text-gray-500 flex items-center">
                      <Calendar className="mr-2" size={16} />
                      {release.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {release.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {release.excerpt}
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center">
                    Read Full Release
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Appearances */}
      {activeTab === "appearances" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Appearances
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experts regularly contribute to national and international
                media discussions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mediaAppearances.map((appearance) => (
                <div
                  key={appearance.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        appearance.type === "TV Interview"
                          ? "bg-red-100 text-red-800"
                          : appearance.type === "Newspaper Article"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {appearance.type}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {appearance.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {appearance.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    {appearance.outlet}
                  </p>
                  <p className="text-gray-700 mb-4">{appearance.topic}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {appearance.duration}
                    </span>
                    <button className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos */}
      {activeTab === "videos" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Video Content
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch highlights from our events, interviews, and policy
                discussions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="text-white" size={48} />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {video.date}
                      </span>
                      <span className="flex items-center">
                        <Eye className="mr-1" size={14} />
                        {video.views} views
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Kit */}
      {activeTab === "media-kit" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Kit
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Resources for journalists and media professionals covering our
                work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mediaKit.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="mr-4">{item.format}</span>
                      <span>{item.size}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                      Download
                      <ExternalLink className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Media Inquiries
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                For interviews, expert commentary, or additional information,
                please contact our media team.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong> media@sangamcentre.org
                </p>
                <p>
                  <strong>Phone:</strong> +91 11 2345 6789
                </p>
                <p>
                  <strong>Response Time:</strong> Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Media;
