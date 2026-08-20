import manojPhoto from "./assets/1776158946160.jpg";
import salvinPhoto from "./assets/file_0000000097c071f8b58e0a75d26be8e1.png";

// ---------------------------------------------------------------------------
// EDIT ME FIRST: brand name + tagline shown across the whole site.
// ---------------------------------------------------------------------------
export const BRAND = {
  name: "BrightSite",
  short: "BS",
  tagline: "Build Better. Grow Faster.",
};

export const TEAM = [
  {
    name: "Manoj B Kunachi",
    role: "Full-Stack Developer",
    initials: "MK",
    photo: manojPhoto,
    location: "Belagavi, Karnataka",
    email: "manojkunachi7774@gmail.com",
    phone: "+91 9972590329",
    linkedin: "https://linkedin.com/in/ManojKunachi",
    summary:
      "Full-stack developer with hands-on experience across five internships spanning healthcare, transport, and quiz platforms. Comfortable across the full stack, from responsive React frontends to PHP/Node backends and optimized MySQL/MongoDB schemas.",
    focus: ["Backend & database architecture", "PHP / Node.js APIs", "MVC & role-based auth"],
    skills: {
      Languages: ["Java", "C", "Python", "JavaScript (ES6+)", "PHP", "SQL"],
      Frontend: ["HTML5", "CSS3", "React.js", "Bootstrap", "Responsive Design"],
      Backend: ["Node.js", "Express.js", "PHP", "JSP", "Java Servlets", "RESTful APIs"],
      Database: ["MySQL", "MongoDB", "Query Optimization"],
      "Tools & Practices": ["Git/GitHub", "MVC", "Role-Based Auth", "Session Management", "Code Reviews"],
    },
    education: [
      { degree: "MCA — Visvesvaraya Technological University, Belagavi", years: "2024–2026", detail: "CGPA 8.2" },
      { degree: "BCA — Govindram Seksaria Science College, Belagavi", years: "2021–2024", detail: "CGPA 6.8" },
    ],
    experience: [
      { role: "Trainee Developer", org: "Online Instruments (On-site)", period: "Jun 2026 – Jul 2026" },
      { role: "IT Intern – Full Stack Development", org: "ITIVAT (Remote)", period: "Jan 2026 – May 2026" },
      { role: "Full Stack Development Intern", org: "Softmusk Info Pvt. Ltd. (On-site)", period: "Jan 2026 – Apr 2026" },
      { role: "Web Development Intern", org: "Edureka (On-site)", period: "Apr 2024 – May 2024" },
      { role: "Web Development Intern", org: "Quizaro (Remote)", period: "Aug 2023 – Oct 2023" },
    ],
    certifications: [
      "TCS iON Career Edge – IT Primer",
      "TCS iON Career Edge – Young Professional",
      "Web Designer – ITIVAT",
      "SQL Essentials – Edureka",
      "Web Development – Quizaro",
      "FullStack Web Development – Softmusk",
    ],
  },
  {
    name: "Salvin Dsouza",
    role: "Full-Stack Developer & UI/UX",
    initials: "SD",
    photo: salvinPhoto,
    location: "Belagavi, Karnataka",
    email: "salvindsouza9@gmail.com",
    phone: "+91-9284812726",
    linkedin: "https://linkedin.com/in/salvin-dsouza",
    github: "https://github.com/SalvinDsouza09",
    summary:
      "MCA graduate with hands-on experience in full-stack web development and UI/UX design — building responsive, scalable applications with React, TypeScript, and Node.js, backed by Docker and cloud/deployment fundamentals.",
    focus: ["Frontend & UI/UX", "React.js / TypeScript", "Deployment (Vercel, Docker)"],
    skills: {
      Languages: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Java"],
      Frontend: ["React.js", "Bootstrap 5", "EJS", "Responsive Design"],
      Backend: ["Node.js", "Express.js", "REST APIs"],
      Database: ["MySQL", "MongoDB", "Prisma ORM"],
      "Tools & Practices": ["Git/GitHub", "Docker", "Vercel", "Cloud Basics"],
    },
    education: [
      { degree: "MCA — Visvesvaraya Technological University, Belagavi", years: "Graduated 2026", detail: "CGPA 8.4/10" },
      { degree: "BCA — Raja Lakhamagouda Science Institute, Belagavi", years: "Graduated 2024", detail: "CGPA 7.6/10" },
    ],
    experience: [
      { role: "Web Designing Intern", org: "ITiVAT (Freelancing)", period: "Jan 2026 – May 2026" },
      { role: "Full Stack Development Intern", org: "Softmusk Info Pvt. Ltd.", period: "Jan 2026 – Apr 2026" },
      { role: "Web Development Intern", org: "Unified Mentor Pvt. Ltd.", period: "May 2024 – Jun 2024" },
    ],
    certifications: [
      "TCS iON Career Edge – Young Professional",
      "TCS iON Career Edge – IT Primer",
      "Fundamentals of Docker & Kubernetes – Scaler",
      "Google Digital Marketing & E-Commerce Certification – Google",
      "Google Cybersecurity Certification – Google",
      "GenAI Powered Data Analytics Simulation – Tata",
    ],
  },
];

