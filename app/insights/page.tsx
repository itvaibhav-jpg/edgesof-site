'use client';

import { HiClock, HiUser, HiArrowRight } from 'react-icons/hi';
import { FaLightbulb, FaChartLine, FaShieldAlt, FaRobot } from 'react-icons/fa';
import Link from 'next/link';

export default function Insights() {
  const featured = {
    title: 'The Future of Enterprise AI: Trends Shaping 2025',
    excerpt: 'Explore how artificial intelligence is revolutionizing enterprise operations, from intelligent automation to predictive analytics and beyond.',
    category: 'AI & Innovation',
    readTime: '8 min read',
    author: 'Kumar Vaibhav',
    date: 'December 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
  };

  const insights = [
    {
      title: 'Cloud Migration Strategies for Enterprise Success',
      excerpt: 'A comprehensive guide to planning and executing successful cloud migration projects with minimal disruption.',
      category: 'Cloud Engineering',
      icon: FaChartLine,
      readTime: '6 min read',
      author: 'Tech Team',
      date: 'November 2024',
    },
    {
      title: 'Zero-Trust Security: Implementation Best Practices',
      excerpt: 'Learn how to implement zero-trust architecture to protect your enterprise from modern cyber threats.',
      category: 'Security',
      icon: FaShieldAlt,
      readTime: '7 min read',
      author: 'Security Team',
      date: 'November 2024',
    },
    {
      title: 'AI-Powered Automation: ROI and Business Impact',
      excerpt: 'Real-world case studies demonstrating measurable ROI from AI automation implementations.',
      category: 'AI & Automation',
      icon: FaRobot,
      readTime: '5 min read',
      author: 'Kumar Vaibhav',
      date: 'October 2024',
    },
    {
      title: 'Data Analytics Maturity Model for Enterprises',
      excerpt: 'Assess your organization\'s analytics capabilities and chart a path to data-driven decision making.',
      category: 'Data & Analytics',
      icon: FaLightbulb,
      readTime: '9 min read',
      author: 'Analytics Team',
      date: 'October 2024',
    },
    {
      title: 'Microservices Architecture: When and How',
      excerpt: 'Understanding when microservices make sense and how to implement them effectively.',
      category: 'Cloud Engineering',
      icon: FaChartLine,
      readTime: '10 min read',
      author: 'Tech Team',
      date: 'September 2024',
    },
    {
      title: 'Healthcare Digital Transformation Success Stories',
      excerpt: 'How leading healthcare providers are leveraging technology to improve patient outcomes.',
      category: 'Industry Insights',
      icon: FaLightbulb,
      readTime: '6 min read',
      author: 'Healthcare Team',
      date: 'September 2024',
    },
  ];

  const categories = [
    'All Insights',
    'AI & Automation',
    'Cloud Engineering',
    'Data & Analytics',
    'Security',
    'Industry Insights',
  ];

  const resources = [
    {
      title: 'Enterprise AI Readiness Assessment',
      type: 'Whitepaper',
      description: 'Evaluate your organization\'s readiness for AI adoption',
    },
    {
      title: 'Cloud Cost Optimization Guide',
      type: 'eBook',
      description: 'Strategies to reduce cloud spending by up to 40%',
    },
    {
      title: 'Security Compliance Checklist',
      type: 'Template',
      description: 'Comprehensive checklist for SOC 2, HIPAA, GDPR compliance',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-sm font-semibold uppercase tracking-wide">
              Insights & Resources
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Latest </span>
            <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert perspectives on technology trends, best practices, and industry innovations 
            to help you stay ahead in the digital age.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0
                  ? 'bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark'
                  : 'bg-navy-medium/50 text-gray-300 hover:bg-navy-medium border border-white/10 hover:border-cyan-glow/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="cyber-card p-0 mb-16 overflow-hidden hover:glow-border transition-all group">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              className="h-64 lg:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${featured.image})` }}
            ></div>
            <div className="p-8 lg:p-12">
              <div className="inline-block px-3 py-1 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-xs font-semibold uppercase tracking-wide mb-4">
                Featured
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-glow transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-300 mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <HiUser className="w-4 h-4" />
                  <span>{featured.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiClock className="w-4 h-4" />
                  <span>{featured.readTime}</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 text-cyan-glow font-semibold hover:gap-3 transition-all">
                Read Article
                <HiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className="cyber-card p-6 hover:glow-border transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-glow" />
                </div>
                <div className="text-xs text-cyan-glow font-semibold uppercase tracking-wide mb-3">
                  {insight.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-glow transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {insight.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <HiClock className="w-3 h-3" />
                    <span>{insight.readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{insight.date}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-cyan-glow text-sm font-semibold hover:gap-3 transition-all">
                  Read More
                  <HiArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Resources Section */}
        <div className="cyber-card p-8 lg:p-12 bg-gradient-to-br from-cyan-glow/5 to-aqua-bright/5">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Free Resources & Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-navy-dark/50 border border-white/10 rounded-lg p-6 hover:border-cyan-glow/30 transition-all group"
              >
                <div className="text-xs text-cyan-glow font-semibold uppercase tracking-wide mb-2">
                  {resource.type}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-glow transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>
                <button className="inline-flex items-center gap-2 text-cyan-glow text-sm font-semibold hover:gap-3 transition-all">
                  Download
                  <HiArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 text-center space-y-6 cyber-card p-12">
          <h2 className="text-3xl font-bold text-white">
            Stay Updated
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, industry trends, and technology updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-navy-dark border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow transition-colors"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark font-semibold rounded-md hover:shadow-lg hover:shadow-cyan-glow/50 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
