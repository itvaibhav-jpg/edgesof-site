'use client';

export default function About() {
  const values = [
    {
      title: 'Precision',
      description: 'We engineer solutions with meticulous attention to detail and technical excellence.',
      icon: '🎯',
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance are built into every solution we create.',
      icon: '🔒',
    },
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge AI and cloud technologies to solve complex challenges.',
      icon: '💡',
    },
    {
      title: 'Performance',
      description: 'Optimized systems that scale seamlessly and deliver exceptional results.',
      icon: '⚡',
    },
  ];

  const reasons = [
    {
      title: 'Deep Technical Expertise',
      description: 'Our team combines years of experience in AI, cloud engineering, and enterprise systems.',
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully delivered complex projects for enterprises across multiple industries.',
    },
    {
      title: 'End-to-End Solutions',
      description: 'From strategy to deployment, we handle every aspect of your digital transformation.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Build once, scale infinitely. Our solutions grow with your business.',
    },
    {
      title: 'Dedicated Support',
      description: '24/7 support and continuous optimization to ensure your success.',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">About </span>
            <span className="text-gradient">EdgesOf</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Shaping the future of enterprise technology through AI and cloud innovation
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-cyan-glow mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We engineer intelligent systems that accelerate enterprise growth. By combining AI automation, 
              cloud engineering, and secure edge computing, we empower businesses to achieve unprecedented 
              efficiency and innovation.
            </p>
          </div>

          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-cyan-glow mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Shaping a future where AI and cloud computing redefine global operations. We envision a world 
              where every enterprise, regardless of size, has access to world-class technology that drives 
              sustainable growth and competitive advantage.
            </p>
          </div>
        </div>

        {/* Founder Story */}
        <div className="cyber-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Founded by <span className="text-cyan-glow font-semibold">Kumar Vaibhav</span>, EdgesOf Solutions 
              was born from a vision to democratize enterprise-grade technology. With a strong technical engineering 
              background and cross-domain expertise spanning AI, cloud infrastructure, and enterprise systems, 
              Kumar recognized the gap between cutting-edge technology and practical business implementation.
            </p>
            <p>
              Having worked with enterprises globally and witnessed the challenges of digital transformation firsthand, 
              Kumar assembled a team of world-class engineers and innovators. Together, we've built a platform that 
              combines the power of AI automation, cloud engineering, and secure edge computing into accessible, 
              scalable solutions.
            </p>
            <p>
              Today, EdgesOf serves enterprises across healthcare, finance, logistics, and technology sectors, 
              delivering solutions that drive measurable business outcomes and sustainable competitive advantages.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="cyber-card p-6 text-center hover:glow-border transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-cyan-glow mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="cyber-card p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose EdgesOf?</h2>
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-navy-medium/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-cyan-glow mt-1"
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
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 text-lg">
            Let's discuss how we can help transform your business
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
