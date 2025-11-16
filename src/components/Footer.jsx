import React, { memo } from "react";
import { Link } from "react-router-dom";
import { SOCIAL_MEDIA } from "../constants/socialMedia";
import logoFooter from "../assets/logo.png";

const Footer = memo(() => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Elevate Your Wellness Journey
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            Subscribe to receive expert tips, exclusive deals, and the latest event news.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-amber-500 text-white px-6 py-3 rounded-r-lg hover:bg-amber-600 transition duration-300 font-medium">
              Subscribe
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 lg:justify-items-center">
            <div>
              <img
                src={logoFooter}
                alt="Soul Fuel Wellness"
                className="w-32 h-auto mx-auto mb-8"
              />
              <p className="text-emerald-100 mb-6">
                Empowering individuals to achieve optimal health through
                personalized wellness solutions.
              </p>
              <div className="flex justify-center space-x-4">
                {SOCIAL_MEDIA.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/services"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Nutrition Planning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Wellness Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Lifestyle Coaching
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Retreats
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-emerald-100 hover:text-white transition duration-300"
                  >
                    Community Support
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-emerald-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-emerald-200 text-sm">
                &copy; {new Date().getFullYear()} Soul Fuel Wellness. All rights
                reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition duration-300"
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});

export default Footer;
