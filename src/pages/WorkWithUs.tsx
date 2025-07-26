
import React, { useState } from 'react';
import { Briefcase, GraduationCap, Heart, Users, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    motivation: '',
    resume: null
  });

  const opportunities = [
    {
      icon: Briefcase,
      title: "Full-time Positions",
      description: "Join our permanent team as a researcher, policy analyst, or administrative professional.",
      requirements: [
        "Advanced degree in relevant field",
        "3+ years of research experience",
        "Strong analytical and writing skills",
        "Commitment to evidence-based policy research"
      ],
      benefits: [
        "Competitive salary and benefits",
        "Professional development opportunities",
        "Collaborative research environment",
        "Access to policy networks"
      ]
    },
    {
      icon: GraduationCap,
      title: "Research Fellowships",
      description: "Pursue independent research on policy issues while contributing to our institutional projects.",
      requirements: [
        "PhD or equivalent research experience",
        "Published research in policy domains",
        "Strong proposal writing skills",
        "Alignment with our focus areas"
      ],
      benefits: [
        "Research stipend and support",
        "Access to data and resources",
        "Publication opportunities",
        "Academic networking"
      ]
    },
    {
      icon: Users,
      title: "Internships",
      description: "Gain hands-on experience in policy research and analysis through our structured internship program.",
      requirements: [
        "Currently enrolled in graduate program",
        "Interest in public policy",
        "Basic research skills",
        "Minimum 3-month commitment"
      ],
      benefits: [
        "Mentorship from senior researchers",
        "Skills development workshops",
        "Certificate of completion",
        "Networking opportunities"
      ]
    },
    {
      icon: Heart,
      title: "Volunteer Opportunities",
      description: "Contribute to our mission through event organization, research assistance, and community outreach.",
      requirements: [
        "Passion for policy research",
        "Time commitment flexibility",
        "Good communication skills",
        "Team collaboration ability"
      ],
      benefits: [
        "Skill development experience",
        "Access to events and publications",
        "Community of like-minded individuals",
        "Recognition for contributions"
      ]
    }
  ];

  const currentOpenings = [
    {
      title: "Senior Research Fellow - Economic Policy",
      department: "Economic Policy",
      location: "New Delhi",
      type: "Full-time",
      posted: "December 15, 2024",
      description: "Lead research on macroeconomic policies and fiscal reforms. Requires PhD in Economics and 5+ years experience.",
      requirements: [
        "PhD in Economics or related field",
        "5+ years of policy research experience",
        "Published research in peer-reviewed journals",
        "Experience with econometric analysis"
      ]
    },
    {
      title: "Policy Analyst - Digital Governance",
      department: "Technology Policy",
      location: "New Delhi",
      type: "Full-time",
      posted: "December 10, 2024",
      description: "Analyze digital governance initiatives and technology policy frameworks. Strong background in public administration required.",
      requirements: [
        "Masters in Public Policy or related field",
        "3+ years experience in technology policy",
        "Knowledge of digital governance frameworks",
        "Excellent research and writing skills"
      ]
    },
    {
      title: "Research Associate - Climate Policy",
      department: "Environment & Climate",
      location: "New Delhi",
      type: "Full-time",
      posted: "December 5, 2024",
      description: "Support research on climate finance and environmental policy. Entry-level position with growth opportunities.",
      requirements: [
        "Masters in Environmental Studies or related field",
        "1-2 years relevant experience",
        "Knowledge of climate policy frameworks",
        "Strong quantitative analysis skills"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      <img
        src="/northeast-culture.png"
        alt="Decorative banner"
        className="w-full max-w-8xl h-[400px] object-cover"
      />
      {/* Hero Section */}
      {/* <section className="bg-[#1e293c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Work With Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join our team of dedicated researchers and policy experts
              committed to creating evidence-based solutions for India's
              development challenges.
            </p>
          </div>
        </div>
      </section> */}

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold newpaper-body mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl newpaper-body max-w-3xl mx-auto">
              Be part of an organization that values intellectual rigor,
              collaborative research, and meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Impactful Research",
                description:
                  "Your work will directly influence policy discussions and contribute to India's development agenda.",
              },
              {
                icon: Users,
                title: "Collaborative Environment",
                description:
                  "Work alongside distinguished researchers and policy experts in an intellectually stimulating environment.",
              },
              {
                icon: GraduationCap,
                title: "Professional Growth",
                description:
                  "Access continuous learning opportunities, conferences, and professional development programs.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 newpaper-body rounded-lg mb-4">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold newpaper-body mb-3">
                  {benefit.title}
                </h3>
                <p className="newpaper-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold newpaper-body mb-4">
              Career Opportunities
            </h2>
            <p className="text-xl newpaper-body max-w-3xl mx-auto">
              We offer diverse opportunities for professionals at different
              stages of their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-teal-50 rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 newpaper-body rounded-lg mr-4">
                    <opportunity.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold newpaper-body">
                    {opportunity.title}
                  </h3>
                </div>

                <p className="newpaper-body mb-6 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold newpaper-body mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {opportunity.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 newpaper-body rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold newpaper-body mb-3">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold newpaper-body mb-4">
              Current Openings
            </h2>
            <p className="text-xl newpaper-body max-w-3xl mx-auto">
              Explore our current job opportunities and find the perfect role
              for your skills and interests.
            </p>
          </div>

          <div className="space-y-6">
            {currentOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-100 newpaper-body text-sm font-semibold px-3 py-1 rounded">
                        {job.type}
                      </span>
                      <span className="newpaper-body text-sm">
                        Posted: {job.posted}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold newpaper-body mb-2">
                      {job.title}
                    </h3>
                    <p className="newpaper-body mb-1">
                      {job.department} • {job.location}
                    </p>
                    <p className="newpaper-body mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div>
                      <h4 className="font-semibold newpaper-body mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 newpaper-body rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="w-full lg:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Form */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              General Application
            </h2>
            <p className="text-xl text-gray-600">
              Don't see a specific opening? Submit a general application and
              we'll keep you in mind for future opportunities.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Position of Interest
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a position type</option>
                  <option value="research-fellow">Research Fellow</option>
                  <option value="policy-analyst">Policy Analyst</option>
                  <option value="research-associate">Research Associate</option>
                  <option value="intern">Internship</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={4}
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Briefly describe your relevant experience and qualifications..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="motivation"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Why do you want to work with us? *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                rows={4}
                required
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Tell us about your interest in policy research and why you'd like to join our team..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Resume/CV
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Submit Application
                <Mail className="ml-2" size={20} />
              </button>
            </div>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default WorkWithUs;
