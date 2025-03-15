// import { motion } from 'framer-motion';

// export const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-background-light">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Contactez-moi
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
//         </motion.div>

//         <form className="max-w-lg mx-auto space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-lg text-gray-700">Nom</label>
//             <input type="text" id="name" className="w-full p-3 mt-2 border rounded-md" placeholder="Votre nom" />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
//             <input type="email" id="email" className="w-full p-3 mt-2 border rounded-md" placeholder="Votre email" />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
//             <textarea id="message" className="w-full p-3 mt-2 border rounded-md" placeholder="Votre message" />
//           </div>
//           <button type="submit" className="w-full py-3 bg-primary text-white rounded-md">Envoyer</button>
//         </form>
//       </div>
//     </section>
//   );
// // };
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Mail, User, MessageSquare } from 'lucide-react';

// export const Contact = () => {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
  
//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState({
//       ...formState,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simuler l'envoi du formulaire
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
      
//       // Réinitialiser après quelques secondes
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormState({ name: '', email: '', message: '' });
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="py-20 relative overflow-hidden">
//       {/* Arrière-plan avec dégradé */}
//       {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90" /> */}
//        <div className="py-20 bg-background-light" />
//       {/* Formes animées en arrière-plan */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(5)].map((_, index) => (
//           <motion.div
//             key={index}
//             className="absolute w-32 h-32 rounded-full bg-white opacity-10"
//             initial={{ 
//               x: Math.random() * 100 - 50 + '%', 
//               y: Math.random() * 100 - 50 + '%',
//               scale: Math.random() * 0.5 + 0.5
//             }}
//             animate={{ 
//               x: [
//                 Math.random() * 100 - 50 + '%', 
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%'
//               ],
//               y: [
//                 Math.random() * 100 - 50 + '%', 
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%'
//               ]
//             }}
//             transition={{ 
//               repeat: Infinity, 
//               repeatType: "reverse", 
//               duration: Math.random() * 20 + 20
//             }}
//           />
//         ))}
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//             Discutons de votre <span className="text-primary">projet</span>
//           </h2>
//           <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//             Vous avez une idée de projet innovante ? Je serais ravi d'en discuter et de voir comment nous pourrions collaborer ensemble.
//           </p>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
//         </motion.div>
        
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-white/20 shadow-xl"
//           >
//             {submitted ? (
//               <motion.div 
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Message envoyé avec succès!</h3>
//                 <p className="text-gray-300">Je vous répondrai dans les plus brefs délais.</p>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="name" className="block text-lg text-white mb-2 flex items-center">
//                       <User className="w-5 h-5 mr-2 text-primary" />
//                       Nom
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'name' ? 'ring-2 ring-primary' : ''}`}>
//                       <input 
//                         type="text" 
//                         id="name" 
//                         value={formState.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('name')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none" 
//                         placeholder="Votre nom" 
//                       />
//                       {focusedField === 'name' && (
//                         <motion.div 
//                           layoutId="focus-bg"
//                           className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
//                           initial={{ width: 0 }}
//                           animate={{ width: '100%' }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </div>
//                   </motion.div>
                  
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="email" className="block text-lg text-white mb-2 flex items-center">
//                       <Mail className="w-5 h-5 mr-2 text-primary" />
//                       Email
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'email' ? 'ring-2 ring-primary' : ''}`}>
//                       <input 
//                         type="email" 
//                         id="email" 
//                         value={formState.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none" 
//                         placeholder="Votre email" 
//                       />
//                       {focusedField === 'email' && (
//                         <motion.div 
//                           layoutId="focus-bg"
//                           className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
//                           initial={{ width: 0 }}
//                           animate={{ width: '100%' }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </div>
//                   </motion.div>
//                 </div>
                
