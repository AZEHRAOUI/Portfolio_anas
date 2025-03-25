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
// // };
// import { motion } from 'framer-motion';
// import { GraduationCap, Cpu, Globe2 } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';
// import { useLanguage } from '../context/LanguageContext';

// export const About = () => {
//   const { theme } = useTheme();
//   const { t } = useTranslation();
//   const { language } = useLanguage();
  
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
//             {t('about.title')} <span className="text-primary">{t('about.me')}</span>
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
//               }`}>{t('about.education.title')}</h4>
//             </div>
//             <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
//               {t('about.education.degree1')}<br/>
//               <span className="text-primary">{t('about.education.school1')}</span>
//             </p>
//             <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
//               {t('about.education.degree2')}<br/>
//               <span className="text-primary">{t('about.education.school2')}</span>
//             </p>
//             <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
//               {t('about.education.degree3')}<br/>
//               <span className="text-primary">{t('about.education.school3')}</span>
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
//               }`}>{t('about.specialization.title')}</h4>
//             </div>
//             <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//               <li className="flex items-center gap-2">
//                 <span className="text-primary">•</span>
//                 {t('about.specialization.skill1')}
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-primary">•</span>
//                 {t('about.specialization.skill2')}
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-primary">•</span>
//                 {t('about.specialization.skill3')}
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-primary">•</span>
//                 {t('about.specialization.skill4')}
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
//               }`}>{t('about.languages.title')}</h4>
//             </div>
//             <div className="space-y-4">
//               {[
//                 { lang: t('about.languages.french'), level: t('about.languages.native'), percent: 100 },
//                 { lang: t('about.languages.english'), level: t('about.languages.fluent'), percent: 90 },
//                 { lang: t('about.languages.german'), level: t('about.languages.intermediate'), percent: 70 }
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
// // };
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { GraduationCap, Cpu, Globe2, ChevronRight } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';
// import { useLanguage } from '../context/LanguageContext';

// export const About = () => {
//   const { theme } = useTheme();
//   const { t } = useTranslation();
//   const { language } = useLanguage();
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     // Ajouter un petit délai pour améliorer l'effet d'apparition
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300);
    
//     return () => clearTimeout(timer);
//   }, []);
  
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100 }
//     }
//   };
  
//   const isDark = theme === 'dark';
  
//   return (
//     <section 
//       id="about" 
//       className={`py-24 relative overflow-hidden ${
//         isDark 
//           ? 'bg-gradient-to-b from-background-dark to-background-dark/90' 
//           : 'bg-gradient-to-b from-gray-50 to-white'
//       }`}
//     >
//       {/* Éléments décoratifs en arrière-plan */}
//       <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
//         <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
//         <div className="absolute -left-16 top-48 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
//         <div className="absolute right-24 bottom-16 w-48 h-48 rounded-full bg-primary/5 blur-2xl" />
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block mb-2">
//             <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//               isDark ? 'bg-primary/10 text-primary' : 'bg-primary/20 text-primary-dark'
//             }`}>
//               {t('about.subtitle')}
//             </span>
//           </div>
          
//           <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
//             isDark ? 'text-white' : 'text-gray-900'
//           }`}>
//             {t('about.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('about.me')}</span>
//           </h2>
          
//           <div className="max-w-2xl mx-auto">
//             <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//               {t('about.description')}
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-3 gap-8"
//         >
//           {/* ÉDUCATION */}
//           <motion.div
//             variants={itemVariants}
//             className={`group rounded-2xl p-8 border transition-all duration-500 
//               ${isDark 
//                 ? 'bg-background-light/10 backdrop-blur-md border-primary/10 hover:border-primary/20' 
//                 : 'bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl border-gray-100'
//               } hover:-translate-y-2`}
//           >
//             <div className={`p-4 rounded-2xl mb-6 w-16 h-16 flex items-center justify-center
//               ${isDark ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-primary/5 group-hover:bg-primary/10'} 
//               transition-all duration-300`}
//             >
//               <GraduationCap className="w-8 h-8 text-primary" />
//             </div>
//             <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//               {t('about.education.title')}
//             </h4>
            
