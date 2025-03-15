// import { motion } from 'framer-motion';
// import { skillCategories } from '../data'; // Importation des données

// export const Skills = () => {
//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Mes <span className="text-primary">Compétences</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         <div className="space-y-12">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <h3 className="text-2xl font-semibold text-white mb-4">{category.name}</h3>
//               <div className="space-y-4">
//                 {category.skills.map((skill, idx) => (
//                   <div key={idx} className="flex items-center justify-between">
//                     <span className="text-white text-lg">{skill.name}</span>
//                     <div className="w-3/4 bg-background-light/50 rounded-full">
//                       <div
//                         className="h-2 bg-primary rounded-full"
//                         style={{ width: `${skill.percentage}%` }}
//                       />
//                     </div>
//                     <span className="text-gray-400">{skill.percentage}%</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// import { motion } from 'framer-motion';
// import { skillCategories } from '../data';

// export const Skills = () => {
//   // Mapping des logos pour différentes technologies
//   const logoMap: Record<string, string> = {
//     // Langages de programmation
//     "JavaScript": "/logos/javascript.svg",
//     "TypeScript": "/logos/typescript.svg",
//     "Python": "/logos/python.svg",
//     "Java": "/logos/java.svg",
//     "C++": "/logos/cpp.svg",
//     "C#": "/logos/csharp.svg",
//     "Matlab": "/logos/matlab.svg",
//     "PHP": "/logos/php.svg",
    
//     // Frameworks et librairies
//     "React": "/logos/react.svg",
//     "Vue": "/logos/vue.svg",
//     "Angular": "/logos/angular.svg",
//     "Node.js": "/logos/nodejs.svg",
//     "Express": "/logos/express.svg",
//     "Next.js": "/logos/nextjs.svg",
//     "Django": "/logos/django.svg",
//     "Flask": "/logos/flask.svg",
    
//     // DevOps & Cloud
//     "Docker": "/logos/docker.svg",
//     "Kubernetes": "/logos/kubernetes.svg",
//     "AWS": "/logos/aws.svg",
//     "Azure": "/logos/azure.svg",
//     "Google Cloud": "/logos/gcp.svg",
//     "Jenkins": "/logos/jenkins.svg",
    
//     // Gestion de version
//     "Git": "/logos/git.svg",
//     "GitHub": "/logos/github.svg",
//     "GitLab": "/logos/gitlab.svg",
    
//     // Automatisation et Robotique
//     "ROS2": "/logos/ros2.svg",
//     "TIA Portal V14": "/logos/tiaportal.svg",
    
//     // Autres
//     "Render": "/logos/render.svg",
//     "SQL": "/logos/sql.svg",
//     "MongoDB": "/logos/mongodb.svg",
//     "Redis": "/logos/redis.svg",
//     "GraphQL": "/logos/graphql.svg",
//   };

//   // Fonction pour obtenir le chemin du logo ou fallback vers un logo par défaut
//   const getLogoPath = (skillName: string) => {
//     return logoMap[skillName] || "/logos/default-tech.svg";
//   };

//   return (
//     <section id="skills" className="py-20 relative bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Mes <span className="text-primary">Compétences</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         <div className="space-y-16">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.name}</h3>
              
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//                 {category.skills.map((skill, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: idx * 0.05 }}
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     className="flex flex-col items-center bg-gray-800 rounded-xl p-4 shadow-lg"
//                   >
//                     <div className="w-16 h-16 mb-3 flex items-center justify-center">
//                       <img 
//                         src={getLogoPath(skill.name)} 
//                         alt={`${skill.name} logo`} 
//                         className="max-w-full max-h-full object-contain" 
//                       />
//                     </div>
//                     <p className="text-white font-medium text-center">{skill.name}</p>
                    
//                     <div className="w-full mt-3 bg-gray-700 rounded-full h-1.5">
//                       <div
//                         className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                         style={{ width: `${skill.percentage}%` }}
//                       />
//                     </div>
                    