//                 <motion.div
//                   whileFocus={{ scale: 1.02 }}
//                   whileHover={{ scale: 1.01 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <label htmlFor="message" className="block text-lg text-white mb-2 flex items-center">
//                     <MessageSquare className="w-5 h-5 mr-2 text-primary" />
//                     Message
//                   </label>
//                   <div className={`relative overflow-hidden rounded-lg ${focusedField === 'message' ? 'ring-2 ring-primary' : ''}`}>
//                     <textarea 
//                       id="message" 
//                       value={formState.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none min-h-32" 
//                       placeholder="Partagez les détails de votre projet..." 
//                     />
//                     {focusedField === 'message' && (
//                       <motion.div 
//                         layoutId="focus-bg"
//                         className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
//                         initial={{ width: 0 }}
//                         animate={{ width: '100%' }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </div>
//                 </motion.div>
                
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <motion.div 
//                       animate={{ rotate: 360 }}
//                       transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//                       className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
//                     />
//                   ) : (
//                     <>
//                       Envoyer votre message
//                       <Send className="w-5 h-5 ml-2" />
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mt-8 text-center"
//           >
//             <p className="text-gray-300">
//               Vous pouvez aussi me contacter directement à <a href="mailto:contact@example.com" className="text-primary hover:underline">contact@example.com</a>
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Mail, User, MessageSquare } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext'; // Import the theme context

// export const Contact = () => {
//   const { theme } = useTheme(); // Get the current theme

//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState({
//       ...formState,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);

//       // Reset form after a few seconds
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormState({ name: '', email: '', message: '' });
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <section
//       id="contact"
//       className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-background-light'}`} // Theme background
//     >
//       <div className="py-20" />

//       {/* Animated background shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(5)].map((_, index) => (
//           <motion.div
//             key={index}
//             className="absolute w-32 h-32 rounded-full bg-white opacity-10"
//             initial={{
//               x: Math.random() * 100 - 50 + '%',
//               y: Math.random() * 100 - 50 + '%',
//               scale: Math.random() * 0.5 + 0.5
//             }}
//             animate={{
//               x: [
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%'
//               ],
//               y: [
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%'
//               ]
//             }}
//             transition={{
//               repeat: Infinity,
//               repeatType: 'reverse',
//               duration: Math.random() * 20 + 20
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2
//             className={`text-3xl md:text-5xl font-bold ${
//               theme === 'dark' ? 'text-white' : 'text-gray-900'
//             } mb-4`}
//           >
//             Discutons de votre <span className="text-primary">projet</span>
//           </h2>
//           <p
//             className={`text-lg ${
//               theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
//             } max-w-2xl mx-auto`}
//           >
//             Vous avez une idée de projet innovante ? Je serais ravi d'en discuter
//             et de voir comment nous pourrions collaborer ensemble.
//           </p>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className={`${
//               theme === 'dark' ? 'bg-white/10 backdrop-blur-lg border-primary/20' : 'bg-white/10 backdrop-blur-lg border-white/20'
//             } p-8 md:p-10 rounded-2xl border shadow-xl`}
//           >
//             {submitted ? (
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Message envoyé avec succès!</h3>
//                 <p className="text-gray-300">Je vous répondrai dans les plus brefs délais.</p>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: 'spring', stiffness: 400, damping: 17 }}
//                   >
//                     <label
//                       htmlFor="name"
//                       className={`block text-lg ${
//                         theme === 'dark' ? 'text-white' : 'text-gray-900'
//                       } mb-2 flex items-center`}
//                     >
//                       <User className="w-5 h-5 mr-2 text-primary" />
//                       Nom
//                     </label>
//                     <div
//                       className={`relative overflow-hidden rounded-lg ${
//                         focusedField === 'name' ? 'ring-2 ring-primary' : ''
//                       }`}
//                     >
//                       <input
//                         type="text"
//                         id="name"
//                         value={formState.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('name')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none"
//                         placeholder="Votre nom"
//                       />
//                       {focusedField === 'name' && (
//                         <motion.div
//                           layoutId="focus-bg"
//                           className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
//                           initial={{ width: 0 }}
//                           animate={{ width: '100%' }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: 'spring', stiffness: 400, damping: 17 }}
//                   >
//                     <label
//                       htmlFor="email"
//                       className={`block text-lg ${
//                         theme === 'dark' ? 'text-white' : 'text-gray-900'
//                       } mb-2 flex items-center`}
//                     >
//                       <Mail className="w-5 h-5 mr-2 text-primary" />
//                       Email
//                     </label>
//                     <div
//                       className={`relative overflow-hidden rounded-lg ${
//                         focusedField === 'email' ? 'ring-2 ring-primary' : ''
//                       }`}
//                     >
//                       <input
//                         type="email"
//                         id="email"
//                         value={formState.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none"
//                         placeholder="Votre email"
//                       />
//                       {focusedField === 'email' && (
//                         <motion.div
//                           layoutId="focus-bg"
//                           className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
//                           initial={{ width: 0 }}
//                           animate={{ width: '100%' }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </div>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   whileFocus={{ scale: 1.02 }}
//                   whileHover={{ scale: 1.01 }}
//                   transition={{ type: 'spring', stiffness: 400, damping: 17 }}
//                 >
//                   <label
//                     htmlFor="message"
//                     className={`block text-lg ${
//                       theme === 'dark' ? 'text-white' : 'text-gray-900'
//                     } mb-2 flex items-center`}
//                   >
//                     <MessageSquare className="w-5 h-5 mr-2 text-primary" />
//                     Message
//                   </label>
//                   <div
//                     className={`relative overflow-hidden rounded-lg ${
//                       focusedField === 'message' ? 'ring-2 ring-primary' : ''
//                     }`}
//                   >
//                     <textarea
//                       id="message"
//                       value={formState.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none min-h-32"
//                       placeholder="Partagez les détails de votre projet..."
//                     />
//                     {focusedField === 'message' && (
//                       <motion.div
//                         layoutId="focus-bg"
//                         className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
//                         initial={{ width: 0 }}
//                         animate={{ width: '100%' }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </div>
//                 </motion.div>