//             {[
//               { degree: t('about.education.degree1'), school: t('about.education.school1'), years: '2018 - 2022' },
//               { degree: t('about.education.degree2'), school: t('about.education.school2'), years: '2016 - 2018' },
//               { degree: t('about.education.degree3'), school: t('about.education.school3'), years: '2013 - 2016' }
//             ].map((education, index) => (
//               <div key={index} className={`mb-4 pb-4 ${index < 2 ? 'border-b' : ''} ${
//                 isDark ? 'border-gray-700/50' : 'border-gray-100'
//               }`}>
//                 <h5 className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
//                   {education.degree}
//                 </h5>
//                 <p className="flex items-center text-primary">
//                   {education.school}
//                 </p>
//                 <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
//                   {education.years}
//                 </span>
//               </div>
//             ))}
//           </motion.div>

//           {/* SPÉCIALISATION */}
//           <motion.div
//             variants={itemVariants}
//             className={`group rounded-2xl p-8 border transition-all duration-500 
//               ${isDark 
//                 ? 'bg-background-light/10 backdrop-blur-md border-primary/10 hover:border-primary/20' 
//                 : 'bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl border-gray-100'
//               } hover:-translate-y-2`}
//           >
//             <div className={`p-4 rounded-2xl mb-6 w-16 h-16 flex items-center justify-center
//               ${isDark ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-primary/5 group-hover:bg-primary/10'} 
//               transition-all duration-300`}
//             >
//               <Cpu className="w-8 h-8 text-primary" />
//             </div>
//             <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//               {t('about.specialization.title')}
//             </h4>
            
//             <ul className="space-y-4">
//               {[
//                 t('about.specialization.skill1'),
//                 t('about.specialization.skill2'),
//                 t('about.specialization.skill3'),
//                 t('about.specialization.skill4')
//               ].map((skill, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <div className={`mt-1 flex-shrink-0 p-1 rounded-full ${
//                     isDark ? 'bg-primary/20' : 'bg-primary/10'
//                   }`}>
//                     <ChevronRight className="w-4 h-4 text-primary" />
//                   </div>
//                   <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
//                     {skill}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* LANGUES */}
//           <motion.div
//             variants={itemVariants}
//             className={`group rounded-2xl p-8 border transition-all duration-500 
//               ${isDark 
//                 ? 'bg-background-light/10 backdrop-blur-md border-primary/10 hover:border-primary/20' 
//                 : 'bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl border-gray-100'
//               } hover:-translate-y-2`}
//           >
//             <div className={`p-4 rounded-2xl mb-6 w-16 h-16 flex items-center justify-center
//               ${isDark ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-primary/5 group-hover:bg-primary/10'} 
//               transition-all duration-300`}
//             >
//               <Globe2 className="w-8 h-8 text-primary" />
//             </div>
//             <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//               {t('about.languages.title')}
//             </h4>
            
