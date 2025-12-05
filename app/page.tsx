'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      title: 'Global Cloud Network',
      description: 'Seamlessly connect your enterprise with low-latency, high-availability cloud infrastructure.',
      icon: '🌐',
    },
    {
      title: 'AI-Powered Insights',
      description: 'Harness AI to gain actionable intelligence and optimize operations.',
      icon: '🤖',
    },
    {
      title: 'Secure Edge Computing',
      description: 'Protect your applications with advanced security layers and compliance-ready architecture.',
      icon: '🔒',
    },
    {
      title: 'Cloud Optimization',
      description: 'Accelerate performance with intelligent compute distribution and autoscaling.',
      icon: '⚡',
    },
  ];

  const clients = [
    'TechCorp',
    'Innovate Finance',
    'FutureHealth',
    'Global Logistics',
    'CyberSecure',
    'DataDrive',
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-glow/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-aqua-bright/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Transform Your</span>
              <br />
              <span className="text-gradient">Business Edge</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Unlock global potential with our integrated AI-driven cloud platform for the future of enterprise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Get Started
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                Request Demo
              </Link>
            </div>
          </div>

          {/* Right Content - Futuristic Dashboard */}
          <div className="relative">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <Image
                src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T15-00-02-418Z-b4df9401-chat-image-1764946802397-0.jpg"
                alt="Futuristic AI Dashboard"
                fill
                className="object-contain animate-float"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -left-10 w-20 h-20 border-2 border-cyan-glow/30 rounded-lg rotate-45 animate-float"></div>
            <div className="absolute bottom-20 -right-10 w-16 h-16 border-2 border-aqua-bright/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-5 w-12 h-12 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-lg animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="cyber-card p-6 hover:glow-border transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-glow transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-medium/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl font-bold text-gray-400 mb-12">
            Trusted by World-Class Enterprises
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 cyber-card hover:glow-border transition-all"
              >
                <span className="text-gray-400 font-semibold text-sm text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">Ready to </span>
            <span className="text-gradient">Transform?</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join leading enterprises leveraging AI and cloud technology for unprecedented growth.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
