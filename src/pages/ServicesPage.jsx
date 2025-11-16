import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/images";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicesPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      id: "trial-pack",
      title: "Trial Pack - Monthly",
      description:
        "Perfect for beginners! 4 weeks of personalized meal plans and consultations to kickstart your wellness journey.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      features: [
        "4 personalized meal plans",
        "4 consultation sessions",
        "Daily weight tracking support",
        "WhatsApp support during working hours",
      ],
      duration: "4 Weeks",
      validity: "6 Weeks",
      price: "AED 1,000",
    },
    {
      id: "quarterly",
      title: "Quarterly Program",
      description:
        "Comprehensive 12-week program with extended consultations for sustained weight loss and lifestyle transformation.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      features: [
        "12 personalized meal plans",
        "12 consultation sessions",
        "Extended 2.5-4 hour initial consultation",
        "Progress tracking and adjustments",
      ],
      duration: "12 Weeks",
      validity: "16 Weeks",
      price: "AED 2,600",
    },
    {
      id: "semi-annual",
      title: "Semi-Annual Program",
      description:
        "Long-term transformation program for lasting results with 24 weeks of comprehensive support and guidance.",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      features: [
        "24 personalized meal plans",
        "24 consultation sessions",
        "Comprehensive initial assessment",
        "Holidays and travel support included",
      ],
      duration: "24 Weeks",
      validity: "18 Weeks",
      price: "AED 5,000",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-10">
            Our Wellness Services
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Comprehensive wellness programs designed to support your unique
            journey toward optimal health and vitality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                style={{ willChange: "box-shadow" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-emerald-800 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-emerald-600 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration and Validity */}
                <div className="mb-6 p-4 bg-emerald-50 rounded-lg">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-emerald-700">
                      {service.duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Validity:</span>
                    <span className="font-semibold text-emerald-700">
                      {service.validity}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-2xl font-bold text-emerald-700">
                    {service.price}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Payment required 3 days before plan delivery
                  </p>
                </div>

                <Link
                  to={`/booking`}
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300 font-medium text-center block"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-6">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Our simple 3-step process makes it easy to start your wellness
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Enrollment & Questionnaire
              </h3>
              <p className="text-gray-600">
                Complete our comprehensive 40-question form and required medical
                reports to understand your unique health profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Personalized Meal Plan
              </h3>
              <p className="text-gray-600">
                Receive your customized meal plan within 3-4 days after payment.
                Plans are tailored to your body type, lifestyle, and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Daily Support & Consultations
              </h3>
              <p className="text-gray-600">
                Weekly consultations on Tuesdays & Thursdays, daily weight
                tracking via WhatsApp, and continuous guidance for lasting
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Book a free consultation to discover which service is right for you.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition duration-300 font-medium text-lg shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
