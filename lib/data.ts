export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

// ---------- Hero ----------
export const hero = {
  availability: "Open to AI product, solutions, and enablement roles",
  headlinePrefix: "I turn messy workflows into",
  headlineEmphasis: "AI products people can actually use.",
  supporting:
    "AI Solutions Engineer working across customer needs, product decisions, and technical implementation — from diagnosing workflow failures to shipping usable AI systems.",
  labels: ["AI systems", "Product workflows", "Customer enablement"],
};

export const proof = [
  { value: "3+", label: "years across AI and data" },
  { value: "1M+", label: "records analyzed" },
  { value: "25%", label: "accuracy improvement" },
  { value: "20%", label: "operational efficiency gain" },
];

export const marqueeThemes = [
  "Customer problems",
  "Product feedback",
  "AI workflows",
  "Root-cause analysis",
  "Documentation",
  "API troubleshooting",
  "Automation",
  "User enablement",
];

export const footerMarquee = [
  "Product thinking",
  "AI systems",
  "Customer enablement",
  "Technical support",
  "Workflow automation",
];

// ---------- About: career map ----------
export const careerMap = [
  {
    stage: "Data",
    sentence: "I learned to find the signal in a million records.",
    example: "Investigated patterns across 1M+ customer records at AstraZeneca to surface an unaddressed user need.",
    outcome: "A targeted intervention that improved response rates by 12%.",
  },
  {
    stage: "Systems",
    sentence: "I moved from explaining what happened to building tools that could act on it.",
    example: "Ran root-cause analysis on clinical trial data issues and coordinated QA with Big 4 consulting partners.",
    outcome: "Dataset accuracy improved by 25% before downstream decision-making.",
  },
  {
    stage: "Product",
    sentence: "I began designing around who would use the system, where, and why.",
    example: "Investigated user friction on key web applications at UT Dallas OIT and shipped fixes based on the patterns.",
    outcome: "Operational efficiency up 20%, user engagement up 25%.",
  },
  {
    stage: "Enablement",
    sentence: "I learned that adoption, documentation, and feedback loops are part of the product.",
    example: "Authored onboarding guides at People360 that translate complex AI system architecture into plain language.",
    outcome: "Fewer repeat questions, faster ramp-up for new users.",
  },
];

// ---------- How I Work: loop ----------
export const howIWork = [
  {
    step: "Listen",
    body: "Start with the actual complaint, not the assumed cause.",
    example: "Recurring complaints about reliability and cost tied to a third-party workflow tool.",
  },
  {
    step: "Trace",
    body: "Follow the workflow until the real failure point shows itself.",
    example: "Traced the issue to the third-party tooling itself, not the surrounding process.",
  },
  {
    step: "Build",
    body: "Ship the smallest system that actually resolves it.",
    example: "Replaced it with an in-house solution using Logic Apps, the Outlook API, and AES-256 encryption.",
  },
  {
    step: "Measure",
    body: "Confirm it worked in numbers, not impressions.",
    example: "Roughly $1,200 saved per quarter, with a more reliable and secure workflow in place.",
  },
];

