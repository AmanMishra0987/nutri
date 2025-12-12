import React, { useState, useEffect } from "react";
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
    age: 27,
    location: "Dubai",
    weightLost: "30kg",
    shortSummary: "Lost 30kg with personalized nutrition coaching",
    shortDescription: "Kevin achieved remarkable results through our personalized wellness program in Dubai."
  },
  {
    id: "2",
    name: "Priyanka Ramchandani",
    age: 40,
    location: "Dubai",
    weightLost: "3kg",
    shortSummary: "Achieved goals in short timeframes",
    shortDescription: "Priyanka found our program effective and encouraging, making it her daily lifestyle."
  },
  {
    id: "3",
    name: "Simran Makhijani",
    age: 28,
    location: "Dubai",
    weightLost: "8kg",
    shortSummary: "Lost 8kg with constant guidance",
    shortDescription: "Simran became more mindful of what she eats and adopted a cleaner, healthier lifestyle."
  },
  {
    id: "4",
    name: "Namit Bhalla",
    age: 44,
    location: "Dubai",
    weightLost: "10kg",
    shortSummary: "Lost 10kg with thorough approach",
    shortDescription: "Namit reached his weight loss goal and gained a new perspective on food and nutrition."
  },
  {
    id: "5",
    name: "Richa Bhagnari",
    age: 49,
    location: "Dubai",
    weightLost: "10kg",
    shortSummary: "Lost 10kg from yo-yo diets",
    shortDescription: "Richa was put on the right track after being on yo-yo diets all her life."
  },
  {
    id: "6",
    name: "AJ",
    age: 39,
    location: "UK",
    weightLost: "12kg",
    shortSummary: "Lost 12kg in 12 weeks",
    shortDescription: "AJ lost weight easily with sustainable diet plans and constant support."
  },
  {
    id: "7",
    name: "Dhaara Nikalank",
    age: 42,
    location: "India",
    weightLost: "17.5kg",
    shortSummary: "Lost 17.5kg with favorite foods",
    shortDescription: "Dhaara learned to eat everything she loves and still lose weight."
  },

  /* ---------- NEW TESTIMONIALS BELOW ---------- */

  {
    id: "8",
    name: "Himanshu",
    age: 26,
    location: "Canada",
    weightLost: "22.3kg",
    shortSummary: "Reversed diabetes and lost 22kg",
    shortDescription: "Himanshu transformed his health, reversed diabetes, and built a healthier relationship with food."
  },
  {
    id: "9",
    name: "Deepali Gandhi",
    age: 40,
    location: "Canada",
    weightLost: "23kg",
    shortSummary: "Lost 23kg and built lifelong mindful eating habits",
    shortDescription: "Deepali mastered portion control and achieved her best shape ever."
  },
  {
    id: "10",
    name: "Sathvik",
    age: 24,
    location: "Dubai",
    weightLost: "28.4kg",
    shortSummary: "Lost 28kg with personalized planning",
    shortDescription: "Sathvik transformed his confidence with a deeply personalized lifestyle plan."
  },
  {
    id: "11",
    name: "Miita Thakral",
    age: 43,
    location: "Thailand",
    weightLost: "9kg",
    shortSummary: "Lost 9kg during perimenopause",
    shortDescription: "Miita achieved consistent fat loss while staying craving-free and nourished."
  },
  {
    id: "12",
    name: "Ruba Hassan",
    age: 35,
    location: "Yemen",
    weightLost: "5kg",
    shortSummary: "Lost 5kg with an easy, filling plan",
    shortDescription: "Ruba enjoyed a simple, tailored plan that kept her full all day."
  },
  {
    id: "13",
    name: "Rahul",
    age: 35,
    location: "Dubai",
    weightLost: "8kg",
    shortSummary: "Wedding transformation success",
    shortDescription: "Rahul achieved his best shape and confidence before his wedding."
  },
  {
    id: "14",
    name: "Andie",
    age: 36,
    location: "Sri Lanka",
    weightLost: "11.45kg",
    shortSummary: "Lost 11kg with flexible planning",
    shortDescription: "Andie thrived with daily check-ins and a customizable meal plan."
  },
  {
    id: "15",
    name: "Shefali",
    age: 43,
    location: "Canada",
    weightLost: "12kg",
    shortSummary: "Lost 12kg and reduced inflammation",
    shortDescription: "Shefali learned which foods triggered inflammation and transformed her health."
  },
  {
    id: "16",
    name: "Rahul Valecha",
    age: 32,
    location: "Dubai",
    weightLost: "8kg",
    shortSummary: "Lost 8kg before his wedding",
    shortDescription: "Rahul shaped his best physique through a structured 6-month plan."
  },
  {
    id: "17",
    name: "Renjim",
    age: null,
    location: "Turkey",
    weightLost: "11kg",
    shortSummary: "Lost 11kg after cortisol-related weight gain",
    shortDescription: "Renjim finally lost weight through a plan tailored to his hormonal challenges."
  },
  {
    id: "18",
    name: "Prerna Khushalani",
    age: 33,
    location: null,
    weightLost: "21kg",
    shortSummary: "Lost 21kg before her wedding",
    shortDescription: "Prerna overcame thyroid struggles to lose over 20 kilos."
  },
  {
    id: "19",
    name: "Aanchal",
    age: 39,
    location: "UK",
    weightLost: "13kg",
    shortSummary: "Lost 13kg post-pregnancy",
    shortDescription: "Aanchal regained her health with sustainable plans that fit her lifestyle."
  },
  {
    id: "20",
    name: "Priyanka Sridhar",
    age: 28,
    location: "USA",
    weightLost: "14kg",
    shortSummary: "Lost 14kg with sustainable habits",
    shortDescription: "Priyanka improved both physical and mental health through a balanced lifestyle plan."
  },
  {
    id: "21",
    name: "Neha Munjal",
    age: 36,
    location: null,
    weightLost: "16kg",
    shortSummary: "Lost 16kg postpartum",
    shortDescription: "Neha regained energy and confidence with a structured postpartum plan."
  },
  {
    id: "22",
    name: "Anand",
    age: 39,
    location: "Saudi Arabia",
    weightLost: "18.5kg",
    shortSummary: "Lost 18kg with sustainable discipline",
    shortDescription: "Anand embraced lifelong healthy habits and improved his daily activity levels."
  },
  {
    id: "23",
    name: "Jayshree",
    age: 52,
    location: "Dubai",
    weightLost: "27kg",
    shortSummary: "Lost 27kg and stopped BP medication",
    shortDescription: "Jayshree reversed high BP and transformed her health with easy-to-follow plans."
  },
  {
    id: "24",
    name: "MM",
    age: 26,
    location: "Dubai",
    weightLost: "25kg",
    shortSummary: "Lost 25kg with structured yearly planning",
    shortDescription: "MM stayed consistent with plans built around his lifestyle and schedule."
  }
];



