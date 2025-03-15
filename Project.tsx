// import { motion } from 'framer-motion';
// import { Project } from '../types'; // Assure-toi que le type Project est bien importé
// import { GitHubIcon, ExternalLink } from 'lucide-react';
// import { projects } from '../data'; // Importation des projets

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Mes <span className="text-primary">Projets</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         <div className="space-y-12">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="flex flex-col md:flex-row gap-8"
//             >
//               <div className="flex-1 bg-background-light/50 backdrop-blur-lg rounded-2xl p-6 border border-primary/10">
//                 <h3 className="text-xl font-semibold text-white">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <div className="flex gap-4">
//                   {project.github && (
//                     <a href={project.github} target="_blank" rel="noopener noreferrer">
//                       <GitHub className="w-6 h-6 text-primary" />
//                     </a>
//                   )}
//                   {project.demoUrl && (
//                     <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
//                       <ExternalLink className="w-6 h-6 text-accent" />
//                     </a>
//                   )}
//                 </div>
//               </div>
//               <div className="flex-shrink-0 w-64 h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${project.image})` }} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// import { useState } from 'react'; // Pour gérer l'état de la catégorie sélectionnée
// import { motion } from 'framer-motion';
// import { projects } from '../data'; // Importation des projets

// // Icônes pour chaque domaine
// //import { FaGithub } from 'react-icons/fa';
// import { Laptop, Settings,GitHubIcon, ExternalLink, Wifi } from 'lucide-react';

// export const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   // Filtrer les projets par catégorie
//   const filteredProjects = selectedCategory
//     ? projects.filter(project => project.category === selectedCategory)
//     : [];

//   // Catégories disponibles
//   const categories = [
//     { name: 'Développeur Full Stack', icon: <Laptop className="w-6 h-6 text-primary" /> },
//     { name: 'Projet Automatique', icon: <Settings className="w-6 h-6 text-primary" /> },
//     { name: 'Projet Robotique', icon: <Wifi className="w-6 h-6 text-primary" /> },
//     { name: 'Projet IoT', icon: <Wifi className="w-6 h-6 text-primary" /> },
//     { name: 'Energie', icon: <Laptop className="w-6 h-6 text-primary" /> }
//   ];

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Mes <span className="text-primary">Projets</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
//           {categories.map((category, index) => (
//             <motion.div
//               key={index}
//               onClick={() => setSelectedCategory(category.name)}
//               whileHover={{ scale: 1.05 }}
//               className="cursor-pointer bg-background-light/50 backdrop-blur-lg rounded-2xl p-6 border border-primary/10 flex flex-col items-center justify-center"
//             >
//               <div className="mb-4">{category.icon}</div>
//               <h3 className="text-xl font-semibold text-white">{category.name}</h3>
//             </motion.div>
//           ))}
//         </div>

//         {selectedCategory && (
//           <div className="space-y-12">
//             <h3 className="text-2xl font-semibold text-white mb-6">{selectedCategory}</h3>
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="flex flex-col md:flex-row gap-8"
//               >
//                 <div className="flex-1 bg-background-light/50 backdrop-blur-lg rounded-2xl p-6 border border-primary/10">
//                   <h3 className="text-xl font-semibold text-white">{project.title}</h3>
//                   <p className="text-gray-400 mb-4">{project.description}</p>
//                   <div className="flex gap-4">
//                     {project.github && (
//                       <a href={project.github} target="_blank" rel="noopener noreferrer">
//                         <GitHub className="w-6 h-6 text-primary" />
//                       </a>
//                     )}
//                     {project.demoUrl && (
//                       <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="w-6 h-6 text-accent" />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//                 <div
//                   className="flex-shrink-0 w-64 h-64 bg-cover bg-center rounded-lg"
//                   style={{ backgroundImage: `url(${project.image})` }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// // };
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { projects } from '../data';
// import { Laptop, Settings, Wifi, ExternalLink, X } from 'lucide-react';

// export const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [showPopup, setShowPopup] = useState(false);

