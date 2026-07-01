import HeroSection from './components/HeroSection';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/388572596/YF/PP/HX/114766243/home-renovation-service.jpeg',
      title: 'Home Renovation',
      description: 'Complete home transformation with modern designs and quality materials.',
    },
    {
      image: 'https://images.unsplash.com/photo-1621511075938-f03482369feb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww',
      title: 'Building Construction',
      description: 'Professional construction services from foundation to finishing.',
    },
    {
      image: 'https://i.ytimg.com/vi/Uja1nWAvfsg/maxresdefault.jpg',
      title: 'Apartment Makeover',
      description: 'Expert flat renovation tailored to your lifestyle and budget.',
    },
    {
      image: 'https://d2d4xyu1zrrrws.cloudfront.net/website/web-ui/assets/images/temp/supply-chain-banner_msite.png',
      title: 'Materials Supply',
      description: 'Premium marbles, cement, grout, mud, and construction materials.',
    },
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/3/400959626/BI/TL/CK/161852876/stone-garden-furniture-set.jpeg',
      title: 'Stone Furniture',
      description: 'Beautiful stone chairs and outdoor furniture for parks and gardens.',
    },
    {
      image: 'https://vernlewis.com/wp-content/uploads/2025/07/Mig-Welding.jpg',
      title: 'Welding Services',
      description: 'Cleaning the base metal to eliminate oils, rust, and paint prevents porosity and weak joints.',
    },
  ];

  const whyChooseUs = [
    { title: 'Quality Materials', desc: 'Premium construction materials from trusted suppliers' },
    { title: '550+ Projects', desc: 'Successfully completed over 550 renovation projects' },
    { title: 'Welding Services', desc: 'Highly skilled professionals with decades of experience' },
    { title: 'On-time Delivery', desc: 'We ensure projects are completed on schedule' },
    { title: 'Call for Pricing', desc: 'Please call us for current rates and project-specific quotes' },
    { title: '24/7 Support', desc: 'Always available to answer your construction questions' },
  ];

  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Complete solutions for all your construction and renovation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-black rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="h-40 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-orange-600">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Madeena Stones?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We bring expertise, quality, and reliability to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Call us today for current rates and let us transform your space into something amazing.
          </p>
          <a
            href="tel:+919611283601"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Call for Pricing
          </a>
        </div>
      </section>
    </>
  );
}
