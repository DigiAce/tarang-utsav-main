import { useState } from "react";
import {
  // FaInstagram,
  // FaFacebook,
  // FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-6 left-0 m-auto right-0 w-3/5 bg-gradient-navbar text-white z-50 h-20 flex items-center justify-center mb-24 rounded-full">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 h-16">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/img/banner/logo.png" // Replace with your logo path
                alt="Logo"
                className="h-12 w-auto" // Adjust height and width as needed
              />
            </Link>
          </div>

          {/* Center Section: Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-500 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Center Section: Navigation Links (Desktop View) */}
          <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
            <Link to="/" className="hover:border-b-2 hover:border-gray-500">
              Home
            </Link>
            <div className="relative group">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:border-b-2 hover:border-gray-500"
              >
                Services <FaChevronDown className="ml-2" />
              </button>
              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-10 w-[500px] bg-white text-black py-4 px-4 rounded-lg shadow-lg flex justify-evenly right-0">
                  <img
                    src="/img/dropimg.jpg"
                    alt="Dropdown Example"
                    className="h-[500px] w-[350px] rounded-md mr-4"
                  />
                  <div className="flex flex-col justify-between space-y-2">
                    <Link
                      to="/service1"
                      className="block hover:text-gray-500 text-2xl"
                      onClick={closeMenu}
                    >
                      Service 1
                    </Link>
                    <Link
                      to="/service2"
                      className="block hover:text-gray-500 text-2xl"
                      onClick={closeMenu}
                    >
                      Service 2
                    </Link>
                    <Link
                      to="/service3"
                      className="block hover:text-gray-500 text-2xl"
                      onClick={closeMenu}
                    >
                      Service 3
                    </Link>
                    <Link
                      to="/service3"
                      className="block hover:text-gray-500 text-2xl"
                      onClick={closeMenu}
                    >
                      Service 4
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="hover:border-b-2 hover:border-gray-500"
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="hover:border-b-2 hover:border-gray-500"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="hover:border-b-2 hover:border-gray-500"
            >
              Contact
            </Link>
          </div>

          {/* Right Section: WhatsApp Button */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/1234567890" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full"
            >
              <FaWhatsapp size={20} />
              <span className="ml-2">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Slide-in from Left) */}
      <div
        className={`fixed top-16 left-0 h-full bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-4/5`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-black hover:text-gray-500 focus:outline-none"
        >
          <FaTimes size={24} />
        </button>
        <div className="flex flex-col items-start mt-16 px-6 space-y-4 text-black text-lg">
          <Link to="/" onClick={closeMenu} className="hover:text-gray-500">
            Home
          </Link>
          <div>
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-gray-500"
            >
              Services <FaChevronDown className="ml-2" />
            </button>
            {/* Dropdown in mobile menu */}
            {isDropdownOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <Link
                  to="/service1"
                  className="block hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Service 1
                </Link>
                <Link
                  to="/service2"
                  className="block hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Service 2
                </Link>
                <Link
                  to="/service3"
                  className="block hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Service 3
                </Link>
              </div>
            )}
          </div>
          <Link to="/about" onClick={closeMenu} className="hover:text-gray-500">
            About
          </Link>
          <Link
            to="/gallery"
            onClick={closeMenu}
            className="hover:text-gray-500"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="hover:text-gray-500"
          >
            Contact
          </Link>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full mt-4"
            onClick={closeMenu}
          >
            <FaWhatsapp size={20} />
            <span className="ml-2">WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
