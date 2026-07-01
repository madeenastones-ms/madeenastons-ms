export default function About() {

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-black via-zinc-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Madeena Stones</h1>
          <p className="text-2xl text-gray-300">
            Building Trust, Quality, and Dreams Since 2010
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Founded in 2010, Madeena Stones has been a trusted name in construction and renovation services. We started with a simple mission: to provide high-quality construction materials and professional renovation services at affordable prices.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Over the years, we've grown to serve over 500+ satisfied clients and completed 550+ successful projects ranging from small apartment renovations to large commercial constructions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our commitment to quality, punctuality, and customer satisfaction has made us one of the most trusted names in the construction industry.
              </p>
            </div>
            <div className="bg-gradient-to-br from-black via-zinc-900 to-orange-600 h-80 rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROw-mVYUJDnAn-do_Bvkv_C9F8A5jnq8UwzzCqNKpvPvxE9Z04"
                alt="Construction team"
                className="w-full h-full object-cover brightness-90 contrast-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-neutral-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide exceptional construction and renovation services using premium materials and skilled professionals, making quality accessible to every homeowner and business.
              </p>
            </div>
            <div className="bg-black border border-neutral-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the leading provider of construction services and building materials, recognized for our commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="bg-black border border-neutral-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Quality, Integrity, Customer First, Innovation, and Teamwork. We believe in doing business the right way, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-orange-500 mb-2">550+</p>
              <p className="text-gray-700 dark:text-gray-400 font-semibold">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-500 mb-2">500+</p>
              <p className="text-gray-700 dark:text-gray-400 font-semibold">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-500 mb-2">150+</p>
              <p className="text-gray-700 dark:text-gray-400 font-semibold">Team Members</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-500 mb-2">15+</p>
              <p className="text-gray-700 dark:text-gray-400 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
