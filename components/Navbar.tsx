'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'AI & Automation', href: '/solutions#ai-automation' },
        { name: 'Cloud Engineering', href: '/solutions#cloud' },
        { name: 'Data & Analytics', href: '/solutions#data' },
        { name: 'Security', href: '/solutions#security' },
      ],
    },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/careers' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              <Image
                src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/d70640e3-33b8-4c1f-881e-e47849dc14a8/2025-12-05T15-00-02-418Z-b4df9401-chat-image-1764946802397-0.jpg"
                alt="EdgesOf Solutions"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-white group-hover:text-cyan-glow transition-colors">
                EdgesOf
              </div>
              <div className="text-xs text-gray-400">Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && <HiChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-navy-medium/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark font-semibold rounded-md hover:shadow-lg hover:shadow-cyan-glow/50 transition-all text-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy-medium/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 px-6 py-2.5 bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark font-semibold rounded-md text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
