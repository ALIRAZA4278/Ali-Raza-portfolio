// Contact details, experience and skills shown across the site

export const contact = {
  email: 'af912923@gmail.com',
  phone: '+92 3212865058',
  phoneHref: 'tel:+923212865058',
  whatsapp: 'https://wa.me/923212865058',
  // Opens the chat with a greeting already typed
  whatsappChat: `https://wa.me/923212865058?text=${encodeURIComponent('Hi Ali, I found your portfolio and would like to talk about a project.')}`,
  city: 'Karachi, Pakistan',
  resume: '/Ali-Raza-Resume.pdf'
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ALIRAZA4278' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-raza-4a5762282/' },
  { label: 'X', href: 'https://x.com/AliFaro45370063' },
  { label: 'Instagram', href: 'https://instagram.com/ali._.razax' }
];

export const currentRole = {
  title: 'Software Engineer',
  company: 'MS Capital Soft',
  location: 'Karachi, Pakistan',
  period: '2025 – Present',
  description: 'Building and maintaining the company\'s SaaS products, delivering features, bug fixes and performance improvements as part of an agile team.',
  products: [
    { name: 'Adspoke', website: 'https://adspoke.ai/', role: 'AI platform that makes UGC-style video ads with AI actors' },
    { name: 'ActiveCalculator', website: 'https://activecalculator.com/', role: 'Calculator builder that helps service businesses automate quotes and capture leads' },
    { name: 'Selvo', website: 'https://selvo.co/', role: 'Customer support platform: shared inbox, live chat, help center and an AI agent' }
  ]
};

// Second current role (from the résumé)
export const agencyRole = {
  title: 'Full Stack Developer',
  company: 'The Social Hawks',
  location: 'Karachi, Pakistan',
  period: '2025 – Present',
  description: 'Complete frontend and backend for client projects, from Figma design to deployment, including client communication and requirements gathering.',
  projects: [
    { name: 'Connectiva', website: 'http://www.connectiva.ch/en', role: 'Swiss business directory and B2B marketplace' },
    { name: 'Mohit Computers', website: 'https://mohitcomputers.pk/', role: 'Store for used laptops and accessories, with an admin dashboard' },
    { name: 'Halwaiii', website: 'https://halwai.vercel.app/', role: 'Online store for a traditional sweets brand' },
    { name: 'BlendWise', website: 'https://blendwise.vercel.app/', role: 'Agency website for the company portfolio' }
  ]
};

export const freelanceSince = '2022';

export const freelanceHighlights = [
  { name: 'GracePoint Medical Staffing', note: 'Healthcare staffing agency website, Atlanta, USA', website: 'https://gracepointmedicalstaffing.com/' },
  { name: 'Quality Care Senior Living', note: 'Personal care home website with booking and HIPAA pages, Atlanta, USA', website: 'https://qualitycareseniorliving.com/' },
  { name: 'NDIS Beauty Collective', note: 'Accessible beauty service website for NDIS participants, Melbourne, Australia', website: 'https://ndisbeautycollective.com.au/' },
  { name: 'AI chatbots', note: 'Built with OpenAI and Dialogflow' },
  { name: 'Figma to code', note: 'Pixel-perfect responsive builds from design files' }
];

export const skillGroups = [
  {
    title: 'Frontend',
    note: 'Responsive interfaces, built pixel-perfect',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend',
    note: 'APIs, auth and server-side work',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth', 'Clerk', 'Nodemailer']
  },
  {
    title: 'Databases',
    note: 'SQL, NoSQL and headless CMS',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'PL/pgSQL', 'Supabase', 'Redis', 'Sanity CMS']
  },
  {
    title: 'AI and LLMs',
    note: 'AI integrated into real products',
    skills: ['OpenAI API', 'Gemini AI', 'Claude AI', 'Dialogflow', 'Hugging Face', 'Chatbots']
  },
  {
    title: 'Tools',
    note: 'How the work gets shipped',
    skills: ['Git', 'GitHub', 'Postman', 'Cloudinary', 'Figma to code', 'ESLint']
  }
];

export const specializations = [
  'full-stack MERN development',
  'AI integration and chatbots',
  'server-side rendering and static generation with Next.js',
  'RESTful API architecture',
  'responsive, mobile-first design'
];

export const education = [
  { name: 'BSCS', where: 'Ziauddin University, 2025 – 2028 (4th semester)' },
  { name: 'Web Development', where: 'Saylani Mass IT Training, certified 2022' },
  { name: 'AI Chatbot Development', where: 'Saylani Mass IT Training, certified 2023' }
];
