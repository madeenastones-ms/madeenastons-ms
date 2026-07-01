import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/40 bg-white text-orange-500 shadow-sm">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Madeena Stones</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in construction, renovation, and quality building materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-orange-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-orange-400 transition">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services / products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Renovations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-400 transition">
                  Materials Supply
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-400 transition">
                  Stone Furniture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <span>+91 96112 83601</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📧</span>
                <span>madeenastones.ms@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Madeena Stones. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                Instagram
              </a>
              <a
                href="https://wa.me/919611283601"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-400 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
