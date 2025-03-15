import { Experience, Project, SkillCategory } from '../types';

export const experiences: Experience[] = [
  {
    date: "Févr. 2025 - Août 2025",
    company: "Airbus",
    title: "Stage Ingénieur Développeur full stack/ data analyst / automatisation",
    achievements: [
      "Développement End-to-End d'une application pour gérer des données complexes (systèmes électriques A320).",
      "Back-end : Python, Django.",
      "Front-end : HTML, CSS, React.",
      "Gestion et optimisation des bases de données complexes (SQL, Python, JavaScript).",
      "Collaboration avec des équipes multidisciplinaires (designers, développeurs).",
      "Mise en place de solutions d'automatisation pour améliorer l'efficacité des processus."
    ]
  },
  {
    date: "Avril. 2024 - Août. 2024",
    company: "CETIM",
    title: "Stage ingénieur en Connéctivité et maintenance",
    achievements: [
      "Mise en place d’un réseau local pour connecter les machines d’un laboratoire et transférer des fichiers vers un PC central en utilisant des fichiers .bat et des scripts PowerShell (.ps1) avec les planificateurs de tâches.",
      "Optimisation de la maintenance préventive conditionnelle via l’installation de capteurs, l’intégration des données en temps  réel dans la GMAO, et la création de plans de maintenance.",
      "Récupération et stockage des données électriques dans InfluxDB, création d’un tableau de bord (Node-RED et GRAFANA) pour visualiser la consommation et le coût associé `a chaque machine, et suivi des projets d’amélioration continue.",
      "Gestion et optimisation des bases de données complexes (SQL, Python, JavaScript).",
      "Collaboration avec des équipes multidisciplinaires (designers, développeurs).",
      "Mise en place de solutions d'automatisation pour améliorer l'efficacité des processus."
    ]
  },
  {
  date: "Févr. 2022 - Mai 2022",
  company: "Junior Entreprise POLYTECH LILLE",
  title: "Charges d’affaires au sein de la junior entreprise",
  achievements: [
    "Coordination d'une équipe de 5 étudiants",
    "Établissement et maintien des relations avec les clients",
    "Suivi régulier des performances et des résultats"
  ]
},

  // Add other experiences...
];

// export const projects: Project[] = [
//   {
//     title: "Presentia",
//     description: "Système de contrôle d'accès intelligent basé sur la reconnaissance faciale et RFID pour entreprises.",
//     image: "presentia.PNG",
//     technologies: ["Python", "Raspberry Pi", "SQL", "OpenCV", "Onshape", "figma"],
//     demoUrl: "#",
//     codeUrl: "#"
//   },
//   {
//   title: "Vélock",
//   description: "Serrure connectée pour vélos avec localisation GPS et alarme anti-vol intégrée.",
//   image: "Vélock.png",
//   technologies: ["C", "ESP32", "Bluetooth LE", "IoT"],
//   demoUrl: "#",
//   codeUrl: "#"
// },
//   {
//   title: "SmartGarden",
//   description: "Système d'irrigation automatisé et connecté pour jardins, avec capteurs d'humidité et monitoring à distance.",
//   image: "SmartGarden.png",
//   technologies: ["Arduino", "MQTT", "Node.js", "LoRaWAN"],
//   demoUrl: "#",
//   codeUrl: "#"
// },


//   // Add other projects...
// ];
// data.ts

export const projects = [
  {
    title: "Presentia",
    description: "Système de contrôle d'accès intelligent basé sur la reconnaissance faciale et RFID pour entreprises.",
    category: "Projet Automatique", 
    image: "presentia.PNG",
    technologies: ["Python", "Raspberry Pi", "SQL", "OpenCV", "Onshape", "figma"],
    github: "#",
    demoUrl: "#"
  },
  {
    title: "Vélock",
    description: "Serrure connectée pour vélos avec localisation GPS et alarme anti-vol intégrée.",
    category: "Projet IoT", 
    image: "Vélock.png",
    technologies: ["C", "ESP32", "Bluetooth LE", "IoT"],
    github: "#",
    demoUrl: "#"
  },
  {
    title: "SmartGarden",
    description: "Système d'irrigation automatisé et connecté pour jardins.",
    category: "Projet Automatique", 
    image: "SmartGarden.png",
    technologies: ["Arduino", "MQTT", "Node.js", "LoRaWAN"],
    github: "#",
    demoUrl: "#"
  },
  // Plus de projets ici...
];

