import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#041e40] to-[#0a2d5c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <img
              src="https://static.readdy.ai/image/0be37e4d464cdcdfc96c4a625bbb732f/46c7907775a13ea6d80472ef874ec660.png"
              alt="CoStaylo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Find your perfect PG accommodation with verified listings, HD photos, and 24/7 support across major cities in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pgs" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  PGs / Co-living
                </Link>
              </li>
              <li>
                <Link to="/hostels" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  Hostels
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/list-property" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Cities</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/chennai" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  Chennai
                </Link>
              </li>
              <li>
                <Link to="/bangalore" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  Bangalore
                </Link>
              </li>
              <li>
                <Link to="/mumbai" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  Mumbai
                </Link>
              </li>
              <li>
                <Link to="/delhi" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  Delhi
                </Link>
              </li>
              <li>
                <Link to="/hyderabad" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link to="/pune" className="text-gray-300 hover:text-[#c8155f] transition-colors cursor-pointer">
                  Pune
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-[#c8155f]"></i>
                </div>
                <span className="text-gray-300 text-sm">123 Anna Salai, Chennai, Tamil Nadu 600002</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-[#c8155f]"></i>
                </div>
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-[#c8155f]"></i>
                </div>
                <span className="text-gray-300 text-sm">support@pgfinder.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-gray-300 text-sm hover:text-[#c8155f] transition-colors cursor-pointer">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 text-sm hover:text-[#c8155f] transition-colors cursor-pointer">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 PG Finder. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-400 hover:border-[#c8155f] hover:text-[#c8155f] hover:bg-[#c8155f]/10 transition-all cursor-pointer"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-400 hover:border-[#c8155f] hover:text-[#c8155f] hover:bg-[#c8155f]/10 transition-all cursor-pointer"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-400 hover:border-[#c8155f] hover:text-[#c8155f] hover:bg-[#c8155f]/10 transition-all cursor-pointer"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-400 hover:border-[#c8155f] hover:text-[#c8155f] hover:bg-[#c8155f]/10 transition-all cursor-pointer"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>

        {/* Quick Link */}
        <div className="text-center mt-6">
          <a
            href="https://readdy.ai/?origin=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs hover:text-[#c8155f] transition-colors cursor-pointer"
          >
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
