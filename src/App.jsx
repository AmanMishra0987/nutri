import React ,{ useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ServiceDetail from './ServiceDetail';
import BookingForm from './BookingForm';
import { IMAGES } from './constants/images';
import { SOCIAL_MEDIA } from './constants/socialMedia';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main app content (homepage)
  const Home = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo */}
                <div className="mr-3">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    className={`transition-colors duration-300 ${
                      isScrolled ? 'text-emerald-600' : 'text-white drop-shadow-lg'
                    }`}
                    fill="currentColor"
                  >
                    {/* Meditation figure */}
                    <path d="M20 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    <path d="M20 16c-3.3 0-6 2.7-6 6v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-3.3-2.7-6-6-6zm4 14h-8v-8c0-2.2 1.8-4 4-4s4 1.8 4 4v8z"/>
                    
                    {/* Energy/flame symbol on chest */}
                    <g transform="translate(20, 20)">
                      {/* Central circle */}
                      <circle cx="0" cy="0" r="1.5" fill="currentColor"/>
                      {/* Upward curves */}
                      <path d="M-1.5 0 Q-1 2 0 3 Q1 2 1.5 0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                      {/* Wing-like extensions */}
                      <path d="M-2.5 -1 Q-3 -3 -2 -4 Q-1 -3 -1.5 -1" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                      <path d="M2.5 -1 Q3 -3 2 -4 Q1 -3 1.5 -1" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                    </g>
                  </svg>
                </div>
                
                <h1 className={`text-2xl font-serif font-bold transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-emerald-700' 
                    : 'text-white drop-shadow-lg'
                }`}>Soul Fuel Wellness</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-emerald-800 hover:text-emerald-600' 
                  : 'text-white hover:text-emerald-200 drop-shadow-lg'
              }`}>Home</a>
              <a href="#about" className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-emerald-800 hover:text-emerald-600' 
                  : 'text-white hover:text-emerald-200 drop-shadow-lg'
              }`}>About</a>
              <a href="#services" className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-emerald-800 hover:text-emerald-600' 
                  : 'text-white hover:text-emerald-200 drop-shadow-lg'
              }`}>Services</a>
              <a href="#gallery" className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-emerald-800 hover:text-emerald-600' 
                  : 'text-white hover:text-emerald-200 drop-shadow-lg'
              }`}>Gallery</a>
              <a href="#testimonials" className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-emerald-800 hover:text-emerald-600' 
                  : 'text-white hover:text-emerald-200 drop-shadow-lg'
              }`}>Testimonials</a>
              <a href="#contact" className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-emerald-800 hover:text-emerald-600' 
                  : 'text-white hover:text-emerald-200 drop-shadow-lg'
              }`}>Contact</a>
              <button 
                onClick={() => setIsBookingFormOpen(true)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
                }`}
              >
                Book a Session
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-emerald-800' 
                    : 'text-white drop-shadow-lg'
                }`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
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
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center">
                {/* Logo */}
                <div className="mr-3">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 40 40" 
                    className="text-emerald-600"
                    fill="currentColor"
                  >
                    {/* Meditation figure */}
                    <path d="M20 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    <path d="M20 16c-3.3 0-6 2.7-6 6v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-3.3-2.7-6-6-6zm4 14h-8v-8c0-2.2 1.8-4 4-4s4 1.8 4 4v8z"/>
                    
                    {/* Energy/flame symbol on chest */}
                    <g transform="translate(20, 20)">
                      {/* Central circle */}
                      <circle cx="0" cy="0" r="1.5" fill="currentColor"/>
                      {/* Upward curves */}
                      <path d="M-1.5 0 Q-1 2 0 3 Q1 2 1.5 0" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                      {/* Wing-like extensions */}
                      <path d="M-2.5 -1 Q-3 -3 -2 -4 Q-1 -3 -1.5 -1" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                      <path d="M2.5 -1 Q3 -3 2 -4 Q1 -3 1.5 -1" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                    </g>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">MENU</h2>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu Items */}
            <nav className="p-6">
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#home" 
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#gallery" 
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="block text-gray-900 hover:text-emerald-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              
              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => {
                    setIsBookingFormOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors font-medium"
                >
                  Book a Session
                </button>
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Hero Banner Image */}
      <div className="relative">
        <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden" style={{height:"782px"}}>
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
                Nourish Your Body, <span className="text-emerald-600">Energize Your Soul</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                Experience holistic wellness through our personalized nutrition plans, mindfulness practices, 
                and lifestyle coaching designed to bring balance to your life.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition duration-300 text-lg font-medium">
                  Explore Our Programs
                </button>
                <button className="border-2 border-emerald-600 text-emerald-700 px-8 py-3 rounded-full hover:bg-emerald-50 transition duration-300 text-lg font-medium">
                  Meet Our Coaches
                </button>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">About Soul Fuel Wellness</h2>
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
              <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-6">Our Mission & Vision</h3>
              <p className="text-gray-600 mb-6">
                At Soul Fuel Wellness, we believe that true wellness comes from nurturing the whole self - body, mind, and spirit. 
                Founded in 2015, our mission is to empower individuals to achieve optimal health through personalized wellness 
                solutions that are sustainable and meaningful.
              </p>
              <p className="text-gray-600 mb-6">
                We envision a world where everyone has access to holistic wellness resources that support their unique journey 
                toward vitality and balance. Our approach combines evidence-based nutrition science with mindfulness practices 
                and lifestyle coaching.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-700">500+</div>
                  <div className="text-gray-600">Clients Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-700">8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">Our Wellness Services</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive wellness programs designed to support your unique journey toward optimal health and vitality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Nutrition Planning</h3>
              <p className="text-gray-600 mb-6">
                Personalized meal plans and nutritional guidance tailored to your health goals, dietary preferences, and lifestyle.
              </p>
              <Link to="/service/nutrition-planning" className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Wellness Programs</h3>
              <p className="text-gray-600 mb-6">
                Holistic programs combining nutrition, fitness, and mindfulness to support your overall well-being.
              </p>
              <Link to="/service/wellness-programs" className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Lifestyle Coaching</h3>
              <p className="text-gray-600 mb-6">
                One-on-one coaching to help you develop sustainable habits and make lasting positive changes.
              </p>
              <Link to="/service/lifestyle-coaching" className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Workshops</h3>
              <p className="text-gray-600 mb-6">
                Interactive group sessions on various wellness topics to educate and inspire your journey.
              </p>
              <Link to="/service/workshops" className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Service 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Retreats</h3>
              <p className="text-gray-600 mb-6">
                Immersive wellness experiences in serene natural settings to rejuvenate your mind, body, and spirit.
              </p>
              <Link to="/service/retreats" className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Service 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Community Support</h3>
              <p className="text-gray-600 mb-6">
                Connect with like-minded individuals on similar wellness journeys through our supportive community.
              </p>
              <Link to="/service/community-support" className="text-emerald-700 font-medium hover:text-emerald-900 inline-flex items-center transition-colors">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">Wellness Gallery</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              A glimpse into our wellness events, workshops, and community activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.gallery.map((imageUrl, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img 
                  src={imageUrl} 
                  alt={`Wellness gallery image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-emerald-600 text-emerald-700 px-8 py-3 rounded-full hover:bg-emerald-50 transition duration-300 font-medium">
              View All Photos
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">Community Stories</h2>
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
                    <h4 className="font-bold text-emerald-900">{client.name}</h4>
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{client.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">Connect With Us</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Ready to start your wellness journey? Reach out to us today.
            </p>
          </div>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
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
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-emerald-900">Phone</h4>
                      <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-emerald-900">Email</h4>
                      <p className="text-gray-600 mt-1">info@soulfuelwellness.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-emerald-900">Address</h4>
                      <p className="text-gray-600 mt-1">123 Wellness Way<br />Healthville, HV 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-emerald-900">Business Hours</h4>
                      <p className="text-gray-600 mt-1">Monday-Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-lg font-bold text-emerald-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {SOCIAL_MEDIA.map((social) => (
                      <a 
                        key={social.name} 
                        href="#" 
                        className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition duration-300"
                      >
                        <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
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

      {/* Newsletter Section */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Join Our Wellness Community</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for wellness tips, exclusive offers, and updates on upcoming events.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Soul Fuel Wellness</h3>
              <p className="text-emerald-100 mb-6">
                Empowering individuals to achieve optimal health through personalized wellness solutions.
              </p>
              <div className="flex space-x-4">
                {SOCIAL_MEDIA.map((social) => (
                  <a 
                    key={social.name} 
                    href="#" 
                    className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-emerald-100 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#about" className="text-emerald-100 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#services" className="text-emerald-100 hover:text-white transition duration-300">Services</a></li>
                <li><a href="#gallery" className="text-emerald-100 hover:text-white transition duration-300">Gallery</a></li>
                <li><a href="#testimonials" className="text-emerald-100 hover:text-white transition duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-emerald-100 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/service/nutrition-planning" className="text-emerald-100 hover:text-white transition duration-300">Nutrition Planning</Link></li>
                <li><Link to="/service/wellness-programs" className="text-emerald-100 hover:text-white transition duration-300">Wellness Programs</Link></li>
                <li><Link to="/service/lifestyle-coaching" className="text-emerald-100 hover:text-white transition duration-300">Lifestyle Coaching</Link></li>
                <li><Link to="/service/workshops" className="text-emerald-100 hover:text-white transition duration-300">Workshops</Link></li>
                <li><Link to="/service/retreats" className="text-emerald-100 hover:text-white transition duration-300">Retreats</Link></li>
                <li><Link to="/service/community-support" className="text-emerald-100 hover:text-white transition duration-300">Community Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Download Our Profile</h4>
              <p className="text-emerald-100 mb-6">
                Get to know more about our approach to wellness and our team of experts.
              </p>
              <button className="flex items-center text-white hover:text-emerald-200 transition duration-300">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                </svg>
                Business Profile (PDF)
              </button>
            </div>
          </div>
          
          <div className="border-t border-emerald-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-emerald-200 text-sm">
                &copy; {new Date().getFullYear()} Soul Fuel Wellness. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a href="#" className="text-emerald-200 hover:text-white text-sm transition duration-300">Privacy Policy</a>
                <a href="#" className="text-emerald-200 hover:text-white text-sm transition duration-300">Terms of Service</a>
                <a href="#" className="text-emerald-200 hover:text-white text-sm transition duration-300">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Form Modal */}
      <BookingForm 
        isOpen={isBookingFormOpen} 
        onClose={() => setIsBookingFormOpen(false)} 
      />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/:serviceName" element={<ServiceDetail />} />
      <Route path="/contact" element={<div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-4">Connect With Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your wellness journey? Reach out to us today to schedule your free consultation.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-emerald-900 mb-6">Request a Free Consultation</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">Service of Interest</label>
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
                    <label htmlFor="message" className="block text-gray-700 mb-2">How can we help you?</label>
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
                    <label htmlFor="newsletter" className="ml-2 text-gray-700">
                      Subscribe to our newsletter for wellness tips and updates
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
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
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
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
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
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">Address</h4>
                      <p className="mt-1">123 Wellness Way<br />Healthville, HV 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">Business Hours</h4>
                      <p className="mt-1">Monday-Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
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
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
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
      </div>} />

    </Routes>
  );
}

export default App;