'use client';

export default function HeroSection() {
  const handleCallClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18289633309/KwusCJ6mrckcEJ3QlpFE',
        'transaction_id': `call_${Date.now()}`
      });
    }
  };

  return (
    <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden border-b border-orange-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] "></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build Your <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">Dream Home</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Professional construction, renovation, and premium building materials for your perfect space.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/services"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 text-center"
              >
                Explore Services
              </a>
              <a
                href="tel:+919611283601"
                onClick={handleCallClick}
                className="inline-block px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition duration-300 text-center"
              >
                Get Free Quote
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
              <div>
                <p className="text-3xl font-bold text-orange-400">550+</p>
                <p className="text-gray-400">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-400">500+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-400">15+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-96 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-orange-600">
              <img
                src="https://www.baumerk.com/storage/app/media/blog/tadilat-nedir.jpg"
                alt="Construction project"
                className="w-full h-full object-cover brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-semibold">Professional Construction Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
