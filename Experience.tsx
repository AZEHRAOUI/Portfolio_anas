import { motion } from 'framer-motion';
import { experiences } from '../data';
import { Briefcase, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Experience = () => {
  const { theme } = useTheme();

  const companyLogos = {
    "Airbus": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Airbus_logo_2017.svg/2560px-Airbus_logo_2017.svg.png",
    "CETIM": "https://www.cetim.fr/wp-content/themes/cetim/img/logo-cetim.svg",
    "Junior Entreprise POLYTECH LILLE": "https://www.juniorpolytech.fr/wp-content/uploads/2019/09/logo-junior-polytech-lille.png"
  };

  return (
    <section id="experience" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Expériences <span className="text-primary">Professionnelles</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${theme === 'dark' ? 'bg-primary/20' : 'bg-primary/30'}`} />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                <div className="flex-1">
                  <div className={`${
                    theme === 'dark'
                      ? 'bg-background-light/30 backdrop-blur-lg border-primary/20'
                      : 'bg-white shadow-lg border-gray-200'
                  } rounded-2xl p-6 border`}>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{experience.date}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      {companyLogos[experience.company] && (
                        <img 
                          src={companyLogos[experience.company]} 
                          alt={`${experience.company} logo`}
                          className={`h-12 object-contain ${theme === 'dark' ? 'brightness-200' : ''}`}
                        />
                      )}
                      <div>
                        <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {experience.company}
                        </h3>
                        <h4 className={`text-lg text-primary mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {experience.title}
                        </h4>
                      </div>
                    </div>
                    {experience.description && (
                      <p className={`text-gray-400 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {experience.description}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className={`text-gray-300 flex items-start gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          <span className="text-accent">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-accent rounded-full relative z-10" />
                <div className="flex-1 md:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};