'use client';

export default function Solutions() {
  const solutions = [
    {
      title: 'AI Automation & Workflow Intelligence',
      description: 'Transform your business operations with intelligent automation',
      features: [
        'AI agents for business workflows',
        'Automated document processing',
        'WhatsApp automation',
        'AI chat systems',
        'Predictive workflow engines',
      ],
      icon: '🤖',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Enterprise Cloud Engineering',
      description: 'Build scalable, cloud-native applications for the modern enterprise',
      features: [
        'Enterprise app development',
        'Cloud-native systems',
        'Multi-tenant SaaS platforms',
        'Microservices architecture',
        'API gateway solutions',
      ],
      icon: '☁️',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Data, Analytics & AI Insights',
      description: 'Turn data into actionable intelligence with advanced analytics',
      features: [
        'Real-time dashboards',
        'KPI intelligence systems',
        'Predictive analytics',
        'Data pipelines',
        'Business intelligence platforms',
      ],
      icon: '📊',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Secure Edge Computing',
      description: 'Protect your enterprise with cutting-edge security architecture',
      features: [
        'Zero-trust architecture',
        'Identity & access management',
        'Cloud encryption',
        'Compliance-ready systems',
        'Security monitoring & alerts',
      ],
      icon: '🔒',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions tailored for your industry',
      features: [
        'Healthcare EMR & Clinic Systems',
        'Smart CRM for SMEs',
        'Logistics & Delivery Tech',
        'Finance Automation Systems',
        'Retail & E-commerce Platforms',
      ],
      icon: '🏢',
      gradient: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Our </span>
            <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive enterprise solutions powered by AI, cloud technology, and cutting-edge engineering
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="cyber-card p-8 hover:glow-border transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Icon & Title */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="text-6xl">{solution.icon}</div>
                  <h2 className="text-3xl font-bold text-white">
                    {solution.title}
                  </h2>
                  <p className="text-gray-400">
                    {solution.description}
                  </p>
                </div>

                {/* Features */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-cyan-glow mb-4">
                    Key Capabilities
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solution.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <svg
                          className="w-6 h-6 text-cyan-glow flex-shrink-0 mt-0.5"
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
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6 cyber-card p-12">
          <h2 className="text-3xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg">
            Let's discuss how our solutions can accelerate your growth
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
