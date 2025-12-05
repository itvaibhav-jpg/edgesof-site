'use client';

export default function Solutions() {
  const solutions = [
    {
      category: 'AI & Automation',
      icon: '🤖',
      gradient: 'from-cyan-500 to-blue-600',
      description: 'Intelligent automation solutions powered by cutting-edge AI technology',
      services: [
        {
          name: 'AI Workflow Automation',
          description: 'Streamline business processes with intelligent automation that learns and adapts',
        },
        {
          name: 'AI Agents for Customer Support',
          description: '24/7 intelligent customer service with natural language understanding',
        },
        {
          name: 'AI Document Understanding (OCR + NLP)',
          description: 'Extract, analyze, and process documents with advanced AI',
        },
        {
          name: 'WhatsApp Automation',
          description: 'Automated customer engagement and support via WhatsApp Business API',
        },
        {
          name: 'AI Data Insights / Recommendations',
          description: 'Predictive analytics and intelligent recommendations for business decisions',
        },
      ],
    },
    {
      category: 'Cloud Engineering',
      icon: '☁️',
      gradient: 'from-blue-600 to-purple-600',
      description: 'Scalable, secure, and high-performance cloud infrastructure solutions',
      services: [
        {
          name: 'Enterprise Cloud Apps',
          description: 'Custom cloud-native applications built for scale and performance',
        },
        {
          name: 'Cloud Migration',
          description: 'Seamless migration from on-premise to cloud with zero downtime',
        },
        {
          name: 'Multi-tenant SaaS Development',
          description: 'Build scalable SaaS platforms with enterprise-grade multi-tenancy',
        },
        {
          name: 'Microservices Architecture',
          description: 'Design and implement resilient microservices-based systems',
        },
        {
          name: 'DevOps CI/CD Setup',
          description: 'Automated deployment pipelines for continuous delivery',
        },
      ],
    },
    {
      category: 'Data & Analytics',
      icon: '📊',
      gradient: 'from-purple-600 to-pink-600',
      description: 'Transform raw data into actionable business intelligence',
      services: [
        {
          name: 'Real-Time Dashboards',
          description: 'Live business metrics and KPIs with interactive visualizations',
        },
        {
          name: 'Predictive Analytics',
          description: 'Forecast trends and outcomes using advanced machine learning',
        },
        {
          name: 'Data Pipeline Setup',
          description: 'Automated ETL pipelines for data integration and processing',
        },
        {
          name: 'Business Intelligence Systems',
          description: 'Comprehensive BI platforms for data-driven decision making',
        },
      ],
    },
    {
      category: 'Edge Computing & Security',
      icon: '🔒',
      gradient: 'from-pink-600 to-red-600',
      description: 'Enterprise-grade security and compliance solutions',
      services: [
        {
          name: 'Secure Edge Devices',
          description: 'IoT and edge device security with real-time threat detection',
        },
        {
          name: 'Zero-Trust Cloud Architecture',
          description: 'Implement zero-trust security models for cloud infrastructure',
        },
        {
          name: 'Identity & Access Management',
          description: 'Centralized IAM with SSO, MFA, and role-based access control',
        },
        {
          name: 'API Security + Compliance',
          description: 'Secure APIs with OAuth, rate limiting, and compliance monitoring',
        },
      ],
    },
    {
      category: 'Industry Solutions',
      icon: '🏢',
      gradient: 'from-red-600 to-orange-600',
      description: 'Specialized solutions tailored for specific industries',
      services: [
        {
          name: 'Healthcare EMR & Clinic Systems',
          description: 'Complete electronic medical records and clinic management platforms',
        },
        {
          name: 'CRM / ERP Mini-Systems for SMEs',
          description: 'Lightweight yet powerful CRM and ERP solutions for small businesses',
        },
        {
          name: 'Finance Automation',
          description: 'Automated financial workflows, reconciliation, and reporting',
        },
        {
          name: 'Logistics Workflow Systems',
          description: 'End-to-end logistics management with real-time tracking',
        },
        {
          name: 'Retail Inventory & Billing',
          description: 'Point-of-sale, inventory management, and billing systems',
        },
      ],
    },
    {
      category: 'Specialized Services',
      icon: '⚡',
      gradient: 'from-orange-600 to-yellow-600',
      description: 'Expert consulting and strategic technology services',
      services: [
        {
          name: 'API Integrations',
          description: 'WhatsApp, Stripe, Razorpay, Zoho, SAP, Salesforce, and 100+ integrations',
        },
        {
          name: 'CTO Advisory & Tech Strategy',
          description: 'Strategic technology consulting and fractional CTO services',
        },
        {
          name: 'Maintenance & Support Plans',
          description: '24/7 monitoring, updates, and dedicated support for your systems',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-full text-cyan-glow text-sm font-semibold">
              🎯 Comprehensive Enterprise Solutions
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Our </span>
            <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end technology solutions designed to accelerate your digital transformation 
            and drive measurable business outcomes
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="cyber-card p-8 lg:p-12 hover:glow-border transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="text-7xl">{solution.icon}</div>
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-white mb-3">
                    {solution.category}
                  </h2>
                  <p className="text-lg text-gray-300">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solution.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-navy-dark/50 border border-cyan-glow/10 rounded-lg p-6 hover:border-cyan-glow/30 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-cyan-glow flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-glow transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6 cyber-card p-12 bg-gradient-to-r from-cyan-glow/5 to-aqua-bright/5">
          <h2 className="text-4xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's discuss how our enterprise solutions can accelerate your growth and 
            deliver measurable ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/contact" className="btn-primary">
              Schedule Free Consultation
            </a>
            <a href="/products" className="btn-secondary">
              View Our Products
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-gradient mb-2">500+</div>
            <div className="text-sm text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-gradient mb-2">98%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-sm text-gray-400">Enterprise Clients</div>
          </div>
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-gray-400">Global Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