// ---------- Projects ----------
export const projects = [
  {
    slug: "ai-product-copilot",
    title: "AI Product Copilot",
    tagline: "Turns PRDs and feature requests into implementation-ready documentation.",
    user: "Product, Engineering, and QA teams working from the same feature request.",
    problem:
      "Documentation was a repetitive bottleneck — every feature request meant someone manually writing user stories, acceptance criteria, schemas, and QA cases from scratch.",
    decision:
      "Design the workflow around how cross-functional teams actually hand work off to each other, instead of building a generic 'AI writer.'",
    solution:
      "Built an AI-powered copilot using the Claude API that generates user stories, acceptance criteria, database schemas, and QA test cases directly from a PRD or feature request.",
    outcome:
      "Product, Engineering, and QA collaborate through consistent, implementation-ready documentation instead of re-deriving it independently.",
    role: "Sole builder — product framing, prompt design, and full-stack implementation.",
    tech: ["Claude API", "React", "TypeScript", "FastAPI", "PostgreSQL"],
    flow: ["PRD", "Requirements", "User stories", "Schema", "QA cases"],
    demoUrl: "https://engineering-copilot.base44.app",
    githubUrl: null,
    badge: null,
  },
  {
    slug: "brande",
    title: "BrandE",
    tagline: "Turns fragmented marketing data into insight through semantic search and reasoning.",
    user: "Marketing teams sitting on scattered campaign and brand data with no fast way to synthesize it.",
    problem:
      "Marketing data was fragmented across sources, and turning it into an actual decision took manual digging with no consistent method.",
    decision:
      "Prioritize multi-stage reasoning over raw retrieval speed — the value is in the synthesis, not just finding a matching record.",
    solution:
      "Built an AI-powered platform using the Claude API, React, FastAPI, and Supabase/pgvector for semantic search, layered with multi-stage AI reasoning over the retrieved data.",
    outcome:
      "Validated across 5 real events and 1,000+ synthetic records at roughly $0.011 per inference cycle.",
    role: "Built the reasoning pipeline and semantic search layer as part of a hackathon team.",
    tech: ["Claude API", "React", "FastAPI", "Supabase", "pgvector", "Docker"],
    flow: ["Raw event data", "Embeddings", "Semantic search", "Reasoning pass", "Insight card"],
    demoUrl: null,
    githubUrl: null,
    badge: "Hackathon Runner-Up",
  },
  {
    slug: "ai-email-agent",
    title: "AI Email Intelligence Agent",
    tagline: "Turns a Gmail inbox into a structured, actionable operations dashboard.",
    user: "Anyone managing high email volume who needs priority and next actions surfaced automatically instead of manually triaging.",
    problem:
      "Incoming emails carried decisions, deadlines, and follow-ups that lived only in the inbox — no structured way to track or act on them without manually re-reading and summarizing.",
    decision:
      "Turn email into structured data at the moment it arrives, rather than relying on someone to manually triage it later — and build it modularly so the same pipeline could later trigger replies, calendar events, or tasks.",
    solution:
      "Built an automated n8n workflow that triggers on incoming Gmail messages, retrieves the full message, and uses Google Gemini to extract category, priority, summary, reply requirements, deadlines, and recommended actions. Extracted data is logged into a centralized Google Sheets dashboard.",
    outcome:
      "Transformed unstructured email conversations into actionable operational data, with a modular architecture ready to extend into AI-drafted replies, calendar event creation, and task management.",
    role: "Designed and built the full workflow solo — trigger, Gemini extraction schema, and the Sheets logging pipeline.",
    tech: ["n8n", "Google Gemini", "Gmail API", "Google Sheets API"],
    flow: ["Email trigger", "Fetch message", "Gemini analysis", "Structured extract", "Log to sheet"],
    demoUrl: null,
    githubUrl: "https://github.com/Dibyanshi26/ai-email-intelligence-agent",
    badge: null,
  },
];

export const enablementTeaser = {
  title: "AI Enablement Work",
  body:
    "Alongside product work, I've built the onboarding resources, prompt guidance, and office hours that help non-technical teams actually adopt AI tools day to day — the cross-functional adoption side of a system, not just the model.",
  note: "Specifics are confidential to the employer, so this is framed at the level of what the work involved, not internal detail.",
};

