import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ServiceDetail from "../ServiceDetail";
import { IMAGES } from "../constants/images";
import { SOCIAL_MEDIA } from "../constants/socialMedia";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

// Sample transformation data for home page cards
const TRANSFORMATIONS = [
  {
    id: "1",
    name: "Kevin",
    shortSummary: "Lost 30kg with personalized nutrition coaching",
    shortDescription: "Kevin achieved remarkable results through our personalized wellness program in Dubai.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
 
 
  {
    id: "2",
    name: "Priyanka Ramchandani",
    shortSummary: "Achieved goals in short timeframes",
    shortDescription: "Priyanka found our program effective and encouraging, making it her daily lifestyle.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
  },
  {
    id: "3",
    name: "Simran Makhijani",
    shortSummary: "Lost 8kg with constant guidance",
    shortDescription: "Simran became more mindful of what she eats and adopted a cleaner, healthier lifestyle.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {
    id: "4",
    name: "Namit Bhalla",
    shortSummary: "Lost 10kg with thorough approach",
    shortDescription: "Namit reached his weight loss goal and gained a new perspective on food and nutrition.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {
    id: "5",
    name: "Richa Bhagnari",
    shortSummary: "Lost 10kg from yo-yo diets",
    shortDescription: "Richa was put on the right track after being on yo-yo diets all her life.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {
    id: "6",
    name: "AJ",
    shortSummary: "Lost 12kg in 12 weeks",
    shortDescription: "AJ lost weight easily with sustainable diet plans and constant support.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
  },
  {
    id: "7",
    name: "Dhaara Nikalank",
    shortSummary: "Lost 17.5kg with favorite foods",
    shortDescription: "Dhaara learned to eat everything she loves and still lose weight.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {
    id: "8",
    name: "Dubai Client",
    shortSummary: "Grew in ways never imagined",
    shortDescription: "Learned new ways of eating, letting go of ego and being open to learning.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {
    id: "9",
    name: "Foodie from Dubai",
    shortSummary: "Learned balance with favorite foods",
    shortDescription: "Learned there's simply a time, place, and portion for everything.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  }
];


function Home() {
  const [showAll, setShowAll] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const visibleCards = showAll ? TRANSFORMATIONS : TRANSFORMATIONS.slice(0, 3);

  const Home = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

      {/* Hero Banner Image */}
      <div className="relative">
        <div
          className="w-full h-64 md:h-80 lg:h-96 overflow-hidden"
          style={{ height: "782px" }}
        >
          <img
            src={IMAGES.heroBanner}
            alt="Wellness and Nutrition Banner"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="py-16 pb-20 md:py-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-emerald-900 leading-tight">
                Sustain Your Health,{" "}
                <span className="text-emerald-600">Transform Your Life</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                Experience holistic wellness through sustainable, personalized
                diet and lifestyle programs designed to help you achieve
                effective weight loss and overall well-being.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <Link
                  to="/booking"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition duration-300 text-lg font-medium text-center"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-emerald-600 text-emerald-700 px-8 py-3 rounded-full hover:bg-emerald-50 transition duration-300 text-lg font-medium text-center"
                >
                  Explore Our Programs
                </Link>
              </div>
            </div>
            <div className="bg-emerald-200 rounded-2xl h-96 lg:h-[500px] overflow-hidden">
              <img
                src={IMAGES.heroSection}
                alt="Healthy nutrition and wellness"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">
              About Soul Fuel Wellness
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

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
              <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-6">
                Founded by Kusum Rana
              </h3>
              <p className="text-gray-600 mb-6">
                At Soul Fuel Wellness, we believe that true wellness comes from
                nurturing the whole self - body, mind, and spirit. Our mission
                is to empower individuals to achieve optimal health through
                personalized wellness solutions that are sustainable and
                meaningful.
              </p>
              <p className="text-gray-600 mb-6">
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

      {/* Successful Transformations Section */}
      <section id="transformations" className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">
              Successful Transformations
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Real stories from real people who have transformed their lives with Soul Fuel Wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCards.map((transformation) => (
              <div key={transformation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
    
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">{transformation.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{transformation.shortSummary}</p>
                  <p className="text-gray-600 mb-4">{transformation.shortDescription}</p>
                  
                  {/* Read More Button */}
                  <Link
                    to={`/transformation/${transformation.id}`}
                    className="mt-4 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300 text-center block"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition duration-300 font-medium"
            >
              {showAll ? "Show Less" : "Show All Transformations"}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">
              Our Wellness Programs
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive wellness programs designed to support your unique
              journey toward optimal health and vitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Personalized Nutrition Plans
              </h3>
              <p className="text-gray-600 mb-6">
                Tailored meal plans based on your body type, diet preferences,
                and lifestyle with balanced nutrition and portion control.
              </p>
              <Link
                to="/services"
                className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Wellness Coaching
              </h3>
              <p className="text-gray-600 mb-6">
                Holistic lifestyle coaching combining nutrition, mindfulness,
                and habit formation for sustainable wellness.
              </p>
              <Link
                to="/services"
                className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Weight Management
              </h3>
              <p className="text-gray-600 mb-6">
                Sustainable weight loss programs with daily support, progress
                tracking, and mindful eating guidance.
              </p>
              <Link
                to="/services"
                className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Consultation Sessions
              </h3>
              <p className="text-gray-600 mb-6">
                Weekly consultations on Tuesdays & Thursdays with extended
                support for quarterly and semi-annual plans.
              </p>
              <Link
                to="/services"
                className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Medical Integration
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive health assessment with BMI testing, lab work
                guidance, and medical history integration.
              </p>
              <Link
                to="/services"
                className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Accountability Support
              </h3>
              <p className="text-gray-600 mb-6">
                Daily weight tracking, WhatsApp support during working hours,
                and continuous guidance for lasting results.
              </p>
              <Link
                to="/services"
                className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">
              Wellness Gallery
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              A glimpse into our wellness events, workshops, and community
              activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.gallery.map((imageUrl, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={imageUrl}
                  alt={`Wellness gallery image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="border-2 border-emerald-600 text-emerald-700 px-8 py-3 rounded-full hover:bg-emerald-50 transition duration-300 font-medium inline-block"
            >
              View All Photos
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">
              Community Stories
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Hear from our community members about their wellness journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMAGES.testimonials.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-emerald-900">
                      {client.name}
                    </h4>
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{client.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">
              Connect With Us
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Ready to start your wellness journey? Reach out to us today.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg hover:bg-emerald-700 transition duration-300 font-medium text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-emerald-50 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-emerald-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-emerald-900">
                        Phone
                      </h4>
                      <p className="text-gray-600 mt-1">+971 1234567890</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-emerald-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-emerald-900">
                        WhatsApp Support
                      </h4>
                      <p className="text-gray-600 mt-1">
                        Available during working hours
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-emerald-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-emerald-900">
                        Location
                      </h4>
                      <p className="text-gray-600 mt-1">
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-emerald-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-emerald-900">
                        Business Hours
                      </h4>
                      <p className="text-gray-600 mt-1">
                        Monday-Friday: 9:00 AM – 6:30 PM
                        <br />
                        Consultation: Tuesday & Thursday, 1:30 PM – 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-bold text-emerald-900 mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    {SOCIAL_MEDIA.map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition duration-300"
                      >
                        <svg
                          className="w-6 h-6 text-emerald-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/:serviceName" element={<ServiceDetail />} />
      <Route
        path="/contact"
        element={
          <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-4">
                  Connect With Us
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ready to start your wellness journey? Reach out to us today to
                  schedule your free consultation.
                </p>
              </div>
              <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-emerald-900 mb-6">
                      Request a Free Consultation
                    </h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-gray-700 mb-2"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-gray-700 mb-2"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-gray-700 mb-2"
                        >
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="nutrition">Nutrition Planning</option>
                          <option value="wellness">Wellness Programs</option>
                          <option value="coaching">Lifestyle Coaching</option>
                          <option value="workshops">Workshops</option>
                          <option value="retreats">Retreats</option>
                          <option value="community">Community Support</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-gray-700 mb-2"
                        >
                          How can we help you?
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="Tell us about your wellness goals and how we can support you..."
                        ></textarea>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="newsletter"
                          className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                        />
                        <label
                          htmlFor="newsletter"
                          className="ml-2 text-gray-700"
                        >
                          Subscribe to our newsletter for wellness tips and
                          updates
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-4 rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 font-medium text-lg shadow-md hover:shadow-lg"
                      >
                        Request Free Consultation
                      </button>
                    </form>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 md:p-12 text-white">
                    <h3 className="text-2xl font-bold mb-6">
                      Contact Information
                    </h3>

                    <div className="space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold">Phone</h4>
                          <p className="mt-1">+1 (555) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold">Email</h4>
                          <p className="mt-1">info@soulfuelwellness.com</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold">Address</h4>
                          <p className="mt-1">
                            123 Wellness Way
                            <br />
                            Healthville, HV 12345
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold">Business Hours</h4>
                          <p className="mt-1">
                            Monday-Friday: 9am - 6pm
                            <br />
                            Saturday: 10am - 4pm
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-white/20">
                      <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                      <div className="flex space-x-4">
                        {SOCIAL_MEDIA.map((social) => (
                          <a
                            key={social.name}
                            href="#"
                            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d={social.icon} />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default Home;
