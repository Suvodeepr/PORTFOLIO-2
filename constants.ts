import { ProfileData } from './types';

export const INITIAL_PROFILE: ProfileData = {
  name: "SUVODEEP ROY",
  tagline: "M.C.A Graduate in Computer Science",
  heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  aboutImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  contact: {
    phone: "+91 9874164427",
    email: "SUVODEEPR94@GMAIL.COM",
    linkedin: "https://www.linkedin.com/in/suvodeep-roy-507434217",
    location: "Kolkata, West Bengal",
    dob: "10/03/2002",
    nationality: "INDIAN"
  },
  summary: "I am a dedicated and motivated MCA graduate with a focus on software development and data analysis. I want to use my technical skills, problem-solving ability, and love for technology in a job that is challenging and creative. I am always ready to learn new things and grow with the latest technologies.",
  education: [
    {
      degree: "MASTER OF COMPUTER APPLICATION (M.C.A)",
      institution: "Netaji Subhash Engineering College",
      period: "10/2024 - 07/2026",
      score: "SGPA- 8.40",
      location: "KOLKATA"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "CALCUTTA UNIVERSITY",
      period: "08/2020 - 06/2024",
      score: "CGPA - 6.690",
      location: "Kolkata, West Bengal"
    },
    {
      degree: "Higher Secondary (10+2)",
      institution: "RAJPUR VIDYANIDHI HIGH SCHOOL",
      period: "01/2019 - 06/2021",
      score: "MARKS - 68.9%",
      location: "Kolkata, West Bengal"
    },
    {
      degree: "Secondary (10th)",
      institution: "HARINAVI D.V.A.S HIGH SCHOOL",
      period: "01/2018 - 06/2019",
      score: "MARKS - 62.25%",
      location: "Kolkata, West Bengal"
    }
  ],
  projects: [
    {
      title: "CONTINUOUS BEHAVIOURAL AUTHENTICATION FOR MALICIOUS SESSION",
      period: "12/2025 - 01/2026",
      description: "Developed a continuous behavioural authentication system to detect and prevent malicious user sessions in real time.",
      details: [
        "Analyzed user behavior patterns such as keystroke dynamics, mouse movement, and session activity to identify anomalies."
      ]
    },
    {
      title: "E-commerce Website Development",
      period: "01/2023 - 03/2023",
      description: "E-commerce Website Development project for creating a user-friendly shopping web platform.",
      details: [
        "Created a complete online shopping website using the Java Spring framework.",
        "The website lets users log in, browse products, add items to their cart, and place orders"
      ]
    }
  ],
  achievements: [
    {
      title: "Enhancing User Retention",
      description: "Increased website user retention by 40% through enhanced UX design in ecommerce project"
    },
    {
      title: "Library System Optimization",
      description: "Reduced library system errors by 50% with improved database management"
    },
    {
      title: "Code Efficiency Achievement",
      description: "Achieved 95% code efficiency in Java Spring ecommerce project"
    },
    {
      title: "Project Completion Efficiency",
      description: "Completed library management project 2 weeks ahead of schedule"
    }
  ],
  skills: [
    "Data Structures", "Java Spring", "Java", "Python",
    "HTML", "MongoDB", "CSS", "JavaScript", "Linux",
    "SQL", "C AND C++", "FULL STACK WEB DEVELOPMENT (MERN)"
  ]
};