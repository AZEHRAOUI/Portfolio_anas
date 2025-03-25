import { motion } from 'framer-motion';
import { projects } from '../data';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'web', 'embedded', 'automation', 'iot'];
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(selectedCategory));

  return (
    <section id="projects" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('projects.title')} <span className="text-primary">{t('projects.subtitle')}</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t(`projects.categories.${category}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${
                theme === 'dark'
                  ? 'bg-background-light/30 backdrop-blur-lg border-primary/20'
                  : 'bg-white border-gray-200'
              } rounded-xl overflow-hidden border group hover:border-primary transition-all duration-300`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-t from-background-dark/90 to-transparent'
                    : 'bg-gradient-to-t from-gray-900/90 to-transparent'
                }`} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-primary/5 text-primary'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      {t('projects.viewProject')}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      {t('projects.viewGithub')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};