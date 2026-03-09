import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://static.readdy.ai/image/0be37e4d464cdcdfc96c4a625bbb732f/46c7907775a13ea6d80472ef874ec660.png"
              alt="CoStaylo Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-[#c8155f] hover:bg-gray-50 font-medium px-6 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Login / Signup
            </Link>
            <Link
              to="/list-property"
              className="bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#041e40] hover:to-[#c8155f] whitespace-nowrap cursor-pointer"
            >
              List Your PG
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-48 mt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-3 pb-4">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-[#c8155f] hover:bg-gray-50 font-medium px-6 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
            >
              Login / Signup
            </Link>
            <Link
              to="/list-property"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#041e40] hover:to-[#c8155f] whitespace-nowrap cursor-pointer text-center"
            >
              List Your PG
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;