function Home() {
  const [showAll, setShowAll] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to extract numeric weight value for sorting
  const getWeightValue = (weightLost) => {
    if (!weightLost) return 0;
    const match = weightLost.match(/(\d+\.?\d*)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Sort transformations by weight difference (largest first)
  const sortedTransformations = [...TRANSFORMATIONS].sort((a, b) => {
    return getWeightValue(b.weightLost) - getWeightValue(a.weightLost);
  });

  const visibleCards = showAll ? sortedTransformations : sortedTransformations.slice(0, 3);

  // Handle scroll to change navbar background after hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroSectionHeight = 782; // Height of hero section
      // Navbar stays blur/transparent until hero section, then becomes white
      setIsScrolled(scrollTop > heroSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Home = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

      {/* Hero Banner With Content Over Video */}
      <div className="relative w-full h-[782px] overflow-hidden">

        {/* Background Video */}
        <video
          src="/nut.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>

        {/* Hero Content ON video */}
        <div className={`relative z-10 w-full h-full flex transition-all duration-300 ${isScrolled ? 'items-start pt-[140px]' : 'items-center pt-[100px]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

              {/* Left Text Section */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  Sustain Your Health,
                  <span className="text-emerald-300"> Transform Your Life</span>
                </h1>

                <p className="mt-6 text-lg max-w-2xl">
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
                    to="#"
                    className="border-2 border-emerald-300 text-emerald-200 px-8 py-3 rounded-full hover:bg-white/10 transition duration-300 text-lg font-medium text-center"
                  >
                    Explore Our Programs
                  </Link>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>


      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.teamImage}
                  alt="Kusum Rana - Founder"
                  className="w-full h-[600px] object-cover object-top transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Founder</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                  Founded by <span className="text-emerald-600">Kusum Rana</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  At Soul Fuel Wellness, we believe that true wellness comes from nurturing the whole self - body, mind, and spirit. Our mission is to empower individuals to achieve optimal health through personalized wellness solutions that are sustainable and meaningful.
                </p>
                <p>
                  We offer sustainable, personalized diet and lifestyle programs aimed at achieving effective weight loss and overall well-being. Our approach combines personalized nutrition plans with wellness coaching, focusing on building sustainable habits for long-term success.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">Dubai</div>
                  <div className="text-gray-600 font-medium">Based in UAE</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl border border-cyan-200">
                  <div className="text-lg font-bold text-cyan-700 mb-2 white-space: nowrap;">Available </div>
                  <div className="text-gray-600 font-medium text-sm white-space: nowrap;">Monday to Friday</div>
                  <div className="text-gray-600 font-medium text-sm white-space: nowrap;">9:00 AM to 6:00 PM (GMT +4)</div>
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
              <div
                key={transformation.id}
                className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-6">
                  <h4 className="font-bold text-emerald-900 mb-2">
                    {transformation.name}
                  </h4>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>{transformation.age} years</span>
                    <span className="mx-2">•</span>
                    <span>{transformation.location}</span>
                  </div>
                  {transformation.weightLost && (
                    <div className="text-sm font-semibold text-emerald-600">
                      Lost {transformation.weightLost}
                    </div>
                  )}
                </div>
                <p className="text-gray-600 italic mb-4">"{transformation.shortDescription}"</p>
                <Link
                  to={`/transformation/${transformation.id}`}
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300"
                >
                  Read More
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
            {IMAGES.gallery.slice(0, 3).map((imageUrl, index) => (
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
                      <p className="text-gray-600 mt-1">+971 505357209</p>
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
                        Monday-Friday: 9:00 AM – 6:00 PM (GMT +4)

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
                          <p className="mt-1">+971 505357209</p>
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
                          <p className="mt-1">info@soulfuelwellness.ae</p>
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
                            Monday-Friday: 9am - 6:30pm
                            <br />
                            Sunday & Saturday: Closed
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
