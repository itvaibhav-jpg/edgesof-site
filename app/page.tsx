'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { FaRobot, FaCloud, FaChartBar, FaShieldAlt, FaBuilding, FaBolt, FaHospital, FaUniversity, FaTruck, FaShoppingCart, FaIndustry, FaMobileAlt } from 'react-icons/fa';

export default function Home() {
  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'Global Support' },
  ];

  const capabilities = [
    {
      icon: FaRobot,
      title: 'AI & Automation',
      description: 'Intelligent automation powered by cutting-edge AI technology',
      link: '/solutions#ai-automation',
    },
    {
      icon: FaCloud,
      title: 'Cloud Engineering',
      description: 'Scalable cloud infrastructure and modern architecture',
      link: '/solutions#cloud',
    },
    {
      icon: FaChartBar,
      title: 'Data & Analytics',
      description: 'Transform data into actionable business intelligence',
      link: '/solutions#data',
    },
    {
      icon: FaShieldAlt,
      title: 'Edge Computing & Security',
      description: 'Enterprise-grade security and compliance solutions',
      link: '/solutions#security',
    },
    {
      icon: FaBuilding,
      title: 'Industry Solutions',
      description: 'Tailored solutions for your specific industry needs',
      link: '/industries',
    },
    {
      icon: FaBolt,
      title: 'Specialized Services',
      description: 'Expert consulting and strategic technology advisory',
      link: '/solutions#specialized',
    },
  ];

  const testimonials = [
    {
      quote: "EdgesOf transformed our healthcare operations with their EMR system. Exceptional quality and support.",
      author: "Dr. Sarah Johnson",
      role: "Chief Medical Officer, HealthCare Plus",
      rating: 5,
    },
    {
      quote: "Their AI automation reduced our operational costs by 40%. Best technology partner we've worked with.",
      author: "Michael Chen",
      role: "CTO, FinTech Innovations",
      rating: 5,
    },
    {
      quote: "World-class cloud architecture. Our platform now handles 10x the traffic with zero downtime.",
      author: "Priya Sharma",
      role: "VP Engineering, LogiTech Global",
      rating: 5,
    },
  ];

  const industries = [
    { name: 'Healthcare', icon: FaHospital },
    { name: 'Finance', icon: FaUniversity },
    { name: 'Logistics', icon: FaTruck },
    { name: 'Retail', icon: FaShoppingCart },
    { name: 'Manufacturing', icon: FaIndustry },
    { name: 'Technology', icon: FaMobileAlt },
  ];

  const features = [
    'AI-Powered Automation',
    'Cloud-Native Architecture',
    'Real-Time Analytics',
    'Enterprise Security',
    '24/7 Support',
    'Scalable Solutions',
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-glow/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-aqua-bright/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-sm font-semibold uppercase tracking-wide">
                Trusted by 50+ Global Enterprises
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Enterprise Technology</span>
              <br />
              <span className="text-gradient">Redefined</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              We deliver enterprise-grade AI automation, cloud engineering, and secure edge computing 
              solutions that drive measurable business outcomes and sustainable competitive advantages.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="btn-primary text-center inline-flex items-center justify-center gap-2">
                Schedule Consultation
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions" className="btn-secondary text-center">
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Right Content - Dashboard */}
          <div className="relative">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <Image
                src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T15-00-02-418Z-b4df9401-chat-image-1764946802397-0.jpg"
                alt="Enterprise AI Dashboard"
                fill
                className="object-contain animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-navy-medium/50 border-y border-cyan-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-sm font-semibold uppercase tracking-wide">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Enterprise </span>
              <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for modern enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Link
                  key={index}
                  href={capability.link}
                  className="cyber-card p-8 hover:glow-border transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-cyan-glow" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-glow transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {capability.description}
                  </p>
                  <div className="flex items-center text-cyan-glow text-sm font-semibold">
                    Learn More
                    <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-medium/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-300 text-lg">Delivering specialized solutions across multiple sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={index}
                  href="/industries"
                  className="cyber-card p-6 text-center hover:glow-border transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-cyan-glow" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">{industry.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Client </span>
              <span className="text-gradient">Success Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-glow/10 to-aqua-bright/10 border-y border-cyan-glow/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">Ready to Transform </span>
            <span className="text-gradient">Your Enterprise?</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join 50+ global enterprises leveraging our AI and cloud technology for unprecedented growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Schedule Free Consultation
              <HiArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/products" className="btn-secondary inline-block">
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