export const SERVICES = [
  {
    title: "Speed & Security Audit",
    detail:
      "A free first look at any existing site — load-time breakdown, mobile performance, HTTPS/SSL status, and the security gaps most attackers look for first.",
  },
  {
    title: "Fast Website Builds",
    detail:
      "New sites built on a modern stack (React, optimized assets, clean database queries) so pages load quickly and rank better instead of losing visitors before they arrive.",
  },
  {
    title: "Security Hardening",
    detail:
      "HTTPS enforcement, role-based authentication, session management, input validation, and dependency updates — the fundamentals that keep a site from becoming the next headline.",
  },
  {
    title: "Ongoing Care",
    detail:
      "Monitoring, backups, and updates after launch, so performance and security don't quietly decay once the site goes live.",
  },
];

export const PROJECTS = [
  {
    title: "Book Management System",
    owner: "Salvin Dsouza",
    stack: "React.js, JavaScript, REST API, Vercel",
    description:
      "A responsive book management app with full CRUD functionality, reusable React components, and REST API integration — deployed live on Vercel.",
    link: "https://book-management-system-ebon-three.vercel.app/",
    linkLabel: "View live demo",
  },
  {
    title: "Hospital Management System",
    owner: "Manoj B Kunachi",
    stack: "PHP, MySQL, JavaScript",
    description:
      "A healthcare management platform for patient records and appointment scheduling, with an optimized MySQL schema for faster queries.",
  },
  {
    title: "Project Management System with Prediction & Analysis",
    owner: "Salvin Dsouza",
    stack: "Node.js, Express.js, TypeScript, Prisma ORM, MySQL",
    description:
      "A full-stack MCA project management system with project-similarity detection, technology suggestions, and automated guide allocation via a round-robin algorithm.",
  },
  {
    title: "University Vehicle Management System",
    owner: "Manoj B Kunachi",
    stack: "PHP, GPS, APIs, MVC",
    description:
      "A multi-module transport management system with role-based authentication, session management, route scheduling, vehicle tracking, and booking — built on MVC architecture.",
  },
  {
    title: "Real-Time Transport Tracker",
    owner: "Manoj B Kunachi",
    stack: "JavaScript, GPS, APIs",
    description:
      "A live bus-tracking prototype built by a 4-member team within a 24-hour hackathon deadline (Diyanta-25, VTU MCA Hackathon), with live GPS tracking and route visualization.",
  },
  {
    title: "College Admission Portal",
    owner: "Salvin Dsouza",
    stack: "HTML, CSS, JavaScript, MySQL",
    description:
      "A student registration and application-tracking web app with an optimized database schema and a responsive, cross-device UI.",
  },
];

