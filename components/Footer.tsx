'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
    solutions: [
      { name: 'AI & Automation', href: '/solutions#ai-automation' },
      { name: 'Cloud Engineering', href: '/solutions#cloud' },
      { name: 'Data & Analytics', href: '/solutions#data' },
      { name: 'Security', href: '/solutions#security' },
    ],
    products: [
      { name: 'EdgeFlow AI', href: '/products#edgeflow' },
      { name: 'EdgeCloud OS', href: '/products#edgecloud' },
      { name: 'EdgeHealth EMR', href: '/products#edgehealth' },
      { name: 'EdgeCRM Pro', href: '/products#edgecrm' },
    ],
    resources: [
      { name: 'Insights', href: '/insights' },
      { name: 'Industries', href: '/industries' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Documentation', href: '/docs' },
    ],
  };

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/company/edgesof', name: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/edgesof', name: 'Twitter' },
    { icon: FaGithub, href: 'https://github.com/edgesof', name: 'GitHub' },
    { icon: FaWhatsapp, href: 'https://wa.me/919999456126', name: 'WhatsApp' },
  ];

  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T17-03-21-844Z-d10b8d3b-chat-image-1764954201824-2.jpg"
                  alt="EdgesOf Solutions"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-white">EdgesOf</div>
                <div className="text-xs text-gray-400">Solutions</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Enterprise-grade AI automation, cloud engineering, and secure edge computing solutions.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:kumar@edgesof.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-glow transition-colors text-sm"
              >
                <HiMail className="w-4 h-4" />
                kumar@edgesof.com
              </a>
              <a
                href="tel:+919999456126"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-glow transition-colors text-sm"
              >
                <HiPhone className="w-4 h-4" />
                +91 99994 56126
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <HiLocationMarker className="w-4 h-4" />
                Bangalore, Karnataka, India
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-glow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-glow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-glow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-glow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} EdgesOf Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-cyan-glow transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
