// All projects in display order (best/most impressive first)
export const allProjects = [
  // --- TOP 6 (shown on homepage) - best first ---
  {
    id: 1,
    title: 'TaskFlow - AI Cloud-Native Todo Platform',
    description: 'Enterprise-grade todo app with AI chatbot (13 tools), event-driven microservices, Kubernetes deployment, and CI/CD pipeline. Built with Spec-Driven Development using Claude Code — zero manual coding.',
    image: '/Images/PROJECTS/TaskFlow.png',
    technologies: ['Next.js', 'FastAPI', 'OpenAI SDK', 'Kafka', 'PostgreSQL', 'Kubernetes', 'Dapr', 'Redis', 'Helm', 'GitHub Actions'],
    categories: ['AI / Chatbot', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/hackathon-2-phase-5',
    live: '#',
    featured: true,
    type: 'Personal',
    highlight: 'Cloud-Native AI Platform'
  },
  {
    id: 2,
    title: 'Connectiva - Business Hub',
    description: 'Full-stack regional marketplace platform for the Rhine Valley, Switzerland. Features business directory, job board, service listings, project marketplace, community requests, and subscription-based pricing tiers with PostgreSQL backend.',
    image: '/Images/PROJECTS/connectiva.png',
    technologies: ['Next.js', 'PostgreSQL', 'PL/pgSQL', 'Node.js', 'Tailwind CSS', 'Email Integration'],
    categories: ['Company Work', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/Connectiva',
    live: 'http://www.connectiva.ch/en',
    featured: true,
    type: 'Company'
  },
  {
    id: 3,
    title: 'HealthMate - AI Health Companion',
    description: 'AI-powered health platform that analyzes medical reports using Gemini AI, providing bilingual summaries (English + Roman Urdu), vital tracking, abnormal value flagging, and personalized health insights.',
    image: '/Images/PROJECTS/healthmate.png',
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Cloudinary', 'JWT', 'Tailwind CSS'],
    categories: ['AI / Chatbot', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/HealthMate-hackathon',
    live: 'https://health-mate-hackathon.vercel.app/',
    featured: true,
    type: 'Personal',
    achievement: '2nd Position - Saylani Hackathon'
  },
  {
    id: 4,
    title: 'GracePoint Medical Staffing',
    description: 'Healthcare staffing agency website connecting qualified professionals with medical facilities. Features dual CTA flow for employers and job seekers, leadership section, services showcase, and community impact highlights. Converted Figma design to pixel-perfect responsive UI.',
    image: '/Images/PROJECTS/gracepointmedicalstaffing.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Email Integration'],
    categories: ['Freelance'],
    github: 'https://github.com/ALIRAZA4278/gracepoint',
    live: 'https://gracepointmedicalstaffing.com/',
    featured: true,
    type: 'Client'
  },
  {
    id: 5,
    title: 'Mohit Computers',
    description: 'Full-stack e-commerce platform for refurbished laptops & accessories. Built at The Social Hawks for a client. Features Supabase backend with PostgreSQL, authentication, admin dashboard with markdown editor, and file storage.',
    image: '/Images/PROJECTS/mohitcomputers.png',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Supabase Auth', 'React Markdown', 'Lucide Icons'],
    categories: ['Company Work', 'Full-Stack', 'E-commerce'],
    github: '#',
    live: 'https://mohitcomputers.pk/',
    featured: true,
    type: 'Company'
  },
  {
    id: 6,
    title: 'Quality Care Senior Living',
    description: 'Personal care home website for a family-centered senior living facility in Atlanta, GA. Multi-page site with services, amenities, gallery, team pages, and tour booking. Built from Figma design with HIPAA compliance pages and contact form integration.',
    image: '/Images/PROJECTS/qualitycareseniorliving.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Email Integration', 'Responsive Design'],
    categories: ['Freelance'],
    github: 'https://github.com/ALIRAZA4278/Quality-Care',
    live: 'https://qualitycareseniorliving.com/',
    featured: true,
    type: 'Client'
  },

  // --- REST (shown on /projects page) ---
  {
    id: 7,
    title: 'Halwaiii - Premium Sweets',
    description: 'E-commerce platform for a traditional South Asian confectionery business. Features product catalog, shopping cart, delivery system, heritage brand storytelling, and location-based ordering for premium sweets and bakery items.',
    image: '/Images/PROJECTS/halwai.png',
    technologies: ['Next.js', 'PostgreSQL', 'PL/pgSQL', 'Tailwind CSS', 'JavaScript'],
    categories: ['Company Work', 'E-commerce', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/halwai',
    live: 'https://halwai.vercel.app/',
    featured: true,
    type: 'Company'
  },
  {
    id: 8,
    title: 'Work Oura - Job Portal',
    description: 'A comprehensive job portal connecting job seekers with employers, featuring job posting, application tracking, career matching, and Clerk authentication.',
    image: '/Images/PROJECTS/job-portal.png',
    technologies: ['Next.js', 'MongoDB', 'Clerk', 'Framer Motion', 'API Integration'],
    categories: ['Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/work-oura',
    live: 'https://work-oura.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 9,
    title: 'NDIS Beauty Collective',
    description: 'Mobile beauty service website for NDIS participants in Melbourne, Australia. Features appointment booking, callback request form, FAQ accordion, services showcase, and newsletter subscription. Figma to code with accessible design for disability sector.',
    image: '/Images/PROJECTS/ndisbeautycollective.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Email Integration', 'Responsive Design'],
    categories: ['Freelance'],
    github: 'https://github.com/ALIRAZA4278/NDIS',
    live: 'https://ndisbeautycollective.com.au/',
    featured: true,
    type: 'Client'
  },
  {
    id: 10,
    title: 'Furniture E-commerce Website',
    description: 'A modern furniture e-commerce platform with product catalog, shopping cart, CMS-powered content, and responsive design for seamless shopping.',
    image: '/Images/PROJECTS/ecommerce.png',
    technologies: ['Next.js', 'Sanity', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    categories: ['E-commerce', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/Milestone3-basic-e-commerce',
    live: 'https://furniture-ecommerce3.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 11,
    title: 'Pizza Ordering Chatbot',
    description: 'An AI-powered pizza ordering chatbot built using Dialogflow for natural language intent handling with a React frontend for interactive ordering.',
    image: '/Images/PROJECTS/pizza-chatbot.jpg',
    technologies: ['Dialogflow', 'JavaScript', 'React', 'Framer Motion'],
    categories: ['AI / Chatbot'],
    github: 'https://github.com/ALIRAZA4278/PIZZA_CHATBOT',
    live: 'https://pizza-chatbot.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 12,
    title: 'BlendWise Solutions',
    description: 'Professional web design & development agency website. Features tiered pricing packages for logos, web design, e-commerce, custom portals, and branding services with modern UI and service showcase.',
    image: '/Images/PROJECTS/blendwise.png',
    technologies: ['Next.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
    categories: ['Company Work', 'Web App'],
    github: 'https://github.com/ALIRAZA4278/blendwise',
    live: 'https://blendwise.vercel.app/',
    featured: true,
    type: 'Company'
  },
  {
    id: 13,
    title: 'Blog Application',
    description: 'A full-featured blog platform with article publishing, commenting system, CMS integration, and user management for content creators.',
    image: '/Images/PROJECTS/blog-app.png',
    technologies: ['Next.js', 'Sanity', 'TypeScript', 'Tailwind CSS'],
    categories: ['Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/Milestone-3-blog-app',
    live: 'https://milestone-3-blog-app.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 14,
    title: 'The Social Hawks',
    description: 'Built the company website for The Social Hawks, a digital marketing agency where I work. Designed and developed from scratch to boost client acquisition and online brand presence.',
    image: '/Images/PROJECTS/thesocialhawks.png',
    technologies: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    categories: ['Company Work', 'Web App'],
    github: 'https://github.com/ALIRAZA4278/thesocialhawks',
    live: 'https://thesocialhawks-kep1.vercel.app/',
    featured: true,
    type: 'Company'
  },
  {
    id: 15,
    title: 'Apex Technify - Digital Agency',
    description: 'A professional digital agency website showcasing web development, design, SEO, and marketing services. Features pricing packages, portfolio section, process overview, and modern animations.',
    image: '/Images/PROJECTS/apextechnify.png',
    technologies: ['Next.js', 'JavaScript', 'CSS', 'Framer Motion'],
    categories: ['Web App'],
    github: 'https://github.com/ALIRAZA4278/apex-technify',
    live: 'https://apex-technify.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 16,
    title: 'Resume Builder',
    description: 'An interactive resume builder that allows users to create professional resumes with multiple templates, real-time preview, and export functionality.',
    image: '/Images/PROJECTS/resume-builder.png',
    technologies: ['HTML', 'CSS', 'TypeScript'],
    categories: ['Web App'],
    github: 'https://github.com/ALIRAZA4278/Resume_builder',
    live: 'https://resume-builder--inky.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 17,
    title: 'Vote Hub',
    description: 'A lightweight voting platform built for fast, accessible polling and real-time vote tracking with a clean minimal interface.',
    image: '/Images/PROJECTS/vote-hub.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    categories: ['Web App'],
    github: 'https://github.com/ALIRAZA4278/Vote_Hub',
    live: 'https://vote-hub-6iqt.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 18,
    title: 'News Application',
    description: 'A news aggregator that integrates external news APIs for real-time headlines with category filtering and a lightweight static frontend.',
    image: '/Images/PROJECTS/news-app.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    categories: ['Web App'],
    github: 'https://github.com/ALIRAZA4278/News-App',
    live: 'https://news-app-flame-eta.vercel.app/',
    featured: true,
    type: 'Personal'
  },
];

// Helper exports
export const personalProjects = allProjects.filter(p => p.type === 'Personal');
export const clientProjects = allProjects.filter(p => p.type === 'Client' || p.type === 'Company');

// Categories for filter
export const filterCategories = ['All', 'Full-Stack', 'AI / Chatbot', 'E-commerce', 'Web App', 'Company Work', 'Freelance'];