//                     <span className="text-xs text-gray-400 mt-1">{skill.percentage}%</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// import { motion } from 'framer-motion';
// import { skillCategories } from '../data';

// export const Skills = () => {
//   // Mapping des logos pour différentes technologies
//   const logoMap: Record<string, string> = {
//     // Langages de programmation
//     "JavaScript": "/logos/javascript.svg",
//     "TypeScript": "/logos/typescript.svg",
//     "Python": "/logos/python.svg",
//     "Java": "/logos/java.svg",
//     "C++": "/logos/cpp.svg",
//     "C#": "/logos/csharp.svg",
//     "C/C++": "/logos/cpp.svg",
//     "Matlab": "/logos/matlab.svg",
//     "PHP": "/logos/php.svg",
//     "Assembly": "/logos/assembly.svg",
    
//     // Frameworks et librairies
//     "React": "/logos/react.svg",
//     "Vue": "/logos/vue.svg",
//     "Angular": "/logos/angular.svg",
//     "Node.js": "/logos/nodejs.svg",
//     "Express": "/logos/express.svg",
//     "Next.js": "/logos/nextjs.svg",
//     "Django": "/logos/django.svg",
//     "Flask": "/logos/flask.svg",
    
//     // DevOps & Cloud
//     "Docker": "/logos/docker.svg",
//     "Kubernetes": "/logos/kubernetes.svg",
//     "AWS": "/logos/aws.svg",
//     "Azure": "/logos/azure.svg",
//     "Google Cloud": "/logos/gcp.svg",
//     "Jenkins": "/logos/jenkins.svg",
    
//     // Gestion de version
//     "Git": "/logos/git.svg",
//     "GitHub": "/logos/github.svg",
//     "GitLab": "/logos/gitlab.svg",
    
//     // Automatisation et Robotique
//     "ROS2": "/logos/ros2.svg",
//     "TIA Portal V14": "/logos/tiaportal.svg",
//     "Automates Programmables": "/logos/plc.svg",
    
//     // Autres
//     "Render": "/logos/render.svg",
//     "SQL": "/logos/sql.svg",
//     "MongoDB": "/logos/mongodb.svg",
//     "Redis": "/logos/redis.svg",
//     "GraphQL": "/logos/graphql.svg",
//     "RESTful APIs": "/logos/api.svg",
//   };

//   // Fonction pour obtenir le chemin du logo ou fallback vers un logo par défaut
//   const getLogoPath = (skillName: string) => {
//     return logoMap[skillName] || "/logos/default-tech.svg";
//   };

//   return (
//     <section id="skills" className="py-20 relative bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Mes <span className="text-primary">Compétences</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         <div className="space-y-16">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.name}</h3>
              
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//                 {category.skills.map((skill, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: idx * 0.05 }}
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     className="flex flex-col items-center bg-gray-800 rounded-xl p-4 shadow-lg"
//                   >
//                     <div className="w-16 h-16 mb-4 flex items-center justify-center">
//                       <img 
//                         src={getLogoPath(skill.name)} 
//                         alt={`${skill.name} logo`} 
//                         className="max-w-full max-h-full object-contain" 
//                       />
//                     </div>
//                     <p className="text-white font-medium text-center">{skill.name}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// // };
// import { motion, AnimatePresence } from 'framer-motion';
// import { skillCategories } from '../data';
// import { useState } from 'react';

// export const Skills = () => {
//   // État pour suivre quelle catégorie est actuellement ouverte
//   const [openCategory, setOpenCategory] = useState<number | null>(null);

//   // Mapping des logos pour différentes technologies
//   const logoMap: Record<string, string> = {
//     // Langages de programmation
//     "JavaScript": "/logos/javascript.svg",
//     "TypeScript": "/logos/typescript.svg",
//     "Python": "/logos/python.svg",
//     "Java": "/logos/java.svg",
//     "C++": "/logos/cpp.svg",
//     "C#": "/logos/csharp.svg",
//     "C/C++": "/logos/cpp.svg",
//     "Matlab": "/logos/matlab.svg",
//     "PHP": "/logos/php.svg",
//     "Assembly": "/logos/assembly.svg",
    
