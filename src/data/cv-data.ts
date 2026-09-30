import { Language } from './translations';

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: 'En curso' | 'Completado' | 'In progress' | 'Completed';
  description?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  tasks: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: { name: string; level?: string; description?: string }[];
}

export interface SoftSkill {
  title: string;
  desc: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  percent: number;
}

export interface CvData {
  personal: {
    fullName: string;
    shortName: string;
    monogram: string;
    role: string;
    headline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    whatsappUrl: string;
    linkedinUrl: string;
    githubUrl: string;
    availabilityBadge: string;
    cvPdfPath: string;
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
  softSkills: SoftSkill[];
  languages: LanguageItem[];
  otherInfo: string[];
}

export const cvDataEs: CvData = {
  personal: {
    fullName: 'Harahel Jesús Ayun',
    shortName: 'Harahel Ayun',
    monogram: 'HA',
    role: 'Técnico Universitario en Programación & Estudiante de Ciberdefensa',
    headline: 'Construyendo software robusto, seguro y escalable.',
    bio: 'Estudiante avanzado de Tecnicatura en Programación en la UTN y de la Licenciatura en Ciberdefensa en FADENA. Especializado en arquitecturas backend (C#/.NET, Java/Spring Boot) y desarrollo web full stack, combinando rigor técnico, aprendizaje autónomo y el uso estratégico de IA para maximizar la productividad.',
    location: 'Paraná, Entre Ríos, Argentina',
    email: 'harahelayun54@gmail.com',
    phone: '+54 343-5185459',
    phoneFormatted: '+54 343 518-5459',
    whatsappUrl: 'https://wa.me/5493435185459',
    linkedinUrl: 'https://www.linkedin.com/in/harahel-ayun-4aa1b330b/',
    githubUrl: 'https://github.com/harahel-ayun',
    availabilityBadge: 'Disponible para nuevos desafíos',
    cvPdfPath: '/cv-harahel-ayun.pdf?v=2',
  },

  education: [
    {
      degree: 'Licenciatura en Ciberdefensa',
      institution: 'Facultad de Defensa Nacional (FADENA)',
      period: 'En curso',
      status: 'En curso',
      highlight: true,
      description:
        'Formación estratégica y técnica en seguridad de infraestructuras críticas, criptografía, análisis de vulnerabilidades, redes seguras y respuesta ante ciberamenazas.',
    },
    {
      degree: 'Tecnicatura Universitaria en Programación',
      institution: 'Universidad Tecnológica Nacional (UTN) · Facultad Regional Paraná',
      period: 'En curso (último año)',
      status: 'En curso',
      highlight: true,
      description:
        'Especialización en desarrollo de software, programación orientada a objetos (POO), bases de datos relacionales, estructuras de datos, diseño de algoritmos y patrones de arquitectura.',
    },
    {
      degree: 'Diplomatura en Programación Web Full Stack',
      institution: 'Formación Profesional',
      period: 'Certificación completada',
      status: 'Completado',
      highlight: false,
      description:
        'Dominio de fundamentos front-end (HTML5, CSS3, JavaScript interactivo) e integración con capas back-end y bases de datos.',
    },
    {
      degree: 'Curso Desarrollo de Aplicaciones Android',
      institution: 'Capacitación Técnica Especializada',
      period: 'Certificación completada',
      status: 'Completado',
      highlight: false,
      description:
        'Diseño de interfaces móviles, ciclo de vida de aplicaciones Android, consumo de APIs y almacenamiento local.',
    },
    {
      degree: 'Educación Secundaria Completa',
      institution: 'Colegio N°6 "La Salle" · Paraná',
      period: 'Graduado',
      status: 'Completado',
      highlight: false,
      description:
        'Formación académica integral con énfasis en valores humanos, disciplina y pensamiento lógico.',
    },
  ],

  experience: [
    {
      role: 'Atención al Cliente / Operaciones & Gestión',
      company: 'Complejo Deportivo Tercer Tiempo',
      location: 'Paraná, Entre Ríos',
      period: 'Verano 2025 – 2026',
      tasks: [
        'Gestión operativa integral y cobro de turnos para canchas de fútbol 7 y pádel con alta demanda diaria.',
        'Atención directa al público y resolución ágil de consultas, reservas e incidencias en tiempo real.',
        'Supervisión y mantenimiento general de las instalaciones deportivas para asegurar estándares de calidad y seguridad.',
        'Arqueo de caja diaria y coordinación de horarios para optimizar la ocupación del predio.',
      ],
      skills: [
        'Resolución en tiempo real',
        'Gestión operativa',
        'Trabajo bajo presión',
        'Atención al cliente',
        'Organización',
      ],
    },
  ],

  skillCategories: [
    {
      title: 'Backend & Arquitectura',
      subtitle: 'Construcción de servicios sólidos, seguros y escalables',
      iconName: 'Server',
      skills: [
        {
          name: 'C# / .NET',
          level: 'Backend & Escritorio',
          description: 'Desarrollo con .NET, LINQ, POO avanzada y patrones de diseño',
        },
        {
          name: 'Java',
          level: 'POO & Enterprise',
          description: 'Programación orientada a objetos, tipado estricto y testing',
        },
        {
          name: 'Spring Boot',
          level: 'Framework Backend',
          description: 'Desarrollo de REST APIs, inyección de dependencias y JPA',
        },
        {
          name: 'Maven',
          level: 'Gestión de Dependencias',
          description: 'Automatización de compilación, empaquetado y ciclo de vida',
        },
        {
          name: 'Python',
          level: 'Scripting & Seguridad',
          description: 'Automatización, análisis de datos y utilidades de ciberseguridad',
        },
      ],
    },
    {
      title: 'Web & Frontend',
      subtitle: 'Interfaces modernas, accesibles y de alto rendimiento',
      iconName: 'Layout',
      skills: [
        {
          name: 'HTML5 & CSS3',
          level: 'Semántica & Estilos',
          description: 'Estructuración semántica accesible y maquetación avanzada',
        },
        {
          name: 'JavaScript & TypeScript',
          level: 'Lógica Frontend',
          description: 'ES6+, tipado estricto y manipulación moderna del DOM',
        },
        {
          name: 'Responsive Design',
          level: 'Multi-dispositivo',
          description: 'Diseño mobile-first optimizado para cualquier resolución',
        },
        {
          name: 'Tailwind CSS',
          level: 'Diseño Rápido & Limpio',
          description: 'Sistemas de diseño modernos, modo oscuro y micro-interacciones',
        },
      ],
    },
    {
      title: 'Bases de Datos',
      subtitle: 'Modelado relacional eficiente y persistencia de datos',
      iconName: 'Database',
      skills: [
        {
          name: 'PostgreSQL',
          level: 'RDBMS Principal',
          description: 'Consultas complejas, índices, transacciones ACID y triggers',
        },
        {
          name: 'SQL Relacional',
          level: 'Consultas DDL / DML',
          description: 'Modelado Entidad-Relación, normalización y optimización',
        },
        {
          name: 'Modelado de Datos',
          level: 'Diseño Arquitectónico',
          description: 'Diagramación lógica y física de estructuras de información',
        },
      ],
    },
    {
      title: 'Herramientas & Entorno',
      subtitle: 'Flujo de trabajo ágil, seguridad y productividad',
      iconName: 'Terminal',
      skills: [
        {
          name: 'Git & GitHub',
          level: 'Control de Versiones',
          description: 'Flujos de ramas, pull requests, semántica y trabajo colaborativo',
        },
        {
          name: 'Linux / Terminal',
          level: 'Entorno de Desarrollo',
          description: 'Manejo fluido de shell Bash, administración básica de paquetes',
        },
        {
          name: 'IA para Productividad',
          level: 'Multiplicador Técnico',
          description:
            'Uso estratégico de IA generativa para refactorización, debugging y documentación',
        },
        {
          name: 'Automatización',
          level: 'Flujos Eficientes',
          description: 'Creación de scripts para optimizar tareas repetitivas',
        },
      ],
    },
  ],

  softSkills: [
    {
      title: 'Resolución de problemas complejos',
      desc: 'Capacidad de descomponer desafíos técnicos en partes manejables y encontrar soluciones eficaces.',
    },
    {
      title: 'Trabajo en equipo y colaboración',
      desc: 'Comunicación asertiva, escucha activa y empatía para construir soluciones en conjunto.',
    },
    {
      title: 'Aprendizaje activo y autónomo',
      desc: 'Curiosidad técnica constante y rápida asimilación de nuevos stacks y frameworks.',
    },
    {
      title: 'Organización y gestión del tiempo',
      desc: 'Priorización metódica de entregas académicas, proyectos personales y responsabilidades.',
    },
    {
      title: 'Uso de IA como multiplicador',
      desc: 'Integración proactiva de herramientas de IA en el ciclo de vida del desarrollo de software.',
    },
    {
      title: 'Resiliencia y adaptabilidad',
      desc: 'Persistencia constructiva ante errores técnicos y adaptación fluida a entornos cambiantes.',
    },
  ],

  languages: [
    { name: 'Español', level: 'Nativo / Avanzado', percent: 100 },
    { name: 'Inglés', level: 'Básico / Técnico (Lectura de documentación)', percent: 45 },
  ],

  otherInfo: [
    'Registro de conducir vigente categoría B1',
    'Movilidad propia (automóvil y bicicleta)',
    'Disponibilidad horaria para pasantías y posiciones Jr.',
  ],
};

export const cvDataEn: CvData = {
  personal: {
    fullName: 'Harahel Jesús Ayun',
    shortName: 'Harahel Ayun',
    monogram: 'HA',
    role: 'University Technician in Programming & Cyberdefense Student',
    headline: 'Building robust, secure, and scalable software.',
    bio: 'Advanced Programming Technician student at UTN and Cyberdefense Bachelor student at FADENA. Specialized in backend architectures (C#/.NET, Java/Spring Boot) and full stack web development, combining technical rigor, autonomous learning, and strategic AI adoption to maximize productivity.',
    location: 'Paraná, Entre Ríos, Argentina',
    email: 'harahelayun54@gmail.com',
    phone: '+54 343-5185459',
    phoneFormatted: '+54 343 518-5459',
    whatsappUrl: 'https://wa.me/5493435185459',
    linkedinUrl: 'https://www.linkedin.com/in/harahel-ayun-4aa1b330b/',
    githubUrl: 'https://github.com/harahel-ayun',
    availabilityBadge: 'Available for new challenges',
    cvPdfPath: '/cv-harahel-ayun.pdf?v=2',
  },

  education: [
    {
      degree: 'Bachelor in Cyberdefense',
      institution: 'Facultad de Defensa Nacional (FADENA)',
      period: 'In progress',
      status: 'In progress',
      highlight: true,
      description:
        'Strategic and technical training in critical infrastructure security, cryptography, vulnerability assessment, secure networks, and cyber threat mitigation.',
    },
    {
      degree: 'University Degree in Programming',
      institution: 'Universidad Tecnológica Nacional (UTN) · Paraná Regional Faculty',
      period: 'In progress (final year)',
      status: 'In progress',
      highlight: true,
      description:
        'Specialization in software engineering, object-oriented programming (OOP), relational database design, data structures, algorithms, and architectural patterns.',
    },
    {
      degree: 'Full Stack Web Development Diploma',
      institution: 'Professional Vocational Training',
      period: 'Completed certification',
      status: 'Completed',
      highlight: false,
      description:
        'Front-end foundations (HTML5, CSS3, modern interactive JavaScript) and seamless integration with back-end layers and relational databases.',
    },
    {
      degree: 'Android Application Development Course',
      institution: 'Specialized Technical Training',
      period: 'Completed certification',
      status: 'Completed',
      highlight: false,
      description:
        'Mobile UI design, Android application lifecycle, REST API consumption, and local data persistence.',
    },
    {
      degree: 'High School Diploma',
      institution: 'Colegio N°6 "La Salle" · Paraná',
      period: 'Graduated',
      status: 'Completed',
      highlight: false,
      description:
        'Comprehensive academic background with emphasis on human values, discipline, and logical thinking.',
    },
  ],

  experience: [
    {
      role: 'Customer Service / Operations & Facility Management',
      company: 'Complejo Deportivo Tercer Tiempo',
      location: 'Paraná, Entre Ríos',
      period: 'Summer 2025 – 2026',
      tasks: [
        'End-to-end operational management and fee collection for high-demand soccer and paddle courts.',
        'Direct customer support, handling bookings, queries, and real-time schedule modifications.',
        'Facility supervision and maintenance to ensure high quality and safety standards.',
        'Daily cash register reconciliations and schedule optimization for maximum court occupancy.',
      ],
      skills: [
        'Real-time problem solving',
        'Operations management',
        'Working under pressure',
        'Customer support',
        'Organization',
      ],
    },
  ],

  skillCategories: [
    {
      title: 'Backend & Architecture',
      subtitle: 'Building solid, secure, and scalable services',
      iconName: 'Server',
      skills: [
        {
          name: 'C# / .NET',
          level: 'Backend & Desktop',
          description: 'Development with .NET, LINQ, advanced OOP, and design patterns',
        },
        {
          name: 'Java',
          level: 'OOP & Enterprise',
          description: 'Object-oriented programming, strict typing, and automated testing',
        },
        {
          name: 'Spring Boot',
          level: 'Backend Framework',
          description: 'REST API development, dependency injection, and Spring Data JPA',
        },
        {
          name: 'Maven',
          level: 'Build & Dependency Management',
          description: 'Build automation, packaging, and lifecycle management',
        },
        {
          name: 'Python',
          level: 'Scripting & Security',
          description: 'Automation scripts, data parsing, and cybersecurity utilities',
        },
      ],
    },
    {
      title: 'Web & Frontend',
      subtitle: 'Modern, accessible, and high-performance interfaces',
      iconName: 'Layout',
      skills: [
        {
          name: 'HTML5 & CSS3',
          level: 'Semantics & Styles',
          description: 'Accessible semantic structures and modern responsive layouts',
        },
        {
          name: 'JavaScript & TypeScript',
          level: 'Frontend Logic',
          description: 'ES6+, strict typing, and reactive DOM manipulation',
        },
        {
          name: 'Responsive Design',
          level: 'Cross-Device',
          description: 'Mobile-first design optimized across all screen resolutions',
        },
        {
          name: 'Tailwind CSS',
          level: 'Clean & Fast UI',
          description: 'Modern design tokens, dark mode, and fluid micro-interactions',
        },
      ],
    },
    {
      title: 'Databases & Storage',
      subtitle: 'Efficient relational modeling and data persistence',
      iconName: 'Database',
      skills: [
        {
          name: 'PostgreSQL',
          level: 'Primary RDBMS',
          description: 'Complex queries, indexing, ACID transactions, and triggers',
        },
        {
          name: 'Relational SQL',
          level: 'DDL / DML Queries',
          description: 'Entity-Relationship modeling, normalization, and query optimization',
        },
        {
          name: 'Data Modeling',
          level: 'Architecture Design',
          description: 'Logical and physical data schemas design',
        },
      ],
    },
    {
      title: 'Tools & Environment',
      subtitle: 'Agile workflows, security, and developer productivity',
      iconName: 'Terminal',
      skills: [
        {
          name: 'Git & GitHub',
          level: 'Version Control',
          description: 'Branching workflows, pull requests, semantic commits, and team collaboration',
        },
        {
          name: 'Linux / Terminal',
          level: 'Development OS',
          description: 'Bash shell proficiency, core utilities, and package management',
        },
        {
          name: 'AI for Productivity',
          level: 'Technical Multiplier',
          description:
            'Strategic use of generative AI for refactoring, debugging, and documentation',
        },
        {
          name: 'Automation',
          level: 'Efficient Workflows',
          description: 'Script authoring to streamline repetitive development tasks',
        },
      ],
    },
  ],

  softSkills: [
    {
      title: 'Complex Problem Solving',
      desc: 'Ability to decompose technical challenges into manageable components and engineer effective solutions.',
    },
    {
      title: 'Teamwork & Collaboration',
      desc: 'Assertive communication, active listening, and empathy to build collaborative solutions.',
    },
    {
      title: 'Active & Autonomous Learning',
      desc: 'Continuous technical curiosity and rapid assimilation of new stacks and frameworks.',
    },
    {
      title: 'Organization & Time Management',
      desc: 'Methodical prioritization of academic deliverables, personal projects, and responsibilities.',
    },
    {
      title: 'AI as a Multiplier',
      desc: 'Proactive integration of AI tooling across the software development lifecycle.',
    },
    {
      title: 'Resilience & Adaptability',
      desc: 'Constructive persistence through technical bugs and seamless adaptation to shifting environments.',
    },
  ],

  languages: [
    { name: 'Spanish', level: 'Native / Fluent', percent: 100 },
    { name: 'English', level: 'Technical / Reading proficiency (docs)', percent: 45 },
  ],

  otherInfo: [
    'Valid driver’s license class B1',
    'Personal vehicle (car and bicycle)',
    'Availability for internships and Junior developer positions',
  ],
};

export function getCvData(language: Language): CvData {
  return language === 'en' ? cvDataEn : cvDataEs;
}

export const cvData = cvDataEs;
