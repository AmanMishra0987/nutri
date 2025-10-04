import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  // Service data with detailed information
  const serviceData = {
    'nutrition-planning': {
      title: 'Nutrition Planning',
      description: 'Personalized meal plans and nutritional guidance tailored to your health goals, dietary preferences, and lifestyle.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      content: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">Our personalized nutrition planning service is designed to help you achieve your health goals through customized meal plans and expert guidance. We understand that each person's nutritional needs are unique, which is why we take a holistic approach to create plans that work with your lifestyle.</p>
          
          <div class="bg-emerald-50 rounded-xl p-6 mt-8">
            <h3 class="text-2xl font-bold text-emerald-900 mb-4">How It Works</h3>
            <div class="grid md:grid-cols-2 gap-6 mt-6">
              <div class="bg-white p-5 rounded-lg shadow-sm">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span class="text-emerald-700 font-bold">1</span>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Comprehensive Assessment</h4>
                <p class="text-gray-600">We begin with a detailed evaluation of your health history, dietary habits, and personal objectives.</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span class="text-emerald-700 font-bold">2</span>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Custom Plan Creation</h4>
                <p class="text-gray-600">Our nutritionists develop a tailored plan that fits your preferences and lifestyle.</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span class="text-emerald-700 font-bold">3</span>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Implementation Support</h4>
                <p class="text-gray-600">We provide recipes, shopping lists, and ongoing guidance to help you succeed.</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-sm">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span class="text-emerald-700 font-bold">4</span>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Progress Monitoring</h4>
                <p class="text-gray-600">Regular check-ins and plan adjustments ensure you stay on track to meet your goals.</p>
              </div>
            </div>
          </div>
          
          <h3 class="text-2xl font-bold text-emerald-900 mt-10 mb-4">Benefits</h3>
          <p class="text-gray-700">With our nutrition planning service, you can expect to:</p>
          <ul class="grid md:grid-cols-2 gap-3 mt-4">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Improve energy levels and overall vitality</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Achieve sustainable weight management</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Better manage chronic health conditions</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Develop healthy eating habits that last a lifetime</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Receive ongoing education about nutrition science</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">Enjoy delicious, satisfying meals that support your health</span>
            </li>
          </ul>
          
          <div class="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl p-6 text-white mt-10">
            <h3 class="text-2xl font-bold mb-3">Our Approach</h3>
            <p class="mb-4">We believe in creating sustainable changes rather than restrictive diets. Our nutritionists work closely with you to understand your cultural food preferences, schedule constraints, and personal taste preferences. This ensures that your meal plan is not only nutritionally sound but also enjoyable and feasible for your daily routine.</p>
            <p>Our approach emphasizes whole foods, mindful eating practices, and gradual habit changes that become natural over time.</p>
          </div>
        </div>
      `,
      imagePlaceholder: 'Nutrition Planning'
    },
    'wellness-programs': {
      title: 'Wellness Programs',
      description: 'Holistic programs combining nutrition, fitness, and mindfulness to support your overall well-being.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      content: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">Our comprehensive wellness programs integrate multiple aspects of health to provide a truly holistic approach to well-being. Rather than focusing on isolated areas, we address the interconnected nature of physical, mental, and emotional health to help you achieve optimal vitality.</p>
          
          <div class="bg-emerald-50 rounded-xl p-6 mt-8">
            <h3 class="text-2xl font-bold text-emerald-900 mb-4">Program Components</h3>
            <p class="text-gray-700">Each wellness program is customized to your unique needs and may include:</p>
            <ul class="grid md:grid-cols-2 gap-3 mt-4">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Nutritional counseling and meal planning</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Fitness routines tailored to your abilities and preferences</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Mindfulness and stress reduction techniques</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Sleep optimization strategies</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Lifestyle coaching for habit formation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Regular progress assessments and program adjustments</span>
              </li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Program Options</h3>
              <p class="text-gray-700 mb-4">We offer several program structures to fit different schedules and commitment levels:</p>
              <div class="space-y-4">
                <div class="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 class="text-lg font-semibold text-emerald-800">Foundations Program (4 weeks)</h4>
                  <p class="text-gray-600">Perfect for beginners looking to establish healthy habits</p>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 class="text-lg font-semibold text-emerald-800">Transformation Program (12 weeks)</h4>
                  <p class="text-gray-600">Comprehensive approach for significant lifestyle changes</p>
                </div>
                <div class="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 class="text-lg font-semibold text-emerald-800">Maintenance Program (Ongoing)</h4>
                  <p class="text-gray-600">For those who've achieved their goals and want continued support</p>
                </div>
              </div>
            </div>
            <div class="bg-emerald-50 rounded-xl p-6">
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Expected Outcomes</h3>
              <p class="text-gray-700 mb-4">Participants in our wellness programs typically experience:</p>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Increased energy and reduced fatigue</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Improved mood and mental clarity</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Better sleep quality and duration</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Enhanced physical strength and flexibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `,
      imagePlaceholder: 'Wellness Programs'
    },
    'lifestyle-coaching': {
      title: 'Lifestyle Coaching',
      description: 'One-on-one coaching to help you develop sustainable habits and make lasting positive changes.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      content: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">Our lifestyle coaching service provides personalized one-on-one support to help you overcome obstacles and create lasting positive changes in your daily routine. Our certified coaches work with you to identify barriers to success and develop practical strategies for sustainable transformation.</p>
          
          <div class="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Coaching Process</h3>
              <p class="text-gray-700 mb-4">Our evidence-based coaching approach includes:</p>
              <div class="space-y-4">
                <div class="flex">
                  <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-emerald-700 font-bold">1</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-emerald-800">Initial Assessment</h4>
                    <p class="text-gray-600">Identify your goals, challenges, and motivations</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-emerald-700 font-bold">2</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-emerald-800">Action Plan</h4>
                    <p class="text-gray-600">Develop a personalized plan with achievable milestones</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-emerald-700 font-bold">3</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-emerald-800">Regular Sessions</h4>
                    <p class="text-gray-600">Track progress through in-person or virtual meetings</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-emerald-700 font-bold">4</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-emerald-800">Continuous Adjustment</h4>
                    <p class="text-gray-600">Modify strategies based on your evolving needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-emerald-50 rounded-xl p-6">
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Areas of Focus</h3>
              <p class="text-gray-700 mb-4">Our lifestyle coaching can help with numerous aspects of wellness:</p>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Time management and work-life balance</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Stress reduction and emotional regulation</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Habit formation and behavior change</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Goal setting and achievement strategies</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Communication and relationship skills</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl p-6 text-white mt-10">
            <h3 class="text-2xl font-bold mb-3">Coaching Benefits</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <p class="mb-4">Working with our lifestyle coaches can lead to:</p>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Greater clarity about your values and priorities</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Improved decision-making abilities</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Enhanced motivation and commitment to your goals</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Better coping mechanisms for life's challenges</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Stronger sense of personal empowerment</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>More fulfilling relationships and social connections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      imagePlaceholder: 'Lifestyle Coaching'
    },
    'workshops': {
      title: 'Workshops',
      description: 'Interactive group sessions on various wellness topics to educate and inspire your journey.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      content: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">Our interactive workshops provide educational and inspirational experiences in a supportive group setting. Led by our expert facilitators, these sessions cover a wide range of wellness topics and offer practical tools you can implement immediately in your daily life.</p>
          
          <div class="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Workshop Formats</h3>
              <p class="text-gray-700 mb-4">We offer various workshop formats to accommodate different learning preferences:</p>
              <ul class="space-y-4">
                <li class="border border-emerald-200 rounded-lg p-4 hover:border-emerald-400 transition-colors">
                  <h4 class="text-lg font-semibold text-emerald-800">Half-day workshops (3-4 hours)</h4>
                  <p class="text-gray-600">Focused exploration of a single topic</p>
                </li>
                <li class="border border-emerald-200 rounded-lg p-4 hover:border-emerald-400 transition-colors">
                  <h4 class="text-lg font-semibold text-emerald-800">Full-day workshops (6-7 hours)</h4>
                  <p class="text-gray-600">Comprehensive coverage with multiple sessions</p>
                </li>
                <li class="border border-emerald-200 rounded-lg p-4 hover:border-emerald-400 transition-colors">
                  <h4 class="text-lg font-semibold text-emerald-800">Weekend retreats</h4>
                  <p class="text-gray-600">Immersive experiences combining workshops with relaxation</p>
                </li>
                <li class="border border-emerald-200 rounded-lg p-4 hover:border-emerald-400 transition-colors">
                  <h4 class="text-lg font-semibold text-emerald-800">Virtual workshops</h4>
                  <p class="text-gray-600">Convenient online sessions from the comfort of your home</p>
                </li>
              </ul>
            </div>
            <div class="bg-emerald-50 rounded-xl p-6">
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Popular Workshop Topics</h3>
              <p class="text-gray-700 mb-4">Our most requested workshop subjects include:</p>
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-white p-3 rounded-lg text-center text-emerald-800 font-medium">Mindful Eating</div>
                <div class="bg-white p-3 rounded-lg text-center text-emerald-800 font-medium">Stress Management</div>
                <div class="bg-white p-3 rounded-lg text-center text-emerald-800 font-medium">Sleep Science</div>
                <div class="bg-white p-3 rounded-lg text-center text-emerald-800 font-medium">Movement for Every Body</div>
                <div class="bg-white p-3 rounded-lg text-center text-emerald-800 font-medium">Emotional Intelligence</div>
                <div class="bg-white p-3 rounded-lg text-center text-emerald-800 font-medium">Creating Habits</div>
              </div>
            </div>
          </div>
          
          <div class="bg-emerald-50 rounded-xl p-6 mt-10">
            <h3 class="text-2xl font-bold text-emerald-900 mb-4">What to Expect</h3>
            <p class="text-gray-700 mb-4">Our workshops combine education with experiential learning:</p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-lg text-center">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Evidence-based Information</h4>
                <p class="text-gray-600">Presented by qualified professionals</p>
              </div>
              <div class="bg-white p-5 rounded-lg text-center">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Interactive Activities</h4>
                <p class="text-gray-600">Group discussions and hands-on exercises</p>
              </div>
              <div class="bg-white p-5 rounded-lg text-center">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Practical Tools</h4>
                <p class="text-gray-600">Resources to take home and implement</p>
              </div>
            </div>
          </div>
        </div>
      `,
      imagePlaceholder: 'Workshops'
    },
    'retreats': {
      title: 'Retreats',
      description: 'Immersive wellness experiences in serene natural settings to rejuvenate your mind, body, and spirit.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      content: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">Our wellness retreats offer transformative experiences in beautiful natural settings, allowing you to disconnect from daily stressors and reconnect with your authentic self. These immersive programs combine expert-led sessions with restorative activities to promote deep healing and renewal.</p>
          
          <div class="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl p-6 text-white mt-8">
            <h3 class="text-2xl font-bold mb-3">Retreat Experiences</h3>
            <p class="mb-4">We offer several types of retreats throughout the year:</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white/20 p-4 rounded-lg">
                <h4 class="text-lg font-semibold mb-2">Detox & Renewal</h4>
                <p class="text-sm">Focus on cleansing the body and resetting unhealthy patterns</p>
              </div>
              <div class="bg-white/20 p-4 rounded-lg">
                <h4 class="text-lg font-semibold mb-2">Stress Relief & Relaxation</h4>
                <p class="text-sm">Techniques for managing stress and finding inner peace</p>
              </div>
              <div class="bg-white/20 p-4 rounded-lg">
                <h4 class="text-lg font-semibold mb-2">Adventure & Discovery</h4>
                <p class="text-sm">Combining physical challenges with personal growth</p>
              </div>
              <div class="bg-white/20 p-4 rounded-lg">
                <h4 class="text-lg font-semibold mb-2">Creative Expression</h4>
                <p class="text-sm">Unlocking artistic talents while exploring wellness</p>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Daily Structure</h3>
              <p class="text-gray-700 mb-4">A typical retreat day might include:</p>
              <div class="space-y-3">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-emerald-700 text-sm font-bold">1</span>
                  </div>
                  <p class="ml-3 text-gray-700">Morning meditation and mindful movement</p>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-emerald-700 text-sm font-bold">2</span>
                  </div>
                  <p class="ml-3 text-gray-700">Nutritious, locally-sourced meals</p>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-emerald-700 text-sm font-bold">3</span>
                  </div>
                  <p class="ml-3 text-gray-700">Expert-led workshops and presentations</p>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-emerald-700 text-sm font-bold">4</span>
                  </div>
                  <p class="ml-3 text-gray-700">Free time for reflection or optional activities</p>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-emerald-700 text-sm font-bold">5</span>
                  </div>
                  <p class="ml-3 text-gray-700">Afternoon healing sessions (massage, yoga, etc.)</p>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-emerald-700 text-sm font-bold">6</span>
                  </div>
                  <p class="ml-3 text-gray-700">Evening group sharing circles or entertainment</p>
                </div>
              </div>
            </div>
            <div class="bg-emerald-50 rounded-xl p-6">
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Accommodations & Amenities</h3>
              <p class="text-gray-700 mb-4">Our retreat locations provide:</p>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Luxurious, eco-friendly lodging in scenic settings</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Farm-to-table organic cuisine prepared by professional chefs</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Spa facilities including massage therapy and hydrotherapy</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Recreation areas such as hiking trails and meditation gardens</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">All necessary materials and equipment for activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `,
      imagePlaceholder: 'Retreats'
    },
    'community-support': {
      title: 'Community Support',
      description: 'Connect with like-minded individuals on similar wellness journeys through our supportive community.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      content: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">Our vibrant community provides ongoing support and connection for individuals committed to their wellness journey. Through various platforms and activities, you'll find encouragement, accountability, and inspiration from peers who share your goals and values.</p>
          
          <div class="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Community Platforms</h3>
              <p class="text-gray-700 mb-4">We offer multiple ways to connect with fellow wellness seekers:</p>
              <div class="space-y-4">
                <div class="border border-emerald-200 rounded-lg p-4 flex items-start">
                  <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-emerald-800">Online Forum</h4>
                    <p class="text-gray-600">24/7 discussion platform for sharing experiences and advice</p>
                  </div>
                </div>
                <div class="border border-emerald-200 rounded-lg p-4 flex items-start">
                  <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-emerald-800">Social Media Groups</h4>
                    <p class="text-gray-600">Private communities with exclusive content</p>
                  </div>
                </div>
                <div class="border border-emerald-200 rounded-lg p-4 flex items-start">
                  <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-emerald-800">Virtual Meetups</h4>
                    <p class="text-gray-600">Monthly video calls with guest speakers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-emerald-50 rounded-xl p-6">
              <h3 class="text-2xl font-bold text-emerald-900 mb-4">Community Benefits</h3>
              <p class="text-gray-700 mb-4">Membership in our wellness community provides:</p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Ongoing motivation and accountability for your goals</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Access to exclusive resources and educational materials</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Opportunities to participate in community service projects</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Early notification of special events and promotions</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Peer support during challenging periods</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-emerald-50 rounded-xl p-6 mt-10">
            <h3 class="text-2xl font-bold text-emerald-900 mb-4">Community Events</h3>
            <p class="text-gray-700 mb-4">We regularly host special events for our community members:</p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-lg text-center border border-emerald-200">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Wellness Challenges</h4>
                <p class="text-gray-600">Quarterly competitions with prizes</p>
              </div>
              <div class="bg-white p-5 rounded-lg text-center border border-emerald-200">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Annual Conference</h4>
                <p class="text-gray-600">Featuring industry leaders</p>
              </div>
              <div class="bg-white p-5 rounded-lg text-center border border-emerald-200">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-emerald-800 mb-2">Celebration Events</h4>
                <p class="text-gray-600">Seasonal gatherings</p>
              </div>
            </div>
          </div>
        </div>
      `,
      imagePlaceholder: 'Community Support'
    }
  };

  // Get the current service data
  const service = serviceData[serviceName] || serviceData['nutrition-planning'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 pt-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Services
        </button>
      </div>

      {/* Service Detail Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mr-6 mb-4 md:mb-0">
                {service.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">{service.title}</h1>
                <p className="text-gray-600 mt-2 text-lg">{service.description}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: service.content }} />
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="bg-emerald-50 rounded-2xl p-6 sticky top-24">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                    <span className="text-emerald-800 font-medium">{service.imagePlaceholder}</span>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-emerald-900 mb-4">Service Details</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Personalized approach to your unique needs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Expert guidance from certified professionals</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Flexible scheduling options</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Ongoing support and resources</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Request Button */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Ready to Begin Your Journey?</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                  Take the first step toward transforming your wellness. Our team is ready to create a personalized plan just for you.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-full hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Request a Free Consultation
                </button>
                <p className="text-gray-500 mt-4 text-sm">No commitment required. Speak with our wellness experts today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;