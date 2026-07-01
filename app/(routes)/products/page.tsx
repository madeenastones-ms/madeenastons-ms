export default function Products() {
  const products = [
    {
      image: 'https://www.delhirocks.co.in/blog/wp-content/uploads/2024/11/Guide-to-Delhi-Rocks_-Premium-Marble-Supplier-in-Gurgaon.jpg',
      name: 'Premium Marbles',
      description: 'High-quality marble tiles and slabs in various colors and finishes',
      sizes: ['24x24 inches', '36x36 inches', 'Custom sizes'],
      price: 'Call for pricing',
    },
    {
      image: 'https://www.jkcement.com/wp-content/uploads/2023/06/860-x-450-Px_3-jpg.webp',
      name: 'Cement & Concrete',
      description: 'Grade A cement and ready-mix concrete for all construction needs',
      sizes: ['25kg bags', '50kg bags', 'Bulk orders'],
      price: 'Call for pricing',
    },
    {
      image: 'https://www.orientbell.com/blog/wp-content/uploads/2024/04/850x450-Pix_1-9.jpg',
      name: 'Tiles & Ceramics',
      description: 'Durable ceramic and porcelain tiles for floors and walls',
      sizes: ['12x12 inches', '18x18 inches', 'Large format'],
      price: 'Call for pricing',
    },
    {
      image: 'https://static.wixstatic.com/media/11062b_bc75ed7edb924e29999434f9326fdf18~mv2.jpeg/v1/fill/w_722,h_796,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Laying%20Floor%20Tiles.jpeg',
      name: 'Grout & Adhesives',
      description: 'Professional-grade grout and tile adhesives for perfect installations',
      sizes: ['25kg bags', '50kg bags', 'Specialty formulas'],
      price: 'Call for pricing',
    },
    {
      image: 'https://civiconcepts.com/wp-content/uploads/2021/02/Mud-Flooring-Characteristics-Materials-Procedure-Pros-Cons.jpg',
      name: 'Mud & Finishing Materials',
      description: 'Quality putty, mud, and finishing materials for smooth surfaces',
      sizes: ['25kg bags', 'Custom', 'Bulk quantities'],
      price: 'Call for pricing',
    },
    {
      image: 'https://buypebbles.com/wp-content/uploads/2024/08/JG-GROUP-5-min-1.jpg',
      name: 'Decorative Stones',
      description: 'Beautiful decorative stones and aggregates for landscaping',
      sizes: ['Bulk bags', 'Custom', 'Mix packs'],
      price: 'Call for pricing',
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/64cbbefe53fad33c594b9b81/1704491223967-P2SS9NW3ZRVM7UIF8SC4/Nine%2BDrag.%2BTable%2B001.jpg?format=1000w',
      name: 'Stone Furniture',
      description: 'Handcrafted stone chairs, benches, and outdoor furniture',
      sizes: ['Standard', 'Large', 'Custom designs'],
      price: 'Call for pricing',
    },
    {
      image: 'https://thumbs.dreamstime.com/b/many-construction-tools-construction-composition-tool-suitcase-work-plan-power-tools-building-75797874.jpg',
      name: 'Construction Tools',
      description: 'Professional-grade tools and equipment for construction projects',
      sizes: ['Individual tools', 'Complete sets', 'Rental available'],
      price: 'Call for pricing',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-black via-zinc-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Building Materials</h1>
          <p className="text-2xl text-gray-300">
            Premium quality materials for your construction needs
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-orange-500/25 overflow-hidden"
              >
                <div className="h-32 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-orange-600">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-zinc-300 mb-3">
                    {product.description}
                  </p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-orange-400 mb-2">
                      Available Sizes:
                    </p>
                    <ul className="text-xs text-zinc-300 space-y-1">
                      {product.sizes.map((size, sidx) => (
                        <li key={sidx}>• {size}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-lg font-bold text-orange-400 mb-3">{product.price}</p>
                  <a
                    href="tel:+919611283601"
                    className="block w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold rounded-lg hover:shadow-lg transition duration-300 text-center"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Products */}
      <section className="py-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Why Choose Our Products?
          </h2>
          <div className="grid bg-black dark:bg-black grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Quality',
                desc: 'All products sourced from trusted suppliers and verified for quality',
              },
              {
                title: 'Call for Pricing',
                desc: 'Please call us for current rates and project-specific quotes',
              },
              {
                title: 'Fast Delivery',
                desc: 'Quick delivery available for bulk and standard orders',
              },
              {
                title: 'Expert Advice',
                desc: 'Our team can help you choose the right products for your project',
              },
              {
                title: 'Warranty & Support',
                desc: 'All products come with warranty and after-sales support',
              },
              {
                title: 'Bulk Discounts',
                desc: 'Special discounts available for large orders',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-black dark:bg-black-800 border border-neutral-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Quality Materials?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Call us for bulk orders, current rates, and custom solutions.
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
