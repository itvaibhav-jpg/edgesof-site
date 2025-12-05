'use client';

import { FaBolt, FaCloud, FaHospital, FaMobileAlt, FaChartLine, FaShieldAlt, FaHeadset, FaPlug, FaChartBar, FaTag } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

export default function Products() {
  const products = [
    {
      name: 'EdgeFlow AI',
      tagline: 'Enterprise AI Workflow & Automation Engine',
      description: 'Intelligent automation platform that streamlines business processes with AI-powered workflows, document processing, and predictive analytics. Built for enterprise scale with 99.9% uptime SLA.',
      features: [
        'Visual workflow builder with drag-and-drop interface',
        'AI-powered automation with machine learning',
        'Document intelligence (OCR + NLP)',
        'Integration with 100+ enterprise apps',
        'Real-time monitoring and analytics',
        'Custom AI agents and chatbots',
        'WhatsApp Business API integration',
        'Multi-language support',
      ],
      pricing: 'Starting at $999/month',
      icon: FaBolt,
      badge: 'Most Popular',
    },
    {
      name: 'EdgeCloud OS',
      tagline: 'Cloud Infrastructure Orchestration Platform',
      description: 'Complete cloud orchestration system for managing multi-cloud infrastructure, deployments, and scaling with intelligent resource optimization. Enterprise-grade security and compliance built-in.',
      features: [
        'Multi-cloud management (AWS, Azure, GCP)',
        'Auto-scaling & intelligent load balancing',
        'Container orchestration (Kubernetes)',
        'CI/CD pipelines with GitOps',
        'Infrastructure as Code (Terraform, Pulumi)',
        'Cost optimization and forecasting',
        'Security scanning and compliance',
        'Disaster recovery and backup',
      ],
      pricing: 'Starting at $1,499/month',
      icon: FaCloud,
      badge: 'Enterprise Choice',
    },
    {
      name: 'EdgeHealth EMR',
      tagline: 'Complete Healthcare Management Platform',
      description: 'Comprehensive EMR, clinic management, and billing platform designed for modern healthcare providers with AI-assisted diagnostics, telemedicine, and complete HIPAA compliance.',
      features: [
        'Electronic medical records (EMR/EHR)',
        'Patient management and scheduling',
        'Appointment booking system',
        'Billing & insurance claims',
        'Telemedicine integration',
        'AI diagnostic assistance',
        'Prescription management',
        'HIPAA compliant infrastructure',
      ],
      pricing: 'Starting at $799/month',
      icon: FaHospital,
      badge: 'Healthcare Certified',
    },
    {
      name: 'EdgeCRM Pro',
      tagline: 'Intelligent CRM/ERP for Growing Businesses',
      description: 'Powerful yet intuitive CRM and ERP solution tailored for SMEs and growing enterprises. Includes sales automation, inventory management, and AI-powered insights.',
      features: [
        'Contact & lead management with AI scoring',
        'Sales pipeline tracking and forecasting',
        'Inventory management and tracking',
        'Invoice & billing automation',
        'Team collaboration tools',
        'Mobile apps (iOS & Android)',
        'Email marketing automation',
        'Custom reporting and dashboards',
      ],
      pricing: 'Starting at $499/month',
      icon: FaMobileAlt,
      badge: 'Best Value',
    },
    {
      name: 'EdgeDashboard Pro',
      tagline: 'Real-Time Business Intelligence Platform',
      description: 'Advanced analytics and visualization platform that transforms your data into actionable insights with AI-powered predictions, custom dashboards, and automated reporting.',
      features: [
        'Custom interactive dashboards',
        'Real-time analytics and monitoring',
        'Predictive insights with ML',
        'Advanced data visualization',
        'Automated report generation',
        'Multi-source data integration',
        'Alerts and notifications',
        'White-label options available',
      ],
      pricing: 'Starting at $699/month',
      icon: FaChartLine,
      badge: 'Analytics Leader',
    },
    {
      name: 'EdgeSecure',
      tagline: 'Zero-Trust Security & Compliance Platform',
      description: 'Enterprise-grade security platform with zero-trust architecture, identity management, API security, and comprehensive compliance monitoring for regulated industries.',
      features: [
        'Zero-trust network architecture',
        'Identity & access management (IAM)',
        'Single sign-on (SSO) and MFA',
        'API security and rate limiting',
        'Compliance monitoring (SOC 2, GDPR, HIPAA)',
        'Threat detection and response',
        'Security audit logs',
        'Penetration testing tools',
      ],
      pricing: 'Custom Enterprise Pricing',
      icon: FaShieldAlt,
      badge: 'Security First',
    },
  ];

  const addons = [
    { name: 'Dedicated Support', price: '$299/month', icon: FaHeadset },
    { name: 'Custom Integrations', price: '$499/month', icon: FaPlug },
    { name: 'Advanced Analytics', price: '$399/month', icon: FaChartBar },
    { name: 'White Label', price: '$799/month', icon: FaTag },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-sm font-semibold uppercase tracking-wide">
              Enterprise-Grade Products
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Our </span>
            <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-ready platforms built with cutting-edge AI and cloud technology. 
            Trusted by 50+ enterprises worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="cyber-card p-8 hover:glow-border transition-all duration-300 flex flex-col relative"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark text-xs font-bold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Product Header */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-cyan-glow" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {product.name}
                  </h2>
                  <p className="text-cyan-glow font-semibold mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-400 mb-4">
                    {product.description}
                  </p>
                  <div className="text-2xl font-bold text-gradient">
                    {product.pricing}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-grow mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300 text-sm"
                      >
                        <HiCheckCircle className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="btn-primary text-center flex-1"
                  >
                    Request Demo
                  </a>
                  <a
                    href="/contact"
                    className="btn-secondary text-center flex-1"
                  >
                    Get Pricing
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="cyber-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Premium Add-ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <div
                  key={index}
                  className="bg-navy-dark/50 border border-cyan-glow/10 rounded-lg p-6 text-center hover:border-cyan-glow/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-cyan-glow" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {addon.name}
                  </h3>
                  <div className="text-cyan-glow font-bold">{addon.price}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="text-center space-y-6 cyber-card p-12 bg-gradient-to-r from-cyan-glow/5 to-aqua-bright/5">
          <h2 className="text-4xl font-bold text-white">
            Need a Custom Enterprise Solution?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We build tailored products for unique enterprise requirements with dedicated support, 
            custom SLAs, and white-label options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/contact" className="btn-primary">
              Discuss Your Project
            </a>
            <a href="/solutions" className="btn-secondary">
              View All Solutions
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-gray-400">Support Available</div>
          </div>
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-gradient mb-2">SOC 2</div>
            <div className="text-sm text-gray-400">Certified</div>
          </div>
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-sm text-gray-400">Enterprise Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}
