export const profile = {
  name: "Sumit Kumar",
  title: "Full Stack Developer",
  subtitle: "Backend systems · Distributed data · GenAI agents",
  location: "Kolkata, India",
  origin: "Munger, Bihar",
  email: "sumit25mgr@gmail.com",
  github: "https://github.com/SumitK25",
  linkedin: "https://linkedin.com/in/sumitkmarwebdev",
  devto: "https://dev.to/sumitk25",
  resumeHref: "/resume.pdf",
  photoHref: "/photo.jpg",
  experienceSince: "Apr 2024",
  yearsExperience: "3+",
  blurb:
    "I build backend systems and data pipelines for production telecom infrastructure, and spend my off-hours pushing GenAI agents through hackathons and competitions.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
];

export const statusServices = [
  { name: "NMSWorks — Network Mgmt API", status: "online" as const, detail: "prod · Java / Spring Boot" },
  { name: "Kafka Streaming Pipeline", status: "online" as const, detail: "real-time · Apache Kafka" },
  { name: "PostgreSQL Cluster", status: "online" as const, detail: "tuned · indexing + query opt" },
  { name: "GenAI Agent Lab", status: "building" as const, detail: "active · hackathon builds" },
];