//   // Catégories disponibles
//   const categories = [
//     { name: 'Développeur Full Stack', icon: <Laptop className="w-6 h-6 text-primary" /> },
//     { name: 'Projet Automatique', icon: <Settings className="w-6 h-6 text-primary" /> },
//     { name: 'Projet Robotique', icon: <Wifi className="w-6 h-6 text-primary" /> },
//     { name: 'Projet IoT', icon: <Wifi className="w-6 h-6 text-primary" /> },
//     { name: 'Energie', icon: <Laptop className="w-6 h-6 text-primary" /> }
//   ];

//   // Filtrer les projets par catégorie
//   const filteredProjects = selectedCategory
//     ? projects.filter(project => project.category === selectedCategory)
//     : [];

//   const handleCategoryClick = (categoryName: string) => {
//     setSelectedCategory(categoryName);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <section id="projects" className="py-20 relative bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Mes <span className="text-primary">Projets</span>
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
//           {categories.map((category, index) => (
//             <motion.div
//               key={index}
//               onClick={() => handleCategoryClick(category.name)}
//               whileHover={{ scale: 1.05 }}
//               className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 border border-primary/10 flex flex-col items-center justify-center shadow-lg transition-transform duration-300"
//             >
//               <div className="mb-4">{category.icon}</div>
//               <h3 className="text-xl font-semibold text-white">{category.name}</h3>
//             </motion.div>
//           ))}
//         </div>

//         <AnimatePresence>
//           {showPopup && selectedCategory && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             >
//               <div 
//                 className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//                 onClick={closePopup}
//               />
              
//               <motion.div 
//                 className="bg-gray-800 rounded-2xl p-8 w-full max-w-6xl max-h-[80vh] overflow-y-auto relative z-10 border border-primary/20 shadow-xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-2xl font-semibold text-white">{selectedCategory}</h3>
//                   <button 
//                     onClick={closePopup}
//                     className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
//                   >
//                     <X className="w-6 h-6 text-white" />
//                   </button>
//                 </div>

//                 {filteredProjects.length === 0 ? (
//                   <p className="text-white">Aucun projet trouvé pour cette catégorie.</p>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {filteredProjects.map((project, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4, delay: index * 0.1 }}
//                         className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl overflow-hidden shadow-lg flex flex-col"
//                       >
//                         <div 
//                           className="h-48 bg-cover bg-center"
//                           style={{ backgroundImage: `url(${project.image})` }}
//                         />
//                         <div className="p-6 flex-1 flex flex-col">
//                           <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
//                           <p className="text-gray-200 mb-4 flex-1">{project.description}</p>
//                           <div className="flex justify-end">
//                             {project.demoUrl && (
//                               <a 
//                                 href={project.demoUrl} 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="flex items-center gap-2 text-white hover:text-gray-300 transition"
//                               >
//                                 <span>Voir le projet</span>
//                                 <ExternalLink className="w-5 h-5" />
//                               </a>
//                             )}
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// // };
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { projects } from '../data';
// import { Laptop, Settings, Wifi, ExternalLink, X } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// export const Projects = () => {
//   const { theme } = useTheme();
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [showPopup, setShowPopup] = useState(false);

//   // Catégories disponibles
//   const categories = [
//     { name: 'Développeur Full Stack', icon: <Laptop className="w-6 h-6 text-primary" /> },
//     { name: 'Projet Automatique', icon: <Settings className="w-6 h-6 text-primary" /> },
//     { name: 'Projet Robotique', icon: <Wifi className="w-6 h-6 text-primary" /> },
//     { name: 'Projet IoT', icon: <Wifi className="w-6 h-6 text-primary" /> },
//     { name: 'Energie', icon: <Laptop className="w-6 h-6 text-primary" /> }
//   ];

//   // Filtrer les projets par catégorie
//   const filteredProjects = selectedCategory
//     ? projects.filter(project => project.category === selectedCategory)
//     : [];

