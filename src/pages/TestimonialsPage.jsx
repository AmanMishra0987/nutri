import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Sample transformation data for testimonials
const TRANSFORMATIONS = [
  {
    id: "1",
    name: "Kevin",
    age: 27,
    location: "Dubai",
    weightLost: "30kg",
    shortSummary: "Lost 30kg with personalized nutrition coaching",
    shortDescription: "Amazing experience I had with the help of Kusum and Rajwant helped me from day 1."
  },
  {
    id: "2",
    name: "Priyanka",
    age: 40,
    location: "Dubai",
    weightLost: "3kg",
    shortSummary: "Achieved goals in short timeframes",
    shortDescription: "I have always managed to achieve my goals with your program, even within short month timeframes."
  },
  {
    id: "3",
    name: "Simran",
    age: 28,
    location: "Dubai",
    weightLost: "8kg",
    shortSummary: "Lost 8kg with constant guidance",
    shortDescription: "I can't thank Kusum and Rajwant enough for their constant guidance and support throughout my journey. Their diet plans were simple, practical."
  },
  {
    id: "4",
    name: "Namit",
    age: 44,
    location: "Dubai",
    weightLost: "10kg",
    shortSummary: "Lost 10kg with thorough approach",
    shortDescription: "I had a fantastic experience with Kusum and Rajwant over the last few months."
  },
  {
    id: "5",
    name: "Richa",
    age: 49,
    location: "Dubai",
    weightLost: "10kg",
    shortSummary: "Lost 10kg from yo-yo diets",
    shortDescription: "super. Actually, put me on the right track after being on YO YO diets all my life"
  },
  {
    id: "6",
    name: "AJ",
    age: 39,
    location: "UK",
    weightLost: "12kg",
    shortSummary: "Lost 12kg in 12 weeks",
    shortDescription: "I put on a significant amount of weight after I had my son and really struggled to lose it."
  },
  {
    id: "7",
    name: "Dhaara",
    age: 42,
    location: "India",
    weightLost: "17.5kg",
    shortSummary: "Lost 17.5kg with favorite foods",
    shortDescription: "Started on 10th Feb 2025 .. did it for 4months It took me a while to finally start the diet…"
  },
  {
    id: "8",
    name: "Himanshu",
    age: 26,
    location: "Canada",
    weightLost: "22.3kg",
    shortSummary: "Reversed diabetes and lost 22kg",
    shortDescription: "I'm incredibly grateful for the amazing support and expertise Kusum and Rajwant provided throughout my weight-loss journey."
  },
  {
    id: "9",
    name: "Deepali",
    age: 40,
    location: "Canada",
    weightLost: "23kg",
    shortSummary: "Lost 23kg and built lifelong mindful eating habits",
    shortDescription: "Choosing to work with Kusum wasn't just about finding the right person to help me on my weight loss journey"
  },
  {
    id: "10",
    name: "Sathvik",
    age: 24,
    location: "Dubai",
    weightLost: "28.4kg",
    shortSummary: "Lost 28kg with personalized planning",
    shortDescription: "I am 24 years old, and for many years I struggled with my weight."
  },
  {
    id: "11",
    name: "Miita",
    age: 43,
    location: "Thailand",
    weightLost: "9kg",
    shortSummary: "Lost 9kg during perimenopause",
    shortDescription: "mid lots of changes in the body is a belly fat that becomes a peri-menopause issue. "
  },
  {
    id: "12",
    name: "Ruba",
    age: 35,
    location: "Yemen",
    weightLost: "5kg",
    shortSummary: "Lost 5kg with an easy, filling plan",
    shortDescription: "I had a fantastic experience with Kusum and her team."
  },
  {
    id: "13",
    name: "Rahul",
    age: 35,
    location: "Dubai",
    weightLost: "8kg",
    shortSummary: "Wedding transformation success",
    shortDescription: "6 month course to achieve my best physique for my wedding."
  },
  {
    id: "14",
    name: "Andie",
    age: 36,
    location: "Sri Lanka",
    weightLost: "11.45kg",
    shortSummary: "Lost 11kg with flexible planning",
    shortDescription: "Starting my health journey with Kusum was one of the best decisions I've ever made."
  },
  {
    id: "15",
    name: "Shefali",
    age: 43,
    location: "Canada",
    weightLost: "12kg",
    shortSummary: "Lost 12kg and reduced inflammation",
    shortDescription: "Working with Kusum has been one of the best things I have ever done for myself."
  },
  {
    id: "16",
    name: "Rahul",
    age: 32,
    location: "Dubai",
    weightLost: "8kg",
    shortSummary: "Lost 8kg before his wedding",
    shortDescription: "A 6-month program helped me get into the best shape for my wedding."
  },
  {
    id: "17",
    name: "Renjim",
    age: null,
    location: "Turkey",
    weightLost: "11kg",
    shortSummary: "Lost 11kg after cortisol-related weight gain",
    shortDescription: "I gained weight due to cortisol and couldn't lose it."
  },
  {
    id: "18",
    name: "Prerna",
    age: 33,
    location: null,
    weightLost: "21kg",
    shortSummary: "Lost 21kg before her wedding",
    shortDescription: "Honestly since I have thyroid, I've always been working out and I have tried lots and lots of other diets."
  },
  {
    id: "19",
    name: "Aanchal",
    age: 39,
    location: "UK",
    weightLost: "13kg",
    shortSummary: "Lost 13kg post-pregnancy",
    shortDescription: "I put on a significant amount of weight after I had my son and really struggled to lose it."
  },
  {
    id: "20",
    name: "Priyanka",
    age: 28,
    location: "USA",
    weightLost: "14kg",
    shortSummary: "Lost 14kg with sustainable habits",
    shortDescription: "I was 64 kgs before starting, and in 4 months I lost 14 kgs in a slow and easy manner."
  },
  {
    id: "21",
    name: "Neha",
    age: 36,
    location: null,
    weightLost: "16kg",
    shortSummary: "Lost 16kg postpartum",
    shortDescription: "It was one of the life changing experience as I could learn to adapt and understand a better way of eating, sleeping and waking up early with healthy food choices."
  },
  {
    id: "22",
    name: "Anand",
    age: 39,
    location: "Saudi Arabia",
    weightLost: "18.5kg",
    shortSummary: "Lost 18kg with sustainable discipline",
    shortDescription: "My journey has been a wonderful experience. Rather than focusing solely on weight reduction..."
  },
  {
    id: "23",
    name: "Jayshree",
    age: 52,
    location: "Dubai",
    weightLost: "27kg",
    shortSummary: "Lost 27kg and stopped BP medication",
    shortDescription: "I got introduced to Kusum when I was at my lowest physically. Was 90 kg and having high BP and started medication for the same."
  },
  {
    id: "24",
    name: "MM",
    age: 26,
    location: "Dubai",
    weightLost: "25kg",
    shortSummary: "Lost 25kg with structured yearly planning",
    shortDescription: "My journey with Kusum and the entire team has been nothing short of spectacular."
  },
  {
    id: "25",
    name: "Neerav",
    age: 40,
    location: "Canada",
    weightLost: "25kg",
    shortSummary: "Lost 25kg with sustainable habits for life",
    shortDescription: "This experience was unlike any diets I have done in the past. The biggest learning during this journey was creating healthy sustainable habits."
  }
];

