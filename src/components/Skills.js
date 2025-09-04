'use client';

import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaDatabase,
  FaMobile
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiMongodb,
  SiExpress,
  SiFramer
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building structured, semantic and responsive web interfaces',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', proficiency: 'Expert', stars: 5 },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', proficiency: 'Advanced', stars: 4 },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500', proficiency: 'Expert', stars: 5 },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', proficiency: 'Advanced', stars: 4 },
        { name: 'React', icon: FaReact, color: 'text-cyan-500', proficiency: 'Advanced', stars: 4 },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white', proficiency: 'Advanced', stars: 4 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', proficiency: 'Expert', stars: 5 }
      ]
    },
    {
      title: 'Backend Development',
      description: 'Building server-side applications with focus on performance',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', proficiency: 'Advanced', stars: 4 },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-600 dark:text-gray-300', proficiency: 'Intermediate', stars: 3 },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', proficiency: 'Advanced', stars: 4 }
      ]
    },
    {
      title: 'Tools & Technologies',
      description: 'Development tools and modern technologies I work with',
      skills: [
        { name: 'Git & GitHub', icon: FaGitAlt, color: 'text-orange-600', proficiency: 'Advanced', stars: 4 },
        { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500', proficiency: 'Intermediate', stars: 3 },
        { name: 'Responsive Design', icon: FaMobile, color: 'text-purple-500', proficiency: 'Expert', stars: 5 },
        { name: 'API Development', icon: FaDatabase, color: 'text-indigo-500', proficiency: 'Advanced', stars: 4 }
      ]
    }
  ];

  const specializations = [
    'MERN Stack Development',
    'Server-Side Rendering (SSR)',
    'Static Site Generation (SSG)',
    'RESTful API Design',
    'Responsive Web Design',
    'Currently Learning: Agentic AI'
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            As a web developer, I&apos;ve established a solid foundation in both front-end and back-end technologies, 
            with a focus on developing scalable, efficient, and user-friendly applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Skill Icon */}
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors">
                          <skill.icon className={`text-3xl ${skill.color}`} />
                        </div>
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-3">
                        {skill.name}
                      </h4>

                      {/* Experience Level Badge */}
                      <div className="text-center mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          skill.proficiency === 'Expert' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : skill.proficiency === 'Advanced'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                            : 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                        }`}>
                          {skill.proficiency}
                        </span>
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="flex justify-center items-center">
                        <div className={`w-12 h-1 rounded-full ${
                          skill.proficiency === 'Expert' 
                            ? 'bg-green-500' 
                            : skill.proficiency === 'Advanced'
                            ? 'bg-blue-500'
                            : 'bg-orange-500'
                        }`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Specializations
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {specializations.map((spec, index) => (
              <motion.span
                key={spec}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  spec.includes('Currently Learning')
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                }`}
              >
                {spec}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Full-Stack Expertise
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I specialize in building end-to-end web applications using the{' '}
            <strong className="text-blue-600 dark:text-blue-400">MERN Stack</strong> 
            {' '}(MongoDB, Express.js, React, Node.js), ensuring seamless integration between 
            frontend and backend. My focus is on creating high-performance applications with 
            modern features like SSR, SSG, and API routes using{' '}
            <strong className="text-purple-600 dark:text-purple-400">Next.js</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}