// Imports removed as they are unused in the data object


export const resumeData = {
    personalInfo: {
        name: "Himanshu Singh",
        tagline: "Software Engineer & Full Stack Developer",
        location: "Lucknow, India",
        email: "himanshusingh230103@gmail.com",
        phone: "+91 8957979731",
        linkedin: "https://www.linkedin.com/in/himanshu-singh-405230253/",
        github: "https://github.com/Himanshusingh2301",
        about: "Passionate Software Engineer with a strong foundation in Web Development and problem-solving. Dedicated to writing clean, maintainable code and building user-centric applications.",
        avatar: "/images/profile.jpg",
        resumeLink: "/HimanshuSingh_Resume.pdf"
    },
    education: [
        {
            school: "Babu Banarasi Das University, Lucknow",
            degree: "Bachelor of Technology (CSE)",
            date: "Jul 2022 – May 2026",
            gpa: "80.00% (till 7th sem)",
            description: "Focus on Computer Science & Engineering. Consistent academic performer."
        },
        {
            school: "ABC PUBLIC SCHOOL",
            degree: "Intermediate (Class XII)",
            date: "2021",
            gpa: "85.00%",
            description: "Completed Intermediate Examination from C.B.S.E Board, Specialized in Science stream with Mathematics, Physics, Chemistry, and Computer Science.",
            certificate: "/12th board.pdf"
        },
        {
            school: "DON BOSCO SCHOOL",
            degree: "High School (Class X)",
            date: "2019",
            gpa: "89%",
            description: "Completed High School Examination from C.B.S.E Board with strong foundation in Science, Mathematics and Computer Science.",
            certificate: "/10th board.pdf"
        }
    ],
    experience: [
        {
            company: "GRAStech",
            logo: "/images/experience/GrasTech logo.png",
            title: "Machine Learning Intern",
            date: "June 2025 – July 2025",
            location: "BBD University, Lucknow, Uttar Pradesh",
            type: "On-site Training",
            description: [
                "Completed a project-based summer training program in Machine Learning conducted at BBD University, Lucknow.",
                "Worked on practical machine learning concepts through hands-on projects and guided implementation.",
                "Gained foundational experience in data handling, model building, and applied ML workflows."
            ],
            certificate: "/images/experience/Grastech Certificate.jpg"
        },
        {
            company: "Digital Blinc",
            logo: "/images/experience/digital_blinc_logo.jpg",
            title: "Full Stack Development Intern",
            date: "Aug 2025 – Oct 2025",
            location: "Noida, Uttar Pradesh, India",
            type: "Internship",
            description: [
                "Successfully completed a Full Stack Development internship at Digital Blinc.",
                "Covered core topics including Frontend Development, Backend Development, API integration, and Database Management.",
                "Worked on a real-world project: Online Booking Engine.",
                "Gained hands-on experience in building end-to-end web applications."
            ],
            certificate: "/images/experience/CERT-BL-2025-FS-453.jpg"
        }


    ],
    projects: [
        {
            title: "FreelanceFusion – Freelance Marketplace Platform",
            description: "Built a full-stack freelance marketplace with role-based access for clients and freelancers. Clients can post projects and hire talent, while freelancers can browse listings, send proposals, and manage profiles. Implemented secure authentication, protected APIs, and advanced search and filtering for better discoverability.",
            techStack: ["Python", "Flask", "MongoDB", "React (Vite)", "Clerk Authentication"],
            githublink: "https://github.com/Himanshusingh2301/freelancefusion",
            sitelink: "https://freelancefusion-app.onrender.com",
            image: "/images/projects/FreelanceFusion.png"
        },
        {
            title: "FeedbackFilter – Sentiment Analysis Web App",
            description: "Developed a sentiment analysis application achieving 95% accuracy with support for CSV/Excel bulk uploads. Optimized file handling to reduce processing time by 40%, improved UX with smart review input, and integrated secure user authentication for scalable usage.",
            techStack: ["Python", "Flask", "React", "Tailwind CSS", "Clerk Authentication"],
            githublink: "https://github.com/Himanshusingh2301/sentiment-analyer",
            sitelink: "https://sentiment-analyzer-7m4c.onrender.com",
            image: "/images/projects/FeedbackFilter.png"
        },
        {
            title: "RapidRider – Ride Booking Platform",
            description: "Created a real-time ride-booking platform enabling seamless rider–driver interaction. Implemented JWT-based dual-role authentication, OTP verification to reduce fraud, and optimized the ride-matching algorithm to achieve matches in under 30 seconds.",
            techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Maps API"],
            githublink: "https://github.com/Himanshusingh2301/RapidRider",
            sitelink: "https://rapidride-bb4g.onrender.com",
            image: "/images/projects/RapidRider.png"
        },
        {
            title: "Secure Password Manager Web App",
            description: "Developed a full-stack password manager application to securely store and manage website credentials. Users can add site names, URLs, and passwords, with full support for editing, deleting, and updating entries. Focused on clean UI, efficient state management, and CRUD-based backend APIs.",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
            githublink: "https://github.com/Himanshusingh2301/password_manager",
            sitelink: "https://password-manager-main-s8xq.onrender.com/",
            image: "/images/projects/Passwordmanager.png"
        }

    ],

    skills: {
        categories: [
            {
                name: "Coding Languages",
                skills: ["Python", "Java", "JavaScript", "SQL", "C", "C++"]
            },
            {
                name: "Web Development",
                skills: ["React.js", "Next.js", "Node.js", "Express.js", "AngularJS", "MongoDB"]
            },
            {
                name: "Developer Tools",
                skills: ["VS Code", "Git", "GitHub", "Postman", "AWS", "GCP", "Firebase"]
            }
        ],
        proficiency: [
            { name: "JavaScript", level: 90 },
            { name: "React.js", level: 75 },
            { name: "Python", level: 60 },
            { name: "C++", level: 85 },
            { name: "Node.js", level: 85 },
            { name: "SQL/MongoDB", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Django", level: 70 }
        ]
    },

    achievements: [

        {
            title: "HackerRank Certified Assessment",
            description: "Demonstrated proficiency in problem-solving and programming through multiple coding challenges (Issued: Sep 2025).",
            certificate: "https://www.hackerrank.com/certificates/iframe/e8c937568d91"
        },
        {
            title: "Tech Quiz Competition",
            description: "Participated in a technical quiz organized by Knowledge Institute of Technology (KIoT) (Issued: Sep 2025).",
            certificate: "https://unstop.com/certificate-preview/e4d02986-ee70-4f7e-bb7d-aa3a8c93ad1d"
        },
        {
            title: "Full-Stack with Cloud Quiz",
            description: "Participated in a quiz organized by Nexora Infotech, focusing on full-stack and cloud concepts (Issued: Sep 2025).",
            certificate: "https://unstop.com/certificate-preview/438e3701-eaed-4dd6-8b80-faa508a0564b"
        },
        {
            title: "75+ DSA Problems Solved on LeetCode",
            description: "Solved 75+ data structures and algorithms problems on LeetCode, improving problem-solving skills and coding efficiency.",
            certificate: "https://leetcode.com/u/himanshusingh230103/"
        }
    ],

    events: [
        {
            title: "Team Leader – HackDucks (SANKALAN)",
            date: "19–20 April 2025",
            description: "University of Delhi. Actively participated in the HackDucks event as part of the annual tech fest SANKALAN, organized by the Department of Computer Science. Represented Babu Banarasi Das University, Lucknow, and led a team of 4 members.",
            certificate: "/images/activity/Hackducs.jpg"
        },
        {
            title: "Participant – Kalpathon: Coding-based Hackathon",
            date: "12 April 2025",
            description: "Akhil Jyot 2025, BBD University. Actively participated in Kalpathon, a coding-based hackathon conducted under Akhil Jyot 2025 at BBD University, Lucknow.",
            certificate: "/images/activity/Kalpathon.jpg"
        },
        {
            title: "Full-Stack Developer Intern",
            date: "June 2025 - August 2025",
            description: "Learnovate Enterprises, BBD University. Built and optimized multiple web applications using React, Node.js, and MongoDB."
        },
    ]
};
