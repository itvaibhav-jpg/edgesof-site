'use client';

import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    {
      name: 'General',
      faqs: [
        {
          question: 'What services does EdgesOf Solutions provide?',
          answer: 'We provide comprehensive enterprise technology solutions including AI & Automation, Cloud Engineering, Data & Analytics, Security, and Industry-specific solutions. Our services range from custom software development to strategic technology consulting.',
        },
        {
          question: 'Which industries do you serve?',
          answer: 'We serve Healthcare, Finance, Logistics, Retail, Manufacturing, and Technology sectors. Our solutions are tailored to meet the unique challenges and compliance requirements of each industry.',
        },
        {
          question: 'Where are you located?',
          answer: 'We are headquartered in Bangalore, India, with remote teams serving clients globally across North America, Europe, and Asia-Pacific regions.',
        },
      ],
    },
    {
      name: 'Products & Pricing',
      faqs: [
        {
          question: 'What products do you offer?',
          answer: 'We offer 6 enterprise-grade products: EdgeFlow AI (automation), EdgeCloud OS (cloud orchestration), EdgeHealth EMR (healthcare), EdgeCRM Pro (CRM/ERP), EdgeDashboard Pro (analytics), and EdgeSecure (security platform).',
        },
        {
          question: 'How is pricing structured?',
          answer: 'Our products start from $499/month to $1,499/month for standard plans. Enterprise custom pricing is available for large organizations with specific requirements. All plans include 24/7 support and regular updates.',
        },
        {
          question: 'Do you offer free trials?',
          answer: 'Yes, we offer 14-day free trials for all our products. No credit card required. You can schedule a demo to see the product in action before starting your trial.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, debit cards, and bank transfers through Stripe and Razorpay. For enterprise clients, we also offer invoice-based billing with NET 30 terms.',
        },
      ],
    },
    {
      name: 'Implementation & Support',
      faqs: [
        {
          question: 'How long does implementation take?',
          answer: 'Implementation timelines vary by product and customization needs. Standard implementations take 2-4 weeks, while complex enterprise deployments may take 8-12 weeks. We provide dedicated implementation support throughout.',
        },
        {
          question: 'Do you provide training?',
          answer: 'Yes, we provide comprehensive training for all our products including documentation, video tutorials, live training sessions, and ongoing support. Training is included in all plans.',
        },
        {
          question: 'What kind of support do you offer?',
          answer: 'We offer 24/7 email and chat support for all plans. Premium plans include phone support and dedicated account managers. Enterprise clients get priority support with guaranteed response times.',
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer: 'Yes, we support integration with 100+ enterprise applications including Salesforce, SAP, Zoho, Microsoft 365, Google Workspace, and custom APIs. Our team can build custom integrations as needed.',
        },
      ],
    },
    {
      name: 'Security & Compliance',
      faqs: [
        {
          question: 'Is my data secure?',
          answer: 'Yes, we implement enterprise-grade security including encryption at rest and in transit, regular security audits, and compliance with SOC 2, GDPR, and HIPAA standards. All data is stored in secure, redundant data centers.',
        },
        {
          question: 'Are you HIPAA compliant?',
          answer: 'Yes, our healthcare products (EdgeHealth EMR) are fully HIPAA compliant. We sign Business Associate Agreements (BAA) with healthcare clients and maintain strict compliance protocols.',
        },
        {
          question: 'Where is data stored?',
          answer: 'Data is stored in secure cloud infrastructure (AWS/Azure/GCP) in your region of choice. We offer data residency options to meet local compliance requirements.',
        },
        {
          question: 'Do you perform security audits?',
          answer: 'Yes, we conduct regular security audits, penetration testing, and vulnerability assessments. We are SOC 2 Type II certified and undergo annual third-party security audits.',
        },
      ],
    },
    {
      name: 'Custom Development',
      faqs: [
        {
          question: 'Do you build custom solutions?',
          answer: 'Yes, we specialize in custom enterprise software development. Our team can build tailored solutions from scratch or customize our existing products to meet your specific requirements.',
        },
        {
          question: 'What is your development process?',
          answer: 'We follow Agile methodology with 2-week sprints. You get regular demos, progress updates, and can provide feedback throughout the development process. We ensure complete transparency and collaboration.',
        },
        {
          question: 'Can I hire your team for dedicated projects?',
          answer: 'Yes, we offer dedicated team models where you can hire our developers, designers, and project managers on a monthly basis. This is ideal for long-term projects requiring ongoing development.',
        },
        {
          question: 'What technologies do you work with?',
          answer: 'We work with modern tech stacks including React, Node.js, Python, AWS, Azure, GCP, Kubernetes, TensorFlow, and more. Our team stays updated with the latest technologies and best practices.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-sm font-semibold uppercase tracking-wide">
              Help Center
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Frequently Asked </span>
            <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and processes
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-white mb-6">{category.name}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="cyber-card overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <HiChevronUp className="w-6 h-6 text-cyan-glow flex-shrink-0" />
                        ) : (
                          <HiChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center space-y-6 cyber-card p-12 bg-gradient-to-r from-cyan-glow/5 to-aqua-bright/5">
          <h2 className="text-3xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 text-lg">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <a href="/contact" className="inline-block btn-primary">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
