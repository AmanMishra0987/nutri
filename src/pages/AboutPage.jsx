import React, { useState } from "react";
import { IMAGES } from "../constants/images";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-10">
            About Soul Fuel Wellness
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Empowering individuals to achieve optimal health through
            personalized wellness solutions that nurture the whole self - body,
            mind, and spirit.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="bg-emerald-100 rounded-2xl h-80 overflow-hidden">
                <img
                  src={IMAGES.teamImage}
                  alt="Our wellness team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-6">
                Founded by Kusum Rana
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At Soul Fuel Wellness, we believe that true wellness comes from
                nurturing the whole self - body, mind, and spirit. Our mission
                is to empower individuals to achieve optimal health through
                personalized wellness solutions that are sustainable and
                meaningful.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                We offer sustainable, personalized diet and lifestyle programs
                aimed at achieving effective weight loss and overall well-being.
                Our approach combines personalized nutrition plans with wellness
                coaching, focusing on building sustainable habits for long-term
                success.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-700">
                    Dubai
                  </div>
                  <div className="text-gray-600">Based in UAE</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-700">
                    24/7
                  </div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Soul Fuel Wellness was founded by Kusum Rana with a vision to
                make sustainable health and wellness accessible to everyone. Our
                approach combines personalized nutrition with holistic lifestyle
                coaching to help you achieve lasting transformation.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Based in Dubai, we understand the unique challenges of
                maintaining a healthy lifestyle while balancing work, travel,
                and social commitments. Our programs are designed to integrate
                seamlessly into your daily life, providing sustainable solutions
                that work in the real world.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We believe in accountability, discipline, and consistency as the
                foundation for success. Through our comprehensive approach
                including personalized meal plans, daily tracking, regular
                consultations, and ongoing support, we empower you to make
                lasting changes that transform not just your body, but your
                entire life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-6">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our certified wellness professionals are passionate about helping
              you achieve your health goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-emerald-50 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">
                Kusum Rana
              </h3>
              <p className="text-emerald-700 font-medium mb-4">
                Founder & Lead Wellness Coach
              </p>
              <p className="text-gray-600 text-sm">
                Yoga, Pilates, Wellness, and Lifestyle Coach. Expert in
                personalized nutrition and sustainable wellness programs.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-emerald-50 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">
                Nutrition Specialist
              </h3>
              <p className="text-emerald-700 font-medium mb-4">
                Meal Planning & Dietary Guidance
              </p>
              <p className="text-gray-600 text-sm">
                Personalized meal plans with balanced nutrition, portion
                control, and calorie management for optimal results.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-emerald-50 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">
                Support Team
              </h3>
              <p className="text-emerald-700 font-medium mb-4">
                Daily Guidance & Accountability
              </p>
              <p className="text-gray-600 text-sm">
                Dedicated team providing daily weight tracking, progress
                monitoring, and continuous support via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-6">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Compassion
              </h3>
              <p className="text-gray-600 text-sm">
                We approach every client with empathy and understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards in all our services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                We continuously evolve our methods and approaches.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Community
              </h3>
              <p className="text-gray-600 text-sm">
                We foster supportive relationships and connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