//     // Frameworks et librairies
//     "React": "/logos/react.svg",
//     "Vue": "/logos/vue.svg",
//     "Angular": "/logos/angular.svg",
//     "Node.js": "/logos/nodejs.svg",
//     "Express": "/logos/express.svg",
//     "Next.js": "/logos/nextjs.svg",
//     "Django": "/logos/django.svg",
//     "Flask": "/logos/flask.svg",
    
//     // DevOps & Cloud
//     "Docker": "/logos/docker.svg",
//     "Kubernetes": "/logos/kubernetes.svg",
//     "AWS": "/logos/aws.svg",
//     "Azure": "/logos/azure.svg",
//     "Google Cloud": "/logos/gcp.svg",
//     "Jenkins": "/logos/jenkins.svg",
    
//     // Gestion de version
//     "Git": "/logos/git.svg",
//     "GitHub": "/logos/github.svg",
//     "GitLab": "/logos/gitlab.svg",
    
//     // Automatisation et Robotique
//     "ROS2": "/logos/ros2.svg",
//     "TIA Portal V14": "/logos/tiaportal.svg",
//     "Automates Programmables": "/logos/plc.svg",
    
//     // Autres
//     "Render": "/logos/render.svg",
//     "SQL": "/logos/sql.svg",
//     "MongoDB": "/logos/mongodb.svg",
//     "Redis": "/logos/redis.svg",
//     "GraphQL": "/logos/graphql.svg",
//     "RESTful APIs": "/logos/api.svg",
//   };

//   // Fonction pour obtenir le chemin du logo ou fallback vers un logo par défaut
//   const getLogoPath = (skillName: string) => {
//     return logoMap[skillName] || "/logos/default-tech.svg";
//   };

//   // Fonction pour basculer l'état d'ouverture d'une catégorie
//   const toggleCategory = (index: number) => {
//     setOpenCategory(openCategory === index ? null : index);
//   };

//   return (
//     <section id="skills" className="py-20 relative bg-gray-900 min-h-screen">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Mes <span className="text-primary">Compétences</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         {/* Nuage de catégories */}
//         <motion.div 
//           className="flex flex-wrap justify-center gap-6 mb-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, staggerChildren: 0.1 }}
//         >
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               onClick={() => toggleCategory(index)}
//               className={`
//                 cursor-pointer px-6 py-4 rounded-full font-semibold text-lg
//                 transition-all duration-300 shadow-lg
//                 ${openCategory === index 
//                   ? 'bg-primary text-white scale-110' 
//                   : 'bg-gray-800 text-white hover:bg-gray-700'}
//               `}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               layout
//             >
//               {category.name}
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Zone d'affichage des compétences de la catégorie sélectionnée */}
//         <AnimatePresence mode="wait">
//           {openCategory !== null && (
//             <motion.div
//               key={`category-${openCategory}`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="bg-gray-800 rounded-xl p-8 shadow-xl"
//             >
//               <h3 className="text-2xl font-semibold text-white mb-8 text-center">
//                 {skillCategories[openCategory].name}
//               </h3>
              
