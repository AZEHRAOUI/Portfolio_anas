// import { motion } from 'framer-motion';
// import { GraduationCap, Cpu, Globe2 } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { LanguageSwitcher } from './LanguageSwitcher';

// export const About = () => {
//   const { theme } = useTheme();
  
//   return (
//     <section id="about" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
//             theme === 'dark' ? 'text-white' : 'text-gray-900'
//           }`}>
//             À propos de <span className="text-primary">moi</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className={`${
//               theme === 'dark' 
//                 ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' 
//                 : 'bg-white shadow-lg border-gray-200'
//             } rounded-2xl p-6 border transform transition-all duration-300 hover:scale-105`}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'}`}>
//                 <GraduationCap className="w-6 h-6 text-primary" />
//               </div>
//               <h4 className={`text-lg font-semibold ${
//                 theme === 'dark' ? 'text-white' : 'text-gray-900'
//               }`}>Formation</h4>
//             </div>
//             <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
//               Diplôme d'ingénieur en Systèmes Embarqués<br/>
//               <span className="text-primary">Polytech Lille, 2022-2025</span>
//             </p>
//             <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
//               Classes préparatoires Technologie et Sciences Industrielles(TSI)<br/>
//               <span className="text-primary">CPGE Salmane Al Farissi, 2020-2022</span>
//             </p>
//             <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
//               Bac Sciences et technologie électrique (Mention Tres Bien)<br/>
//               <span className="text-primary">Lycee Moulay Abdellah, 2020-2022</span>
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className={`${
//               theme === 'dark' 
//                 ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' 
//                 : 'bg-white shadow-lg border-gray-200'
//             } rounded-2xl p-6 border transform transition-all duration-300 hover:scale-105`}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'}`}>
//                 <Cpu className="w-6 h-6 text-primary" />
//               </div>
//               <h4 className={`text-lg font-semibold ${
//                 theme === 'dark' ? 'text-white' : 'text-gray-900'
//               }`}>Spécialisation</h4>
//             </div>
//             <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//               <li className="flex items-center gap-2">
//                 <span className="text-primary">•</span>
//                 IoT & Systèmes Connectés
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-primary">•</span>
//                 Électronique Avancée
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-primary">•</span>
//                 Firmware & Développement Bas Niveau
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-primary">•</span>
//                 Energie Industrielle
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className={`${
//               theme === 'dark' 
//                 ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' 
//                 : 'bg-white shadow-lg border-gray-200'
//             } rounded-2xl p-6 border transform transition-all duration-300 hover:scale-105`}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'}`}>
//                 <Globe2 className="w-6 h-6 text-primary" />
//               </div>
//               <h4 className={`text-lg font-semibold ${
//                 theme === 'dark' ? 'text-white' : 'text-gray-900'
//               }`}>Langues</h4>
//             </div>
//             <div className="space-y-4">
//               {[
//                 { lang: "Français", level: "Natif", percent: 100 },
//                 { lang: "Anglais", level: "Courant", percent: 90 },
//                 { lang: "Allemand", level: "Intermédiaire", percent: 70 }
//               ].map((lang, index) => (
//                 <div key={index} className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
//                       {lang.lang}
//                     </span>
//                     <span className="text-primary">{lang.level}</span>
//                   </div>
//                   <div className={`h-1.5 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${lang.percent}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1, delay: 0.2 }}
//                       className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Globe2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  return (
    <section id="about" className={`py-20 relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
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
            {t('about.title')} <span className="text-primary">{t('about.me')}</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${
              theme === 'dark' 
                ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' 
                : 'bg-white shadow-lg border-gray-200'
            } rounded-2xl p-6 border transform transition-all duration-300 hover:scale-105`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'}`}>
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h4 className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{t('about.education.title')}</h4>
            </div>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              {t('about.education.degree1')}<br/>
              <span className="text-primary">{t('about.education.school1')}</span>
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              {t('about.education.degree2')}<br/>
              <span className="text-primary">{t('about.education.school2')}</span>
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              {t('about.education.degree3')}<br/>
              <span className="text-primary">{t('about.education.school3')}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${
              theme === 'dark' 
                ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' 
                : 'bg-white shadow-lg border-gray-200'
            } rounded-2xl p-6 border transform transition-all duration-300 hover:scale-105`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'}`}>
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h4 className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{t('about.specialization.title')}</h4>
            </div>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                {t('about.specialization.skill1')}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                {t('about.specialization.skill2')}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                {t('about.specialization.skill3')}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                {t('about.specialization.skill4')}
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${
              theme === 'dark' 
                ? 'bg-background-light/30 backdrop-blur-lg border-primary/20' 
                : 'bg-white shadow-lg border-gray-200'
            } rounded-2xl p-6 border transform transition-all duration-300 hover:scale-105`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'}`}>
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <h4 className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{t('about.languages.title')}</h4>
            </div>
            <div className="space-y-4">
              {[
                { lang: t('about.languages.french'), level: t('about.languages.native'), percent: 100 },
                { lang: t('about.languages.english'), level: t('about.languages.fluent'), percent: 90 },
                { lang: t('about.languages.german'), level: t('about.languages.intermediate'), percent: 70 }
              ].map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {lang.lang}
                    </span>
                    <span className="text-primary">{lang.level}</span>
                  </div>
                  <div className={`h-1.5 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};