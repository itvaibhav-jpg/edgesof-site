'use client';

import { useState } from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import Link from 'next/link';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 499,
      annualPrice: 4490,
      features: [
        'Up to 5 users',
        'Basic AI automation',
        'Cloud deployment',
        'Email support',
        '10 GB storage',
        'Basic analytics',
        'API access',
        'Mobile apps',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses with advanced needs',
      monthlyPrice: 999,
      annualPrice: 8990,
      features: [
        'Up to 25 users',
        'Advanced AI automation',
        'Multi-cloud deployment',
        'Priority support (24/7)',
        '100 GB storage',
        'Advanced analytics & BI',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager',
        'Training & onboarding',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: null,
      annualPrice: null,
      features: [
        'Unlimited users',
        'Custom AI models',
        'Dedicated infrastructure',
        'Premium support (SLA)',
        'Unlimited storage',
        'Custom analytics',
        'Unlimited integrations',
        'Full white-label',
        'Dedicated team',
        'Custom development',
        'Security audit',
        'Compliance support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const addons = [
    {
      name: 'Dedicated Support',
      price: 299,
      description: 'Priority support with dedicated account manager',
    },
    {
      name: 'Custom Integrations',
      price: 499,
      description: 'Build custom integrations with your existing systems',
    },
    {
      name: 'Advanced Analytics',
      price: 399,
      description: 'Advanced BI dashboards and predictive analytics',
    },
    {
      name: 'White Label',
      price: 799,
      description: 'Complete white-label solution with your branding',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-sm font-semibold uppercase tracking-wide">
              Transparent Pricing
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Simple, </span>
            <span className="text-gradient">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark'
                  : 'bg-navy-medium text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark'
                  : 'bg-navy-medium text-gray-300 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs">(Save 10%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`cyber-card p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-glow' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark text-sm font-bold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                {plan.monthlyPrice ? (
                  <div>
                    <div className="text-5xl font-bold text-gradient mb-2">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </div>
                    <div className="text-gray-400 text-sm">
                      per {billingCycle === 'monthly' ? 'month' : 'year'}
                    </div>
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-white mb-2">
                    Custom Pricing
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.monthlyPrice ? '/contact?plan=' + plan.name.toLowerCase() : '/contact'}
                className={`block w-full text-center py-3 rounded-md font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark hover:shadow-lg hover:shadow-cyan-glow/50'
                    : 'bg-navy-medium text-white hover:bg-navy-medium/80'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="cyber-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Premium Add-ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-navy-dark/50 border border-white/10 rounded-lg p-6 hover:border-cyan-glow/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-cyan-glow mb-3">
                  ${addon.price}/mo
                </div>
                <p className="text-gray-400 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center space-y-6 cyber-card p-12">
          <h2 className="text-3xl font-bold text-white">
            Questions About Pricing?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Check our FAQ page or contact our sales team for custom enterprise pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq" className="btn-secondary">
              View FAQ
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
