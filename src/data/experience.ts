export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    org: "NMSWorks Software",
    location: "Kolkata, India",
    period: "Apr 2024 — Present",
    current: true,
    points: [
      "Developed and enhanced scalable backend services within a microservices architecture for large-scale telecom network management systems.",
      "Optimized PostgreSQL queries and indexing strategies, improving data retrieval performance across large datasets.",
      "Resolved high-priority production issues impacting network stability, performance, and system reliability.",
      "Implemented and maintained CI/CD pipelines with Jenkins, with build artifacts managed in JFrog Artifactory.",
      "Deployed and monitored Java-based Apache Kafka clusters for real-time data processing; configured Apache Tomcat for production Java web services.",
    ],
    stack: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Jenkins", "Tomcat"],
  },
  {
    role: "Project Technical Support III Programmer",
    org: "ICMR — National Centre for Disease Informatics and Research",
    location: "India",
    period: "Mar 2023 — Apr 2024",
    points: [
      "Led development and maintenance of the Hospital-Based Cancer Registry (HBCR) dashboard, enabling near real-time updates for critical public health statistics.",
      "Built and enhanced the DNMS application, automating nationwide data collection workflows for diabetes research.",
      "Implemented the Central ODK Collector (COC) to support large-scale field data collection and validation across high-volume datasets.",
      "Built web applications with React, Angular, VB.NET, PHP, and MySQL for public-health data platforms used nationally.",
    ],
    stack: ["React", "Angular", "VB.NET", "PHP", "MySQL"],
  },
  {
    role: "Software Trainee",
    org: "Mountblue Technologies",
    location: "India",
    period: "Jun 2022 — Jul 2022",
    points: ["Full-stack JavaScript trainee — foundational training across the modern JS stack."],
    stack: ["JavaScript", "Full Stack"],
  },
];

export type EducationItem = {
  degree: string;
  field: string;
  school: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "MCA",
    field: "Computers",
    school: "Cochin University of Science and Technology (CUST)",
    period: "2022",
    detail: "Grade — 9/10",
  },
  {
    degree: "BCA",
    field: "Computer Applications (General)",
    school: "Tilka Manjhi Bhagalpur University, Bhagalpur",
    period: "2019",
    detail: "Marks — 67.97%",
  },
];

export const certifications: string[] = [
  "Python",
  "Java",
  "MySQL",
  "Responsive Web Design",
  "Front End Development Libraries",
  "JavaScript Algorithms & Data Structures",
  "AI/ML Certification — IIT Patna (in progress)",
];
