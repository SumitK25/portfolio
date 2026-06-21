export type SkillGroup = {
  category: string;
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    note: "core",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C", "VB.NET"],
  },
  {
    category: "Backend & APIs",
    note: "service layer",
    items: ["Spring Boot", ".NET Core", "Node.js", "REST APIs", "MVC Architecture"],
  },
  {
    category: "Data & Messaging",
    note: "throughput",
    items: ["PostgreSQL", "MySQL", "Apache Kafka", "Query Optimization"],
  },
  {
    category: "GenAI & Agents",
    note: "active focus",
    items: ["LangChain", "RAG", "Anthropic API", "Groq API", "Ollama", "Agentic AI"],
  },
  {
    category: "Frontend",
    note: "client layer",
    items: ["React.js", "Angular.js", "Tailwind CSS"],
  },
  {
    category: "Infra & Tooling",
    note: "ops",
    items: ["Jenkins", "JFrog Artifactory", "Apache Tomcat", "Linux", "Git", "Railway"],
  },
];