//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
//                       className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
//                     />
//                   ) : (
//                     <>
//                       Envoyer votre message
//                       <Send className="w-5 h-5 ml-2" />
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mt-8 text-center"
//           >
//             <p className="text-gray-300">
//               Vous pouvez aussi me contacter directement à{' '}
//               <a
//                 href="mailto:contact@example.com"
//                 className="text-primary hover:underline"
//               >
//                 contact@example.com
//               </a>
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Mail, User, MessageSquare } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext'; // Importation du hook useTheme

// export const Contact = () => {
//   const { theme } = useTheme(); // Utilisation du hook pour obtenir le thème actuel
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState({
//       ...formState,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simuler l'envoi du formulaire
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
      
//       // Réinitialiser après quelques secondes
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormState({ name: '', email: '', message: '' });
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
//       <div className="py-20 bg-background-light" />
      
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(5)].map((_, index) => (
//           <motion.div
//             key={index}
//             className="absolute w-32 h-32 rounded-full bg-white opacity-10"
//             initial={{ 
//               x: Math.random() * 100 - 50 + '%', 
//               y: Math.random() * 100 - 50 + '%',
//               scale: Math.random() * 0.5 + 0.5
//             }}
//             animate={{ 
//               x: [
//                 Math.random() * 100 - 50 + '%', 
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%'
//               ],
//               y: [
//                 Math.random() * 100 - 50 + '%', 
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%'
//               ]
//             }}
//             transition={{ 
//               repeat: Infinity, 
//               repeatType: "reverse", 
//               duration: Math.random() * 20 + 20
//             }}
//           />
//         ))}
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
//             theme === 'dark' ? 'text-white' : 'text-gray-900'
//           }`}>
//             Discutons de votre <span className="text-primary">projet</span>
//           </h2>
//           <p className={`text-gray-300 max-w-2xl mx-auto text-lg ${
//             theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
//           }`}>
//             Vous avez une idée de projet innovante ? Je serais ravi d'en discuter et de voir comment nous pourrions collaborer ensemble.
//           </p>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
//         </motion.div>
        
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className={`bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-2xl border ${theme === 'dark' ? 'border-primary/20' : 'border-white/20'} shadow-xl`}
//           >
//             {submitted ? (
//               <motion.div 
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Message envoyé avec succès!</h3>
//                 <p className="text-gray-300">Je vous répondrai dans les plus brefs délais.</p>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="name" className={`block text-lg mb-2 flex items-center ${
//                       theme === 'dark' ? 'text-white' : 'text-gray-900'
//                     }`}>
//                       <User className="w-5 h-5 mr-2 text-primary" />
//                       Nom
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'name' ? 'ring-2 ring-primary' : ''}`}>
//                       <input 
//                         type="text" 
//                         id="name" 
//                         value={formState.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('name')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none" 
//                         placeholder="Votre nom" 
//                       />
//                       {focusedField === 'name' && (
//                         <motion.div 
//                           layoutId="focus-bg"
//                           className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
//                           initial={{ width: 0 }}
//                           animate={{ width: '100%' }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </div>
//                   </motion.div>
                  
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="email" className={`block text-lg mb-2 flex items-center ${
//                       theme === 'dark' ? 'text-white' : 'text-gray-900'
//                     }`}>
//                       <Mail className="w-5 h-5 mr-2 text-primary" />
//                       Email
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'email' ? 'ring-2 ring-primary' : ''}`}>
//                       <input 
//                         type="email" 
//                         id="email" 
//                         value={formState.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none" 
//                         placeholder="Votre email" 
//                       />
//                       {focusedField === 'email' && (
//                         <motion.div 
//                           layoutId="focus-bg"
//                           className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
//                           initial={{ width: 0 }}
//                           animate={{ width: '100%' }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </div>
//                   </motion.div>
//                 </div>
                
//                 <motion.div
//                   whileFocus={{ scale: 1.02 }}
//                   whileHover={{ scale: 1.01 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <label htmlFor="message" className={`block text-lg mb-2 flex items-center ${
//                     theme === 'dark' ? 'text-white' : 'text-gray-900'
//                   }`}>
//                     <MessageSquare className="w-5 h-5 mr-2 text-primary" />
//                     Message
//                   </label>
//                   <div className={`relative overflow-hidden rounded-lg ${focusedField === 'message' ? 'ring-2 ring-primary' : ''}`}>
//                     <textarea 
//                       id="message" 
//                       value={formState.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none min-h-32" 
//                       placeholder="Partagez les détails de votre projet..." 
//                     />
//                     {focusedField === 'message' && (
//                       <motion.div 
//                         layoutId="focus-bg"
//                         className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
//                         initial={{ width: 0 }}
//                         animate={{ width: '100%' }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </div>
//                 </motion.div>
                
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <motion.div 
//                       animate={{ rotate: 360 }}
//                       transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//                       className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
//                     />
//                   ) : (
//                     <>
//                       Envoyer votre message
//                       <Send className="w-5 h-5 ml-2" />
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mt-8 text-center"
//           >
//             <p className="text-gray-300">
//               Vous pouvez aussi me contacter directement à <a href="mailto:contact@example.com" className="text-primary hover:underline">contact@example.com</a>
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Mail, User, MessageSquare } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext'; // Importation du hook useTheme

// export const Contact = () => {
//   const { theme } = useTheme(); // Utilisation du hook pour obtenir le thème actuel
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState({
//       ...formState,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simuler l'envoi du formulaire
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
      
//       // Réinitialiser après quelques secondes
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormState({ name: '', email: '', message: '' });
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
//       <div className="py-20 bg-background-light" />
      
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(5)].map((_, index) => (
//           <motion.div
//             key={index}
//             className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-20"
//             initial={{ 
//               x: Math.random() * 100 - 50 + '%', 
//               y: Math.random() * 100 - 50 + '%',
//               scale: Math.random() * 0.5 + 0.5
//             }}
//             animate={{ 
//               x: [
//                 Math.random() * 100 - 50 + '%', 
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%'
//               ],
//               y: [
//                 Math.random() * 100 - 50 + '%', 
//                 Math.random() * 100 - 50 + '%',
//                 Math.random() * 100 - 50 + '%'
//               ]
//             }}
//             transition={{ 
//               repeat: Infinity, 
//               repeatType: "reverse", 
//               duration: Math.random() * 20 + 20
//             }}
//           />
//         ))}
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//             Discutons de votre <span className="text-primary">projet</span>
//           </h2>
//           <p className={`text-gray-300 max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//             Vous avez une idée de projet innovante ? Je serais ravi d'en discuter et de voir comment nous pourrions collaborer ensemble.
//           </p>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
//         </motion.div>
        
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className={`bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-2xl border ${theme === 'dark' ? 'border-primary/20' : 'border-white/20'} shadow-xl`}
//           >
//             {submitted ? (
//               <motion.div 
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Message envoyé avec succès!</h3>
//                 <p className="text-gray-300">Je vous répondrai dans les plus brefs délais.</p>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="name" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                       <User className="w-5 h-5 mr-2 text-primary" />
//                       Nom
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'name' ? 'ring-2 ring-primary' : ''}`}>
//                       <input 
//                         type="text" 
//                         id="name" 
//                         value={formState.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('name')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none" 
//                         placeholder="Votre nom" 
//                       />
//                       {focusedField === 'name' && (
//                         <motion.div 
//                           layoutId="focus-bg"
//                           className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
//                           initial={{ width: 0 }}
//                           animate={{ width: '100%' }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </div>
//                   </motion.div>
                  
//                   <motion.div
//                     whileFocus={{ scale: 1.02 }}
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <label htmlFor="email" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                       <Mail className="w-5 h-5 mr-2 text-primary" />
//                       Email
//                     </label>
//                     <div className={`relative overflow-hidden rounded-lg ${focusedField === 'email' ? 'ring-2 ring-primary' : ''}`}>
//                       <input 
//                         type="email" 
//                         id="email" 
//                         value={formState.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField(null)}
//                         className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none" 
//                         placeholder="Votre email" 
//                       />
//                       {focusedField === 'email' && (
//                         <motion.div 
//                           layoutId="focus-bg"
//                           className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
//                           initial={{ width: 0 }}
//                           animate={{ width: '100%' }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </div>
//                   </motion.div>
//                 </div>
                
//                 <motion.div
//                   whileFocus={{ scale: 1.02 }}
//                   whileHover={{ scale: 1.01 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <label htmlFor="message" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                     <MessageSquare className="w-5 h-5 mr-2 text-primary" />
//                     Message
//                   </label>
//                   <div className={`relative overflow-hidden rounded-lg ${focusedField === 'message' ? 'ring-2 ring-primary' : ''}`}>
//                     <textarea 
//                       id="message" 
//                       value={formState.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField(null)}
//                       className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none min-h-32" 
//                       placeholder="Partagez les détails de votre projet..." 
//                     />
//                     {focusedField === 'message' && (
//                       <motion.div 
//                         layoutId="focus-bg"
//                         className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
//                         initial={{ width: 0 }}
//                         animate={{ width: '100%' }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </div>
//                 </motion.div>
                
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <motion.div 
//                       animate={{ rotate: 360 }}
//                       transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//                       className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
//                     />
//                   ) : (
//                     <>
//                       Envoyer votre message
//                       <Send className="w-5 h-5 ml-2" />
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mt-8 text-center"
//           >
//             <p className="text-gray-300">
//               Vous pouvez aussi me contacter directement à <a href="mailto:contact@example.com" className="text-primary hover:underline">contact@example.com</a>
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, Mail, User, MessageSquare, Phone, MapPin, Linkedin, GitHub, Instagram, ArrowRight, CheckCircle } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// export const Contact = () => {
//   const { theme } = useTheme();
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [activeContactMethod, setActiveContactMethod] = useState('email');
//   const [typedMessage, setTypedMessage] = useState('');
//   const welcomeMessage = "Bonjour ! Comment puis-je vous aider avec votre projet ?";

//   // Animation de message d'accueil
//   useEffect(() => {
//     if (typedMessage.length < welcomeMessage.length) {
//       const timeout = setTimeout(() => {
//         setTypedMessage(welcomeMessage.slice(0, typedMessage.length + 1));
//       }, 50);
//       return () => clearTimeout(timeout);
//     }
//   }, [typedMessage]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState({
//       ...formState,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simuler l'envoi du formulaire
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
      
//       // Réinitialiser après quelques secondes
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormState({ name: '', email: '', message: '' });
//       }, 5000);
//     }, 1500);
//   };

//   const contactMethods = [
//     { id: 'email', icon: <Mail />, title: 'Email', value: 'contact@example.com' },
//     { id: 'phone', icon: <Phone />, title: 'Téléphone', value: '+33 6 12 34 56 78' },
//     { id: 'location', icon: <MapPin />, title: 'Localisation', value: 'Paris, France' }
//   ];

//   const socialLinks = [
//     { icon: <Linkedin />, url: 'https://linkedin.com/' },
//     { icon: <GitHub />, url: 'https://github.com/' },
//     { icon: <Instagram />, url: 'https://instagram.com/' }
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1
//       } 
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   // Bulles flottantes animées en arrière-plan
//   const renderFloatingBubbles = () => {
//     return [...Array(8)].map((_, index) => (
//       <motion.div
//         key={index}
//         className={`absolute rounded-full ${
//           index % 2 === 0 
//             ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
//             : 'bg-gradient-to-r from-pink-500/20 to-indigo-500/20'
//         }`}
//         style={{
//           width: `${Math.random() * 150 + 50}px`,
//           height: `${Math.random() * 150 + 50}px`,
//         }}
//         initial={{ 
//           x: `${Math.random() * 100}%`, 
//           y: `${Math.random() * 100}%`,
//           scale: 0,
//           opacity: 0
//         }}
//         animate={{ 
//           x: [
//             `${Math.random() * 100}%`, 
//             `${Math.random() * 100}%`,
//             `${Math.random() * 100}%`,
//             `${Math.random() * 100}%`
//           ],
//           y: [
//             `${Math.random() * 100}%`, 
//             `${Math.random() * 100}%`,
//             `${Math.random() * 100}%`,
//             `${Math.random() * 100}%`
//           ],
//           scale: [0.5, 1, 0.8, 1.2, 0.7],
//           opacity: [0.3, 0.6, 0.4, 0.7, 0.5]
//         }}
//         transition={{ 
//           repeat: Infinity, 
//           repeatType: "reverse", 
//           duration: Math.random() * 30 + 15,
//           ease: "easeInOut"
//         }}
//       />
//     ));
//   };

//   return (
//     <section id="contact" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
//       {/* Arrière-plan dynamique */}
//       <div className="absolute inset-0 overflow-hidden">
//         {renderFloatingBubbles()}
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//             <motion.span
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Discutons de votre
//             </motion.span>{" "}
//             <motion.span
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5, type: "spring" }}
//               className="relative inline-block text-primary"
//             >
//               projet
//               <motion.span
//                 className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//               />
//             </motion.span>
//           </h2>
//           <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//             {typedMessage}
//             {typedMessage.length < welcomeMessage.length && (
//               <motion.span 
//                 animate={{ opacity: [0, 1, 0] }} 
//                 transition={{ repeat: Infinity, duration: 0.8 }}
//               >|</motion.span>
//             )}
//           </p>
//         </motion.div>
        
//         <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
//           {/* Colonne de gauche - Informations de contact */}
//           <motion.div
//             className="md:col-span-2"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.div 
//               className={`rounded-2xl p-8 h-full ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-lg border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
//               whileHover={{ boxShadow: theme === 'dark' ? '0 0 20px rgba(79, 70, 229, 0.3)' : '0 0 20px rgba(79, 70, 229, 0.15)' }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.h3 
//                 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
//                 variants={itemVariants}
//               >
//                 Mes Coordonnées
//               </motion.h3>
              
//               <div className="space-y-8">
//                 {contactMethods.map((method) => (
//                   <motion.div 
//                     key={method.id}
//                     className={`flex items-start cursor-pointer ${activeContactMethod === method.id ? 'scale-105' : ''}`}
//                     onClick={() => setActiveContactMethod(method.id)}
//                     whileHover={{ scale: 1.05 }}
//                     variants={itemVariants}
//                   >
//                     <div className={`p-3 rounded-full mr-4 ${activeContactMethod === method.id ? 'bg-primary text-white' : `${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`} transition-colors duration-300`}>
//                       {method.icon}
//                     </div>
//                     <div>
//                       <h4 className={`font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{method.title}</h4>
//                       <p className={`${activeContactMethod === method.id ? 'text-primary' : `${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} font-medium`}>
//                         {method.value}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
              
//               <motion.div 
//                 variants={itemVariants}
//                 className="mt-10"
//               >
//                 <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                   Restons connectés
//                 </h4>
//                 <div className="flex space-x-4">
//                   {socialLinks.map((social, index) => (
//                     <motion.a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-3 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-primary hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-primary hover:text-white'} transition-colors duration-300`}
//                       whileHover={{ y: -5, scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {social.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
          
//           {/* Formulaire de contact */}
//           <motion.div 
//             className="md:col-span-3"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div 
//               className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-lg border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
//               whileHover={{ boxShadow: theme === 'dark' ? '0 0 20px rgba(79, 70, 229, 0.3)' : '0 0 20px rgba(79, 70, 229, 0.15)' }}
//               transition={{ duration: 0.3 }}
//             >
//               <AnimatePresence mode="wait">
//                 {submitted ? (
//                   <motion.div 
//                     key="success"
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0.8, opacity: 0 }}
//                     className="py-12 px-4 text-center"
//                   >
//                     <motion.div 
//                       className="w-20 h-20 mx-auto relative mb-6"
//                       animate={{ rotate: [0, 360] }}
//                       transition={{ duration: 1 }}
//                     >
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
//                         className="absolute inset-0 flex items-center justify-center"
//                       >
//                         <CheckCircle className="w-16 h-16 text-green-500" />
//                       </motion.div>
//                     </motion.div>
//                     <motion.h3 
//                       className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: 0.3 }}
//                     >
//                       Message envoyé avec succès!
//                     </motion.h3>
//                     <motion.p 
//                       className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: 0.5 }}
//                     >
//                       Merci de m'avoir contacté. Je vous répondrai très rapidement.
//                     </motion.p>
//                   </motion.div>
//                 ) : (
//                   <motion.form 
//                     key="form"
//                     onSubmit={handleSubmit}
//                     className="space-y-6"
//                     initial={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <motion.h3 
//                       className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 }}
//                     >
//                       Envoyez-moi un message
//                     </motion.h3>
                    
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Code, Cpu, Wifi, Database, Server, ChipIcon, Smartphone, Globe, Cloud, HardDrive } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Contact = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Tableau des icônes technologiques (complétez avec Lucide icons)
  const techIcons = [
    { icon: Cpu, id: 'cpu' },
    { icon: Code, id: 'code' },
    { icon: Server, id: 'server' },
    { icon: Database, id: 'database' },
    { icon: Wifi, id: 'wifi' },
    { icon: Smartphone, id: 'mobile' },
    { icon: Globe, id: 'globe' },
    { icon: Cloud, id: 'cloud' },
    { icon: HardDrive, id: 'hardware' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Réinitialiser après quelques secondes
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-background-dark' : 'bg-gray-50'}`}>
      {/* Fond avec motif de circuit imprimé */}
      <div className={`absolute inset-0 opacity-5 ${theme === 'dark' ? 'opacity-10' : 'opacity-5'}`} 
        style={{
          backgroundImage: "url('/images/circuit-pattern.svg')",
          backgroundSize: '60%',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Icônes flottantes liées à la technologie */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techIcons.map((TechIcon, index) => (
          <motion.div
            key={index}
            className={`absolute ${theme === 'dark' ? 'text-primary/20' : 'text-primary/30'}`}
            style={{
              left: `${Math.random() * 85 + 5}%`,
              top: `${Math.random() * 85 + 5}%`,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.7, 1.2, 0.7], 
              opacity: [0.4, 0.8, 0.4],
              y: [0, -15, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: Math.random() * 5 + 5,
              delay: index * 0.5 
            }}
          >
            <TechIcon.icon size={Math.random() * 30 + 20} strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>
      
      {/* Lignes de connexion animées (pour effet de circuit) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className={`absolute h-0.5 rounded-full ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/15'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0, 1, 0],
              width: [`${Math.random() * 5 + 5}%`, `${Math.random() * 20 + 15}%`],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 8 + 4,
              delay: index * 0.7
            }}
          />
        ))}
      </div>

      {/* Points de circuit pulsant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={`node-${index}`}
            className={`absolute w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-accent' : 'bg-primary'}`}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
              boxShadow: [
                `0 0 0px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`,
                `0 0 10px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`,
                `0 0 0px ${theme === 'dark' ? '#4f46e5' : '#3b82f6'}`
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 4 + 3,
              delay: index * 0.3
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Discutons de votre <span className="text-primary">projet</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Vous avez une idée de projet innovante en systèmes embarqués ou technologie numérique ? 
            Je serais ravi d'en discuter et de voir comment nous pourrions collaborer ensemble.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${theme === 'dark' ? 'bg-gray-900/60' : 'bg-white/90'} backdrop-blur-lg p-8 md:p-10 rounded-2xl border ${theme === 'dark' ? 'border-primary/20' : 'border-gray-200'} shadow-xl`}
          >
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Message envoyé avec succès!
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <label htmlFor="name" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      <User className="w-5 h-5 mr-2 text-primary" />
                      Nom
                    </label>
                    <div className={`relative overflow-hidden rounded-lg ${focusedField === 'name' ? 'ring-2 ring-primary' : ''}`}>
                      <input 
                        type="text" 
                        id="name" 
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 border rounded-lg focus:outline-none ${
                          theme === 'dark' 
                            ? 'bg-gray-800/50 border-white/10 text-white' 
                            : 'bg-white border-gray-200 text-gray-900'
                        }`}
                        placeholder="Votre nom" 
                      />
                      {focusedField === 'name' && (
                        <motion.div 
                          layoutId="focus-bg"
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <label htmlFor="email" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      <Mail className="w-5 h-5 mr-2 text-primary" />
                      Email
                    </label>
                    <div className={`relative overflow-hidden rounded-lg ${focusedField === 'email' ? 'ring-2 ring-primary' : ''}`}>
                      <input 
                        type="email" 
                        id="email" 
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 border rounded-lg focus:outline-none ${
                          theme === 'dark' 
                            ? 'bg-gray-800/50 border-white/10 text-white' 
                            : 'bg-white border-gray-200 text-gray-900'
                        }`}
                        placeholder="Votre email" 
                      />
                      {focusedField === 'email' && (
                        <motion.div 
                          layoutId="focus-bg"
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <label htmlFor="message" className={`block text-lg mb-2 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                    Message
                  </label>
                  <div className={`relative overflow-hidden rounded-lg ${focusedField === 'message' ? 'ring-2 ring-primary' : ''}`}>
                    <textarea 
                      id="message" 
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full p-4 border rounded-lg focus:outline-none min-h-32 ${
                        theme === 'dark' 
                          ? 'bg-gray-800/50 border-white/10 text-white' 
                          : 'bg-white border-gray-200 text-gray-900'
                      }`}
                      placeholder="Partagez les détails de votre projet de systèmes embarqués..." 
                    />
                    {focusedField === 'message' && (
                      <motion.div 
                        layoutId="focus-bg"
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
                                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 mt-6 rounded-lg text-lg font-semibold ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-primary text-white'}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {isSubmitting ? 'Envoi...' : 'Envoyer'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
