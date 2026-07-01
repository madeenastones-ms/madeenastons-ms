'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does a typical renovation project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple apartment renovation typically takes 2-4 months, while larger commercial projects may take 6-12 months. We provide detailed timelines during the consultation phase.',
    },
    {
      question: 'Do you provide free consultations and estimates?',
      answer: 'Yes! We offer completely free consultations and detailed estimates for all projects. Our team will visit your site, understand your needs, and provide a comprehensive quote without any obligation.',
    },
    {
      question: 'What materials do you work with?',
      answer: 'We work with a wide range of premium building materials including marbles, tiles, ceramics, cement, grout, and specialized finishing materials. We source from trusted suppliers to ensure quality.',
    },
    {
      question: 'Do you offer warranty on your work?',
      answer: 'Absolutely! We provide workmanship warranty on all our construction and renovation services. The warranty period varies by service type and is detailed in your project contract.',
    },
    {
      question: 'Can you help with design ideas and suggestions?',
      answer: 'Yes! Our experienced interior designers and architects are happy to provide design suggestions and ideas. We can work with your preferences or create custom designs that fit your budget and style.',
    },
    {
      question: 'How do you handle unexpected issues during construction?',
      answer: 'If unexpected issues arise, we immediately communicate with you and propose solutions. We aim to resolve issues efficiently while maintaining quality and staying as close to budget as possible.',
    },
    {
      question: 'What payment options do you offer?',
      answer: 'We offer flexible payment options including upfront deposit (typically 30%), milestone-based payments during construction, and final payment upon completion. Custom payment plans are available for large projects.',
    },
    {
      question: 'Do you handle permits and approvals?',
      answer: 'Yes, we can assist with obtaining necessary permits and approvals for your project. Our team is familiar with local regulations and can guide you through the process.',
    },
    {
      question: 'Can you renovate while I\'m living in my apartment?',
      answer: 'Absolutely! We can schedule work around your lifestyle and preferences. We take special care to minimize disruption and maintain cleanliness during construction.',
    },
    {
      question: 'Do you offer bulk discounts on materials?',
      answer: 'Yes! We offer competitive pricing and special discounts for bulk material orders. Contact us for wholesale pricing and custom quotes.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-2xl text-gray-300">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 ml-4 text-orange-500 text-xl transition transform ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 py-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Didn't Find Your Answer?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            If you couldn't find the answer you're looking for, please don't hesitate to contact us. Our team is always ready to help!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Blog/Resources */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Resources & Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Home Renovation Guide',
                desc: 'Complete guide to planning your home renovation project',
                icon: '📖',
              },
              {
                title: 'Material Selection Tips',
                desc: 'How to choose the right materials for your project',
                icon: '🎯',
              },
              {
                title: 'Budget Planning',
                desc: 'Tips for creating and managing your construction budget',
                icon: '💰',
              },
            ].map((resource, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-200 dark:border-gray-800"
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  {resource.desc}
                </p>
                <span className="text-orange-500 font-semibold">Read More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
