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
    dashboards: [
      {
        id: "executive",
        title: "Executive Sales Overview",
        tabLabel: "Executive Overview",
        subtitle: "Overall sales performance ($18.59M) and key business insights",
        image: "/projects/bigmart-executive-overview.jpg",
        caption: "Executive Sales Overview dashboard tracking $18.59M total sales, 8,523 records, sales by outlet location, fat content distribution, and top 10 item types.",
      },
      {
        id: "outlet",
        title: "Outlet Performance Analysis",
        tabLabel: "Outlet Analysis",
        subtitle: "Sales by outlet, size, and establishment timeline",
        image: "/projects/bigmart-outlet-performance.jpg",
        caption: "Outlet Performance Analysis dashboard comparing sales across outlet sizes (Medium, Small, High), establishment years (1985-1998), and location tiers.",
      },
      {
        id: "product",
        title: "Product Performance Analysis",
        tabLabel: "Product Analysis",
        subtitle: "Average price, item visibility, and top 10 best sellers",
        image: "/projects/bigmart-product-performance.jpg",
        caption: "Product Performance Analysis dashboard evaluating average product prices, visibility percentages, top 10 best-selling items, and granular sales records.",
      },
    ],
    mockupType: "powerbi",
  },
  {
    id: "uber-ride-analysis",
    title: "Uber Ride Analysis",
    subtitle: "Ride-Booking Analytics using Python, SQL & Power BI",
    category: "Data Analytics",
    badge: "150K Records Analysis",
    github: "https://github.com/dharshini-75/uber-ride-analysis",
    featured: true,
    summary: "Analyzed a ride-booking dataset containing approximately 150,000 records to understand booking trends, customer and driver cancellations, peak booking hours, vehicle performance, and completed ride value. Performed data cleaning and exploratory data analysis using Python and Pandas, wrote business-focused SQL queries in MySQL, and developed interactive Power BI dashboards to communicate key business insights.",
    description: "Analyzed a ride-booking dataset containing approximately 150,000 records to understand booking trends, customer and driver cancellations, peak booking hours, vehicle performance, and completed ride value. Performed data cleaning and exploratory data analysis using Python and Pandas, wrote business-focused SQL queries in MySQL, and developed interactive Power BI dashboards to communicate key business insights.",
    dashboards: [
      {
        id: "overview",
        title: "Overview",
        tabLabel: "Overview",
        subtitle: "150K Bookings • 62% Completion • 25% Cancellation Rate",
        image: "/projects/uber-ride-overview.jpg",
        caption: "Overview dashboard highlighting 150.00K total bookings, 62% completion rate, booking status distribution, hourly booking trend, and monthly seasonality.",
      },
      {
        id: "cancellations",
        title: "Cancellation Analysis",
        tabLabel: "Cancellation Analysis",
        subtitle: "Driver Cancellations (18%) vs Customer Cancellations (7%)",
        image: "/projects/uber-cancellation-analysis.jpg",
        caption: "Cancellation Analysis dashboard presenting driver cancellation rate (18%), customer cancellation rate (7%), primary driver reasons, and cancellations broken down across vehicle types.",
      },
      {
        id: "revenue",
        title: "Revenue Analysis",
        tabLabel: "Revenue Analysis",
        subtitle: "₹47.26M Total Revenue • 93K Completed Rides • ₹508 Avg Booking Value",
        image: "/projects/uber-revenue-analysis.jpg",
        caption: "Revenue & Vehicle Performance dashboard detailing ₹47.26M revenue across payment methods (UPI, Cash, Wallets), vehicle revenue contributions, and booking value distribution.",
      },
    ],
    sections: [
      {
        title: "Booking Trends & Peak Hours",
        details: "Analyzed booking trends and identified peak booking hours.",
      },
      {
        title: "Cancellation Patterns",
        details: "Investigated customer and driver cancellation patterns.",
      },
      {
        title: "Vehicle Performance",
        details: "Compared performance across different vehicle types.",
      },
      {
        title: "Completed Ride Values & Payments",
        details: "Analyzed completed ride values and payment methods.",
      },
      {
        title: "Business Performance Queries",
        details: "Used SQL queries to investigate business performance.",
      },
      {
        title: "Interactive Dashboards",
        details: "Developed interactive Power BI dashboards to present analytical findings.",
      },
    ],
    tools: ["Python", "Pandas", "Matplotlib", "MySQL", "SQL", "Power BI"],
    metrics: [
      { label: "Dataset Size", value: "~150,000 Records" },
      { label: "EDA & Cleaning", value: "Python & Pandas" },
      { label: "Query Engine", value: "MySQL" },
      { label: "Visualization", value: "Power BI Dashboards" },
    ],
    mockupType: "powerbi",
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