//               <motion.div 
//                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   visible: {
//                     transition: {
//                       staggerChildren: 0.05
//                     }
//                   },
//                   hidden: {}
//                 }}
//               >
//                 {skillCategories[openCategory].skills.map((skill, idx) => (
//                   <motion.div
//                     key={idx}
//                     variants={{
//                       visible: { opacity: 1, scale: 1, y: 0 },
//                       hidden: { opacity: 0, scale: 0.8, y: 20 }
//                     }}
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     className="flex flex-col items-center bg-gray-700 rounded-xl p-4 shadow-lg"
//                   >
//                     <div className="w-16 h-16 mb-4 flex items-center justify-center">
//                       <img 
//                         src={getLogoPath(skill.name)} 
//                         alt={`${skill.name} logo`} 
//                         className="max-w-full max-h-full object-contain" 
//                       />
//                     </div>
//                     <p className="text-white font-medium text-center">{skill.name}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Skills = () => {
  // État pour suivre quelle catégorie est actuellement ouverte
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const { theme } = useTheme();

  // Mapping des logos pour différentes technologies
  const logoMap: Record<string, string> = {
    // Langages de programmation
    "JavaScript": "/logos/javascript.svg",
    "TypeScript": "/logos/typescript.svg",
    "Python": "/logos/python.svg",
    "Java": "/logos/java.svg",
    "C++": "/logos/cpp.svg",
    "C#": "/logos/csharp.svg",
    "C/C++": "/logos/cpp.svg",
    "Matlab": "/logos/matlab.svg",
    "PHP": "/logos/php.svg",
    "Assembly": "/logos/assembly.svg",
    
    // Frameworks et librairies
    "React": "/logos/react.svg",
    "Vue": "/logos/vue.svg",
    "Angular": "/logos/angular.svg",
    "Node.js": "/logos/nodejs.svg",
    "Express": "/logos/express.svg",
    "Next.js": "/logos/nextjs.svg",
    "Django": "/logos/django.svg",
    "Flask": "/logos/flask.svg",
    
    // DevOps & Cloud
    "Docker": "/logos/docker.svg",
    "Kubernetes": "/logos/kubernetes.svg",
    "AWS": "/logos/aws.svg",
    "Azure": "/logos/azure.svg",
    "Google Cloud": "/logos/gcp.svg",
    "Jenkins": "/logos/jenkins.svg",
    
    // Gestion de version
    "Git": "/logos/git.svg",
    "GitHub": "/logos/github.svg",
    "GitLab": "/logos/gitlab.svg",
    
    // Automatisation et Robotique
    "ROS2": "/logos/ros2.svg",
    "TIA Portal V14": "/logos/tiaportal.svg",
    "Automates Programmables": "/logos/plc.svg",
    
    // Autres
    "Render": "/logos/render.svg",
    "SQL": "/logos/sql.svg",
    "MongoDB": "/logos/mongodb.svg",
    "Redis": "/logos/redis.svg",
    "GraphQL": "/logos/graphql.svg",
    "RESTful APIs": "/logos/api.svg",
  };

  // Fonction pour obtenir le chemin du logo ou fallback vers un logo par défaut
  const getLogoPath = (skillName: string) => {
    return logoMap[skillName] || "/logos/default-tech.svg";
  };

  // Fonction pour basculer l'état d'ouverture d'une catégorie
  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section id="skills" className={`${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'} py-20 relative min-h-screen`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Mes <span className="text-primary">Compétences</span>
          </h2>
          <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-accent' : 'bg-primary'} mx-auto rounded-full`} />
        </motion.div>

        {/* Nuage de catégories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              onClick={() => toggleCategory(index)}
              className={`
                cursor-pointer px-6 py-4 rounded-full font-semibold text-lg
                transition-all duration-300 shadow-lg
                ${openCategory === index 
                  ? 'bg-primary text-white scale-110' 
                  : theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {category.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Zone d'affichage des compétences de la catégorie sélectionnée */}
        <AnimatePresence mode="wait">
          {openCategory !== null && (
            <motion.div
              key={`category-${openCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-xl`}
            >
              <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>
                {skillCategories[openCategory].name}
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  },
                  hidden: {}
                }}
              >
                {skillCategories[openCategory].skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      visible: { opacity: 1, scale: 1, y: 0 },
                      hidden: { opacity: 0, scale: 0.8, y: 20 }
                    }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`flex flex-col items-center rounded-xl p-4 shadow-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}
                  >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <img 
                        src={getLogoPath(skill.name)} 
                        alt={`${skill.name} logo`} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium text-center`}>{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