// export const skillCategories: SkillCategory[] = [
//   {
//     name: "Langages de Programmation",
//     skills: [
//       { name: "C/C++", percentage: 90 },
//       { name: "Python", percentage: 85 },
//       { name: "Assembly", percentage: 75 },
//       { name: "Java", percentage: 70 }
//     ]
//   },
//   // Add other skill categories...
// ];
// export interface Skill {
//   name: string;
//   percentage: number;
// }

// export interface SkillCategory {
//   name: string;
//   skills: Skill[];
// }

// export const skillCategories: SkillCategory[] = [
//   {
//     name: "Langages de Programmation",
//     skills: [
//       { name: "C/C++", percentage: 90 },
//       { name: "Python", percentage: 85 },
//       { name: "JavaScript", percentage: 88 },
//       { name: "TypeScript", percentage: 82 },
//       { name: "Java", percentage: 70 },
//       { name: "Matlab", percentage: 75 },
//       { name: "Assembly", percentage: 75 },
//     ]
//   },
//   {
//     name: "Frameworks & Bibliothèques",
//     skills: [
//       { name: "React", percentage: 85 },
//       { name: "Node.js", percentage: 80 },
//       { name: "Express", percentage: 78 },
//       { name: "Django", percentage: 75 },
//       { name: "Flask", percentage: 72 },
//       { name: "Next.js", percentage: 68 },
//     ]
//   },
//   {
//     name: "DevOps & Cloud",
//     skills: [
//       { name: "Docker", percentage: 82 },
//       { name: "AWS", percentage: 76 },
//       { name: "Jenkins", percentage: 70 },
//       { name: "Kubernetes", percentage: 65 },
//       { name: "Azure", percentage: 60 },
//     ]
//   },
//   {
//     name: "Contrôle de Version & Collaboration",
//     skills: [
//       { name: "Git", percentage: 90 },
//       { name: "GitHub", percentage: 85 },
//       { name: "GitLab", percentage: 80 },
//     ]
//   },
//   {
//     name: "Automatisation & Robotique",
//     skills: [
//       { name: "ROS2", percentage: 75 },
//       { name: "TIA Portal V14", percentage: 80 },
//       { name: "Automates Programmables", percentage: 85 },
//     ]
//   },
//   {
//     name: "Bases de Données",
//     skills: [
//       { name: "SQL", percentage: 85 },
//       { name: "MongoDB", percentage: 80 },
//       { name: "Redis", percentage: 70 },
//     ]
//   },
//   {
//     name: "Outils & Plateformes",
//     skills: [
//       { name: "Render", percentage: 75 },
//       { name: "GraphQL", percentage: 65 },
//       { name: "RESTful APIs", percentage: 85 },
//     ]
//   }
// ];
export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Langages de Programmation",
    skills: [
      { name: "C/C++" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "Matlab" },
      { name: "Assembly" },
    ]
  },
  {
    name: "Frameworks & Bibliothèques",
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Django" },
      { name: "Flask" },
      { name: "Next.js" },
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "Jenkins" },
      { name: "Kubernetes" },
      { name: "Azure" },
    ]
  },
  {
    name: "Contrôle de Version & Collaboration",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" },
    ]
  },
  {
    name: "Automatisation & Robotique",
    skills: [
      { name: "ROS2" },
      { name: "TIA Portal V14" },
      { name: "Automates Programmables" },
    ]
  },
  {
    name: "Bases de Données",
    skills: [
      { name: "SQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ]
  },
  {
    name: "Outils & Plateformes",
    skills: [
      { name: "Render" },
      { name: "GraphQL" },
      { name: "RESTful APIs" },
    ]
  }
];