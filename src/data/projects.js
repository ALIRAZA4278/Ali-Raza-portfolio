// All projects in display order (best/most impressive first)
const projectList = [
  // --- TOP 6 (shown in Selected work on the homepage) ---
  {
    id: 1,
    title: 'Secret Hour - Couples Gift E-commerce',
    description: 'Discreet online store in Pakistan for gifts for couples and curated bundles, including The Midnight Deck card game. A quiz helps shoppers choose, with bank transfer (10% off) or cash on delivery, free nationwide delivery, order tracking and a referral program.',
    image: '/Images/PROJECTS/secrethour.webp',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'React', 'Tailwind CSS'],
    categories: ['E-commerce', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/secrethour',
    live: 'http://secrethour.pk/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 2,
    title: 'Cray Stuff - Vintage & Streetwear Marketplace',
    description: 'Online shop for one-of-one vintage, Y2K and streetwear, based in Poland and shipping worldwide. Shoppers make an offer on any item and get a personal reply, prices show in PLN, USD or EUR, the site runs in English and Polish, and it links to Vinted, Instagram and TikTok.',
    image: '/Images/PROJECTS/craystuff.webp',
    technologies: ['Next.js', 'Cloudinary', 'React', 'Tailwind CSS'],
    categories: ['E-commerce', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/Cray-stuff',
    live: 'https://cray-stuff.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 4,
    title: 'Connectiva - Business Hub',
    description: 'Swiss business directory and B2B marketplace based in the Rhine Valley. Companies, services, projects, jobs and community requests in one place: visitors post a free project request and receive offers from verified companies, with Basic, Premium and Platinum plans for businesses.',
    image: '/Images/PROJECTS/connectiva.webp',
    technologies: ['Next.js', 'PostgreSQL', 'PL/pgSQL', 'Node.js', 'Tailwind CSS', 'Email Integration'],
    categories: ['Company Work', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/Connectiva',
    live: 'http://www.connectiva.ch/en',
    featured: true,
    type: 'Company'
  },
  {
    id: 6,
    title: 'GracePoint Medical Staffing',
    shortTitle: 'GracePoint',
    description: 'Website for a healthcare staffing agency in Atlanta, GA. Two clear paths, Find Staff Today for facilities and families and Start Your Career for nurses and caregivers, six staffing services, and an inquiry form for employers and professionals. Converted pixel-perfect from Figma.',
    image: '/Images/PROJECTS/gracepointmedicalstaffing.webp',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Email Integration'],
    categories: ['Freelance'],
    github: 'https://github.com/ALIRAZA4278/gracepoint',
    live: 'https://gracepointmedicalstaffing.com/',
    featured: true,
    type: 'Client'
  },
  {
    id: 16,
    title: 'The Social Hawks',
    description: 'Website for The Social Hawks, a digital marketing agency in Karachi. Services, case studies with their own pages, blog, careers, testimonials, and a free social media review form to bring in leads.',
    image: '/Images/PROJECTS/thesocialhawks.webp',
    technologies: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    categories: ['Company Work', 'Web App'],
    github: 'https://github.com/ALIRAZA4278/thesocialhawks',
    live: 'https://thesocialhawks.com/',
    featured: true,
    type: 'Company'
  },
  {
    id: 8,
    title: 'Quality Care Senior Living',
    shortTitle: 'Quality Care',
    description: 'Website for a family-centered personal care home in Atlanta, GA. Services, amenities, a photo gallery, team page and Book a Tour flow, plus Privacy, HIPAA, Accessibility and Georgia compliance pages. Built from a Figma design.',
    image: '/Images/PROJECTS/qualitycareseniorliving.webp',
    technologies: ['Next.js', 'Tailwind CSS', 'Email Integration', 'Responsive Design'],
    categories: ['Freelance'],
    github: 'https://github.com/ALIRAZA4278/Quality-Care',
    live: 'https://qualitycareseniorliving.com/',
    featured: true,
    type: 'Client'
  },

  // --- REST (More work on the homepage, and /projects) ---
  {
    id: 20,
    title: 'ADS Global Agency',
    description: 'Website for ADS Global Agency, a digital agency offering web design, development, AI, automation and branding. A free-quote form with service and budget, a filterable portfolio, pricing packages, a three-phase process, FAQ and a careers application form.',
    image: '/Images/PROJECTS/adsglobalagency.webp',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    categories: ['Web App', 'Freelance'],
    github: '#',
    live: 'https://adsglobalagency.com/',
    featured: true,
    type: 'Client'
  },
  {
    id: 21,
    title: 'PetCare - Pet Care Platform',
    description: 'Pet care platform for Pakistan: find vets and clinics near you, a pet marketplace, shelters for adoption and donations, lost and found reports, pet health records, an emergency vet finder and an AI pet name generator.',
    image: '/Images/PROJECTS/petcare.webp',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    categories: ['Full-Stack', 'Web App'],
    github: '#',
    live: 'https://percare-chi.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 22,
    title: 'Krijo Productions - Movie Streaming',
    description: 'Movie rental platform for Krijo Productions, an Albanian film production company. Each film has its trailer, cast and storyline, with a coming-soon section, rental FAQs and a newsletter signup, in English and Albanian.',
    image: '/Images/PROJECTS/krijoproductions.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    categories: ['Web App', 'Freelance'],
    github: '#',
    live: 'https://krijoproductions.com/',
    featured: true,
    type: 'Client'
  },
  {
    id: 3,
    title: 'TaskFlow - AI Cloud-Native Todo Platform',
    description: 'Enterprise-grade todo app with an AI chatbot (13 tools), event-driven microservices, Kubernetes deployment and a CI/CD pipeline. Built with spec-driven development using Claude Code.',
    image: '/Images/PROJECTS/TaskFlow.webp',
    technologies: ['Next.js', 'FastAPI', 'OpenAI SDK', 'Kafka', 'PostgreSQL', 'Kubernetes', 'Dapr', 'Redis', 'Helm', 'GitHub Actions'],
    categories: ['AI / Chatbot', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/hackathon-2-phase-5',
    live: '#',
    featured: true,
    type: 'Personal',
    highlight: 'Cloud-Native AI Platform'
  },
  {
    id: 5,
    title: 'HealthMate - AI Health Companion',
    description: 'AI health companion: upload lab reports, prescriptions, X-rays or ultrasounds and Gemini summarises them in English and Roman Urdu, flags abnormal values, suggests questions for your doctor and food to eat or avoid, and keeps a timeline of your vitals.',
    image: '/Images/PROJECTS/healthmate.webp',
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Cloudinary', 'JWT', 'Tailwind CSS'],
    categories: ['AI / Chatbot', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/HealthMate-hackathon',
    live: 'https://health-mate-hackathon.vercel.app/',
    featured: true,
    type: 'Personal',
    achievement: 'Saylani Coding Night 2025 hackathon'
  },
  {
    id: 7,
    title: 'Mohit Computers',
    description: 'Online store for used laptops and accessories from a shop in Saddar, Karachi. Categories for laptops, Chromebooks, RAM, SSDs and workstations, wishlist and compare, customer accounts, a corporate page and blog, all managed from a Supabase admin dashboard.',
    image: '/Images/PROJECTS/mohitcomputers.webp',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Supabase Auth', 'React Markdown', 'Lucide Icons'],
    categories: ['Company Work', 'Full-Stack', 'E-commerce'],
    github: '#',
    live: 'https://mohitcomputers.pk/',
    featured: true,
    type: 'Company'
  },
  {
    id: 9,
    title: 'Halwaiii - Premium Sweets',
    description: 'Online store for a traditional sweets brand: mithai, baked goods and a gifting collection, with the brand story, store locations, a cart, delivery by location and WhatsApp ordering.',
    image: '/Images/PROJECTS/halwai.webp',
    technologies: ['Next.js', 'PostgreSQL', 'PL/pgSQL', 'Tailwind CSS', 'JavaScript'],
    categories: ['Company Work', 'E-commerce', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/halwai',
    live: 'https://halwai.vercel.app/',
    featured: true,
    type: 'Company'
  },
  {
    id: 10,
    title: 'Work Oura - Job Portal',
    description: 'Job board where seekers browse jobs and companies and track their applications from a dashboard, while employers post jobs, manage listings and review applicants. Sign-in with Clerk.',
    image: '/Images/PROJECTS/job-portal.webp',
    technologies: ['Next.js', 'MongoDB', 'Clerk', 'Framer Motion', 'API Integration'],
    categories: ['Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/work-oura',
    live: 'https://work-oura.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 11,
    title: 'NDIS Beauty Collective',
    description: 'Website for a mobile hair and beauty service that visits NDIS participants at home across Melbourne. Services include sensory-friendly sessions and kids’ parties, with a call-back request form, FAQs and an accessible, calm design.',
    image: '/Images/PROJECTS/ndisbeautycollective.webp',
    technologies: ['Next.js', 'Tailwind CSS', 'Email Integration', 'Responsive Design'],
    categories: ['Freelance'],
    github: 'https://github.com/ALIRAZA4278/NDIS',
    live: 'https://ndisbeautycollective.com.au/',
    featured: true,
    type: 'Client'
  },
  {
    id: 12,
    title: 'Furniture E-commerce Website',
    description: 'Furniture and home decor store with a shop, top picks with stock status, add to cart and wishlist, new arrivals and a blog, with content managed in Sanity CMS.',
    image: '/Images/PROJECTS/ecommerce.webp',
    technologies: ['Next.js', 'Sanity', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    categories: ['E-commerce', 'Full-Stack'],
    github: 'https://github.com/ALIRAZA4278/Milestone3-basic-e-commerce',
    live: 'https://furniture-ecommerce3.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 13,
    title: 'Pizza Ordering Chatbot',
    description: 'Pizza World ordering chatbot built with Dialogflow, understanding natural language to take orders, with a React frontend.',
    image: '/Images/PROJECTS/pizza-chatbot.webp',
    technologies: ['Dialogflow', 'JavaScript', 'React', 'Framer Motion'],
    categories: ['AI / Chatbot'],
    github: 'https://github.com/ALIRAZA4278/PIZZA_CHATBOT',
    live: 'https://pizza-chatbot.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 14,
    title: 'BlendWise Solutions',
    description: 'Agency website for BlendWise, a web design and development company: services, fixed-price packages for logos, websites and e-commerce, a custom web portal offer, a discount form and an FAQ.',
    image: '/Images/PROJECTS/blendwise.webp',
    technologies: ['Next.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
    categories: ['Company Work', 'Web App'],
    github: 'https://github.com/ALIRAZA4278/blendwise',
    live: 'https://blendwise.vercel.app/',
    featured: true,
    type: 'Company'
  },
  {
    id: 17,
    title: 'Apex Technify - Digital Agency',
    description: 'Live website for Apex Technify, a digital agency offering web development, design, video editing, marketing, SEO and e-commerce. A three-step process, a portfolio filtered by category, fixed-price packages and a contact flow. Built and maintained by me.',
    image: '/Images/PROJECTS/apextechnify.webp',
    technologies: ['Next.js', 'JavaScript', 'CSS', 'Framer Motion'],
    categories: ['Web App'],
    github: 'https://github.com/ALIRAZA4278/apex-technify',
    live: 'https://www.apextechnify.com/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 18,
    title: 'Resume Builder',
    description: 'Resume builder: fill in personal details and a photo, education, skills with levels, work experience and extras, then generate a live preview, print it to PDF, and share it at your own resume link.',
    image: '/Images/PROJECTS/resume-builder.webp',
    technologies: ['HTML', 'CSS', 'TypeScript'],
    categories: ['Web App'],
    github: 'https://github.com/ALIRAZA4278/Resume_builder',
    live: 'https://resume-builder--inky.vercel.app/',
    featured: true,
    type: 'Personal'
  },
  {
    id: 19,
    title: 'News Application',
    description: 'News reader with Finance, Politics, Sports and Technology categories and search, pulling headlines from an external news API into a lightweight static frontend.',
    image: '/Images/PROJECTS/news-app.webp',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    categories: ['Web App'],
    github: 'https://github.com/ALIRAZA4278/News-App',
    live: 'https://news-app-flame-eta.vercel.app/',
    featured: true,
    type: 'Personal'
  },
];

// Within each group, sites on their own domain come first, then projects with
// no live link, then .vercel.app links. sort() is stable, so the order above
// is kept inside each tier.
const linkTier = (project) => {
  if (!project.live || project.live === '#') return 1;
  return /\.vercel\.app/i.test(project.live) ? 2 : 0;
};
const byLinkTier = (list) => [...list].sort((a, b) => linkTier(a) - linkTier(b));

// These close the list, in this order, whatever their link
const PINNED_LAST = ['Furniture E-commerce Website', 'Resume Builder', 'Pizza Ordering Chatbot'];
const isPinned = (project) => PINNED_LAST.includes(project.title);

const FEATURED_COUNT = 6;
const rest = projectList.slice(FEATURED_COUNT);
export const allProjects = [
  ...byLinkTier(projectList.slice(0, FEATURED_COUNT)),
  ...byLinkTier(rest.filter((p) => !isPinned(p))),
  ...PINNED_LAST.map((title) => rest.find((p) => p.title === title)).filter(Boolean)
];

// Helper exports
export const personalProjects = allProjects.filter(p => p.type === 'Personal');
export const clientProjects = allProjects.filter(p => p.type === 'Client' || p.type === 'Company');

// Categories for filter
export const filterCategories = ['All', 'Full-Stack', 'AI / Chatbot', 'E-commerce', 'Web App', 'Company Work', 'Freelance'];

// Display helpers
export const hasLink = (url) => Boolean(url) && url !== '#';

// 'Secret Hour - Couples Gift E-commerce' -> { name: 'Secret Hour', tagline: 'Couples Gift E-commerce' }
export const splitTitle = (title) => {
  const [name, ...rest] = title.split(' - ');
  return { name, tagline: rest.join(' - ') };
};

// 'https://www.apextechnify.com/' -> 'apextechnify.com'
export const domainOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

export const typeLabel = (type) => (type === 'Client' ? 'Freelance' : type);

// 'Company · Full-Stack' rather than 'Company · Company Work, Full-Stack'
export const metaLine = (project) => {
  const label = typeLabel(project.type);
  const rest = project.categories.filter((c) => !c.startsWith(label));
  return [label, rest.join(', ')].filter(Boolean).join(' · ');
};
