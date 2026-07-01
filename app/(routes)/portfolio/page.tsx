export default function Portfolio() {
  const projects = [
    {
      title: 'Modern Apartment Renovation',
      location: 'Downtown Complex',
      type: 'Residential',
      image: 'https://sweeten.com/wp-content/uploads/2023/04/115500-Samantha-Kitchen-02.webp',
      description: 'Complete renovation of a 2-bedroom apartment with modern design and premium materials',
      budget: '$25,000',
      duration: '3 months',
    },
    {
      title: 'Commercial Building Construction',
      location: 'Business District',
      type: 'Commercial',
      image: 'https://relgrow.com/assets/images/commercial/commercial-banner.png',
      description: 'Ground-up construction of a 4-story commercial building with modern amenities',
      budget: '$150,000',
      duration: '8 months',
    },
    {
      title: 'Luxury Home Makeover',
      location: 'Residential Area',
      type: 'Residential',
      image: 'https://media.assettype.com/resident%2F2024-06%2F2a059f53-e8d1-4f10-885b-7fa604d23160%2Fpexels_fotoaibe_1571460.jpg',
      description: 'Luxury home renovation including kitchen, bathrooms, and flooring upgrades',
      budget: '$75,000',
      duration: '5 months',
    },
    {
      title: 'Park Stone Furniture Installation',
      location: 'Central Park',
      type: 'Public Project',
      image: 'https://www.shutterstock.com/image-photo/cement-bench-round-table-five-600nw-2470277437.jpg',
      description: 'Installation of custom-designed stone chairs and benches throughout the park',
      budget: '$45,000',
      duration: '2 months',
    },
    {
      title: 'Office Space Renovation',
      location: 'Tech Park',
      type: 'Commercial',
      image: 'https://homr.in/wp-content/themes/homr/images/innerimg/office/4.jpg',
      description: 'Modern office renovation with open-plan layout and sustainable design',
      budget: '$60,000',
      duration: '4 months',
    },
    {
      title: 'Restaurant Interior Design',
      location: 'Restaurant District',
      type: 'Commercial',
      image: 'https://www.createursdinterieur.com/static/907be207549be4d75606c66d766aaed3/ddced/avant-apres-amenagement-restaurant-architecte-interieur.jpg',
      description: 'Complete restaurant interior renovation with marble flooring and custom furniture',
      budget: '$55,000',
      duration: '3 months',
    },
    {
      title: 'Residential Complex Renovation',
      location: 'Housing Society',
      type: 'Residential',
      image: 'https://i.ytimg.com/vi/Cuy4_EDfefY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBpjsiSpcwHsmavv1b6juF7McFC3A',
      description: 'Renovation of multiple units in a residential complex',
      budget: '$200,000',
      duration: '10 months',
    },
    {
      title: 'Retail Store Fitout',
      location: 'Shopping Mall',
      type: 'Commercial',
      image: 'https://www.formulainteriors.com.au/wp-content/uploads/2019/02/retail-fit-out.jpg',
      description: 'Complete retail space design and construction with modern fixtures',
      budget: '$40,000',
      duration: '2.5 months',
    },
  ];

  const stats = [
    { number: '550+', label: 'Projects Completed' },
    { number: '500+', label: 'Happy Clients' },
    { number: '₹3cr+', label: 'Total Investment' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-black via-zinc-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-2xl text-gray-300">
            Showcasing our best projects and successful transformations
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white dark:bg-black py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</p>
                <p className="text-gray-700 dark:text-gray-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-black dark:bg-black border border-neutral-600 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <div className="h-48 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-orange-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300 brightness-90 contrast-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 text-xs font-semibold rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    📍 {project.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Homeowner',
                message: 'Excellent work! The renovation was completed on time and within budget. Highly recommended!',
              },
              {
                name: 'Priya Sharma',
                role: 'Business Owner',
                message: 'Professional team, quality materials, and amazing customer service. Will definitely work with them again.',
              },
              {
                name: 'Amit Patel',
                role: 'Property Developer',
                message: 'Reliable contractor for all our construction needs. They understand timelines and budgets.',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "{testimonial.message}"
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Your Dream Project Awaits</h2>
          <p className="text-xl mb-8 text-orange-50">
            Let's create something amazing together. Get your free consultation today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}
