import { Project, Milestone, BlogPost, Skill, Certification } from './types';

export const USER_INFO = {
  name: 'SWAFVAN',
  shortName: 'SFK.DEV',
  role: 'Full Stack Developer',
  avatar: '/profile_avatar.png',
  location: 'United Arab Emirates, Dubai',
  email: 'safuswafvan1@gmail.com',
  bio: 'I am a senior Full Stack Developer specialized in the MERN ecosystem. With over 3 years of experience, I bridge the gap between complex backend architectures and intuitive frontend experiences. My approach is rooted in clean code, performance optimization, and scalable systems.',
  tagline: 'Building digital experiences that matter',
  typingWords: ['Full Stack Developer', 'MERN Stack Specialist', 'React & Next.js Architect', 'React Native Developer'],
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/swafvanSFK',
    linkedin: 'https://www.linkedin.com/in/swafvan-sfk?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    twitter: 'https://twitter.com',
    devto: 'https://dev.to/safwan_sfk',
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Garage Management System',
    description: 'A comprehensive vehicle garage management web application designed to track and orchestrate end-to-end service workflows from vehicle check-in to completion. Integrates dynamic spare parts inventory stock tracking and an integrated sales invoicing system.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'MongoDB', 'Shadcn UI', 'Tailwind CSS'],
    image: '/garage_management.png',
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 'p6',
    title: 'Auxwall Pro Desktop',
    description: 'A professional-grade cross-platform desktop application designed for business invoice management and trade logging. Built using Nextron (Next.js & Electron.js) on the frontend for high-fidelity native windows, powered by a scalable Node.js backend ledger API.',
    category: 'fullstack',
    tags: ['Electron.js', 'Next.js', 'React', 'Node.js', 'Express.js'],
    image: '/auxwall_desktop.png',
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 'p2',
    title: 'Lumina E-Commerce',
    description: 'An immersive 3D shopping experience with real-time product customization and ultra-smooth, framerate-independent animations for premium, high-end consumer goods.',
    category: 'frontend',
    tags: ['Next.js', 'Tailwind', 'Three.js', 'Framer Motion'],
    image: '/lumina_ecommerce.png',
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: 'p3',
    title: 'DocHive',
    description: 'A collaborative, block-based rich text document editor inspired by Notion. Features live team collaboration, secure authentication using Clerk, real-time database syncing with Firebase, and integrations for AI-assisted writing tools.',
    category: 'fullstack',
    tags: ['React', 'Next.js', 'Firebase', 'Clerk', 'Tailwind CSS'],
    image: '/dochive_notion.png',
    liveUrl: 'https://github.com/swafvanSFK/DocHive',
    codeUrl: 'https://github.com/swafvanSFK/DocHive'
  },
  {
    id: 'p4',
    title: 'Royal Events Backend',
    description: 'A robust and scalable backend API engineered for event management services. Built with NestJS and TypeScript, it integrates Prisma ORM for type-safe data access, Postgres database architecture, and secure JWT-based authentication.',
    category: 'backend',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Node.js'],
    image: '/royal_events_backend.png',
    liveUrl: 'https://github.com/swafvanSFK/RoyalEventsBackend',
    codeUrl: 'https://github.com/swafvanSFK/RoyalEventsBackend'
  },
  {
    id: 'p5',
    title: 'Mens Fashion App',
    description: 'A full-stack e-commerce and interactive style catalog platform for men\'s fashion. Engineered with a decoupled client-server architecture featuring product browsing, cart systems, secure checkout pathways, and an optimized responsive layout.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: '/mens_fashion_app.png',
    liveUrl: 'https://github.com/swafvanSFK/MensFashionApp',
    codeUrl: 'https://github.com/swafvanSFK/MensFashionApp'
  },

];

export const TIMELINE: Milestone[] = [
  {
    id: 'm1',
    year: 'Present',
    title: 'Full Stack Developer & React Native Developer',
    company: 'Auxwall Software Solutions',
    description: [
      'Architected and developed complex mobile trading and invoicing client interfaces using React Native.',
      'Designed, integrated, and optimized robust invoice management dashboards, transaction logs, and real-time state sync layers.',
      'Maintained clean, scalable code architecture across frontend and backend modules to maximize code reuse.'
    ],
    tags: ['React Native', 'React', 'TypeScript', 'Node.js', 'Redux', 'PostgreSQL']
  },
  {
    id: 'm2',
    year: '2024',
    title: 'Full Stack Developer',
    company: 'First Consulting Group (FCG)',
    description: [
      'Delivered tailored full-stack solutions and enterprise-grade web application architectures for diverse corporate clients.',
      'Optimized rendering and API queries, reducing server load times and maximizing responsiveness across interactive pages.',
      'Created custom database configurations and optimized querying times using structured database patterns.'
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'REST APIs', 'Next.js']
  },
  {
    id: 'm3',
    year: '2023',
    title: 'Software Engineering Intern',
    company: 'Entry Learning App',
    description: [
      'Collaborated in building core educational platforms and microservices, contributing to scalable feature sets.',
      'Developed internal tools and dashboards, assisting in system monitoring and testing automation coverage.',
      'Refactored legacy interface stylesheets, aligning styling properties with modern fluid design principles.'
    ],
    tags: ['HTML', 'CSS', 'JavaScript']
  }
];

