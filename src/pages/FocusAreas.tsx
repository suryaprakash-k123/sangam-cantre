import React from "react";
import {
  ArrowRight,
  Landmark,
  Cpu,
  Globe,
  Users,
  Film,
  Shield,
  BarChart2,
  BookOpen,
  Sparkles,
  Layers,
  RefreshCcw,
  Leaf,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";

const FocusAreas = () => {
  const focusAreas = [
    {
      icon: Landmark,
      title: "Traditional Arts & Heritage",
      description:
        "Exploring policies for preserving India's tangible and intangible cultural heritage and adapting traditions for contemporary contexts.",
      keyResearch: [
        "Heritage preservation frameworks",
        "Intangible cultural heritage",
        "Legal instruments for protection",
        "Digital documentation of heritage",
      ],
      recentWork:
        "Policy Frameworks for Safeguarding Intangible Cultural Heritage in India",
    },
    {
      icon: Cpu,
      title: "Digital Heritage & Technology",
      description:
        "Examining how digital tools transform cultural preservation, from AI to blockchain, ensuring access to cultural resources for future generations.",
      keyResearch: [
        "Digital preservation standards",
        "AI in cultural heritage",
        "Blockchain for provenance",
        "National digital libraries",
      ],
      recentWork:
        "AI and Heritage: Opportunities and Risks for Digital Preservation",
    },
    {
      icon: Globe,
      title: "Cultural Diplomacy & Soft Power",
      description:
        "Studying how nations use cultural assets to build global relationships, influence perceptions, and advance diplomatic goals.",
      keyResearch: [
        "Cultural exchange programs",
        "Role of cultural institutions",
        "Comparative diplomacy models",
        "Soft power metrics",
      ],
      recentWork:
        "India's Soft Power: Cultural Diplomacy in a Multipolar World",
    },
    {
      icon: BarChart2,
      title: "Creative Industries & Economy",
      description:
        "Researching cultural sectors as drivers of economic growth, from creative clusters to cultural tourism and policy incentives.",
      keyResearch: [
        "Economic impact analysis",
        "Creative clusters",
        "Cultural tourism policy",
        "Public support for creative sectors",
      ],
      recentWork:
        "Creative Economies: Unlocking India's Cultural Industry Potential",
    },
    {
      icon: Shield,
      title: "Cultural Impact & Policy Evaluation",
      description:
        "Developing robust tools to measure the social and economic outcomes of cultural policies for better decision-making.",
      keyResearch: [
        "Cultural impact assessment",
        "Evaluation frameworks",
        "Quantitative and qualitative metrics",
        "Policy effectiveness tools",
      ],
      recentWork:
        "Measuring Culture: Developing Cultural Impact Assessment Protocols",
    },
    {
      icon: Leaf,
      title: "Cultural Sustainability",
      description:
        "Investigating how cultural practices contribute to environmental sustainability and how heritage connects to sustainable development goals.",
      keyResearch: [
        "Cultural-environmental linkages",
        "Policy integration models",
        "Community resilience",
        "Culture-driven conservation",
      ],
      recentWork:
        "Culture and Climate: Policies at the Intersection of Heritage and Environment",
    },
    {
      icon: Building,
      title: "Urban Cultural Planning",
      description:
        "Exploring how cities integrate cultural planning into urban development to foster community engagement and vibrant cultural ecosystems.",
      keyResearch: [
        "Urban cultural strategies",
        "Neighborhood revitalization",
        "Social cohesion through culture",
        "Placemaking and urban identity",
      ],
      recentWork: "Cultural Placemaking: Strategies for Indian Cities",
    },
    {
      icon: Users,
      title: "Community Cultural Development",
      description:
        "Focusing on grassroots cultural initiatives and empowering communities to shape their cultural futures.",
      keyResearch: [
        "Participatory models",
        "Community engagement strategies",
        "Cultural identity in policy",
        "Locally driven initiatives",
      ],
      recentWork:
        "Empowering Communities: Models for Grassroots Cultural Development",
    },
    {
      icon: BookOpen,
      title: "Arts Education & Cultural Learning",
      description:
        "Studying how arts education nurtures creativity, identity, and cultural literacy, ensuring broad access for all communities.",
      keyResearch: [
        "Arts education policy",
        "Barriers to cultural learning",
        "Cultural literacy frameworks",
        "Evidence-based education strategies",
      ],
      recentWork: "Arts in Education: Building Cultural Literacy in India",
    },
    {
      icon: Sparkles,
      title: "Gender Equality & Cultural Rights",
      description:
        "Analyzing gender dynamics in cultural participation and leadership, and promoting gender-responsive cultural policies.",
      keyResearch: [
        "Gender gaps in cultural sectors",
        "Pay equity and representation",
        "Inclusive cultural policy",
        "Gender-responsive frameworks",
      ],
      recentWork:
        "Women in Culture: Towards Gender-Responsive Cultural Policies",
    },
    {
      icon: RefreshCcw,
      title: "Youth Cultural Engagement",
      description:
        "Exploring how youth engage with culture, from digital platforms to leadership roles in shaping cultural policy.",
      keyResearch: [
        "Youth cultural participation",
        "Digital cultural engagement",
        "Leadership development",
        "Intergenerational knowledge transfer",
      ],
      recentWork: "Next-Gen Culture: Youth Engagement and Digital Futures",
    },
  ];

  return (
    <div className="bg-white">
      <img
        src="/Focus.jpeg"
        alt="Decorative banner"
        className="w-full max-w-8xl h-[400px] object-cover"
      />
      {/* Hero Section */}
      {/* <section className="bg-[#1e293c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Focus Areas</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our research explores critical cultural policy domains to preserve
              heritage, foster innovation, and drive social change in India.
            </p>
          </div>
        </div>
      </section> */}
      {/* Focus Areas Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-600 rounded-lg mr-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <h2 className="text-xl font-bold leading-tight">
                        {area.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className=" text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {area.keyResearch.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className=" leading-relaxed">{feature}</span>

                            <p></p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FocusAreas;
