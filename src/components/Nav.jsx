import { useState, useEffect } from "react";
import { FaWhatsapp, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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

  // Array for services with icons
  const services = [
    { name: "Birthday", path: "/services/birthday", icon: "/img/icons/b1.png" },
    {
      name: "Anniversary",
      path: "/services/anniversary",
      icon: "/img/icons/a1.png",
    },
    {
      name: "Bachelor Party",
      path: "/services/bachelor",
      icon: "/img/icons/bbb1.png",
    },
    {
      name: "Cocktail Party",
      path: "/services/cocktail",
      icon: "/img/icons/bb1.png",
    },
    {
      name: "Sangeet Night",
      path: "/services/sangeet",
      icon: "/img/icons/d1.png",
    },
    {
      name: "Mehandi Ceremony",
      path: "/services/mehandi",
      icon: "/img/icons/m1.png",
    },
    {
      name: "Corporate Event",
      path: "/services/corporate",
      icon: "/img/icons/c1.png",
    },
    {
      name: "Engagement",
      path: "/services/engagement",
      icon: "/img/icons/e1.png",
    },
    {
      name: "Haldi Ceremony",
      path: "/services/haldi",
      icon: "/img/icons/t1.png",
    },
    {
      name: "Housewarming",
      path: "/services/housewarming",
      icon: "/img/icons/h1.png",
    },
    {
      name: "Baby Shower",
      path: "/services/babyshower",
      icon: "/img/icons/p1.png",
    },
    {
      name: "Bridal Shower",
      path: "/services/bridalshower",
      icon: "/img/icons/bbbb1.png",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-6 left-0 m-auto right-0 w-4/5 bg-gradient-navbar text-black z-50 h-18 flex items-center justify-center mb-24 rounded-full">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 h-16">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/img/banner/logo.png" // Replace with your logo path
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Center Section: Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-500 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Center Section: Navigation Links (Desktop) */}
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
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-[300px] bg-white text-black py-4 px-4 rounded-lg shadow-lg">
                  <ul className="space-y-1">
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={closeMenu}
                        >
                          <img
                            src={service.icon}
                            alt={service.name}
                            className="h-6 w-6"
                          />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
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

          {/* Right Section: WhatsApp Button (Desktop) */}
          <div className="hidden md:flex">
            <a
              href="https://wa.link/8ta1ca"
              className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600"
            >
              <FaWhatsapp className="inline-block mr-2" />
              Chat
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-3/4 bg-white text-black z-40 flex flex-col items-start space-y-4 py-8 px-6 shadow-lg overflow-y-auto">
          {/* <button onClick={closeMenu} className="self-end mb-4">
            <FaTimes size={24} />
          </button> */}
          <Link to="/" className="text-lg font-semibold" onClick={closeMenu}>
            Home
          </Link>
          <div className="text-lg font-semibold w-full">
            <button
              onClick={toggleDropdown}
              className="flex items-center w-full"
            >
              Services <FaChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <ul className="mt-2 space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      <img
                        src={service.icon}
                        alt={service.name}
                        className="h-6 w-6"
                      />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link
            to="/about"
            className="text-lg font-semibold"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="text-lg font-semibold"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a
            href="https://wa.link/8ta1ca"
            className="text-lg font-semibold bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600"
          >
            <FaWhatsapp className="inline-block mr-2" />
            Chat
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