//             <div className="space-y-6">
//               {[
//                 { lang: t('about.languages.french'), level: t('about.languages.native'), percent: 100 },
//                 { lang: t('about.languages.english'), level: t('about.languages.fluent'), percent: 90 },
//                 { lang: t('about.languages.german'), level: t('about.languages.intermediate'), percent: 70 }
//               ].map((lang, index) => (
//                 <div key={index} className="space-y-3">
//                   <div className="flex justify-between items-center">
//                     <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
//                       {lang.lang}
//                     </span>
//                     <span className={`text-sm px-2 py-1 rounded-full ${
//                       isDark 
//                         ? 'bg-primary/10 text-primary' 
//                         : 'bg-primary/10 text-primary-dark'
//                     }`}>
//                       {lang.level}
//                     </span>
//                   </div>
//                   <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${lang.percent}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
//                       className="h-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-accent"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Server, 
  Database, 
  Network, 
  Laptop, 
  Cloud, 
  CircuitBoard, 
  Activity, 
  Globe2, 
  Lock, 
  Wrench, 
  Radio
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isDark = theme === 'dark';
  
  // Icônes tech par catégorie - utilisant uniquement les icônes standard de Lucide
  const techIcons = {
    embedded: CircuitBoard,
    cloud: Cloud,
    data: Database,
    iot: Radio,
    network: Network,
    industry: Wrench
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };
  
  // Hex grid pattern pour background
  const HexPattern = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5) rotate(0)">
            <path d="M25 0 L50 14.4 L50 38.2 L25 52.6 L0 38.2 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" className={isDark ? "text-blue-400" : "text-blue-800"} />
      </svg>
    </div>
  );
  
  // Composant pour représenter une compétence technique
  const TechSkill = ({ icon: Icon, title, level }) => {
    return (
      <div className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
        isDark ? 'hover:bg-primary/10' : 'hover:bg-primary/5'
      }`}>
        <div className={`p-2 rounded-lg ${
          isDark ? 'bg-primary/15' : 'bg-primary/10'
        }`}>
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className={isDark ? 'text-gray-200' : 'text-gray-700'}>
              {title}
            </span>
            <span className="text-primary text-sm">{level}%</span>
          </div>
          <div className={`h-1.5 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`h-full rounded-full ${
                level > 80 
                  ? 'bg-green-500' 
                  : level > 60 
                    ? 'bg-primary' 
                    : 'bg-amber-500'
              }`}
            />
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <section 
      id="about" 
      className={`py-20 relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100'
      }`}
    >
      {/* Motif hexagonal en arrière-plan */}
      <HexPattern />
      
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill={isDark ? "#1E40AF" : "#3B82F6"} d="M37.9,-64.5C50.4,-58.4,62.8,-50.6,71.1,-39.2C79.4,-27.8,83.6,-14,81.4,-1.3C79.1,11.5,70.5,22.9,62.5,34.2C54.5,45.4,47.1,56.4,36.8,64.3C26.5,72.2,13.2,77.1,0.3,76.6C-12.7,76.1,-25.3,70.3,-37.3,63.3C-49.3,56.3,-60.6,48.1,-68.6,36.8C-76.6,25.5,-81.2,12.7,-81.1,0C-81,-12.7,-76,-25.4,-67.7,-35.6C-59.3,-45.8,-47.5,-53.6,-35.2,-59.9C-23,-66.2,-11.5,-71,1.3,-73.3C14.1,-75.6,25.3,-70.6,37.9,-64.5Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute -left-16 top-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-3">
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              isDark ? 'bg-primary/20 text-primary-light' : 'bg-primary/30 text-primary-dark'
            }`}>
              {t('about.subtitle') || 'EXPERTISE TECHNIQUE'}
            </span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {t('about.title') || 'Mon Profil'} <span className="text-primary">{t('about.me') || 'Technique'}</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('about.description') || 'Spécialiste en systèmes embarqués, cloud computing et IoT industriel avec une expertise en analyse de données et en cybersécurité.'}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* DOMAINES D'EXPERTISE */}
          <motion.div
            variants={itemVariants}
            className={`col-span-1 rounded-xl p-6 ${
              isDark 
                ? 'bg-gray-800/70 backdrop-blur-md border border-gray-700' 
                : 'bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100'
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-blue-900/50' : 'bg-blue-100'
              }`}>
                <CircuitBoard className="w-6 h-6 text-primary" />
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('about.expertise.title') || 'Domaines d\'expertise'}
              </h3>
            </div>
            
            <div className="space-y-5">
              {[
                { icon: techIcons.embedded, title: t('about.expertise.embedded') || 'Systèmes Embarqués', level: 95 },
                { icon: techIcons.cloud, title: t('about.expertise.cloud') || 'Cloud Computing', level: 85 },
                { icon: techIcons.data, title: t('about.expertise.data') || 'Big Data & Analytics', level: 80 },
                { icon: techIcons.iot, title: t('about.expertise.iot') || 'IoT Industriel', level: 90 },
                { icon: techIcons.industry, title: t('about.expertise.industry') || 'Industrie 4.0', level: 75 }
              ].map((skill, index) => (
                <TechSkill key={index} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* FORMATION & CERTIFICATIONS */}
          <motion.div
            variants={itemVariants}
            className={`col-span-1 rounded-xl p-6 ${
              isDark 
                ? 'bg-gray-800/70 backdrop-blur-md border border-gray-700' 
                : 'bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100'
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-blue-900/50' : 'bg-blue-100'
              }`}>
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('about.education.title') || 'Formation & Certifications'}
              </h3>
            </div>
            
            <div className="space-y-5">
              {[
                { 
                  degree: t('about.education.degree1') || 'Master en Systèmes Embarqués & IoT', 
                  school: t('about.education.school1') || 'École Polytechnique', 
                  year: '2018 - 2020',
                  icon: Cpu
                },
                { 
                  degree: t('about.education.degree2') || 'Ingénieur en Informatique Industrielle', 
                  school: t('about.education.school2') || 'INSA Lyon', 
                  year: '2015 - 2018',
                  icon: Wrench
                },
                { 
                  degree: t('about.education.certification1') || 'AWS Certified Solutions Architect', 
                  school: t('about.education.certifier1') || 'Amazon Web Services', 
                  year: '2022',
                  icon: Cloud
                },
                { 
                  degree: t('about.education.certification2') || 'Azure IoT Developer', 
                  school: t('about.education.certifier2') || 'Microsoft', 
                  year: '2021',
                  icon: Radio
                }
              ].map((edu, index) => {
                const EduIcon = edu.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`p-2 mt-0.5 rounded-lg flex-shrink-0 ${
                      isDark ? 'bg-primary/15' : 'bg-primary/10'
                    }`}>
                      <EduIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {edu.degree}
                      </h4>
                      <p className="text-primary text-sm">
                        {edu.school}
                      </p>
                      <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {edu.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* LANGUES & COMPÉTENCES TRANSVERSALES */}
          <motion.div
            variants={itemVariants}
            className={`col-span-1 rounded-xl p-6 ${
              isDark 
                ? 'bg-gray-800/70 backdrop-blur-md border border-gray-700' 
                : 'bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100'
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-blue-900/50' : 'bg-blue-100'
              }`}>
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('about.skills.title') || 'Langues & Compétences'}
              </h3>
            </div>
            
            {/* Langues */}
            <div className="mb-6">
              <h4 className={`text-sm uppercase font-medium mb-3 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {t('about.languages.title') || 'Langues'}
              </h4>
              
              <div className="space-y-4">
                {[
                  { lang: t('about.languages.french') || 'Français', level: t('about.languages.native') || 'Natif', percent: 100 },
                  { lang: t('about.languages.english') || 'Anglais', level: t('about.languages.fluent') || 'Courant', percent: 90 },
                  { lang: t('about.languages.german') || 'Allemand', level: t('about.languages.intermediate') || 'Intermédiaire', percent: 70 }
                ].map((lang, index) => (
                  <TechSkill 
                    key={index} 
                    icon={Network} 
                    title={lang.lang} 
                    level={lang.percent}
                  />
                ))}
              </div>
            </div>
            
            {/* Autres compétences */}
            <div>
              <h4 className={`text-sm uppercase font-medium mb-3 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {t('about.otherSkills.title') || 'Autres compétences'}
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'DevOps', icon: Activity },
                  { name: 'CI/CD', icon: Activity },
                  { name: 'Cybersécurité', icon: Lock },
                  { name: 'Linux', icon: Laptop },
                  { name: 'Microcontrôleurs', icon: CircuitBoard },
                  { name: 'MQTT', icon: Radio },
                  { name: 'Docker', icon: Server },
                  { name: 'Kubernetes', icon: Server }
                ].map((skill, index) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full ${
                        isDark 
                          ? 'bg-gray-700 text-gray-200' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <SkillIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};