/**
 * Portfolio Data Configuration for Dharshini J G
 * All information is strictly verified against real academic background and GitHub repositories.
 * 
 * ℹ️ QUICK CUSTOMIZATION:
 * - Update `contact.email` with your official email address.
 * - Update `contact.linkedin` with your LinkedIn profile URL.
 * - Replace `public/resume.pdf` with your updated PDF resume.
 * - Add your Coursera verification link in `certifications[0].credentialUrl`.
 */

export const personalInfo = {
  name: "Dharshini J G",
  firstName: "Dharshini",
  lastName: "J G",
  tagline: "Turning Data Into Meaningful Insights",
  headline: "Turning Data Into Meaningful Insights",
  shortBio: "Final-year B.Sc Computer Science student (2024–2027) at Thiagarajar College, Madurai. Driven by data analytics, business intelligence, and building transparent, problem-solving tech solutions.",
  fullAbout: "I am a final-year B.Sc Computer Science student at Thiagarajar College, Madurai (graduating in 2027), targeting Data Analyst, Business Analyst, and entry-level IT roles. I enjoy dissecting complex datasets, identifying operational patterns, and converting raw figures into clear, actionable business stories using SQL, Power BI, and modern analytical tools. With a strong foundation in database systems and computational logic, I look forward to contributing to data-driven teams where analytical precision creates tangible impact.",
  status: "Available for Internships & Entry-Level Roles (2027 Graduate)",
  roles: ["Data Analyst", "Business Analyst", "Tech Enthusiast"],
  location: "Madurai, Tamil Nadu, India",
  college: "Thiagarajar College, Madurai",
  degree: "B.Sc Computer Science",
  graduationYear: "2027",
  timeline: "2024 – 2027",
};

export const contactInfo = {
  // Update these placeholders with your actual details
  email: "dharshini0757@gmail.com",
  isEmailPlaceholder: false,
  linkedin: "https://www.linkedin.com/in/dharshini-gunasekaran-5474a5319/",
  isLinkedinPlaceholder: false,
  github: "https://github.com/dharshini-75",
  location: "Madurai, Tamil Nadu, India",
  resumePath: "/resume.pdf",
};