// ---------------------------------------------------------------------------
// EDIT ME: these are suggested starting numbers based on typical small-agency
// / freelancer rates in India for 2026, priced competitively for a new
// two-person team. Adjust freely — nothing here is final.
// ---------------------------------------------------------------------------
export const PRICING = {
  note: "Starting prices for typical projects — final quotes depend on scope and are confirmed after a free audit.",
  plans: [
    {
      name: "Starter",
      price: "₹7,999",
      unit: "one-time",
      tagline: "A fast, secure online presence for a single-location business.",
      features: [
        "Mobile-responsive design",
        "Basic on-page SEO",
        "Contact form",
        "Social media links integration",
        "Basic favicon + branding polish (logo provided by client)",
        "1 month free support after launch",
        "Additional features: ₹499 each",
      ],
      highlight: false,
    },
    {
      name: "Business",
      price: "₹11,999",
      unit: "one-time",
      tagline: "For businesses that need more pages, content control, and speed.",
      features: [
        "Custom design (not a template)",
        "Content editing access (CMS)",
        "Performance optimization (sub-2s load target)",
        "Security hardening (auth, sessions, backups)",
        "WhatsApp click-to-chat button",
        "Google Maps embed",
        "Social media links integration",
        "Premium logo design + favicon + branding polish",
        "3 months free support after launch",
        "Additional features: ₹499 each",
      ],
      highlight: true,
    },
    {
      name: "Premium / Custom",
      price: "From ₹24,999",
      unit: "custom quote",
      tagline: "E-commerce, web apps, or anything with custom backend logic.",
      features: [
        "Everything in Starter + Business included",
        "Online store or custom web application",
        "Custom backend & database design",
        "Third-party API integrations",
        "Advanced security (rate limiting, monitoring)",
        "Dedicated custom domain",
        "Dedicated project support",
        "Support plan tailored to your launch",
        "Additional features: ₹499 each",
      ],
      highlight: false,
    },
    {
      name: "Final-Year Project",
      badge: "For Students",
      price: "₹6,999",
      unit: "starting price",
      tagline: "Build your final-year project with real development support.",
      note: "Final price may vary based on project complexity. Advanced features like AI/ML, complex dashboards, mobile apps, or large systems require custom quotation.",
      features: [
        "Project idea (student-provided) and requirement discussion",
        "Basic UI/UX design",
        "Frontend and backend development where required",
        "Database integration",
        "Basic authentication where required",
        "Testing and bug fixing",
        "Deployment assistance",
        "Documentation guidance",
        "Project walkthrough and explanation",
        "Viva/project presentation guidance",
      ],
      ctaLabel: "Discuss Your Project →",
      disclaimer:
        "Academic Responsibility: BrightSite provides software development assistance, technical guidance, documentation support and project mentorship. Students are responsible for understanding their project and complying with their institution's academic policies and submission requirements.",
      highlight: false,
    },
    {
      name: "Content & Photoshoot",
      price: "₹5,999",
      unit: "per package",
      tagline: "Brand visuals to pair with your new website — reel + photoshoot in one shoot day.",
      features: [
        "1 reel shooting",
        "Basic reel editing",
        "Brand photoshoot",
        "10+ feedback points from our team",
      ],
      highlight: false,
    },
  ],
};

export const CONTACT = {
  intro:
    "Have a website that's slow, insecure, or just needs a rebuild? Reach out to either of us — we work as one team.",
  email: "brightsite0fficial2@gmail.com",
};

