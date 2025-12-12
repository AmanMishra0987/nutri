import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Service data with detailed information
const SERVICES = {
  "weight-loss-nutrition": {
    title: "Weight Loss and Nutrition",
    description: "Transform your health with personalized nutrition plans designed to help you achieve sustainable weight loss and optimal wellness.",
    fullDescription: "Our weight loss and nutrition program is designed to help you achieve your health goals through personalized meal plans, lifestyle modifications, and ongoing support. We focus on sustainable changes that fit your lifestyle, preferences, and dietary needs.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: [
      "Personalized meal plans tailored to your preferences",
      "Sustainable weight loss strategies",
      "Nutrition education and guidance",
      "Regular progress tracking and adjustments",
      "Support for maintaining long-term results",
      "Improved energy levels and overall health"
    ],
    approach: "We take a holistic approach to weight loss, focusing not just on the number on the scale, but on your overall health, energy levels, and relationship with food. Our plans are flexible, realistic, and designed to become a permanent part of your lifestyle."
  },
  "sound-healing": {
    title: "Sound Healing",
    description: "Experience the therapeutic power of sound vibrations to restore balance, reduce stress, and promote deep relaxation and healing.",
    fullDescription: "Sound healing uses the power of vibrational frequencies to promote physical, emotional, and spiritual well-being. Through various instruments and techniques, we help you achieve deep relaxation, reduce stress, and restore harmony to your body and mind.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: [
      "Deep relaxation and stress reduction",
      "Improved sleep quality",
      "Enhanced mental clarity and focus",
      "Emotional balance and healing",
      "Reduced anxiety and tension",
      "Increased energy and vitality"
    ],
    approach: "Our sound healing sessions use a combination of singing bowls, gongs, tuning forks, and other instruments to create therapeutic frequencies that resonate with your body's natural rhythms, promoting healing and balance."
  },
  "yoga": {
    title: "Yoga",
    description: "Discover the transformative power of yoga for physical strength, flexibility, mental clarity, and inner peace.",
    fullDescription: "Yoga is a holistic practice that combines physical postures, breathing techniques, and meditation to promote overall well-being. Our yoga sessions are suitable for all levels and focus on building strength, flexibility, and mindfulness.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
    benefits: [
      "Improved flexibility and strength",
      "Better posture and alignment",
      "Reduced stress and anxiety",
      "Enhanced mental clarity",
      "Increased body awareness",
      "Better sleep and relaxation"
    ],
    approach: "We offer various styles of yoga including Hatha, Vinyasa, and restorative practices. Our classes are designed to meet you where you are, whether you're a beginner or experienced practitioner, and help you progress at your own pace."
  },
  "pilates": {
    title: "Pilates",
    description: "Build core strength, improve posture, and enhance overall body conditioning through controlled, precise movements.",
    fullDescription: "Pilates is a form of exercise that focuses on core strength, flexibility, and body awareness. Through controlled movements and proper alignment, Pilates helps you build a strong foundation for better movement and overall health.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: [
      "Stronger core muscles",
      "Improved posture and alignment",
      "Enhanced flexibility and mobility",
      "Better balance and coordination",
      "Reduced back pain",
      "Increased body awareness"
    ],
    approach: "Our Pilates sessions emphasize precision, control, and proper form. We work with you to develop a strong core foundation that supports all your daily activities and fitness goals."
  },
  "prenatal-postnatal-nutrition": {
    title: "Prenatal and Postnatal Nutrition and Weight Loss",
    description: "Specialized nutrition guidance for expecting and new mothers to support healthy pregnancy, postpartum recovery, and safe weight management.",
    fullDescription: "Pregnancy and the postpartum period require special nutritional considerations. Our program provides expert guidance to support both you and your baby's health during pregnancy, and helps you safely manage weight and nutrition after delivery.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: [
      "Nutritional support during pregnancy",
      "Safe postpartum weight management",
      "Energy optimization for new mothers",
      "Breastfeeding nutrition guidance",
      "Recovery and healing support",
      "Sustainable lifestyle changes"
    ],
    approach: "We understand the unique challenges of pregnancy and new motherhood. Our approach is gentle, supportive, and designed to help you nourish yourself and your baby while working toward your health goals in a safe, sustainable way."
  },
  "menopause-nutrition": {
    title: "Menopause Nutrition and Guidance",
    description: "Navigate menopause with confidence through personalized nutrition and lifestyle strategies that support hormonal balance and overall wellness.",
    fullDescription: "Menopause brings significant hormonal changes that can affect weight, energy, mood, and overall health. Our specialized program addresses these unique challenges with targeted nutrition, lifestyle modifications, and ongoing support.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: [
      "Hormonal balance support",
      "Weight management during menopause",
      "Improved energy levels",
      "Better sleep quality",
      "Reduced hot flashes and symptoms",
      "Enhanced bone health"
    ],
    approach: "We focus on foods and lifestyle habits that support hormonal balance, manage symptoms, and help you maintain your health and vitality during this important life transition."
  },
  "pcos-hormonal-imbalance": {
    title: "PCOS/PCOD/Hormonal Imbalance Management",
    description: "Comprehensive support for managing PCOS, PCOD, and hormonal imbalances through targeted nutrition and lifestyle interventions.",
    fullDescription: "Hormonal imbalances, including PCOS and PCOD, require specialized nutritional and lifestyle approaches. Our program is designed to help manage symptoms, support hormonal balance, and improve overall health outcomes.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    benefits: [
      "Hormonal balance support",
      "Weight management strategies",
      "Improved insulin sensitivity",
      "Reduced PCOS symptoms",
      "Better menstrual regularity",
      "Enhanced fertility support"
    ],
    approach: "We use evidence-based nutrition strategies specifically designed for hormonal health. Our approach includes managing insulin resistance, supporting healthy hormone production, and addressing the root causes of hormonal imbalances."
  },
  "breath-work": {
    title: "Breath Work",
    description: "Harness the power of conscious breathing to reduce stress, increase energy, improve focus, and enhance overall well-being.",
    fullDescription: "Breath work is a powerful practice that uses specific breathing techniques to influence your physical, mental, and emotional state. Learn to use your breath as a tool for stress management, energy enhancement, and overall wellness.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2120&q=80",
    benefits: [
      "Reduced stress and anxiety",
      "Increased energy and vitality",
      "Improved focus and mental clarity",
      "Better sleep quality",
      "Enhanced emotional regulation",
      "Improved respiratory function"
    ],
    approach: "We teach various breathing techniques including diaphragmatic breathing, pranayama, and breathwork exercises that you can incorporate into your daily routine for immediate and long-term benefits."
  }
};

const ServiceDetail = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const service = SERVICES[serviceName];

  // Handle scroll to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
        <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-emerald-900 mb-4">Service Not Found</h1>
            <Link
              to="/"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-emerald-600 to-cyan-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-white hover:text-emerald-100 transition duration-300 group bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-medium">Back</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              {service.title}
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mt-4">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Service Image */}
          {service.image && (
            <div className="w-full h-96 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6 md:p-12">
            {/* Full Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-emerald-900 mb-6">About This Service</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-emerald-900 mb-6">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-emerald-900 mb-6">Our Approach</h2>
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <p className="text-emerald-800 leading-relaxed">
                  {service.approach}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Book a free consultation to learn more about how this service can help you achieve your wellness goals.
              </p>
              <Link
                to="/booking"
                className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition duration-300 font-medium inline-block"
              >
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;

