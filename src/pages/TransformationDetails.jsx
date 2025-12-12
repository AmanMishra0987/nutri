import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
        detailedStory: "Amazing experience I had with the help of Kusum and Rajwant helped me from day 1. Every plan they created was personalized built around my preferences, routines, and progress. What really stood out was how they emphasized education, they didn’t just tell me what to eat, they explained why.Always available to help you out if you have any doubts regarding the diet.\n\nMuch recommended.",
        weightLost: "30kg",
        duration: "Ongoing",
        challenges: "Busy schedule in Dubai, lack of time, energy deficiency",
        solutions: "Personalized nutrition, home workouts, stress management",
        beforeAfterImages: {
            before: "/kevin-before.jpg",
            after: "/kevin-after.jpg"
        },

        results: [
            "30kg weight loss",
            "Increased energy levels",
            "Improved sleep quality",
            "Enhanced self-confidence",
            "Better relationship with food",
            "Improved blood biomarkers"
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
        detailedStory: "I have always managed to achieve my goals with your program, even within short month timeframes. I find the program very effective, encouraging and it has become my daily lifestyle. ",
        weightLost: "3kg",
        duration: "Ongoing",
        challenges: "Maintaining consistency in a busy lifestyle",
        solutions: "Flexible meal planning, habit formation, continuous support",

        results: [
            "3kg weight loss",
            "Improved energy levels",
            "Better lifestyle habits",
            "Enhanced discipline",
            "Sustainable wellness routine",
            "Improved blood biomarkers"
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
        detailedStory: "I can’t thank Kusum and Rajwant enough for their constant guidance and support throughout my journey. Their diet plans were simple, practical, and easy to follow; nothing complicated or unrealistic. Working with them has truly made me more mindful of what I eat and has encouraged me to adopt a cleaner, healthier lifestyle. I’ve also become much more motivated to stay active and prioritize my fitness.I couldn’t have asked for better guidance, they have truly helped me build healthier habits that I’ll carry forward.",
        duration: "Ongoing",
        challenges: "Building mindfulness around eating, staying motivated for fitness",
        solutions: "Simple diet plans, education on nutrition, motivation and support",

        results: [
            "8kg weight loss",
            "Increased mindfulness about eating",
            "Adopted cleaner lifestyle",
            "Enhanced motivation for fitness",
            "Better understanding of nutrition",
            "Improved blood biomarkers"
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
        detailedStory: "I had a fantastic experience with Kusum and Rajwant over the last few months. I not only reached my weight loss goal but also gained a new perspective on food and nutrition. Kusum's approach is incredibly thorough and detailed and her genuine concern truly makes a difference. The constant support and motivation they offer at every step of the way was very helpful in achieving my goal.",
        weightLost: "10kg",
        duration: "Several months",
        challenges: "Need for thorough approach, ongoing support and motivation",
        solutions: "Detailed assessment, personalized plan, regular check-ins, education",

        results: [
            "10kg weight loss",
            "New perspective on food and nutrition",
            "Thorough and detailed approach",
            "Ongoing support and motivation",
            "Personalized plan based on individual needs",
            "Improved blood biomarkers"
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
        detailedStory: "super. Actually, put me on the right track after being on YO YO diets all my life ",
        weightLost: "10kg",
        duration: "Ongoing",
        challenges: "Breaking the yo-yo dieting cycle, achieving sustainable results",
        solutions: "Gradual changes, habit formation, education, consistency focus",

        results: [
            "10kg weight loss",
            "Breaking the yo-yo dieting cycle",
            "Sustainable results",
            "Healthier relationship with food",
            "Confidence in making healthy choices",
            "Improved blood biomarkers"
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
            "Better understanding of food and balance",
            "Improved blood biomarkers"
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
        detailedStory: "Started on 10th Feb 2025 .. did it for 4months It took me a while to finally start the diet… I honestly thought I'd never be able to eat my favorite foods again!\n\nBut you proved me so wrong! I ate everything I love and still lost weight 😍\n\nYou taught me how to be healthy, eat wisely, and enjoy food in the right proportions.\n\nLife has completely changed for me — from my eating habits to how I look and feel. I've never felt or looked better!\n\nThank you so much Kusum and Rajwant for your constant support, motivation, and encouragement 💕\n\nTruly, the best decision of my life was to join you both!",
        weightLost: "17.5kg",
        duration: "4 months",
        challenges: "Fear of giving up favorite foods, delay in starting",
        solutions: "Portion control education, balanced approach, motivation, comprehensive wellness",
        beforeAfterImages: {
            before: "/dhara-before.jpeg",
            after: "/dhara-after.jpeg"
        },
        results: [
            "17.5kg weight loss",
            "Enjoyment of favorite foods",
            "Complete lifestyle change",
            "Improved appearance and feelings",
            "Sustainable healthy habits",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "8",
        name: "Himanshu",
        age: 26,
        location: "Canada",
        startingWeight: "113 kg",
        currentWeight: "90.7 kg",
        shortSummary: "Reversed diabetes and lost weight with sustainable habits",
        fullDescription: "Himanshu is deeply grateful for the support and expertise provided by Kusum and Rajwant. Their guidance helped him lose weight, build healthier habits, and even reverse his diabetes.",
        detailedStory: "I'm incredibly grateful for the amazing support and expertise Kusum and Rajwant provided throughout my weight-loss journey. From day one, they took the time to understand my habits, preferences, and goals, creating a plan that felt realistic, sustainable, and tailored specifically to me.\n\nTheir encouragement kept me motivated, and their practical advice made healthy eating feel simple and achievable—even on the toughest days. Thanks to their guidance, I not only lost weight but also gained a much healthier relationship with food. I was able to reverse my diabetes and get all my parameters in line.\n\nIf you're looking for a knowledgeable, compassionate, and results-driven team, I can't recommend them highly enough. Their work truly made a difference in my life!",
        weightLost: "22.3 kg",
        duration: "Ongoing",
        challenges: "Diabetes, habits, sustainability",
        solutions: "Tailored nutrition, ongoing support, realistic planning",
        results: [
            "22.3kg weight loss",
            "Reversed diabetes",
            "Better relationship with food",
            "Improved health parameters",
            "Improved blood biomarkers"

        ]
    },
    {
        id: "9",
        name: "Deepali Gandhi",
        age: 40,
        location: "Canada",
        startingWeight: "82 kg",
        currentWeight: "59 kg",
        shortSummary: "Lost 23kg and built lifelong mindful eating habits",
        fullDescription: "Deepali found a lifelong guide in Kusum. Her journey transformed not just her body but also her mindset around food.",
        detailedStory: "Choosing to work with Kusum wasn't just about finding the right person to help me on my weight loss journey, I felt I found a lifelong friend and guide in her. The impact of her guidance has been truly life changing, I'm amazed at how she trained my brain to make portion controlled healthier choices even when I'm in social settings. I truly feel I'm in best shape of my life today and I only have Kusum to thank for the confidence and knowledge to make that a reality. Thank you Kusum for everything.",
        weightLost: "23 kg",
        duration: "Ongoing",
        challenges: "Portion control, lifestyle balance",
        solutions: "Mindset training, habit formation, tailored plans",
        results: [
            "23kg weight loss",
            "Better relationship with food",
            "Mindful eating habits",
            "Increased confidence",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "10",
        name: "Sathvik",
        age: 24,
        location: "Dubai",
        startingWeight: "117 kg",
        currentWeight: "88.6 kg",
        shortSummary: "Lost 28+ kg with personalized coaching",
        fullDescription: "After struggling for years, Sathvik transformed his health and confidence through a focused, guided plan.",
        detailedStory: "I am 24 years old, and for many years I struggled with my weight. I was a slim child, but from my late teens I started gaining weight steadily. Things became difficult when I was studying abroad, and by the time I returned to Dubai after completing my studies, I had reached almost 120 kilos. It was worrying for me and for my family.\n\nI tried exercise and different routines, but nothing really helped. Through one of my mother's colleagues, we heard about Kusum and Rajwant, and I decided to give it a try. Kusum asked me to complete a few tests and then guided me through a personalised lifestyle plan. I realised that many of the foods I was eating were not supporting my body or my emotional balance.\n\nI followed the plan with commitment. I started at 120 kilos, and today I am at 85 kilos. This 34-kilo change has transformed my confidence, my health, and the way I feel about myself. My mother also followed the program and lost around 8 kilos, which shows how effective their guidance is.\n\nI am truly grateful to Kusum and Rajwant for their discipline, support, and consistent follow-ups. This journey has changed my life, and I would genuinely recommend them to anyone who wants a healthier body and a healthier mind.",
        weightLost: "28.4 kg",
        duration: "Ongoing",
        challenges: "Emotional eating, lifestyle habits",
        solutions: "Personalized plan, deep assessment, consistent follow-ups",
        beforeAfterImages: {
            before: "/satvik-before.jpeg",
            after: "/satvik-after.jpeg"
        },
        results: [
            "28.4kg weight loss",
            "Improved confidence",
            "Better emotional balance",
            "Healthier lifestyle habits",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "11",
        name: "Miita Thakral",
        age: 43,
        location: "Thailand",
        startingWeight: "66 kg",
        currentWeight: "57 kg",
        shortSummary: "Lost 9kg during perimenopause",
        fullDescription: "Miita achieved slow and consistent fat loss with cravings controlled and nutrition optimized.",
        detailedStory: "Amid lots of changes in the body is a belly fat that becomes a peri-menopause issue. As a woman going through that , I knew I had to loose slow and consistent.\n\nKusum and Rajwant understood that narrative and kept me craving free , yet nutrient surplus. They made loosing the wholesome way possible.  Grateful to them always .",
        weightLost: "9 kg",
        duration: "Ongoing",
        challenges: "Perimenopause, cravings, hormonal changes",
        solutions: "Balanced diet, habit management, personalized nutrition",
        results: [
            "9kg weight loss",
            "Craving-free plan",
            "Better hormonal balance",
            "Improved energy",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "12",
        name: "Ruba Hassan",
        age: 35,
        location: "Yemen",
        startingWeight: "84.45 kg",
        currentWeight: "79.5 kg",
        shortSummary: "Lost 5kg with a simple and filling plan",
        fullDescription: "Ruba loved how easy the plan was to follow and how full she felt throughout the day.",
        detailedStory: "I had a fantastic experience with Kusum and her team. The nutritional advice she had provided was original, new and tailored to my needs. The plan was easy to follow and made me feel full all day! I highly recommend her to everyone 🌸",
        weightLost: "5 kg",
        duration: "Ongoing",
        challenges: "Finding sustainable nutrition",
        solutions: "Tailored plan, simple guidelines",
        results: [
            "5kg weight loss",
            "Easy to follow plan",
            "Feeling full all day",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "13",
        name: "Rahul",
        age: 35,
        location: "Dubai",
        startingWeight: "86 kg",
        currentWeight: "78 kg (lowest)",
        shortSummary: "Wedding transformation with improved confidence",
        fullDescription: "Rahul joined for wedding fitness and achieved his best physique.",
        detailedStory: "6 month course to achieve my best physique for my wedding. Touch in the beginning but gets better after 2-3 weeks. My progress helped me increase my confidence as well. I looked great and felt great.",
        weightLost: "8 kg",
        duration: "6 months",
        challenges: "Consistency, pre-wedding pressure",
        solutions: "Structured planning, accountability, flexible diet",
        results: [
            "8kg weight loss",
            "Better physique",
            "Improved confidence",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "14",
        name: "Andie",
        age: 36,
        location: "Sri Lanka",
        startingWeight: "82.75 kg",
        currentWeight: "71.3 kg",
        shortSummary: "Lost 11.45kg with daily accountability",
        fullDescription: "Andie loved the constant communication and flexibility of the plan.",
        detailedStory: "Starting my health journey with Kusum was one of the best decisions I've ever made. What made it even better was the daily check-ins, which kept me on track and motivated. The meal plan was also flexible—if I didn’t like a certain food or ingredient, Kusum and her team would make adjustments to suit my preferences, ensuring I always enjoyed what I was eating. There were no fad diets—just simple portion control, exercise, and movement, which made it all feel sustainable. With Kusum’s support and constant communication, staying on track was easier than I expected. Highly recommend!",
        weightLost: "11.45 kg",
        duration: "Ongoing",
        challenges: "Consistency, food preferences",
        solutions: "Flexible meal plan, portion control, daily support",
        beforeAfterImages: {
            before: "/anndie-before.jpeg",
            after: "/andie-after.jpeg"
        },
        results: [
            "11.45kg weight loss",
            "Improved consistency",
            "Better lifestyle habits",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "15",
        name: "Shefali",
        age: 43,
        location: "Canada",
        startingWeight: "90 kg",
        currentWeight: "78 kg",
        shortSummary: "Lost 12kg and reduced inflammation",
        fullDescription: "Shefali learned what foods caused inflammation and transformed her health.",
        detailedStory: "Working with Kusum has been one of the best things I have ever done for myself. Not only did I lose the weight that refused to come off no matter what I tried, I was also able to understand what foods worked for me and what didn’t. Under her guidance I was able see a pattern and understand certain foods caused inflammation in my body. She always takes the time to answer all your questions patiently. Not only do I feel great after working with her I also understand my body like never before. I highly recommend Kusum and her team.",
        weightLost: "12 kg",
        duration: "Ongoing",
        challenges: "Inflammation, stubborn weight",
        solutions: "Food mapping, education, personalized guidance",
        results: [
            "12kg weight loss",
            "Reduced inflammation",
            "Better understanding of body",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "16",
        name: "Rahul Valecha",
        age: 32,
        location: "Dubai",
        startingWeight: "86 kg",
        currentWeight: "78 kg",
        shortSummary: "Wedding weight loss success",
        fullDescription: "Rahul achieved his best physique before his wedding.",
        detailedStory: "A 6-month program helped me get into the best shape for my wedding. Tough initially but became easier after a few weeks.",
        weightLost: "8 kg",
        duration: "6 months",
        challenges: "Wedding deadline",
        solutions: "Structured routine, accountability",
        results: [
            "8kg weight loss",
            "Improved confidence",
            "Better physique",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "17",
        name: "Renjim",
        age: null,
        location: "Turkey",
        startingWeight: "80 kg",
        currentWeight: "69 kg",
        shortSummary: "Lost 11kg after struggling with cortisol-related weight gain",
        fullDescription: "After two years of struggling, Renjim finally found a plan that worked.",
        detailedStory: "I gained weight due to cortisol and couldn’t lose it. Kusum studied my blood tests and lifestyle deeply. Everything was designed for my specific needs.",
        weightLost: "11 kg",
        duration: "2 months",
        challenges: "Cortisol issues, past failures",
        solutions: "Lifestyle analysis, personalized nutrition, constant support",
        results: [
            "11kg weight loss",
            "Better hormonal balance",
            "Improved health",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "18",
        name: "Prerna Khushalani",
        age: 33,
        location: null,
        startingWeight: "101 kg",
        currentWeight: "80 kg",
        shortSummary: "Lost 21kg before her wedding despite thyroid",
        fullDescription: "Prerna struggled with thyroid issues but achieved major results.",
        detailedStory: "Honestly since I have thyroid, I’ve always been working out and I have tried lots and lots of other diets. Kusum is so diligent, she used to keep checking up on me and keeping me accountable, that really helped a lot and I lost over 20 kilos right before my wedding.",
        weightLost: "21 kg",
        duration: "Ongoing",
        challenges: "Thyroid, multiple failed diets",
        solutions: "Accountability, thyroid-friendly planning",
        beforeAfterImages: {
            before: "/prerna-before.jpeg",
            after: "/prerna-after.jpeg"
        },
        results: [
            "21kg weight loss",
            "Improved energy",
            "Better hormonal balance",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "19",
        name: "Aanchal",
        age: 39,
        location: "UK",
        startingWeight: "70 kg",
        currentWeight: "57 kg",
        shortSummary: "Lost 13kg post-pregnancy",
        fullDescription: "Aanchal regained her health after childbirth with expert support.",
        detailedStory: "I put on a significant amount of weight after I had my son and really struggled to lose it. After trying multiple diets and exercise regimes I started to work with Soul Fuel Wellness. I lost 12kg in as many weeks and the best part was how easy it felt. The diet plans were sustainable, easy to follow and included favourite food groups and cheat meals.  Kusum and Rajwant are exceptionally supportive and explained reasons behind all the plans and rules which makes it much easier to engage with. They were approachable and able to offer advice at every step of the journey, including last minute questions when I had a change of plan. They helped me continue to lose weight through holidays, work dinners and social events. Overall, it has been a journey not only of weight loss, but also learning. I feel I better understand how to engage with food and maintain a healthy balance while continuing to enjoy my lifestyle. Cannot thank both of you enough",
        weightLost: "13 kg",
        duration: "12 weeks",
        challenges: "Post-pregnancy weight, failed diets",
        solutions: "Simple sustainable plans, flexibility, constant support",
        results: [
            "13kg weight loss",
            "Better lifestyle balance",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "20",
        name: "Priyanka Sridhar",
        age: 28,
        location: "USA",
        startingWeight: "64 kg",
        currentWeight: "50.7 kg",
        shortSummary: "Lost 14kg with a sustainable lifestyle plan",
        fullDescription: "Priyanka lost weight without starvation and improved her mental well-being.",
        detailedStory: "I was 64 kgs before starting, and in 4 months I lost 14 kgs in a slow and easy manner.\n\nThere was no starving or outlandish meal ideas .\n\nThe plan was curated to my likes and I was able to eat everything I like and still the lose weight .\n\nThe best part is it instilled a sense of discipline and respect towards my own body and I was in tune with myself .\n\nAlong with physical health my mental health also improved greatly and  I had more energy to work productively .\n\nThis diet plan is not just a temporary fix , it is sustainable lifestyle modification!",
        weightLost: "14 kg",
        duration: "4 months",
        challenges: "Discipline, mindset",
        solutions: "Meal customization, balance, habit formation",
        results: [
            "14kg weight loss",
            "Better mental health",
            "More energy",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "21",
        name: "Neha Munjal",
        age: 36,
        location: null,
        startingWeight: "68 kg",
        currentWeight: "52 kg",
        shortSummary: "16kg postpartum weight loss",
        fullDescription: "Neha rebuilt her body and confidence postpartum.",
        detailedStory: "Maternity weight loss\n\nIt was one of the life changing experience as I could learn to adapt and understand a better way of eating, sleeping and waking up early with healthy food choices. My body felt lighter, more energized and happier. More confident and positive.\n\nYour starting weight and current/end weight\n\nI was at 68 after my child’s delivery and for months the weight didn’t move a gram. \n\nWith Kusum’s diet and direction I dropped to 52 kg in less than 6 months. Her diet is culmination of right food, right quantity and the best quality.\n\nI would recommend every postpartum mother to get on board with her to see the NEW YOU.\n\n",

        weightLost: "16 kg",
        duration: "6 months",
        challenges: "Postpartum weight, low energy",
        solutions: "Right food, right quantity, lifestyle reset",
        beforeAfterImages: {
            before: "/neha-before.jpeg",
            after: "/neha-after.jpeg"
        },
        results: [
            "16kg weight loss",
            "Improved energy",
            "Better mood",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "22",
        name: "Anand",
        age: 39,
        location: "Saudi Arabia",
        startingWeight: "126 kg",
        currentWeight: "107.5 kg",
        shortSummary: "Learned discipline and sustainable health habits",
        fullDescription: "Anand’s journey transformed his mindset, not just his body.",
        detailedStory: "My journey has been a wonderful experience. Rather than focusing solely on weight reduction, the team made me aware of the fundamentals of a healthy, balanced diet and, most importantly, the critical need to stay active.\n\nI am grateful to Ms. Kusum and Ms. Rajwant, who were incredibly supportive at every step. They were always there to answer my queries, and they understood the challenges I faced in adapting to this new lifestyle. They were supported in getting me up to speed on the dietary changes—guiding me through the restrictions and, more importantly, teaching me how to eat the right foods at the right time and in the right quantities.\n\nA simple yet highly effective method for me was incorporating NEAT (Non-Exercise Activity Thermogenesis), which helped me significantly increase my daily energy expenditure.\n\n",
        weightLost: "18.5 kg",
        duration: "1 year",
        challenges: "Undisciplined diet, lifestyle habits",
        solutions: "NEAT, education, consistent guidance",
        results: [
            "18.5kg weight loss",
            "Sustainable lifestyle",
            "Better dietary awareness",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "23",
        name: "Jayshree",
        age: 52,
        location: "Dubai",
        startingWeight: "90 kg",
        currentWeight: "63 kg",
        shortSummary: "Lost 27kg and stopped BP medication",
        fullDescription: "Jayshree transformed her health and reversed blood pressure issues.",
        detailedStory: "I got introduced to Kusum when I was at my lowest physically. Was 90 kg and having high BP and started medication for the same. Over the course of 10 months, I dropped 27 kg and also was able to stop my BP medicine as my BP normalized. It was a beautiful experience with Kusum being there with me at every step. The food plan she gave was easy to follow and though I am a foodie, I was not deprived of what I wanted to eat. She curated the diet based on what I wanted to eat. She would be there with me daily on WhatsApp and weekly on calls to motivate, encourage and cheer me on. With her endless support I was able to achieve my weight loss goals. I have and will continue to recommend Kusum and her team to everyone who wants to lose weight.",
        weightLost: "27 kg",
        duration: "10 months",
        challenges: "High BP, cravings, consistency",
        solutions: "Tailored meal plan, daily accountability",
        results: [
            "27kg weight loss",
            "Stopped BP medication",
            "Improved overall health",
            "Improved blood biomarkers"
        ]
    },
    {
        id: "24",
        name: "MM",
        age: 26,
        location: "Dubai",
        startingWeight: "96 kg",
        currentWeight: "71 kg",
        shortSummary: "Lost 25kg with structured long-term planning",
        fullDescription: "MM worked with the team strategically for predictable yearly progress.",
        detailedStory: "My journey with Kusum and the entire team has been nothing short of spectacular. I began my first phase in January 2024 and completed it in July 2024, during which I lost over 25 kg. The weekly calls and daily interactions helped me stay accountable and follow my plan consistently.\n\nWhat truly sets the team apart is how they plan everything around your schedule, events, and lifestyle, ensuring you can stay on track no matter how your week looks. I now follow a structured plan with the team for six months each year to make sure I stay aligned with my fitness goals.\n\n",
        weightLost: "25 kg",
        duration: "6 months",
        challenges: "Lifestyle, long-term consistency",
        solutions: "Yearly structured approach, personalized scheduling",
        results: [
            "25kg weight loss",
            "Consistency through events",
            "Long-term sustainability",
            "Improved blood biomarkers"
        ]
    }

];

const TransformationDetails = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
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
            <section className="pt-32 pb-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            {transformation.name}'s Transformation Journey
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mx-auto mt-4">
                            Discover how {transformation.name} achieved remarkable results through our personalized wellness program.
                        </p>
                    </div>
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

                        {transformation.beforeAfterImages && (
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">Before & After Transformation</h2>
                                <div className="flex justify-center gap-6 max-w-2xl mx-auto">
                                    <div className="relative group flex-1 max-w-[300px]">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300"></div>
                                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                                            <img
                                                src={transformation.beforeAfterImages.before}
                                                alt={`${transformation.name} - Before`}
                                                className="w-full h-[400px] object-contain"
                                            />
                                           
                                        </div>
                                    </div>
                                    <div className="relative group flex-1 max-w-[300px]">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300"></div>
                                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                                            <img
                                                src={transformation.beforeAfterImages.after}
                                                alt={`${transformation.name} - After`}
                                                className="w-full h-[400px] object-contain"
                                            />
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <p className="text-xl font-bold text-emerald-700">
                                        Lost {transformation.weightLost} in {transformation.duration}
                                    </p>
                                </div>
                            </div>
                        )}

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
