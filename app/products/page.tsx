'use client';

export default function Products() {
  const products = [
    {
      name: 'EdgeFlow AI',
      tagline: 'AI Workflow & Automation Engine',
      description: 'Intelligent automation platform that streamlines business processes with AI-powered workflows, document processing, and predictive analytics.',
      features: [
        'Visual workflow builder',
        'AI-powered automation',
        'Document intelligence',
        'Integration with 100+ apps',
        'Real-time monitoring',
        'Custom AI agents',
      ],
      icon: '⚡',
      color: 'cyan',
    },
    {
      name: 'EdgeCloud OS',
      tagline: 'Cloud Infrastructure Orchestration',
      description: 'Complete cloud orchestration system for managing multi-cloud infrastructure, deployments, and scaling with intelligent resource optimization.',
      features: [
        'Multi-cloud management',
        'Auto-scaling & load balancing',
        'Container orchestration',
        'CI/CD pipelines',
        'Infrastructure as code',
        'Cost optimization',
      ],
      icon: '☁️',
      color: 'blue',
    },
    {
      name: 'EdgeHealth EMR',
      tagline: 'Complete Healthcare Management',
      description: 'Comprehensive EMR, clinic management, and billing platform designed for modern healthcare providers with AI-assisted diagnostics.',
      features: [
        'Electronic medical records',
        'Patient management',
        'Appointment scheduling',
        'Billing & insurance',
        'Telemedicine integration',
        'AI diagnostic assistance',
      ],
      icon: '🏥',
      color: 'green',
    },
    {
      name: 'EdgeCRM Mini',
      tagline: 'Lightweight CRM/ERP for SMEs',
      description: 'Powerful yet simple CRM and ERP solution tailored for small and medium enterprises with essential business management tools.',
      features: [
        'Contact & lead management',
        'Sales pipeline tracking',
        'Inventory management',
        'Invoice & billing',
        'Team collaboration',
        'Mobile apps',
      ],
      icon: '📱',
      color: 'purple',
    },
    {
      name: 'EdgeDashboard',
      tagline: 'Real-Time Business Intelligence',
      description: 'Advanced analytics and visualization platform that transforms your data into actionable insights with AI-powered predictions.',
      features: [
        'Custom dashboards',
        'Real-time analytics',
        'Predictive insights',
        'Data visualization',
        'Automated reports',
        'Multi-source integration',
      ],
      icon: '📊',
      color: 'pink',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Our </span>
            <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade products built with cutting-edge AI and cloud technology
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="cyber-card p-8 hover:glow-border transition-all duration-300 flex flex-col"
            >
              {/* Product Header */}
              <div className="mb-6">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-cyan-glow font-semibold mb-4">
                  {product.tagline}
                </p>
                <p className="text-gray-400">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-gray-300 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href="/contact"
                  className="btn-secondary w-full text-center block"
                >
                  Request Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 cyber-card p-12">
          <h2 className="text-3xl font-bold text-white">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 text-lg">
            We build tailored products for unique enterprise requirements
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