//   const handleCategoryClick = (categoryName: string) => {
//     setSelectedCategory(categoryName);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <section id="projects" className={`${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'} py-20 relative`}>
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//             Mes <span className="text-primary">Projets</span>
//           </h2>
//           <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-accent' : 'bg-primary'} mx-auto rounded-full`} />
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
//           {categories.map((category, index) => (
//             <motion.div
//               key={index}
//               onClick={() => handleCategoryClick(category.name)}
//               whileHover={{ scale: 1.05 }}
//               className={`cursor-pointer rounded-2xl p-6 border ${theme === 'dark' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-blue-400 to-purple-400'} flex flex-col items-center justify-center shadow-lg transition-transform duration-300`}
//             >
//               <div className="mb-4">{category.icon}</div>
//               <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{category.name}</h3>
//             </motion.div>
//           ))}
//         </div>

//         <AnimatePresence>
//           {showPopup && selectedCategory && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             >
//               <div 
//                 className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//                 onClick={closePopup}
//               />
              
//               <motion.div 
//                 className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 w-full max-w-6xl max-h-[80vh] overflow-y-auto relative z-10 border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{selectedCategory}</h3>
//                   <button 
//                     onClick={closePopup}
//                     className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
//                   >
//                     <X className="w-6 h-6 text-white" />
//                   </button>
//                 </div>

//                 {filteredProjects.length === 0 ? (
//                   <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-600'}`}>Aucun projet trouvé pour cette catégorie.</p>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {filteredProjects.map((project, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4, delay: index * 0.1 }}
//                         className={`rounded-xl overflow-hidden shadow-lg flex flex-col ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-200 to-purple-300'}`}
//                       >
//                         <div 
//                           className="h-48 bg-cover bg-center"
//                           style={{ backgroundImage: `url(${project.image})` }}
//                         />
//                         <div className={`p-6 flex-1 flex flex-col ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                           <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
//                           <p className={`mb-4 flex-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
//                           <div className="flex justify-end">
//                             {project.demoUrl && (
//                               <a 
//                                 href={project.demoUrl} 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="flex items-center gap-2 text-white hover:text-gray-300 transition"
//                               >
//                                 <span>Voir le projet</span>
//                                 <ExternalLink className="w-5 h-5" />
//                               </a>
//                             )}
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { Laptop, Settings, Wifi, ExternalLink, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Projects = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Catégories disponibles
  const categories = [
    { name: 'Développeur Full Stack', icon: <Laptop className="w-6 h-6 text-primary" /> },
    { name: 'Projet Automatique', icon: <Settings className="w-6 h-6 text-primary" /> },
    { name: 'Projet Robotique', icon: <Wifi className="w-6 h-6 text-primary" /> },
    { name: 'Projet IoT', icon: <Wifi className="w-6 h-6 text-primary" /> },
    { name: 'Energie', icon: <Laptop className="w-6 h-6 text-primary" /> }
  ];

  // Filtrer les projets par catégorie
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : [];

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="projects" className={`${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'} py-20 relative`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Mes <span className="text-primary">Projets</span>
          </h2>
          <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-accent' : 'bg-primary'} mx-auto rounded-full`} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              whileHover={{ scale: 1.05 }}
              className={`cursor-pointer rounded-2xl p-6 border ${theme === 'dark' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-blue-400 to-purple-400'} flex flex-col items-center justify-center shadow-lg transition-transform duration-300`}
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{category.name}</h3>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showPopup && selectedCategory && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={closePopup}
              />
              
              <motion.div 
                className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 w-full max-w-6xl max-h-[80vh] overflow-y-auto relative z-10 border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{selectedCategory}</h3>
                  <button 
                    onClick={closePopup}
                    className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {filteredProjects.length === 0 ? (
                  <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-600'}`}>Aucun projet trouvé pour cette catégorie.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`rounded-xl overflow-hidden shadow-lg flex flex-col ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-200 to-purple-300'}`}
                      >
                        <div 
                          className="h-48 bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className={`p-6 flex-1 flex flex-col ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                          <p className={`mb-4 flex-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                          <div className="flex justify-end">
                            {project.demoUrl && (
                              <a 
                                href={project.demoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white hover:text-gray-300 transition"
                              >
                                <span>Voir le projet</span>
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
