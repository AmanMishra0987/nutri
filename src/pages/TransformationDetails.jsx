import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Sample transformation data
const TRANSFORMATIONS = [
    {
        id: "1",
        name: "Kevin",
        age: 27,
        location: "Dubai",
        startingWeight: "117 kg",
        currentWeight: "87 kg",
        shortSummary: "Lost 30kg with personalized nutrition coaching",
        fullDescription: "Kevin came to us struggling with weight gain and lack of energy affecting his daily life in Dubai. Through our personalized nutrition plan and lifestyle coaching, he learned sustainable habits that helped him lose 30kg. Today, he's not only physically transformed but also mentally empowered.",
        detailedStory: "Amazing experience I had with the help of Kusum and Rajwant helped me from day 1. Every plan they created was personalized built around my preferences, routines, and progress. What really stood out was how they emphasized education, they didn’t just tell me what to eat, they explained whyAlways available to help you out if you have any doubts regarding the diet",

        weightLost: "30kg",
        duration: "Ongoing",
        challenges: "Busy schedule in Dubai, lack of time, energy deficiency",
        solutions: "Personalized nutrition, home workouts, stress management",
        
        results: [
            "30kg weight loss",
            "Increased energy levels",
            "Improved sleep quality",
            "Enhanced self-confidence",
            "Better relationship with food",
            "Discipline and consistency"
        ]
    },
   
    {
        id: "2",
        name: "Priyanka Ramchandani",
        age: 40,
        location: "Dubai",
        startingWeight: "55 kg",
        currentWeight: "52 kg",
        shortSummary: "Achieved goals in short timeframes",
        fullDescription: "Priyanka always managed to achieve her goals with our program, even within short month timeframes. She finds the program very effective, encouraging and it has become her daily lifestyle.",
        detailedStory: "Your journey and experience with us: I have always managed to achieve my goals with your program, even within short month timeframes. I find the program very effective, encouraging and it has become my daily lifestyle.",
        weightLost: "3kg",
        duration: "Ongoing",
        challenges: "Maintaining consistency in a busy lifestyle",
        solutions: "Flexible meal planning, habit formation, continuous support",
       
        results: [
            "3kg weight loss",
            "Improved energy levels",
            "Better lifestyle habits",
            "Enhanced discipline",
            "Sustainable wellness routine"
        ]
    },
    {
        id: "3",
        name: "Simran Makhijani",
        age: 28,
        location: "Dubai",
        startingWeight: "61 kg",
        currentWeight: "53 kg",
        shortSummary: "Lost 8kg with constant guidance",
        fullDescription: "Simran couldn't thank Kusum and Rajwant enough for their constant guidance and support throughout her journey. Their diet plans were simple, practical, and easy to follow; nothing complicated or unrealistic.",
        detailedStory: "Your journey and experience with us: I can’t thank Kusum and Rajwant enough for their constant guidance and support throughout my journey. Their diet plans were simple, practical, and easy to follow; nothing complicated or unrealistic. Working with them has truly made me more mindful of what I eat and has encouraged me to adopt a cleaner, healthier lifestyle. I’ve also become much more motivated to stay active and prioritize my fitness.I couldn’t have asked for better guidance, they have truly helped me build healthier habits that I’ll carry forward.",
        duration: "Ongoing",
        challenges: "Building mindfulness around eating, staying motivated for fitness",
        solutions: "Simple diet plans, education on nutrition, motivation and support",
        
        results: [
            "8kg weight loss",
            "Increased mindfulness about eating",
            "Adopted cleaner lifestyle",
            "Enhanced motivation for fitness",
            "Better understanding of nutrition"
        ]
    },
    {
        id: "4",
        name: "Namit Bhalla",
        age: 44,
        location: "Dubai",
        startingWeight: "92 kg",
        currentWeight: "82 kg",
        shortSummary: "Lost 10kg with thorough approach",
        fullDescription: "Namit had a fantastic experience with Kusum and Rajwant over the last few months. He not only reached his weight loss goal but also gained a new perspective on food and nutrition.",
        detailedStory:"I had a fantastic experience with Kusum and Rajwant over the last few months. I not only reached my weight loss goal but also gained a new perspective on food and nutrition. Kusum's approach is incredibly thorough and detailed and her genuine concern truly makes a difference. The constant support and motivation they offer at every step of the way was very helpful in achieving my goal.", 
        weightLost: "10kg",
        duration: "Several months",
        challenges: "Need for thorough approach, ongoing support and motivation",
        solutions: "Detailed assessment, personalized plan, regular check-ins, education",
        
        results: [
            "10kg weight loss",
            "New perspective on food and nutrition",
            "Thorough and detailed approach",
            "Ongoing support and motivation",
            "Personalized plan based on individual needs"
        ]
    },
    {
        id: "5",
        name: "Richa Bhagnari",
        age: 49,
        location: "Dubai",
        startingWeight: "73 kg",
        currentWeight: "63 kg",
        shortSummary: "Lost 10kg from yo-yo diets",
        fullDescription: "Richa found herself on the right track after being on yo-yo diets all her life. Our program helped her break the cycle and achieve sustainable results.",
        detailedStory: "Richa found herself on the right track after being on yo-yo diets all her life. Our program helped her break the cycle and achieve sustainable results.\n\nHer journey with us began when she realized that traditional dieting approaches weren't working for her long-term. She had experienced the frustrating cycle of losing weight only to gain it back, sometimes with extra.\n\nThe first step was understanding why yo-yo dieting had been her experience. We worked with her to identify the patterns and behaviors that contributed to this cycle.\n\nOur approach focused on gradual, sustainable changes rather than drastic restrictions. This allowed Richa to develop new habits without feeling deprived or overwhelmed.\n\nOne key aspect of her transformation was learning to view food as fuel rather than an emotional crutch. Through education and support, she developed a healthier relationship with eating.\n\nWe also emphasized the importance of consistency over perfection. Rather than aiming for flawless adherence to the plan, Richa learned to get back on track quickly after any slip-ups.\n\nRegular check-ins and adjustments to her plan helped maintain her momentum and address any challenges as they arose.\n\nToday, Richa has maintained her weight loss and feels more confident in her ability to make healthy choices. She no longer views dieting as a temporary fix but as a lifelong approach to wellness.",
        weightLost: "10kg",
        duration: "Ongoing",
        challenges: "Breaking the yo-yo dieting cycle, achieving sustainable results",
        solutions: "Gradual changes, habit formation, education, consistency focus",
        
        results: [
            "10kg weight loss",
            "Breaking the yo-yo dieting cycle",
            "Sustainable results",
            "Healthier relationship with food",
            "Confidence in making healthy choices"
        ]
    },
    {
        id: "6",
        name: "AJ",
        age: 39,
        location: "UK",
        startingWeight: "70 kg",
        currentWeight: "57 kg",
        shortSummary: "Lost 12kg in 12 weeks",
        fullDescription: "AJ put on a significant amount of weight after having her son and really struggled to lose it. After trying multiple diets and exercise regimes, she started to work with Soul Fuel Wellness.",
        detailedStory: "I put on a significant amount of weight after I had my son and really struggled to lose it. After trying multiple diets and exercise regimes I started to work with Soul Fuel Wellness. I lost 12 kgs in as many weeks and the best part was how easy it felt. The diet plans were sustainable, easy to follow and included favorite food groups and cheat meals.  Kusum and Rajwant are exceptionally supportive and explained reasons behind all the plans and rules which make it much easier to engage with. They were approachable and able to offer advice at every step of the journey, including last-minute questions when I had a change of plan. They helped me continue to lose weight through holidays, work dinners and social events. Overall, it has been a journey not only of weight loss but also learning. I feel I better understand how to engage with food and maintain a healthy balance while continuing to enjoy my lifestyle. Cannot thank both of you enough!",
        weightLost: "12kg",
        duration: "12 weeks",
        challenges: "Post-pregnancy weight gain, multiple failed diets, maintaining lifestyle",
        solutions: "Sustainable diet plans, favorite foods inclusion, flexible approach, education",
        
        results: [
            "12kg weight loss",
            "Sustainable and easy to follow plans",
            "Inclusion of favorite foods",
            "Support through all life events",
            "Better understanding of food and balance"
        ]
    },
    {
        id: "7",
        name: "Dhaara Nikalank",
        age: 42,
        location: "India",
        startingWeight: "82.5 kg",
        currentWeight: "65 kg",
        shortSummary: "Lost 17.5kg with favorite foods",
        fullDescription: "Dhaara started on 10th Feb 2025 and took a while to finally start the diet. She honestly thought she'd never be able to eat her favorite foods again!",
        detailedStory: "Your journey and experience with us: started on 10th Feb 2025 .. did it for 4months It took me a while to finally start the diet… I honestly thought I’d never be able to eat my favorite foods again! But you proved me so wrong! I ate everything I love and still lost weight 😍 You taught me how to be healthy, eat wisely, and enjoy food in the right proportions.Life has completely changed for me — from my eating habits to how I look and feel. I’ve never felt or looked better! Thank you so much Kusum and Rajwant for your constant support, motivation, and encouragement 💕Truly, the best decision of my life was to join you both!",
        weightLost: "17.5kg",
        duration: "4 months",
        challenges: "Fear of giving up favorite foods, delay in starting",
        solutions: "Portion control education, balanced approach, motivation, comprehensive wellness",
        
        results: [
            "17.5kg weight loss",
            "Enjoyment of favorite foods",
            "Complete lifestyle change",
            "Improved appearance and feelings",
            "Sustainable healthy habits"
        ]
    },
    {
        id: "8",
        name: "Dubai Client",
        age: 44,
        location: "Dubai",
        startingWeight: "Not specified",
        currentWeight: "Not specified",
        shortSummary: "Grew in ways never imagined",
        fullDescription: "Being with Kusum & Mona, this client didn't just lose weight or get into better shape, but grew in ways they would have never imagined.",
        detailedStory: "Being with Kusum & Mona, this client didn't just lose weight, or get into better shape, they grew in ways they would have never imagined. They learnt to try new things, new ways of eating, letting go of ego and being open to learning. These are lifelong skills they will carry with them. And even when they're not on their plan, they continue to follow many of the principles which make total sense to them.\n\nThis transformation goes beyond physical changes. The client discovered that working with our team meant embarking on a journey of personal growth. They learned to approach food and wellness with curiosity rather than judgment.\n\nLetting go of ego was one of the most challenging but rewarding aspects of their journey. By becoming open to learning, they were able to break through plateaus and discover new possibilities for their health.\n\nThe skills they developed - trying new things, being open to learning, letting go of ego - are indeed lifelong gifts that extend far beyond diet and exercise.\n\nWhat makes this story particularly inspiring is how the client continues to apply these principles even when not actively on the program. This shows true internalization of the wellness mindset.\n\nThey're grateful to have Kusum and Mona guiding them on this transformative journey.",
        weightLost: "Not specified",
        duration: "Ongoing",
        challenges: "Letting go of ego, being open to learning new things",
        solutions: "Guidance, encouragement, lifelong skill development",
        
        results: [
            "Personal growth beyond weight loss",
            "Learning new ways of eating",
            "Letting go of ego",
            "Being open to learning",
            "Lifelong skills development",
            "Continued application of principles"
        ]
    },
    {
        id: "9",
        name: "Foodie from Dubai",
        age: 28,
        location: "Dubai",
        startingWeight: "87.7 kg",
        currentWeight: "76.3 kg",
        shortSummary: "Learned balance with favorite foods",
        fullDescription: "As a wholehearted foodie, this client used to the idea of a \"diet plan.\" They loved the freedom of eating what they wanted, when they wanted. Anything that meant restriction or limitation instantly put them off.",
        detailedStory: "As a wholehearted foodie, this client used to the idea of a \"diet plan.\" They loved the freedom of eating what they wanted, when they wanted. Anything that meant restriction or limitation instantly put them off.\n\nKusum and Mona completely changed their perspective. They designed a plan that included their weekly cravings, so they never felt deprived. Instead, they learned that there's simply a time, place, and portion for everything. They began to look forward to their favorite foods even more, enjoying them guilt-free and in balance.\n\nWhat truly sets them apart is that this isn't just a diet; it's a lifestyle shift. With their poor sleep habits, the team patiently explained how rest affects everything. Their care goes beyond food - from checking on vitamins and medications to even tracking headaches and cycles, they truly pay attention to every detail.\n\nThe process and progress is so seamless, personalized, and genuinely result-driven. Even the first onboarding call was so eye-opening that they knew they'd made the right choice. They're incredibly grateful to have crossed paths with the team, whose expertise has transformed how they approach health and wellness. Today, they're at their lowest weight since 2022 but more importantly, feeling healthier and more balanced than ever before.\n\nThis journey demonstrates that being a foodie and maintaining a healthy weight are not mutually exclusive. The key is learning balance and portion control rather than complete restriction.\n\nThe comprehensive approach that considers all aspects of wellness - from sleep to medication to cycles - shows the holistic nature of the program.\n\nToday, they maintain their healthy habits and continue to feel better than ever.",
        weightLost: "11.4kg",
        duration: "Ongoing",
        challenges: "Resistance to restriction, being a foodie, poor sleep habits",
        solutions: "Inclusive diet plans, education on balance, comprehensive wellness approach",
        
        results: [
            "11.4kg weight loss",
            "Learned balance with favorite foods",
            "Guilt-free enjoyment of food",
            "Improved sleep habits understanding",
            "Comprehensive wellness approach",
            "Healthier and more balanced than ever"
        ]
    }
];

