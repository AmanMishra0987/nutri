import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/yellowlo.png";
import logoFooter from "../assets/logo.png";

const Header = memo(({ isScrolled, setIsScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{ height: "100px" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-emerald-800" : "text-white drop-shadow-lg"
                }`}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
              <Link
                to="/"
                className="flex-shrink-0 flex items-center mr-3"
                onClick={() => setIsMobileMenuOpen(false)} // closes menu if used from mobile
              >
                <img
                  src={isScrolled ? logoDark : logoFooter}
                  alt="Logo"
                  className="w-20 h-auto transition-all duration-300 cursor-pointer pt-4"
                />
              </Link>
            </div>

            {/* Right Side Button */}
            <div className="flex items-center">
              <Link
                to="/booking"
                className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 hidden md:block ${
                  isScrolled
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                }`}
              >
                Book a Session
              </Link>
            </div>
            <Link
              to="/booking"
              className={`p-3 rounded-full transition-all duration-300 md:hidden ${
                isScrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-60 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center">
                <img src={logoDark} alt="Logo" className="w-16 h-auto" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="p-6">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/enrollment"
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    How to Enroll
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonials"
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  to="/booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors font-medium flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Book a Session
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
});

export default Header;
