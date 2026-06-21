export type Project = {
  slug: string;
  name: string;
  status: "shipped" | "in-progress" | "competition";
  period: string;
  summary: string;
  detail: string;
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "claim-vision-verify",
    name: "Multi-Modal Claim Verification Agent",
    status: "competition",
    period: "Jun 2026 — HackerRank Orchestrate",
    summary:
      "Vision-driven pipeline that cross-checks insurance damage photos against claim narratives and flags inconsistencies automatically.",
    detail:
      "Built for the HackerRank Orchestrate June 2026 challenge. Ingests a batch of insurance claims, runs each submitted image through a vision-capable model alongside the written description, scores narrative-image consistency, and outputs a structured verification report across all 44 claims in the set. Handled real-world input mess along the way: AVIF-to-JPEG conversion, Windows PowerShell environment quirks, and API key/config wrangling.",
    stack: ["Python", "Claude API", "Vision", "CSV Pipelines", "PowerShell"],
    featured: true,
  },
  {
    slug: "triage-agent",
    name: "Multi-Domain AI Triage Agent",
    status: "competition",
    period: "HackerRank Orchestrate",
    summary:
      "An agent that routes incoming requests across domains and prioritizes them automatically — placed in the global top tier of the hackathon.",
    detail:
      "Designed a triage system that classifies and routes multi-domain requests (support, technical, escalation) using LLaMA 3.3-70B served through the Groq API, optimizing for both latency and routing accuracy. Achieved a notable global ranking in HackerRank's Orchestrate hackathon field.",
    stack: ["Python", "Groq API", "LLaMA 3.3-70B"],
    featured: true,
  },
  {
    slug: "vera-merchant-bot",
    name: "Vera — Merchant AI Assistant",
    status: "shipped",
    period: "magicpin AI Builder Challenge",
    summary:
      "A Spring Boot-based conversational bot that helps merchants manage listings, offers, and queries — live on Railway.",
    detail:
      "Built end-to-end for magicpin's AI Builder Challenge: a Spring Boot backend wired to an LLM for natural-language merchant support, deployed to Railway for public access. Focused on reliable conversation state handling and fast response times for non-technical merchant users.",
    stack: ["Spring Boot", "Java", "LLM Integration", "Railway"],
    featured: true,
  },
  {
    slug: "ai-api-gateway",
    name: "AI-Powered API Gateway",
    status: "shipped",
    period: "Personal / dev.to write-up",
    summary:
      "A Spring Boot API gateway with an LLM-assisted routing and request-shaping layer, written up as a technical article.",
    detail:
      "A portfolio-grade gateway service in Spring Boot that uses the Groq API to assist with intelligent request routing and response shaping. Documented the architecture and reasoning in a published article on dev.to covering AI-powered API gateways.",
    stack: ["Spring Boot", "Java", "Groq API", "REST"],
  },
  {
    slug: "tata-steel-defect-detection",
    name: "Steel Defect Detection",
    status: "competition",
    period: "Tata Steel AI Hackathon",
    summary:
      "An XGBoost classifier tuned to catch rare defect classes in heavily imbalanced manufacturing data.",
    detail:
      "Tackled severe class imbalance in industrial defect-detection data using XGBoost with custom sampling and weighting strategies, built for the Tata Steel AI Hackathon. Focused on recall for rare defect categories without collapsing precision on the majority class.",
    stack: ["Python", "XGBoost", "scikit-learn", "Pandas"],
  },
  {
    slug: "election-assistant",
    name: "Election Information Assistant",
    status: "shipped",
    period: "Hackathon build",
    summary:
      "A Spring Boot service using the Anthropic API to answer structured election-related queries.",
    detail:
      "A backend assistant built in Spring Boot that integrates the Anthropic API to handle structured queries around election processes and information, built for a hackathon challenge focused on civic-tech use cases.",
    stack: ["Spring Boot", "Java", "Anthropic API"],
  },
  {
    slug: "rag-pdf-chatbot",
    name: "Local RAG PDF Chatbot",
    status: "shipped",
    period: "Personal project",
    summary:
      "A fully local retrieval-augmented chatbot that answers questions over uploaded PDFs — no external API calls.",
    detail:
      "An early AI/ML project exploring retrieval-augmented generation entirely on local infrastructure: LangChain for orchestration, Ollama for local model inference, and a Node.js service layer to handle document ingestion and chat.",
    stack: ["LangChain", "Ollama", "Node.js", "RAG"],
  },
];