// ---------------------------------------------------------------------------
// EDIT ME: review before publishing — the address/jurisdiction are inferred
// from team location data, not a confirmed registered business address.
// ---------------------------------------------------------------------------
export const TERMS = {
  updated: "19 August 2026",
  intro: [
    'Welcome to BrightSite ("we", "us", "our", or "the Developer"). We provide website design, development, deployment, maintenance, and related digital services to businesses, organizations, and individuals.',
    "These Terms & Conditions (\"Terms\") govern your use of our website and your interaction with or purchase of services from us.",
    "By accessing our website, requesting a quotation, engaging our services, approving a proposal, making a payment, or otherwise proceeding with a project, you acknowledge that you have read and understood these Terms and agree to be bound by them.",
    "If you do not agree with these Terms, please do not use our website or engage our services.",
  ],
  sections: [
    {
      heading: "1. About Us",
      blocks: [
        { p: "BrightSite is an independent web development team operated by:" },
        { p: "Manoj B Kunachi" },
        { p: "Salvin Dsouza" },
        { p: "Email: brightsite0fficial2@gmail.com" },
        { p: "Phone/WhatsApp: +91 9972590329 (Manoj) · +91-9284812726 (Salvin)" },
        { p: "Address: Belagavi, Karnataka, India" },
        {
          p: "Where required, the legal entity, proprietor, partnership, company, or other contracting party will be identified separately in the applicable quotation or Client Agreement.",
        },
      ],
    },
    {
      heading: "2. Services We Provide",
      blocks: [
        { p: "Depending on the project and quotation, our services may include:" },
        {
          ul: [
            "Website design and development",
            "Responsive/mobile-friendly website development",
            "Business and corporate websites",
            "Portfolio websites",
            "Landing pages",
            "E-commerce websites",
            "Custom web applications",
            "Frontend and backend development",
            "Database development",
            "Website redesign and improvements",
            "Website performance optimization",
            "Basic technical SEO implementation",
            "Basic security hardening",
            "Website deployment",
            "Domain and hosting assistance",
            "Website maintenance and technical support",
            "Integration with selected third-party services and APIs",
          ],
        },
        {
          p: "The exact services included in a particular project will be determined by the applicable quotation, proposal, Statement of Work, or Client Agreement.",
        },
      ],
    },
    {
      heading: "3. Website Information and Portfolio",
      blocks: [
        {
          p: "The information, project descriptions, pricing, examples, technologies, and other content displayed on our website are provided for general informational and promotional purposes.",
        },
        { p: "Portfolio projects may represent:" },
        {
          ul: [
            "Completed client work;",
            "Academic or demonstration projects;",
            "Internal projects;",
            "Personal projects;",
            "Conceptual or prototype work; or",
            "Work completed as part of an internship, employment, collaboration, or other engagement.",
          ],
        },
        {
          p: "Where a portfolio project is subject to confidentiality or other restrictions, we will not intentionally disclose confidential information.",
        },
        {
          p: "Portfolio examples do not guarantee that a future project will have identical functionality, design, performance, results, or pricing.",
        },
      ],
    },
    {
      heading: "4. Project Proposals and Quotations",
      blocks: [
        {
          p: "Before commencing a paid project, we may provide the client with a quotation, proposal, project scope, or Statement of Work.",
        },
        { p: "The proposal may specify:" },
        {
          ul: [
            "Project scope;",
            "Deliverables;",
            "Number of pages;",
            "Features and functionality;",
            "Technology stack;",
            "Timeline;",
            "Project price;",
            "Payment schedule;",
            "Revision limits;",
            "Hosting/domain arrangements;",
            "Maintenance arrangements; and",
            "Other project-specific conditions.",
          ],
        },
        {
          p: "A quotation is valid only for the period stated in the quotation. If no validity period is specified, we may revise the quotation before the client formally accepts it.",
        },
        {
          p: "A project is not considered confirmed merely because a client has expressed interest verbally or through an initial conversation.",
        },
      ],
    },
    {
      heading: "5. Project Scope",
      blocks: [
        { p: "We will deliver the features and services specifically included in the agreed project scope." },
        { p: "Requests outside the agreed scope may include:" },
        {
          ul: [
            "Additional pages;",
            "Additional features;",
            "New integrations;",
            "Additional forms;",
            "New dashboards;",
            "E-commerce functionality;",
            "Additional animations;",
            "Major redesigns;",
            "Additional rounds of revisions;",
            "New content creation;",
            "Additional languages;",
            "Mobile applications;",
            "Additional third-party integrations; or",
            "Other functionality not included in the original agreement.",
          ],
        },
        { p: "Such work may be quoted and charged separately." },
        {
          p: "We reserve the right to refuse or separately price requests that materially increase the project's complexity, development time, or resources.",
        },
      ],
    },
    {
      heading: "6. Pricing",
      blocks: [
        { p: "Our website may display indicative or starting prices." },
        { p: "For example, packages may be displayed as:" },
        {
          ul: [
            "Starter — starting from ₹7,999;",
            "Business — starting from ₹11,999;",
            "Premium/Custom — starting from ₹24,999.",
          ],
        },
        { p: "These prices are starting prices and are not automatically applicable to every project." },
        {
          p: "The final project price depends on the actual requirements, scope, complexity, integrations, content, hosting, domain, third-party services, timeline, and other requirements.",
        },
        { p: "The final agreed price will be stated in the quotation, proposal, invoice, or Client Agreement." },
        { p: "Unless specifically stated otherwise, third-party expenses are not included in our development fee." },
      ],
    },
    {
      heading: "7. Payment Terms",
      blocks: [
        { p: "The applicable payment schedule will be specified in the project quotation or Client Agreement." },
        { p: "Unless otherwise agreed, our standard structure may be:" },
        { ul: ["An advance payment before development begins;", "The remaining balance before final handover or production launch."] },
        {
          p: "We are not required to commence or continue development until the applicable payment or milestone has been received.",
        },
        {
          p: "For smaller projects, we may use a simplified payment structure such as 50% advance and 50% before final launch.",
        },
        { p: "Payment terms may vary depending on project size and circumstances." },
      ],
    },
    {
      heading: "8. Late Payments",
      blocks: [
        { p: "If a payment becomes overdue, we may temporarily suspend:" },
        {
          ul: [
            "Development work;",
            "Revisions;",
            "Deployment;",
            "Website handover;",
            "Source-code delivery where applicable; or",
            "Maintenance/support services.",
          ],
        },
        { p: "Any resulting delay to the project timeline may be added to the delivery schedule." },
        { p: "We will make reasonable efforts to communicate with the client before taking significant action." },
      ],
    },
    {
      heading: "9. Client Responsibilities",
      blocks: [
        { p: "The client is responsible for providing accurate and timely information required for the project." },
        { p: "This may include:" },
        {
          ul: [
            "Company information;",
            "Logo and branding;",
            "Text/content;",
            "Images and videos;",
            "Product/service information;",
            "Contact details;",
            "Legal information;",
            "Domain access;",
            "Hosting access;",
            "API credentials;",
            "Third-party account access; and",
            "Other information reasonably required to complete the project.",
          ],
        },
        {
          p: "The client confirms that they have the legal right to provide materials supplied to us for use in the project.",
        },
      ],
    },
    {
      heading: "10. Client-Provided Content",
      blocks: [
        {
          p: "We are not responsible for legal claims arising from content supplied by the client, including but not limited to:",
        },
        {
          ul: [
            "Copyright infringement;",
            "Trademark infringement;",
            "False or misleading claims;",
            "Defamatory statements;",
            "Unauthorized images;",
            "Unauthorized testimonials;",
            "Illegal products or services; or",
            "Incorrect business information.",
          ],
        },
        {
          p: "The client remains responsible for ensuring that their business content is accurate, lawful, and appropriately licensed.",
        },
        {
          p: "Where requested, we may assist with content formatting or implementation, but this does not transfer legal responsibility for the underlying content to us.",
        },
      ],
    },
    {
      heading: "11. Design and Revisions",
      blocks: [
        {
          p: "The project may include a defined number of revision rounds as specified in the quotation or Client Agreement.",
        },
        { p: "A revision generally means a reasonable modification to an existing agreed design or implementation." },
        { p: "The following may be treated as additional work:" },
        {
          ul: [
            "Complete redesigns;",
            "New page types;",
            "New functionality;",
            "Significant changes after approval;",
            "Changes caused by new requirements;",
            "Changes to previously approved content/design; or",
            "Requests exceeding the agreed revision limit.",
          ],
        },
        { p: "Additional work will be communicated to the client before significant additional development begins." },
      ],
    },
    {
      heading: "12. Client Review and Approval",
      blocks: [
        { p: "The client will have an opportunity to review the website or applicable deliverables." },
        {
          p: "The client should provide consolidated feedback within the review period specified in the project agreement.",
        },
        {
          p: "Where no review period is specified, the client should provide feedback within a reasonable period after the deliverable is made available for review.",
        },
        { p: "We will address genuine defects or deviations from the agreed scope." },
        { p: "A request that changes the agreed scope is not automatically considered a defect." },
      ],
    },
    {
      heading: "13. Project Timeline",
      blocks: [
        {
          p: "Any timeline provided by us is based on the assumptions and dependencies stated in the quotation or project agreement.",
        },
        { p: "Delivery may be affected by:" },
        {
          ul: [
            "Delayed client feedback;",
            "Delayed content submission;",
            "Delayed approvals;",
            "Missing credentials;",
            "Third-party service issues;",
            "Changes in project scope;",
            "Hosting/domain issues;",
            "API limitations;",
            "Unforeseen technical problems; or",
            "Other circumstances outside our reasonable control.",
          ],
        },
        { p: "Client-caused delays may result in a corresponding extension of the project timeline." },
      ],
    },
    {
      heading: "14. Website Hosting and Domain",
      blocks: [
        { p: "Unless explicitly included in the project price, domain registration and hosting are separate expenses." },
        { p: "Where we assist with domain or hosting:" },
        {
          ul: [
            "The client should preferably remain the owner/account holder;",
            "Recurring hosting and domain charges remain the client's responsibility unless otherwise agreed;",
            "Third-party hosting providers are subject to their own terms;",
            "We are not responsible for outages, policy changes, suspension, pricing changes, or technical failures caused by third-party providers.",
          ],
        },
        { p: "We may assist with migration or configuration where reasonably possible." },
      ],
    },
    {
      heading: "15. Third-Party Services",
      blocks: [
        { p: "Websites may depend on third-party products or services, including:" },
        {
          ul: [
            "Payment gateways;",
            "Maps;",
            "Email providers;",
            "WhatsApp services;",
            "Analytics platforms;",
            "Hosting providers;",
            "APIs;",
            "Plugins;",
            "Libraries;",
            "Fonts;",
            "CDN services;",
            "CAPTCHA services; or",
            "Other external services.",
          ],
        },
        {
          p: "We do not control third-party services and cannot guarantee their continued availability, pricing, functionality, API compatibility, or policies.",
        },
        {
          p: "If a third-party service changes or becomes unavailable, additional work may be required to replace or modify the integration.",
        },
        { p: "Third-party fees remain the client's responsibility unless specifically included in the project quotation." },
      ],
    },
    {
      heading: "16. Security",
      blocks: [
        {
          p: "We aim to follow reasonable development and security practices appropriate to the agreed project scope.",
        },
        {
          p: "However, no website, server, software, network, or internet-connected system can be guaranteed to be completely secure or immune from attacks.",
        },
        { p: "We do not guarantee:" },
        {
          ul: [
            "Zero vulnerabilities;",
            "Zero downtime;",
            "Protection against every cyberattack;",
            "Permanent compatibility with all future software;",
            "Security of third-party services; or",
            "Security of infrastructure controlled by the client or another provider.",
          ],
        },
        { p: "Security-related work will be limited to the scope specifically agreed for the project." },
      ],
    },
    {
      heading: "17. Website Performance",
      blocks: [
        { p: "We aim to develop websites that are reasonably optimized for performance." },
        { p: "Actual performance may depend on:" },
        {
          ul: [
            "Hosting;",
            "Server configuration;",
            "Images and media;",
            "Third-party scripts;",
            "Plugins;",
            "Internet connection;",
            "Browser/device;",
            "Client modifications;",
            "Traffic levels; and",
            "Other external factors.",
          ],
        },
        {
          p: "Therefore, we do not guarantee a specific PageSpeed, Core Web Vitals score, search ranking, or loading time unless a specific measurable target is expressly included in the project agreement.",
        },
      ],
    },
    {
      heading: "18. Search Engine Optimization and Marketing Results",
      blocks: [
        {
          p: "Where basic SEO is included, it generally refers to technical or on-page implementation stated in the project scope.",
        },
        { p: "We do not guarantee:" },
        {
          ul: [
            "Google rankings;",
            "Search-engine indexing;",
            "Number of visitors;",
            "Leads;",
            "Sales;",
            "Advertising performance;",
            "Conversion rates;",
            "Social-media growth; or",
            "Any specific business revenue.",
          ],
        },
        {
          p: "Website development can support a client's marketing activities, but business results depend on numerous factors outside our control.",
        },
      ],
    },
    {
      heading: "19. Intellectual Property",
      blocks: [
        {
          p: "Unless otherwise stated in writing, the client will receive the rights specified in the applicable project agreement after full payment of all amounts due.",
        },
        { p: "The transfer of rights does not automatically include:" },
        {
          ul: [
            "Third-party software;",
            "Open-source software;",
            "Third-party libraries;",
            "Stock images;",
            "Fonts;",
            "External APIs;",
            "Developer tools;",
            "Pre-existing code;",
            "Reusable frameworks;",
            "Internal development systems; or",
            "General-purpose components used across multiple projects.",
          ],
        },
        {
          p: "We retain ownership of our pre-existing tools, frameworks, reusable components, development processes, and general technical know-how.",
        },
      ],
    },
    {
      heading: "20. Portfolio and Promotional Use",
      blocks: [
        {
          p: "Unless the client has specifically requested confidentiality in writing and we have agreed to it, we may display completed work in our:",
        },
        { ul: ["Portfolio;", "Website;", "Social media;", "Presentations;", "Proposals; and", "Other reasonable marketing materials."] },
        { p: "We will not intentionally disclose confidential business information merely for promotional purposes." },
        { p: "If a client requires the project to remain confidential, this should be agreed before or during project engagement." },
      ],
    },
    {
      heading: "21. Source Code and Handover",
      blocks: [
        {
          p: "The scope of source-code delivery, repositories, credentials, deployment files, documentation, and other technical handover materials will be specified in the project agreement.",
        },
        { p: "Final handover may be subject to receipt of all outstanding payments." },
        {
          p: "Where third-party services are involved, their credentials and account ownership will be handled according to the agreed arrangement.",
        },
      ],
    },
    {
      heading: "22. Bug Fixes and Post-Launch Support",
      blocks: [
        {
          p: "Unless otherwise stated, we may provide a limited post-launch bug-fix period for defects attributable to our implementation.",
        },
        { p: "A bug means a failure of an agreed feature to operate substantially as specified." },
        { p: "The following are generally not considered bugs:" },
        {
          ul: [
            "New features;",
            "Design preferences;",
            "Content changes;",
            "Client modifications;",
            "Hosting failures;",
            "Third-party service failures;",
            "Browser changes;",
            "API changes;",
            "Changes requested after approval; or",
            "Problems caused by unauthorized modifications.",
          ],
        },
        {
          p: "Ongoing maintenance and support may be provided separately under a maintenance plan or additional service agreement.",
        },
      ],
    },
    {
      heading: "23. Changes Made by the Client or Third Parties",
      blocks: [
        { p: "After handover or launch, the client may modify the website or allow another developer/provider to modify it." },
        { p: "We are not responsible for problems caused by unauthorized or third-party modifications." },
        { p: "If we are asked to diagnose or repair such problems, the work may be treated as additional billable work." },
      ],
    },
    {
      heading: "24. Cancellation by the Client",
      blocks: [
        { p: "A client may request cancellation of a project." },
        { p: "If development has already commenced, amounts paid may be applied toward:" },
        {
          ul: [
            "Work already completed;",
            "Development time;",
            "Approved third-party expenses;",
            "Design work;",
            "Resources already committed; and",
            "Other reasonable project-related costs.",
          ],
        },
        { p: "Any applicable refund will be determined according to the project agreement and applicable law." },
        { p: "We will not impose penalties that are disproportionate to the circumstances or work performed." },
      ],
    },
    {
      heading: "25. Cancellation by Us",
      blocks: [
        { p: "We may suspend or terminate a project where reasonably necessary, including where:" },
        {
          ul: [
            "The client repeatedly fails to provide required information;",
            "Payments remain overdue;",
            "The client requests unlawful or harmful work;",
            "The client engages in abusive or threatening conduct;",
            "The project materially changes without agreement;",
            "Continuing the project would create unreasonable technical, legal, or security risks; or",
            "The client materially breaches the agreement.",
          ],
        },
        { p: "Where appropriate, we will provide reasonable notice and attempt to resolve the issue before termination." },
      ],
    },
    {
      heading: "26. Refunds",
      blocks: [
        { p: "Refund eligibility depends on the circumstances of the project and the applicable quotation or Client Agreement." },
        { p: "We do not promise automatic refunds merely because a client changes their mind after work has commenced." },
        {
          p: "Where a refund is applicable, the amount may take into account work already completed and non-refundable third-party expenses.",
        },
        { p: "Nothing in these Terms is intended to exclude rights or remedies that cannot lawfully be excluded." },
      ],
    },
    {
      heading: "27. Privacy and Personal Data",
      blocks: [
        { p: "We may collect and process personal information submitted through our website or during the course of providing services." },
        { p: "Such information may include:" },
        {
          ul: [
            "Name;",
            "Email address;",
            "Phone number;",
            "Company information;",
            "Project information;",
            "Communication records; and",
            "Technical information where applicable.",
          ],
        },
        { p: "We will handle personal data in accordance with our Privacy Policy and applicable law." },
        {
          p: "Where we process personal data on behalf of a client as part of a website project, the parties may need additional contractual arrangements depending on the nature and scope of the processing.",
        },
        { p: "Our Privacy Policy forms part of the overall terms governing use of our website." },
      ],
    },
    {
      heading: "28. Acceptable Use",
      blocks: [
        {
          p: "You must not use our website or services to request, develop, distribute, or facilitate content or systems that are unlawful or intended to cause harm.",
        },
        { p: "This includes, where applicable:" },
        {
          ul: [
            "Malware;",
            "Fraudulent systems;",
            "Phishing;",
            "Unauthorized access;",
            "Credential theft;",
            "Harmful or illegal activities;",
            "Copyright infringement;",
            "Deceptive impersonation; or",
            "Other unlawful activities.",
          ],
        },
        { p: "We reserve the right to refuse work that presents significant legal, ethical, security, or reputational risks." },
      ],
    },
    {
      heading: "29. Confidentiality",
      blocks: [
        { p: "We will take reasonable steps to protect confidential information provided to us during a project." },
        { p: "Confidential information may include:" },
        {
          ul: [
            "Business strategies;",
            "Credentials;",
            "Customer information;",
            "Internal documents;",
            "Non-public financial information;",
            "Proprietary technical information; and",
            "Other information reasonably understood to be confidential.",
          ],
        },
        { p: "Confidentiality obligations do not normally apply to information that:" },
        {
          ul: [
            "Is already publicly available;",
            "Becomes public without our breach;",
            "Was already lawfully known to us;",
            "Is independently developed; or",
            "Must be disclosed by law or lawful authority.",
          ],
        },
        {
          p: "For projects requiring stronger confidentiality obligations, the parties may enter into a separate Non-Disclosure Agreement.",
        },
      ],
    },
    {
      heading: "30. No Guarantee of Business Results",
      blocks: [
        { p: "Our services are intended to provide the agreed digital product or service." },
        { p: "We do not guarantee any particular:" },
        {
          ul: [
            "Revenue;",
            "Sales;",
            "Leads;",
            "Customers;",
            "Marketing results;",
            "Search ranking;",
            "Website traffic;",
            "Conversion rate; or",
            "Return on investment.",
          ],
        },
        {
          p: "The client remains responsible for its business decisions, marketing strategy, advertising, pricing, products, services, and commercial activities.",
        },
      ],
    },
    {
      heading: "31. Limitation of Liability",
      blocks: [
        {
          p: "To the maximum extent permitted by applicable law, we will not be responsible for indirect, incidental, special, consequential, or unforeseeable losses arising from the use of our services.",
        },
        { p: "This may include loss of:" },
        { ul: ["Revenue;", "Profits;", "Business opportunities;", "Data;", "Reputation; or", "Expected commercial benefits."] },
        {
          p: "Our liability, where legally permissible, will be limited to the direct loss reasonably attributable to our breach or negligence and subject to the limitations agreed in the applicable Client Agreement.",
        },
        { p: "Nothing in these Terms excludes liability that cannot legally be excluded or limited under applicable law." },
      ],
    },
    {
      heading: "32. Force Majeure",
      blocks: [
        { p: "We will not be responsible for delays or failure to perform caused by circumstances reasonably outside our control, including:" },
        {
          ul: [
            "Natural disasters;",
            "Government actions;",
            "Internet outages;",
            "Hosting-provider failures;",
            "Widespread infrastructure failures;",
            "Cyber incidents affecting third-party infrastructure;",
            "Power failures;",
            "Strikes;",
            "War;",
            "Civil unrest; or",
            "Other comparable events.",
          ],
        },
        { p: "We will make reasonable efforts to resume performance when circumstances permit." },
      ],
    },
    {
      heading: "33. Communication",
      blocks: [
        { p: "Project communication may take place through:" },
        { ul: ["Email;", "WhatsApp;", "Phone;", "Video meetings;", "Project-management tools; or", "Other agreed communication channels."] },
        {
          p: "Important commercial decisions, scope changes, approvals, and payment arrangements should preferably be recorded in written form.",
        },
      ],
    },
    {
      heading: "34. Electronic Acceptance",
      blocks: [
        {
          p: "Where permitted by applicable law, acceptance of a proposal, quotation, agreement, checkbox, electronic signature, email confirmation, or other electronic record may constitute acceptance of the applicable terms.",
        },
        {
          p: "The Information Technology Act, 2000 recognizes contracts formed through electronic means, subject to applicable legal requirements.",
        },
        { p: "For higher-value projects, we may require a formal signed Client Agreement." },
      ],
    },
    {
      heading: "35. Changes to These Terms",
      blocks: [
        { p: "We may update these Terms from time to time." },
        { p: 'The updated version will be published on our website with a revised "Last Updated" date.' },
        {
          p: "Changes to these website Terms will not automatically modify an already-signed project agreement unless the parties expressly agree otherwise.",
        },
      ],
    },
    {
      heading: "36. Governing Law and Jurisdiction",
      blocks: [
        { p: "These Terms shall be governed by the laws of India." },
        {
          p: "Subject to applicable law, disputes will first be addressed through good-faith discussion between the parties.",
        },
        {
          p: "If a dispute cannot be resolved through discussion, the parties may pursue the remedies available under applicable Indian law.",
        },
        {
          p: "The courts having appropriate jurisdiction over Belagavi, Karnataka, India shall have jurisdiction, subject to applicable law.",
        },
      ],
    },
    {
      heading: "37. Severability",
      blocks: [
        {
          p: "If any provision of these Terms is found to be invalid, unlawful, or unenforceable, the remaining provisions will continue to operate to the extent permitted by law.",
        },
        {
          p: "The parties will attempt to replace the affected provision with a valid provision that most closely reflects the original commercial intention.",
        },
      ],
    },
    {
      heading: "38. Entire Agreement",
      blocks: [
        { p: "These Terms govern general use of our website and services." },
        { p: "For a specific project, the following documents may contain additional or more specific terms:" },
        {
          ul: [
            "Quotation;",
            "Project Proposal;",
            "Statement of Work;",
            "Client Agreement;",
            "Maintenance Agreement; and",
            "Other written agreements between the parties.",
          ],
        },
        {
          p: "Where there is a conflict between these website Terms and a separately signed Client Agreement, the specific signed Client Agreement will generally govern the relevant project matter.",
        },
      ],
    },
    {
      heading: "39. Contact Us",
      blocks: [
        { p: "If you have questions regarding these Terms or our services, contact us at:" },
        { p: "BrightSite" },
        { p: "Email: brightsite0fficial2@gmail.com" },
        { p: "Phone/WhatsApp: +91 9972590329 (Manoj) · +91-9284812726 (Salvin)" },
      ],
    },
  ],
};
