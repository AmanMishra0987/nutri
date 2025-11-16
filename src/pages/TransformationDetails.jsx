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
        detailedStory: "Kevin's journey began when he realized that his busy schedule in Dubai was taking a toll on his health. He was constantly tired, had gained significant weight, and felt disconnected from his own body despite trying various diets that never seemed to work long-term.\n\nWhen he joined Soul Fuel Wellness, our team conducted a comprehensive assessment of his lifestyle, dietary habits, and emotional well-being. We discovered that his approach to dieting was too restrictive and unsustainable, causing his metabolism to slow down and leading to the yo-yo effect.\n\nOur personalized program for Kevin focused on:\n- Gradual dietary changes that fit his lifestyle in Dubai\n- Simple, effective exercises he could do at home\n- Mindfulness practices to manage stress\n- Building a supportive community through our WhatsApp group\n\nWhat really stood out was how we emphasized education - we didn't just tell him what to eat, we explained why. This approach helped him understand the science behind nutrition and make informed choices.\n\nOver the first month, Kevin began to see small but consistent changes. He wasn't just losing weight; he was gaining energy, confidence, and a new relationship with food. By month three, his friends and family started noticing his transformation.\n\nThe final phase was about maintaining his new habits and continuing to build on his success. Today, Kevin has become more disciplined and serves as an inspiration to others in our community.\n\nHe always says: \"Amazing experience I had with the help of Kusum and Rajwant who helped me from day 1. Every plan they created was personalized, built around my preferences, routines, and progress. What really stood out was how they emphasized education, they didn't just tell me what to eat, they explained why. Always available to help you out if you have any doubts regarding the diet. Much recommended.\"",
        weightLost: "30kg",
        duration: "Ongoing",
        challenges: "Busy schedule in Dubai, lack of time, energy deficiency",
        solutions: "Personalized nutrition, home workouts, stress management",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
        },
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
        detailedStory: "Priyanka has always managed to achieve her goals with our program, even within short month timeframes. She finds the program very effective, encouraging and it has become her daily lifestyle.\n\nHer journey with us has been consistently successful, demonstrating her commitment to maintaining her health and wellness goals. The program's flexibility and personalized approach have allowed her to integrate healthy habits seamlessly into her daily routine.\n\nWhat sets Priyanka apart is her dedication to consistency and her ability to adapt our wellness principles to her lifestyle. She has become a role model for other clients, showing that sustainable health is achievable with the right guidance and personal commitment.\n\nHer success story reinforces our belief that with the right support system and personalized approach, anyone can achieve their wellness goals regardless of their starting point.",
        weightLost: "3kg",
        duration: "Ongoing",
        challenges: "Maintaining consistency in a busy lifestyle",
        solutions: "Flexible meal planning, habit formation, continuous support",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
            after: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        },
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
        detailedStory: "Simran couldn't thank Kusum and Rajwant enough for their constant guidance and support throughout her journey. Their diet plans were simple, practical, and easy to follow; nothing complicated or unrealistic.\n\nWorking with them has truly made her more mindful of what she eats and has encouraged her to adopt a cleaner, healthier lifestyle. She's also become much more motivated to stay active and prioritize her fitness.\n\nWhat made Simran's journey special was her commitment to learning. She didn't just follow the plans blindly; she wanted to understand the reasoning behind each recommendation. This curiosity helped her develop a deeper understanding of nutrition and wellness.\n\nShe found that the simplicity of the approach was its greatest strength. Rather than overwhelming her with complex rules, the team focused on fundamental changes that could be sustained long-term.\n\nSimran's transformation wasn't just physical; it was a shift in her relationship with food and her approach to self-care. She learned to listen to her body and make choices that supported her overall well-being.\n\nToday, she continues to maintain her healthy habits and serves as an inspiration to her friends and family, showing that lasting change is possible with the right support.",
        weightLost: "8kg",
        duration: "Ongoing",
        challenges: "Building mindfulness around eating, staying motivated for fitness",
        solutions: "Simple diet plans, education on nutrition, motivation and support",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
        },
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
        detailedStory: "Namit had a fantastic experience with Kusum and Rajwant over the last few months. He not only reached his weight loss goal but also gained a new perspective on food and nutrition. Kusum's approach is incredibly thorough and detailed and her genuine concern truly makes a difference.\n\nThe constant support and motivation they offer at every step of the way was very helpful in achieving his goal. What impressed Namit most was how the team took the time to understand his lifestyle, preferences, and challenges before creating a personalized plan.\n\nUnlike generic diet programs, this approach addressed his specific needs. The thoroughness of the assessment process gave him confidence that the plan would work for his unique situation.\n\nThroughout his journey, Namit appreciated the regular check-ins and adjustments to his plan as needed. This dynamic approach ensured he continued making progress even when faced with obstacles.\n\nThe educational component was particularly valuable. Rather than just telling him what to do, the team explained the science behind their recommendations, empowering him to make informed decisions.\n\nBy the end of his program, Namit had not only achieved his weight loss goal but had also developed a healthier relationship with food and a better understanding of nutrition.\n\nHe continues to apply the principles he learned and maintains his healthy habits with confidence.",
        weightLost: "10kg",
        duration: "Several months",
        challenges: "Need for thorough approach, ongoing support and motivation",
        solutions: "Detailed assessment, personalized plan, regular check-ins, education",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
        },
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
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
        },
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
        detailedStory: "AJ put on a significant amount of weight after having her son and really struggled to lose it. After trying multiple diets and exercise regimes, she started to work with Soul Fuel Wellness.\n\nShe lost 12 kgs in as many weeks and the best part was how easy it felt. The diet plans were sustainable, easy to follow and included favorite food groups and cheat meals.\n\nKusum and Rajwant are exceptionally supportive and explained reasons behind all the plans and rules which make it much easier to engage with. They were approachable and able to offer advice at every step of the journey, including last-minute questions when she had a change of plan.\n\nThey helped her continue to lose weight through holidays, work dinners and social events. This flexibility was crucial for AJ, who didn't want to miss out on life while pursuing her health goals.\n\nOverall, it has been a journey not only of weight loss but also learning. She feels she better understands how to engage with food and maintain a healthy balance while continuing to enjoy her lifestyle.\n\nAJ's transformation demonstrates that post-pregnancy weight loss is possible with the right approach. The key was finding a program that respected her lifestyle while helping her achieve her goals.\n\nShe continues to apply the principles she learned and maintains her healthy habits with confidence.",
        weightLost: "12kg",
        duration: "12 weeks",
        challenges: "Post-pregnancy weight gain, multiple failed diets, maintaining lifestyle",
        solutions: "Sustainable diet plans, favorite foods inclusion, flexible approach, education",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
            after: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        },
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
        detailedStory: "Dhaara started on 10th Feb 2025 and took a while to finally start the diet. She honestly thought she'd never be able to eat her favorite foods again!\n\nBut we proved her so wrong! She ate everything she loved and still lost weight. We taught her how to be healthy, eat wisely, and enjoy food in the right proportions.\n\nLife has completely changed for her - from her eating habits to how she looks and feels. She's never felt or looked better!\n\nShe couldn't be more grateful to Kusum and Rajwant for their constant support, motivation, and encouragement. She truly believes the best decision of her life was to join us!\n\nHer journey shows that restrictive dieting isn't necessary for weight loss. By learning proper portion control and timing, she was able to enjoy her favorite foods while still achieving her goals.\n\nThe educational component was crucial for Dhaara. Understanding the principles behind the approach helped her make informed decisions even when she wasn't actively following the program.\n\nShe particularly appreciated how the program addressed all aspects of wellness, not just food. The attention to sleep, stress management, and overall lifestyle contributed to her success.\n\nToday, Dhaara maintains her healthy habits and continues to feel better than ever. Her transformation is a testament to the power of a balanced, sustainable approach to wellness.",
        weightLost: "17.5kg",
        duration: "4 months",
        challenges: "Fear of giving up favorite foods, delay in starting",
        solutions: "Portion control education, balanced approach, motivation, comprehensive wellness",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
        },
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
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
        },
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
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
        },
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
                            <h2 className="text-2xl font-bold text-emerald-900 mb-6">Before & After</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="rounded-xl overflow-hidden mb-4">
                                        <img
                                            src={transformation.beforeAfterImages.before}
                                            alt="Before"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Before</h3>
                                </div>
                                <div className="text-center">
                                    <div className="rounded-xl overflow-hidden mb-4">
                                        <img
                                            src={transformation.beforeAfterImages.after}
                                            alt="After"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">After</h3>
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