export default function Services() {
  const mainServices = [
    {
      image: 'https://media.istockphoto.com/id/465476659/photo/home-renovations-kitchen-before-and-after.jpg?s=612x612&w=0&k=20&c=gqittojxXbFl9RW0Ixtrvz0m4ZOgZjO67qoqJPv5bEI=',
      title: 'Home Renovation',
      description: 'Complete home transformation services including remodeling, modernization, and aesthetic upgrades.',
      details: [
        'Kitchen renovation',
        'Bathroom upgrades',
        'Living room remodeling',
        'Interior design consultation',
        'Flooring installation',
      ],
    },
    {
      image: 'https://images.jdmagicbox.com/v2/comp/trichy/k9/0431px431.x431.250606174839.u3k9/catalogue/aks-construction-trichy-civil-contractors-03lt1fwiq3.jpg',
      title: 'Building Construction',
      description: 'Professional construction services from foundation to completion with expert supervision.',
      details: [
        'Foundation work',
        'Structural design',
        'Concrete work',
        'Masonry',
        'Project management',
      ],
    },
    {
      image: 'https://www.contemporist.com/wp-content/uploads/2024/07/apartment-renovation-020724-122-01.jpg',
      title: 'Apartment Renovation',
      description: 'Specialized renovation services tailored for flats and apartments in residential complexes.',
      details: [
        'Space optimization',
        'Modular design',
        'Quick turnaround',
        'Minimal disturbance',
        'Budget-friendly options',
      ],
    },
    {
      image: 'https://shreelaxmicementproducts.com/wp-content/uploads/2025/12/Building-construction-Material-supplier-in-nagpur-1024x536.jpg',
      title: 'Materials Supply',
      description: 'Quality building materials sourced from trusted suppliers at competitive prices.',
      details: [
        'Premium marbles',
        'Cement & concrete',
        'Tiles & ceramics',
        'Grout & adhesives',
        'Mud & finishing materials',
      ],
    },
    {
      image: 'https://5.imimg.com/data5/SS/GL/AB/SELLER-78934607/stone-furniture-500x500.jpg',
      title: 'Stone Furniture',
      description: 'Custom-designed stone furniture and outdoor installations for parks and gardens.',
      details: [
        'Stone chairs',
        'Garden benches',
        'Decorative pieces',
        'Custom designs',
        'Installation services',
      ],
    },
    {
      image: 'https://homesmiles.com/wp-content/uploads/2021/12/Home-maintenance-expert.png',
      title: 'Maintenance & Repair',
      description: 'Ongoing maintenance and repair services to keep your property in perfect condition.',
      details: [
        'Regular maintenance',
        'Emergency repairs',
        'Damage restoration',
        'Quality checks',
        'Preventive maintenance',
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-black via-zinc-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-2xl text-gray-300">
            Complete solutions for all your construction and renovation needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className="h-48 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-orange-600">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300 brightness-90 contrast-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, didx) => (
                      <li key={didx} className="flex items-center space-x-2 text-gray-700 dark:text-gray-400">
                        <span className="text-orange-500">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Our Process
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Consultation', desc: 'Free consultation to understand your needs' },
              { step: '2', title: 'Planning', desc: 'Detailed project planning and estimation' },
              { step: '3', title: 'Execution', desc: 'Professional execution with quality checks' },
              { step: '4', title: 'Delivery', desc: 'Final inspection and project handover' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-black  border border-neutral-600 p-8 rounded-lg text-center shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Contact us today for a free consultation and quote for your project.
          </p>
          <a
            href="tel:+919611283601"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
