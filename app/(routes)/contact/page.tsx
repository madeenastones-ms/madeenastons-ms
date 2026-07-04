'use client';

import { useState } from 'react';

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Track conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18289633309/KwusCJ6mrckcEJ3QlpFE',
        'transaction_id': `contact_${Date.now()}`
      });
    }
    
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 96112 83601'],
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['madeenastones.ms@gmail.com'],
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['#13 Umarbagh Layout', 'Near Taqva Masjid', 'J P Nagar Post', 'Bangalore 560078'],
    },
    {
      icon: '⏰',
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-black via-zinc-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-2xl text-gray-300">
            Get in touch with us for a free consultation and quote
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center border border-gray-200 dark:border-gray-800"
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, didx) => (
                  <p key={didx} className="text-gray-700 dark:text-gray-400 text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Office Section */}
      <section className="py-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Visit Our Office
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <iframe
                title="Madeena Stones Office Location"
                src="https://www.google.com/maps?q=13%20Umarbagh%20Layout,%20Near%20Taqva%20Masjid,%20J%20P%20Nagar%20Post,%20Bangalore%20560078&z=15&output=embed"
                className="w-full h-[320px] sm:h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="bg-white dark:bg-white rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-black dark:text-black   mb-4">
                Come Visit Us
              </h3>
              <p className="text-lg text-black dark:text-black mb-4">
                <strong>📍 Address:</strong><br />
                #13 Umarbagh Layout, Near Taqva Masjid,<br />
                J P Nagar Post, Bangalore 560078
              </p>
              <p className="text-lg text-black dark:text-black">
                We welcome you to visit our office for a face-to-face consultation and project discussion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