export const SKILLS: Skill[] = [
  { id: 's1', name: 'React.js', category: 'frontend', level: 95, iconName: 'Terminal' },
  { id: 's2', name: 'Node.js', category: 'backend', level: 90, iconName: 'Layers' },
  { id: 's3', name: 'MongoDB', category: 'database', level: 85, iconName: 'Database' },
  { id: 's4', name: 'TypeScript', category: 'language', level: 92, iconName: 'Code2' },
  { id: 's5', name: 'Next.js', category: 'frontend', level: 94, iconName: 'Rocket' },
  { id: 's6', name: 'PostgreSQL', category: 'database', level: 80, iconName: 'Server' },
  { id: 's7', name: 'REST APIs', category: 'backend', level: 95, iconName: 'Cpu' },
  { id: 's8', name: 'GitHub Actions', category: 'devops', level: 82, iconName: 'GitBranch' },
  { id: 's9', name: 'Docker', category: 'devops', level: 70, iconName: 'Docker' },
  { id: 's10', name: 'Jira', category: 'devops', level: 80, iconName: 'Kanban' },
  { id: 's11', name: 'React Native', category: 'frontend', level: 75, iconName: 'Smartphone' },
  { id: 's12', name: 'Java', category: 'language', level: 50, iconName: 'Coffee' },
  { id: 's13', name: 'Python', category: 'language', level: 50, iconName: 'Terminal' },
  { id: 's14', name: 'Electron.js', category: 'frontend', level: 80, iconName: 'Monitor' },
  { id: 's15', name: 'JavaScript', category: 'language', level: 95, iconName: 'Code2' },
  { id: 's16', name: 'Express.js', category: 'backend', level: 90, iconName: 'Server' },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: 'AWS Solutions Architect',
    issuer: 'Professional Level',
    year: '2023',
    iconName: 'Cloud'
  },
  {
    id: 'c2',
    title: 'Google Cloud Security',
    issuer: 'Advanced Professional',
    year: '2022',
    iconName: 'ShieldAlert'
  },
  {
    id: 'c3',
    title: 'Meta React Certification',
    issuer: 'Master Specialization',
    year: '2021',
    iconName: 'Award'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b0',
    title: 'Stop Hardcoding Your Skills: How to Build a Dynamic Technical Arsenal in React',
    description: 'Learn how to transform a static portfolio skills section into a type-safe, dynamic technical ecosystem card in React and TypeScript.',
    category: 'Tutorial',
    readTime: '4 min read',
    author: 'Swafvan SFK',
    date: 'Jun 25, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf1OU4nWIOfoHKz-xYG5U0-fTIKoo2ETuNcoNUIf99FvS-KGDIjh-AEupnLLUODvLycjJRiPDRQ3Dt9sZh5ZuN0dQokyf3SCMBgMFuWG2XkmT3ktjIqDyND5FN0L5w2wXwDEiBaa8n4SyHUn7RyjrhMmYMZJMKlnMWOa-cZXi63Z00dhlApbRoAVx-1CwpqNWaq1mrR_Eqb4Hojb3_A4yWdcmTny-_qn0uTHn3sOR20y7qt6rz-ZqP1mmGGMHhTWOy24O2-MRxTQ',
    authorImage: '/profile_avatar.png',
    content: `As a developer, your portfolio is your handshake with the engineering world. It’s tempting to throw together a quick HTML page with static bullet points of the languages and frameworks you know.

But as your stack grows and your projects shift, hardcoding lists of skills across multiple page sections becomes a maintenance nightmare.

In this guide, we break down how to establish a **Single Source of Truth** for your skillset. By defining skills once in a central configuration, we can dynamically render them in interactive filterable lists and feed them into summarizing components automatically, ensuring maximum scalability and type safety.`
  },
  {
    id: 'b2',
    title: 'The Future of Web Vitals in 2025',
    description: 'Understanding the shift from CLS to INP and how to architect React applications for sub-100ms interaction latency.',
    category: 'Performance',
    readTime: '8 min read',
    author: 'Swafvan SFK',
    date: 'Nov 12, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9yovZ8x7u9kHeWRrRz6NH2kwIzwoEc7Pp6_yv80V1IiXEesjGo8SDZX9BDmdW2hByIpGpXvlcmlsUzzLcyHi3lcYpr6H0d2rlUg5rsrNTMHzIlk3pxf9FIBq0XjeMg-s-EMTET6KaKU6kQ4Z8LB5_BePzt7BpyoBf3ccM4MQ6k8dKxcRb3fyCx99nHlHTEjfLbhnp2eSE9-EdkEb_r6iTG_EKPnZ7cOH256TTQEa_Fr0RMr25cSPUPXBbyO7DXWw_1pgb37ZWBg',
    authorImage: '/profile_avatar.png',
    content: `Google's Core Web Vitals continually evolve to align with actual user perceptions of layout smoothness and speed. In 2024-2025, the industry-wide spotlight is firmly on Interaction to Next Paint (INP).

### What is INP?
Unlike First Input Delay (FID) which only measures the delay of the *first* click or keystroke, INP records *every* interaction on a page and highlights the worst latencies.

### Practical Optimization in React
1. **Debounce Complex Calculations:** Never trigger large state updates synchronously inside text input handlers. Use React's \`useTransition\` or \`useDeferredValue\` to prioritize paint over computations.
2. **Break Up Microtasks:** Long-running JavaScript tasks block the main thread. Break them up into chunks using \`requestIdleCallback\` or microtask schedulers.
3. **Use CSS Containment:** Guide browser reflows with \`contain-intrinsic-size\` to ensure secondary rendering modules do not trigger massive layout shifts.`
  },
  {
    id: 'b3',
    title: 'Building Type-Safe APIs with GraphQL & TS',
    description: 'A comprehensive guide to leveraging code generation for end-to-end type safety in MERN stack applications.',
    category: 'Tutorial',
    readTime: '15 min read',
    author: 'Swafvan SFK',
    date: 'Oct 30, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwPcoKbSFMVL3lqVNevGy75MiKh3LwDshK_pyORYvUGjuvlKIEXJCg_7Q0WCD4o7Qa5EWivJmunkB3UtWJnql5c95XsyT9wKAdXlfl0zcsQp1rW2biKJL9Fx-RCsaJdR__kG_pOCdEVNu_QwIj9zLhBKb21bNS0_-CbNs6s8amINFlB1jpUXJm_tGo37GfN-s2cO-DdHKrae5mJNQ-TTMudYEj0QBufrEpm_7AtOXueTbXs4LgmtXLFwRVuj_Q2NQxk6b3yJ3-MQ',
    authorImage: '/profile_avatar.png',
    content: `A common vulnerability in full-stack applications is the contract boundary between client and server. If the database schema or REST response fields change, the client may silently crash without compile-time warning.

This guide details how we use GraphQL Code Generator to auto-compile accurate TypeScript interfaces from our backend schema files, establishing a concrete, crash-proof pipeline.

### The Problem with Loose REST contracts
With REST APIs, there is no natively enforced type system. A developer editing the database response may rename \`user_id\` to \`userId\`. Unless rigorous API tests catch this, client components mapping over the object will experience runtime errors.

### The Automated Solution
By utilizing a GraphQL Schema compiler:
- The backend serves as the source of truth.
- A local script triggers automatically during dev runs, compiling all queries into strongly typed React Hooks.
- If a client component requests a field that does not exist in the active schema, the TypeScript compiler errors out instantly during build. This enforces a bulletproof developer experience.`
  },
  {
    id: 'b4',
    title: 'Zero Trust Architecture for Cloud Apps',
    description: 'Implementing identity-aware proxies and cryptographic verification to secure modern distributed cloud infrastructure.',
    category: 'Security',
    readTime: '10 min read',
    author: 'Swafvan SFK',
    date: 'Oct 15, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnayisMiGE0e5gS8wGVDfENWuvkRJbjXsdTWWPVHwrdLEkiOeWHpv6K9wllszCdkn6kwTpyJn2_1JCWCWzPLYIWP4ORWnQQiRkQgjHRnCLT1kxXr38_18UwnltOKMFjbr0K_pDflwUTaJ-ahFv-Xswx8VQESnkJTgYNqblPXfG_olf4fJcmW5u_f5mIrsXowO7iv74C-BbvOw9viYt6ZBOcyPLNTOg-j-mW462imbd9fzfboLkP8fCrKdqpPdACajLHNFyJXjxSg',
    authorImage: '/profile_avatar.png',
    content: `The days of trusting everything inside a private corporate VPN are over. Modern cloud native networks require complete verification for every single node, service, and user request.

### Principles of Zero Trust
1. **Verify Explicitly:** Always authenticate and authorize based on all available data points.
2. **Use Least Privileged Access:** Limit user and machine access with just-in-time and just-enough-access (JTA/JEA) policies.
3. **Assume Breach:** Minimize blast radius by segmenting networks, encrypting all in-transit traffic, and collecting rich telemetry.

### Implementation Patterns in Cloud Run / Kubernetes
By leveraging Identity-Aware Proxies (IAP) combined with signed JSON Web Tokens (JWT), you can ensure that even if an attacker successfully gains entrance to your microservices cluster, they cannot execute database queries without concrete, cryptographic authentication at every node boundary.`
  }
];
