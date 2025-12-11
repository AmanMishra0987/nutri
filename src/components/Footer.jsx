import React, { memo } from "react";
import { Link } from "react-router-dom";
import { SOCIAL_MEDIA } from "../constants/socialMedia";
import logoFooter from "../assets/yellowlo.png";

const Footer = memo(() => {
  return (
    <>
      

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-50 to-emerald-100 text-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 lg:justify-items-center">
            <div>
              <img
                src={logoFooter}
                alt="Soul Fuel Wellness"
                className="w-32 h-auto mx-auto mb-8"
              />
              <p className="text-black mb-6">
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
                    className="text-black hover:text-white transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-black hover:text-white transition duration-300"
                  >
                    About Us
                  </Link>
                </li>
               
                <li>
                  <Link
                    to="/enrollment"
                    className="text-black hover:text-white transition duration-300"
                  >
                    How to Enroll
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-black hover:text-white transition duration-300"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-black hover:text-white transition duration-300"
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
                    to="#"
                    className="text-black hover:text-white transition duration-300"
                  >
                    Nutrition Planning
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-black hover:text-white transition duration-300"
                  >
                    Wellness Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-black hover:text-white transition duration-300"
                  >
                    Lifestyle Coaching
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="#"
                    className="text-black hover:text-white transition duration-300"
                  >
                    Retreats
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-black hover:text-white transition duration-300"
                  >
                    Community Support
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-emerald-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-black text-sm">
                &copy; {new Date().getFullYear()} Soul Fuel Wellness. All rights
                reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a
                  href="#"
                  className="text-black hover:text-white text-sm transition duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-black hover:text-white text-sm transition duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-black hover:text-white text-sm transition duration-300"
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