export const skillsData = {
  categories: [
    {
      id: "analytics",
      name: "Data Analytics",
      description: "Extracting, cleaning, transforming, and visualizing datasets into strategic insights.",
      skills: [
        { name: "Power BI", highlight: "Interactive Dashboards & Visual Reports" },
        { name: "SQL", highlight: "Joins, Aggregations & Query Optimization" },
        { name: "Microsoft Excel", highlight: "Pivot Tables, VLOOKUP & Data Modeling" },
        { name: "Data Cleaning", highlight: "Null Handling, Standardization & Outliers" },
        { name: "Exploratory Data Analysis", highlight: "Trends, KPI Metrics & Distribution Insights" },
      ],
    },
    {
      id: "programming",
      name: "Programming",
      description: "Core computational foundations, procedural thinking, and programmatic data manipulation.",
      skills: [
        { name: "Python", highlight: "Beginner Level & Scripting Basics" },
        { name: "Pandas", highlight: "Basic Row Filtering & Tabular Operations" },
        { name: "Java Fundamentals", highlight: "Object-Oriented Programming & Classes" },
        { name: "C Fundamentals", highlight: "Core Procedural Logic & Memory Concepts" },
      ],
    },
    {
      id: "tools",
      name: "Web & Tools",
      description: "Development environments, relational database engines, and version control.",
      skills: [
        { name: "MySQL", highlight: "Relational Tables & Schema Queries" },
        { name: "MySQL Workbench", highlight: "Query Writing & Database Management" },
        { name: "GitHub", highlight: "Version Control & Project Repositories" },
        { name: "HTML5", highlight: "Semantic Structure & Web Standards" },
        { name: "CSS3", highlight: "Modern Responsive Styling & Layouts" },
        { name: "JavaScript", highlight: "Basics of Scripting & Interactivity" },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: "bigmart-sales-analysis",
    title: "BigMart Sales Analysis",
    subtitle: "End-to-End Sales Analytics using SQL & Power BI",
    category: "Data Analytics",
    badge: "Featured Analytics Project",
    github: "https://github.com/dharshini-75/BigMart-Sales-Analysis",
    featured: true,
    summary: "Cleaned and analyzed retail sales data across outlets and product categories using MySQL, then built an interactive Power BI dashboard featuring Executive Overview, Outlet Performance, and Product Deep Dive.",
    description: "This project examines sales performance across numerous retail outlets in the BigMart dataset. Raw transaction data was systematically cleansed and loaded into MySQL Workbench, where targeted SQL queries were written to uncover key revenue drivers, outlet performance variance, and item visibility impacts. The findings were translated into an interactive, multi-page Microsoft Power BI dashboard with dynamic KPI cards, outlet tier filters, and revenue breakdowns.",
    sections: [
      {
        title: "Page 1: Executive Sales Overview",
        details: "Provides overarching macro metrics including Total Sales, Average Ticket Value, Max/Min Sales, and record distributions across Outlet Types, Locations (Tier 1, Tier 2, Tier 3), and Fat Content.",
      },
      {
        title: "Page 2: Outlet Performance Analysis",
        details: "Compares revenue generation across outlet sizes (Small, Medium, High), establishment years, and location tiers to uncover which store setups yield optimal sales velocity.",
      },
      {
        title: "Page 3: Product Deep Dive",
        details: "Analyzes Item Visibility vs. Sales figures, Item MRP variations, and top 10 revenue-generating item categories to identify shelf-space optimization opportunities.",
      },
    ],
    tools: ["MySQL Workbench", "SQL", "Microsoft Excel", "Microsoft Power BI", "GitHub"],
    metrics: [
      { label: "Dashboard Sections", value: "3 Dedicated Views" },
      { label: "SQL Query Scripts", value: "4 Modules" },
      { label: "Data Transformations", value: "Null & Outlier Cleaning" },
      { label: "Key Tool", value: "Power BI & SQL" },
    ],
    mockupType: "powerbi",
  },
  {
    id: "finguard-ai",
    title: "FinGuard AI",
    subtitle: "Explainable AI Finance Controller — Razorpay Buildathon",
    category: "Fintech & AI Systems",
    badge: "Razorpay Buildathon Submission",
    github: "https://github.com/dharshini-75/finguard-ai",
    featured: true,
    summary: "AI-powered financial reconciliation and exception investigation system that cleans messy transaction CSVs, performs sub-second matching, detects fee anomalies, and delivers grounded Gemini AI audit trails.",
    description: "FinGuard AI was engineered as an Explainable AI Finance Controller to solve the friction of traditional financial reconciliation. Rather than simply highlighting failed rows, it ingests multi-format payment and settlement CSV statements, executes tolerance-aware deterministic matching in sub-second time, detects behavioral fee drift with Settlement Anomaly Memory, and leverages Google Gemini AI to produce structured evidence trails, root causes, and risk ratings.",
    sections: [
      {
        title: "Smart Schema Adapter & Normalizer",
        details: "Automatically resolves inconsistent column names, custom aliases, multi-currency tokens (₹, $, €), negative signs, and heterogeneous date strings across disparate statement files.",
      },
      {
        title: "Vectorized Deterministic Engine",
        details: "Applies high-speed pandas rule matching with tolerance-aware fee and GST math to auto-resolve clean transactions in sub-second execution times.",
      },
      {
        title: "Settlement Anomaly Memory & Grounded AI",
        details: "Flags anomalous fee surges and operational delays against batch baselines, feeding discrepancies to a Gemini AI agent that generates clear root-cause explanations and audit-safe next actions.",
      },
      {
        title: "Safety & Human-in-the-Loop Governance",
        details: "Enforces strict safety controls: high-risk financial exceptions are never auto-settled by AI and are immediately routed for controller review.",
      },
    ],
    tools: ["Python", "Streamlit", "Pandas", "NumPy", "Google GenAI (Gemini)", "Pydantic"],
    metrics: [
      { label: "Deterministic Engine", value: "Sub-Second Speed" },
      { label: "Exception Engine", value: "Gemini AI Grounded" },
      { label: "Anomaly Memory", value: "Baseline Drift Detection" },
      { label: "Governance", value: "Human-in-the-Loop" },
    ],
    mockupType: "fintech",
  },
  {
    id: "shempower",
    title: "SHEmpower",
    subtitle: "Women Self-Help Group Financial Management Mobile App",
    category: "Mobile Application",
    badge: "Social Impact Application",
    github: "https://github.com/dharshini-75/-shempower/",
    featured: true,
    summary: "Mobile application modernizing financial management for Women Self-Help Groups (SHGs) with role-based leader/member access, digital passbooks, reducing-balance loans, UPI verification, and Tamil support.",
    description: "SHEmpower was developed to eliminate manual, error-prone paper ledger books commonly used in Women Self-Help Groups (SHGs). Built as a cross-platform mobile application, it offers dedicated access roles for group leaders and members to transparently manage monthly savings, submit and approve internal loans, compute interest via the reducing-balance method, and verify digital UPI payments.",
    sections: [
      {
        title: "Role-Based Access & Passbook",
        details: "Secure mobile number & 4-digit PIN authentication with distinct interfaces for group leaders and general members, complete with a digital real-time passbook.",
      },
      {
        title: "Loan Management & Interest Math",
        details: "Transparent submission of loan applications, approval queues for group leaders, and automated monthly interest tracking using the reducing-balance method.",
      },
      {
        title: "UPI Verification & Community Features",
        details: "Members can submit transaction UTRs and screenshot proofs. Includes a group notice board, communication chat, and Tamil language option for grassroots accessibility.",
      },
    ],
    tools: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "Express.js", "PostgreSQL", "Capacitor"],
    metrics: [
      { label: "Target Audience", value: "Women SHG Groups" },
      { label: "Interest Method", value: "Reducing-Balance" },
      { label: "Verification", value: "UPI Screenshot & UTR" },
      { label: "Accessibility", value: "Tamil Language Option" },
    ],
    mockupType: "mobile",
  },
];

export const educationData = [
  {
    institution: "Thiagarajar College, Madurai",
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    period: "2024 – 2027",
    status: "Final-Year Student (Graduating 2027)",
    description: "Pursuing in-depth academic training in core computer science, database architectures, algorithmic problem-solving, and analytical computing.",
    keyAreas: [
      "Relational Database Management Systems (RDBMS & SQL)",
      "Data Structures & Object-Oriented Programming (Java / C)",
      "Web Technologies & Scripting",
      "Quantitative & Statistical Foundations",
    ],
    score: "81.16%",
    scoreDetails: "81.16% (Semesters 1–4 Cumulative)",
    note: "Academic Score: 81.16% across all 4 completed semesters.",
  },
];

export const certificationsData = [
  {
    title: "IBM Data Analyst Professional Certificate",
    issuer: "IBM (via Coursera)",
    credentialUrl: "", // Optional & editable placeholder
    description: "Comprehensive professional curriculum covering end-to-end data analysis workflows: spreadsheet data manipulation, SQL database querying, Python scripting for data science, and interactive dashboard creation.",
    topics: [
      "Data Analysis with Python",
      "SQL for Data Science",
      "Excel Data Analysis & Modeling",
      "Data Visualization & Dashboards",
      "Exploratory Data Analysis",
    ],
    verificationNote: "To link your verified certificate, add your Coursera credential URL in `src/data/portfolioData.js`.",
  },
];
