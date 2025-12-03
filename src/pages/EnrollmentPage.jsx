import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const sections = [
  { id: "intro", label: "Our Approach", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { id: "step1", label: "Step 1: Getting Started", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { id: "step2", label: "Step 2: Questionnaire", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { id: "documents", label: "Required Documents", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { id: "rules", label: "Rules & Guidelines", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

const EnrollmentPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
      
      // Update active section based on scroll position
      const sectionIds = sections.map(s => s.id);
      const currentSection = sectionIds.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dietPlanFeatures = [
    {
      title: "Personalized Approach",
      description: "Every individual is unique. Our diet plans are tailored to your specific needs, body type, dietary preferences, and lifestyle.",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    },
    {
      title: "Balanced Nutrition",
      description: "We incorporate nutrient-rich foods including fruits, vegetables, whole grains, lean proteins, and healthy fats with balanced macronutrients.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    },
    {
      title: "Sustainability Focus",
      description: "We guide you on selecting sustainable food sources and maintaining your social life while losing weight, including eating out and travel.",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
    },
    {
      title: "Ongoing Support",
      description: "Regular check-ins, educational resources, and continuous guidance to help you stay motivated and make sustainable lifestyle changes.",
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Portion Control",
      description: "All meal plans are based on portion control customized to your vitals, helping you manage calorie intake and develop healthier eating patterns.",
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
    },
    {
      title: "Mindful Eating",
      description: "We encourage slowing down, savoring each bite, and becoming more aware of your body's hunger and fullness cues for healthier choices.",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Improved Digestion",
      description: "We help you maintain optimal digestion levels and enhance your metabolism rate, promoting a healthy gut for overall well-being.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Hydration Guidance",
      description: "Water is crucial for weight loss. We guide you on staying adequately hydrated and its significant impact on your weight loss progress.",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
    {
      title: "Regular Meal Timing",
      description: "Eating at regular intervals supports proper digestion and nutrient absorption, reducing digestive discomfort and maximizing results.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Discipline for Success",
      description: "Cultivate discipline in dietary habits for lasting results. This discipline extends beyond meals and positively influences other life areas.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    },
    {
      title: "Nutritional Supplements",
      description: "We provide guidance on pharma-grade vitamins and minerals to fill nutritional gaps based on your vitals and lifestyle factors.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    }
  ];

  const step1Items = [
    "Keep your current photo with body fitting outfit for record (Full Body). Keep your current basic measurements (chest, waist and hips).",
    "Procure a Digital weighing machine.",
    "Procure measurement cups & spoons - one teaspoon, one tablespoon, ML measuring cup or bowl & a food weighing scale.",
    "For the first 2 weeks, DO NOT analyze what you're eating. Just follow the meal plan religiously for us to understand your body type and response.",
    "DO NOT break food into protein, carbs, fat categories. Just eat food as food. Food is much beyond these 3 modern categories.",
    "Be HONEST and inform us if you deviate from the diet chart - even a bite matters. Don't follow the plan if you cannot follow it 100%.",
    "Every morning: wake up, pee and clear stomach, weigh yourself without clothes, take photo of scale with feet visible, share on WhatsApp. This is done daily without fail.",
    "Don't get nervous seeing daily weight fluctuations. Weekly evaluation is key - daily weights are for observation and to help curate your next diet accordingly.",
    "You must stay 100% committed all 7 days. There are no cheat days - every bite matters!"
  ];

  const questionnaireItems = [
    "Your full name",
    "Current weight",
    "Goal: What is your target weight?",
    "Current height in CM",
    "Age",
    "What time do you wake up?",
    "What time do you sleep?",
    "What time do you start your first meal?",
    "What time do you end your last meal?",
    "Regular eating schedule (all meals and snacks from wake up to last meal with timings)",
    "Water intake throughout the day",
    "Do you eat desserts after meals?",
    "Favorite desserts list",
    "Favorite fast food when eating at home",
    "Favorite fast food when eating out",
    "Coffee and tea consumption (with/without dairy and sugar)",
    "Favorite fruits list",
    "Smoking habits (frequency)",
    "Alcohol consumption (frequency)",
    "How many days per week do you need alcohol?",
    "Do you feel hungry between meals?",
    "Do you feel bloated after meals?",
    "Any digestive issues?",
    "Bowel movement frequency",
    "Any medical conditions or allergies?",
    "Current medications",
    "Exercise routine (type, frequency, duration)",
    "Stress levels (1-10)",
    "Sleep quality",
    "Previous diet attempts",
    "Food restrictions or preferences",
    "Vegetarian/Non-vegetarian/Vegan",
    "Cuisines you prefer",
    "Foods you absolutely cannot eat",
    "Cooking frequency",
    "Who cooks at home?",
    "Eating out frequency",
    "Travel frequency",
    "Work schedule and nature of job",
    "Goals beyond weight loss"
  ];

  const requiredDocuments = [
    { name: "Full Body Photo", description: "Current photo in body-fitting outfit for record" },
    { name: "Body Measurements", description: "Chest, waist, and hip measurements" },
    { name: "Digital Weighing Scale", description: "For daily weight tracking" },
    { name: "Measuring Tools", description: "Teaspoon, tablespoon, ML cup, food weighing scale" },
    { name: "Blood Reports (if available)", description: "Recent blood work including CBC, thyroid, vitamin levels" },
    { name: "Medical History", description: "List of current medications and medical conditions" },
    { name: "BMI Testing Report", description: "If previously done" },
    { name: "Photos of Current Supplements", description: "Any vitamins/minerals currently taking" }
  ];


  const rules = [
    {
      title: "Consultation Appointments",
      items: [
        "All consultations are by appointment only",
        "Book appointments 2-3 days in advance as slots fill quickly",
        "Once booked, avoid canceling or changing time",
        "Calls will not be taken without appointments",
        "No consultations over weekends"
      ]
    },
    {
      title: "Working Hours",
      items: [
        "Monday to Friday: 9:00 AM to 6:00 PM",
        "New consultations: Tuesdays and Thursdays, 1:30 PM - 5:00 PM (2.5-4 hours)",
        "Weekly consultations: 1:30 PM - 6:00 PM (max 20 minutes)",
        "Closed on Saturdays, Sundays, and public holidays",
        "International clients: queries answered within 24 hours"
      ]
    },
    {
      title: "Meal Plan Delivery",
      items: [
        "First meal plan delivered within 4-5 days of payment",
        "Weekly preferences due on day 3-4 of current plan",
        "24-48 hours required to prepare new plans",
        "Delays in preferences = delays in new plan",
        "New plan provided on day 6 or 7"
      ]
    },
    {
      title: "Daily Requirements",
      items: [
        "Daily weight checks are mandatory",
        "Share daily weight photo with feet visible",
        "First two weeks: share pictures of all meals (mandatory)",
        "After two weeks: meal photos advisable",
        "Weight data compiled for weekly consultation"
      ]
    },
    {
      title: "Plan Adherence",
      items: [
        "No extensions once meal plan begins",
        "Plan runs Day 1 to Day 7 without interruption",
        "Inform in advance about holidays/travel",
        "Missed days cannot be made up later",
        "100% adherence required for best results"
      ]
    },
    {
      title: "Plan Modifications",
      items: [
        "No changes after consultation call is completed",
        "All meals are carefully calorie-counted",
        "Pre-arrange meals when going out",
        "Immediate changes not permitted",
        "Plan ahead for any occasions"
      ]
    },
    {
      title: "Communication Guidelines",
      items: [
        "Maintain respectful and courteous communication",
        "Be patient - queries answered during working hours",
        "After-hours queries addressed next business day",
        "Positive interactions create motivating atmosphere",
        "Disrespectful behavior may result in plan termination"
      ]
    },
    {
      title: "Success Factors",
      items: [
        "Follow NEAT (Non-Exercise Activity Thermogenesis) guidelines",
        "Strict portion control adherence",
        "100% plan compliance for meaningful results",
        "Your dedication and consistency are key",
        "We support you every step of the way"
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleInputChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      [index]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can add API call to submit the form data
    alert("Questionnaire submitted successfully! We will contact you soon.");
  };

  const getInputType = (question, index) => {
    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes("weight") || lowerQuestion.includes("height") || lowerQuestion.includes("age") || lowerQuestion.includes("stress levels") || lowerQuestion.includes("days per week")) {
      return "number";
    }
    if (lowerQuestion.includes("time") || lowerQuestion.includes("wake up") || lowerQuestion.includes("sleep") || lowerQuestion.includes("meal")) {
      return "time";
    }
    if (lowerQuestion.includes("schedule") || lowerQuestion.includes("routine") || lowerQuestion.includes("list") || lowerQuestion.includes("medications") || lowerQuestion.includes("conditions") || lowerQuestion.includes("issues") || lowerQuestion.includes("attempts")) {
      return "textarea";
    }
    if (lowerQuestion.includes("do you") || lowerQuestion.includes("frequency") || lowerQuestion.includes("quality")) {
      return "text";
    }
    return "text";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTZzLTItNC0yLTYgMi00IDItNi0yLTQtMi02bTAgMjRjMC0yIDItNCAyLTZzLTItNC0yLTYgMi00IDItNi0yLTQtMi02Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-10 mb-6">
            How to Enroll
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Your complete guide to starting your sustainable weight loss journey with Soul Fuel Wellness
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-50 transition duration-300 font-semibold text-lg shadow-lg"
            >
              Start Your Journey
            </Link>
            <button
              onClick={() => scrollToSection("intro")}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition duration-300 font-semibold text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sidebar */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar Navigation */}
        <aside className="w-full lg:w-64 xl:w-72 bg-white shadow-lg lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] lg:overflow-y-auto z-30">
          <div className="p-4 lg:p-6">
            <h3 className="text-lg font-bold text-emerald-900 mb-4 hidden lg:block">Navigation</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium text-left ${
                    activeSection === section.id
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                  }`}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.icon} />
                  </svg>
                  <span className="flex-1">{section.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1">

          {/* Introduction Section */}
          <section id="intro" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-6">
              Sustainable Diet Plans for Effective Weight Loss
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          {/* Welcome Message */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  <span className="font-semibold text-emerald-800">Dear Client,</span>
                </p>
                <p className="leading-relaxed mb-6">
                  We are excited to introduce our sustainable diet plans to you. Our plans are specifically designed to help you achieve your weight loss goals while promoting overall well-being by maintaining a well balance of eating homemade meals and engaging in any social or eating out occasions.
                </p>
                <p className="leading-relaxed mb-6">
                  In recent years, there has been a significant shift towards sustainable lifestyles, and we recognize the importance of incorporating these principles into our diet plans. Our approach combines the latest nutritional science with an emphasis on sustainability, ensuring that you achieve your desired weight loss target and contribute to a healthier version of your own self.
                </p>
                <p className="leading-relaxed">
                  We are committed to your success and well-being. We welcome you to join us on this journey towards a healthier you and a sustainable weight loss plan.
                </p>
                <div className="mt-8 pt-6 border-t border-emerald-200">
                  <p className="text-emerald-800 font-medium">Warm regards,</p>
                  <p className="text-emerald-900 font-bold text-xl">Kusum Rana</p>
                  <p className="text-emerald-700 text-sm">Yoga, Pilates, Wellness, General Fitness and Lifestyle Coach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-8 text-center">
            Key Features of Our Program
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dietPlanFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-emerald-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* Step 1 Section */}
          <section id="step1" className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Step 1
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
              First Step to Start Enrollment
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Before we begin your personalized meal plan, here's what you need to prepare
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {step1Items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Note */}
            <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-bold text-amber-800 mb-2">Important Reminder</h4>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    Please do not get nervous seeing daily fluctuations in your weight. We evaluate changes weekly - daily weights are for our observations and to help curate your next diet accordingly. Your weight can deviate based on different food groups, so please don't stress over this.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Step 2 - Questionnaire Section */}
          <section id="step2" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Step 2
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
              Enrollment Questionnaire
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please fill out this comprehensive questionnaire to help us understand you better and create your personalized meal plan
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Please Fill Out the Questionnaire
              </h3>
              <div className="space-y-4">
                {questionnaireItems.map((item, index) => {
                  const inputType = getInputType(item, index);
                  const isTextarea = inputType === "textarea";
                  return (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label className="flex items-start gap-3 md:w-1/2 flex-shrink-0">
                          <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 text-sm font-medium">{item}</span>
                        </label>
                        <div className="md:flex-1">
                          {isTextarea ? (
                            <textarea
                              value={formData[index] || ""}
                              onChange={(e) => handleInputChange(index, e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm"
                              rows={3}
                              placeholder="Enter your answer..."
                            />
                          ) : (
                            <input
                              type={inputType}
                              value={formData[index] || ""}
                              onChange={(e) => handleInputChange(index, e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm"
                              placeholder="Enter your answer..."
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Submit Questionnaire
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

          {/* Required Documents Section */}
          <section id="documents" className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Step 3
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
              Required Documents & Tests Checklist
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please prepare the following documents and items before your enrollment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {requiredDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-1">{doc.name}</h4>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-cyan-50 border border-cyan-200 rounded-xl p-6">
              <h4 className="font-bold text-cyan-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Note
              </h4>
              <p className="text-cyan-700 text-sm">
                After payment, please share pictures of any medications, minerals/vitamins, or over-the-counter medications you are taking. Your first meal plan will be delivered within 4-5 days of making the payment.
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Rules & Guidelines Section */}
          <section id="rules" className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Important
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
              Program Rules & Regulations
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please read these guidelines carefully to ensure a smooth and successful experience
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {rules.map((rule, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    {rule.title}
                  </h4>
                  <ul className="space-y-2">
                    {rule.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Life?
              </h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Thank you for taking the time to review our enrollment process. We are thrilled to have you embark on this weight loss journey with us. Your commitment and dedication are the keys to your success, and we are here to support you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-50 transition duration-300 font-semibold text-lg shadow-lg"
                >
                  Book Your Consultation
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition duration-300 font-semibold text-lg"
                >
                  Contact Us
                </Link>
              </div>
              <p className="mt-8 text-emerald-200 text-sm">
                Warm regards, Team Kusum
              </p>
            </div>
          </div>
        </div>
      </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default EnrollmentPage;

