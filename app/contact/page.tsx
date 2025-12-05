'use client';

import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiUser, HiOfficeBuilding } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/leads/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'kumar@edgesof.com',
      link: 'mailto:kumar@edgesof.com',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+91 99994 56126',
      link: 'tel:+919999456126',
    },
    {
      icon: HiLocationMarker,
      title: 'Office',
      value: 'Bangalore, Karnataka, India',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, link: 'https://linkedin.com/company/edgesof', name: 'LinkedIn' },
    { icon: FaTwitter, link: 'https://twitter.com/edgesof', name: 'Twitter' },
    { icon: FaGithub, link: 'https://github.com/edgesof', name: 'GitHub' },
    { icon: FaWhatsapp, link: 'https://wa.me/919999456126', name: 'WhatsApp' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-sm font-semibold uppercase tracking-wide">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Let's Build </span>
            <span className="text-gradient">Together</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and 
            we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="cyber-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-navy-dark border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-navy-dark border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-navy-dark border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow transition-colors"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <div className="relative">
                  <HiOfficeBuilding className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-navy-dark border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-navy-dark border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-glow transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark font-semibold rounded-md hover:shadow-lg hover:shadow-cyan-glow/50 transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <div className="cyber-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-cyan-glow" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-cyan-glow transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="cyber-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6 text-cyan-glow" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="cyber-card p-6 sm:p-8 bg-gradient-to-br from-cyan-glow/5 to-aqua-bright/5">
              <h3 className="text-xl font-bold text-white mb-4">
                Schedule a Free Consultation
              </h3>
              <p className="text-gray-300 mb-6">
                Book a 30-minute call with our experts to discuss your project requirements.
              </p>
              <a
                href="https://calendly.com/edgesof"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