// ---------- Experience ----------
export const experience = [
  {
    company: "People360 by Insala",
    role: "AI Solutions Engineer",
    dates: "Jun 2025 – Present",
    impact: "Front-line technical contact for internal AI workflows, plus a $1,200/quarter in-house fix.",
    challenge:
      "Internal users were hitting production AI workflow failures, and a third-party tool was driving reliability and cost complaints.",
    actions:
      "Served as the front-line technical contact troubleshooting Python and Azure OpenAI integration failures, then partnered with engineering to replace the problematic third-party tool with an in-house solution (Logic Apps, Outlook API, AES-256 encryption). Authored onboarding documentation translating system architecture into plain language, and translated stakeholder feedback into requirements for a multi-client MVP.",
    outcome:
      "Cut third-party tooling costs by roughly $1,200/quarter, reduced repeat onboarding questions, and helped ship a production-ready multi-client MVP in six weeks.",
    tech: ["Python", "Azure OpenAI", "Microsoft Graph API", "Logic Apps", "AES-256"],
  },
  {
    company: "University of Texas at Dallas — OIT",
    role: "Technology Analyst",
    dates: "Jun 2023 – Dec 2023",
    impact: "Turned support patterns into fixes — 20% efficiency gain, 25% engagement lift.",
    challenge:
      "Recurring software distribution and device support issues were quietly costing the team time, and key web applications had unaddressed friction points.",
    actions:
      "Identified recurring patterns in support tickets and translated them into operational fixes. Investigated friction points on key web applications and delivered engagement recommendations.",
    outcome:
      "Improved operational efficiency by 20% and user engagement by 25%.",
    tech: ["SQL", "Support Operations", "Web Analytics"],
  },
  {
    company: "AstraZeneca",
    role: "Data Science Associate",
    dates: "Jun 2021 – Jul 2022",
    impact: "Found a hidden user need in 1M+ records, then fixed the data pipeline feeding it.",
    challenge:
      "A user need was hiding inside 1M+ customer records, and clinical trial data had accuracy issues affecting downstream decisions.",
    actions:
      "Investigated patterns across the full dataset to surface the unaddressed need and design a targeted intervention. Ran root-cause analysis on clinical trial data issues and coordinated QA and testing with Big 4 consulting partners.",
    outcome:
      "Improved response rates by 12% and dataset accuracy by 25% ahead of downstream decision-making.",
    tech: ["SQL", "Python", "Root-Cause Analysis"],
  },
  {
    company: "National University of Singapore",
    role: "Data Science and Deep Learning Intern",
    dates: "Oct 2019 – Jan 2020",
    impact: "Early research experience that pointed my career from analytics toward applied AI.",
    challenge: "Explore deep learning approaches to an applied research problem under academic supervision.",
    actions: "Implemented and evaluated deep learning models as part of an academic research project.",
    outcome: "Built the foundational research experience that later shaped a shift from analytics into applied AI.",
    tech: ["Python", "Deep Learning"],
  },
];

// ---------- Skills: capability map ----------
export const capabilities = [
  {
    node: "Product Support",
    items: ["Technical troubleshooting", "Root-cause analysis", "Customer support", "Product documentation", "Feedback analysis", "Cross-functional collaboration"],
  },
  {
    node: "AI & Automation",
    items: ["Clay", "n8n", "Claude API", "GPT-4o", "RAG", "Prompt engineering", "LangChain", "pgvector", "Ollama"],
  },
  {
    node: "Product Collaboration",
    items: ["Stakeholder communication", "Requirements translation", "Jira", "Notion"],
  },
  {
    node: "Engineering",
    items: ["Python", "SQL", "JavaScript", "REST APIs", "Microsoft Graph API", "FastAPI", "Azure", "Docker", "Git/GitHub", "Power BI", "Cursor"],
  },
];

// ---------- Writing ----------
export const mediumFallbackPosts = [
  {
    title: "What 1M+ Healthcare Records Taught Me About Data Quality",
    link: "https://medium.com/@dibyanshisingh611",
    pubDate: "",
    description:
      "Lessons on data quality, trust, and decision-making pulled from working with over a million patient records in a real clinical dataset.",
    thumbnail: "/images/writing/medium-cover.png",
  },
];

// ---------- Contact ----------
export const contact = {
  email: "dibyanshisingh611@gmail.com",
  phone: "(945) 244-8996",
  linkedin: "https://www.linkedin.com/in/dibyanshisingh/",
  github: "https://github.com/Dibyanshi26",
  medium: "https://medium.com/@dibyanshisingh611",
  location: "Dallas, TX",
};
