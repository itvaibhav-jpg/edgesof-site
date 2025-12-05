'use client';

import { FaHospital, FaUniversity, FaTruck, FaShoppingCart, FaIndustry, FaMobileAlt } from 'react-icons/fa';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

export default function Industries() {
  const industries = [
    {
      name: 'Healthcare & Life Sciences',
      icon: FaHospital,
      description: 'Transform patient care with AI-powered EMR systems, telemedicine platforms, and healthcare analytics.',
      challenges: [
        'Patient data management and security',
        'Regulatory compliance (HIPAA, GDPR)',
        'Interoperability between systems',
        'Rising operational costs',
      ],
      solutions: [
        'Electronic Medical Records (EMR/EHR)',
        'AI-powered diagnostic assistance',
        'Telemedicine and remote monitoring',
        'Healthcare analytics and BI',
        'Appointment and billing automation',
      ],
      caseStudy: {
        client: 'Leading Multi-Specialty Hospital Chain',
        result: '40% reduction in administrative costs, 99.9% data accuracy',
      },
    },
    {
      name: 'Banking & Financial Services',
      icon: FaUniversity,
      description: 'Secure, compliant, and intelligent financial solutions for modern banking and fintech.',
      challenges: [
        'Legacy system modernization',
        'Fraud detection and prevention',
        'Regulatory compliance',
        'Customer experience expectations',
      ],
      solutions: [
        'Core banking system modernization',
        'AI-powered fraud detection',
        'Payment gateway integrations',
        'Automated compliance monitoring',
        'Customer analytics and personalization',
      ],
      caseStudy: {
        client: 'Regional Bank with 2M+ Customers',
        result: '60% faster transaction processing, 85% fraud reduction',
      },
    },
    {
      name: 'Logistics & Supply Chain',
      icon: FaTruck,
      description: 'End-to-end supply chain visibility with real-time tracking and predictive analytics.',
      challenges: [
        'Real-time visibility across supply chain',
        'Route optimization',
        'Inventory management',
        'Last-mile delivery efficiency',
      ],
      solutions: [
        'Real-time tracking and monitoring',
        'AI-powered route optimization',
        'Warehouse management systems',
        'Predictive demand forecasting',
        'Automated dispatch and scheduling',
      ],
      caseStudy: {
        client: 'National Logistics Provider',
        result: '30% reduction in delivery time, 25% cost savings',
      },
    },
    {
      name: 'Retail & E-Commerce',
      icon: FaShoppingCart,
      description: 'Omnichannel retail solutions with AI-driven personalization and inventory optimization.',
      challenges: [
        'Omnichannel customer experience',
        'Inventory optimization',
        'Personalization at scale',
        'Supply chain disruptions',
      ],
      solutions: [
        'Unified commerce platforms',
        'AI-powered recommendations',
        'Smart inventory management',
        'Customer analytics and insights',
        'Automated pricing and promotions',
      ],
      caseStudy: {
        client: 'Multi-Brand Retail Chain',
        result: '45% increase in online sales, 20% inventory reduction',
      },
    },
    {
      name: 'Manufacturing',
      icon: FaIndustry,
      description: 'Smart manufacturing with IoT, predictive maintenance, and production optimization.',
      challenges: [
        'Equipment downtime',
        'Quality control',
        'Production efficiency',
        'Supply chain coordination',
      ],
      solutions: [
        'IoT-enabled predictive maintenance',
        'Quality control automation',
        'Production planning and scheduling',
        'Supply chain integration',
        'Real-time performance monitoring',
      ],
      caseStudy: {
        client: 'Automotive Parts Manufacturer',
        result: '50% reduction in downtime, 35% productivity increase',
      },
    },
    {
      name: 'Technology & Telecom',
      icon: FaMobileAlt,
      description: 'Next-gen platforms for digital service providers and technology companies.',
      challenges: [
        'Network optimization',
        'Customer churn',
        'Service quality monitoring',
        'Rapid technology evolution',
      ],
      solutions: [
        'Network analytics and optimization',
        'Customer experience management',
        'Billing and revenue management',
        'AI-powered customer support',
        'Service quality monitoring',
      ],
      caseStudy: {
        client: 'Regional Telecom Operator',
        result: '40% reduction in churn, 99.99% network uptime',
      },
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-sm font-semibold uppercase tracking-wide">
              Industry Expertise
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Transforming </span>
            <span className="text-gradient">Industries</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep domain expertise across multiple industries, delivering tailored solutions 
            that address unique challenges and drive measurable business outcomes.
          </p>
        </div>

        {/* Industries */}
        <div className="space-y-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="cyber-card p-8 lg:p-12 hover:glow-border transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-cyan-glow" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">
                          {industry.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-8">
                      {industry.description}
                    </p>

                    {/* Challenges */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Key Challenges
                      </h3>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-400">
                            <div className="w-1.5 h-1.5 bg-cyan-glow rounded-full mt-2 flex-shrink-0"></div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Case Study */}
                    <div className="bg-gradient-to-br from-cyan-glow/5 to-aqua-bright/5 border border-cyan-glow/20 rounded-lg p-6">
                      <div className="text-sm text-cyan-glow font-semibold mb-2 uppercase tracking-wide">
                        Success Story
                      </div>
                      <div className="text-white font-semibold mb-2">
                        {industry.caseStudy.client}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {industry.caseStudy.result}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Our Solutions
                    </h3>
                    <div className="space-y-4">
                      {industry.solutions.map((solution, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-navy-dark/50 border border-white/5 rounded-lg p-4 hover:border-cyan-glow/30 transition-all group"
                        >
                          <HiCheckCircle className="w-6 h-6 text-cyan-glow flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {solution}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark font-semibold rounded-md hover:shadow-lg hover:shadow-cyan-glow/50 transition-all"
                    >
                      Discuss Your Project
                      <HiArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center space-y-6 cyber-card p-12 bg-gradient-to-r from-cyan-glow/5 to-aqua-bright/5">
          <h2 className="text-4xl font-bold text-white">
            Don't See Your Industry?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We work across diverse sectors. Let's discuss how our expertise can transform your business.
          </p>
          <Link href="/contact" className="inline-block btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