const TransformationDetails = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { id } = useParams();
    const transformation = TRANSFORMATIONS.find(t => t.id === id);

    // Handle scroll to change navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!transformation) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
                <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-emerald-900 mb-4">Transformation Not Found</h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
            <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-10">
                        {transformation.name}'s Transformation Journey
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                        Discover how {transformation.name} achieved remarkable results through our personalized wellness program.
                    </p>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-6 md:p-12">
                        <div className="text-center mb-10">
                            <p className="text-xl text-emerald-600 font-medium">
                                {transformation.shortSummary}
                            </p>
                        </div>

                        {transformation.age && transformation.location && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
                                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                                    <div className="text-sm text-gray-600">Age</div>
                                    <div className="text-lg font-bold text-emerald-700">{transformation.age}</div>
                                </div>
                                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                                    <div className="text-sm text-gray-600">From</div>
                                    <div className="text-lg font-bold text-emerald-700">{transformation.location}</div>
                                </div>
                                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                                    <div className="text-sm text-gray-600">Starting Weight</div>
                                    <div className="text-lg font-bold text-emerald-700">{transformation.startingWeight}</div>
                                </div>
                                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                                    <div className="text-sm text-gray-600">Current Weight</div>
                                    <div className="text-lg font-bold text-emerald-700">{transformation.currentWeight}</div>
                                </div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-emerald-50 rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-emerald-700 mb-2">
                                    {transformation.weightLost}
                                </div>
                                <div className="text-gray-600">Weight Lost</div>
                            </div>
                            <div className="bg-emerald-50 rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-emerald-700 mb-2">
                                    {transformation.duration}
                                </div>
                                <div className="text-gray-600">Program Duration</div>
                            </div>
                            <div className="bg-emerald-50 rounded-xl p-6 text-center">
                                <div className="text-lg font-bold text-emerald-700 mb-2">
                                    Holistic Approach
                                </div>
                                <div className="text-gray-600">Nutrition & Wellness</div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-emerald-900 mb-6">The Journey</h2>
                            <div className="prose max-w-none text-gray-600">
                                {transformation.detailedStory.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4">{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-emerald-900 mb-6">Challenges & Solutions</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                                    <h3 className="text-lg font-bold text-amber-800 mb-3">Main Challenges</h3>
                                    <p className="text-amber-700">{transformation.challenges}</p>
                                </div>
                                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                                    <h3 className="text-lg font-bold text-emerald-800 mb-3">Our Solutions</h3>
                                    <p className="text-emerald-700">{transformation.solutions}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-emerald-900 mb-6">Key Results</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {transformation.results.map((result, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-gray-600">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center pt-8 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-emerald-900 mb-4">Inspired by {transformation.name}'s journey?</h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Start your own transformation today with our personalized wellness programs.
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

export default TransformationDetails;