const TestimonialsPage = () => {
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

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-emerald-600 to-cyan-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-emerald-100">
              Real stories from real people who have transformed their lives with Soul Fuel Wellness
            </p>
            <div className="w-20 h-1 bg-white mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg">
              Discover how our clients achieved their weight loss goals and transformed their lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTransformations.map((transformation) => (
              <div
                key={transformation.id}
                className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="mb-6">
                  <h4 className="font-bold text-emerald-900 text-xl mb-2">
                    {transformation.name}
                  </h4>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    {transformation.age && <span>{transformation.age} years</span>}
                    {transformation.age && transformation.location && (
                      <span className="mx-2">•</span>
                    )}
                    {transformation.location && <span>{transformation.location}</span>}
                  </div>
                  {transformation.weightLost && (
                    <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                      Lost {transformation.weightLost}
                    </div>
                  )}
                </div>
                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  "{transformation.shortDescription}"
                </p>
                <Link
                  to={`/transformation/${transformation.id}`}
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300"
                >
                  Read Full Story
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

          {/* CTA Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Transformation?
              </h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                Join our community of successful clients who have transformed their lives. 
                Book your consultation today and take the first step towards a healthier you.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-50 transition duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Book Your Consultation
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

      <Footer />
    </div>
  );
};

export default TestimonialsPage;

