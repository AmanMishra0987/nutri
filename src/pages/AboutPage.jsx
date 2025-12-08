import React, { useState, useEffect } from "react";
import { IMAGES } from "../constants/images";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

      {/* Modern Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
            <span className="text-emerald-300 text-sm font-semibold tracking-wider uppercase">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Soul Fuel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Wellness
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering individuals to achieve optimal health through personalized wellness solutions
          </p>
        </div>
      </section>

      {/* Founder Section - Modern Split Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.teamImage}
                  alt="Kusum Rana - Founder"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition duration-500"
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
                  <div className="text-lg font-bold text-cyan-700 mb-2">Available Monday to Friday</div>
                  <div className="text-gray-600 font-medium text-sm">Support Available : 9:00 AM to 6:30 PM (GMT +4)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story - Modern Card Design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-emerald-600">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  <span className="text-2xl font-bold text-emerald-600">Soul Fuel Wellness</span> – A Journey Fueled by Purpose, Passion & Real Transformation.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Soul Fuel Wellness was created from a place of truth, lived experience, and an unwavering passion for holistic health. My journey began long before this company existed—rooted in childhood struggles with being overweight, the emotional challenges of pregnancy, and years of feeling the weight of social expectations and body-shaming.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  In <span className="font-semibold text-emerald-700">2011, at 108 kg</span>, I reached a turning point. I realized that change had to come not just from wanting to look different, but from wanting to feel different—healthier, stronger, more confident, and more myself. What started as a personal mission evolved into a complete life transformation.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  I deepened my understanding of holistic health through intensive studies in <span className="font-semibold">Yoga and Ayurveda</span>, followed by formal training as a Pilates instructor. From there, I immersed myself in nutrition, learning how food, hormones, and lifestyle patterns shape the body and mind. These disciplines didn't just reshape my body from 108 kg to 52 kg—they rebuilt my confidence, renewed my energy, and transformed my entire relationship with health.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Along the way, I witnessed something else: the profound disconnect between fast-paced corporate life and true wellbeing. Although I worked a stable, well-paid corporate job, my heart felt called toward something more meaningful. So, with courage and clarity, I left the comfort of that world to pursue what I truly loved—helping others heal, transform, and thrive.
                </p>

                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8 my-8 border-l-4 border-emerald-500">
                  <p className="text-gray-800 font-semibold mb-4 text-lg">That choice became Soul Fuel Wellness.</p>
                  <p className="text-gray-700 leading-relaxed">
                    A space created for real people facing real challenges—weight gain, hormonal changes, lifestyle diseases, stress, social pressure, postpartum struggles, and more. A space guided by science, sustained by holistic wisdom, and powered by empathy.
                  </p>
                </div>

                <div className="my-8">
                  <p className="text-gray-800 font-semibold mb-4 text-lg">Today, I help individuals transform their lives through:</p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3">✓</span>
                      <span>Prenatal & Postnatal Wellness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3">✓</span>
                      <span>Sustainable Weight Loss Programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3">✓</span>
                      <span>Lifestyle Disease Reversal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3">✓</span>
                      <span>Nutrition & Blood Report–Based Guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3">✓</span>
                      <span>Holistic Mind-Body Alignment</span>
                    </li>
                  </ul>
                </div>

              </div>

              <div className="mt-12">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative flex flex-col items-center">
                    <img
                      src={IMAGES.myJourneyImage}
                      alt="Transformation journey - Before and After"
                      className="w-full max-w-2xl h-auto max-h-[450px] rounded-2xl shadow-xl object-contain mx-auto"
                    />
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    From 108 kg to 52 kg
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    This transformation represents more than just weight loss. It's a journey of self-discovery, healing, and reclaiming my health through holistic wellness practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* Core Values - Modern Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-emerald-600">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "Compassion",
                description: "We approach every client with empathy and understanding."
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Excellence",
                description: "We maintain the highest standards in all our services."
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Innovation",
                description: "We continuously evolve our methods and approaches."
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Community",
                description: "We foster supportive relationships and connections."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
                        d={value.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
