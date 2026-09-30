export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    downloadCv: string;
    downloadCvFull: string;
    tagline: string;
    goToHome: string;
    toggleMenu: string;
    githubAria: string;
    linkedinAria: string;
  };
  hero: {
    greeting: string;
    badgeAvailability: string;
    location: string;
    titleRole: string;
    summary: {
      part1: string;
      highlight1: string;
      part2: string;
      highlight2: string;
      part3: string;
      highlight3: string;
      part4: string;
    };
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
    metrics: {
      backendTitle: string;
      backendSubtitle: string;
      backendDesc: string;
      cyberTitle: string;
      cyberSubtitle: string;
      cyberDesc: string;
      progTitle: string;
      progSubtitle: string;
      progDesc: string;
      aiTitle: string;
      aiSubtitle: string;
      aiDesc: string;
    };
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    profileTitle: string;
    profileSubtitle: string;
    p1Part1: string;
    p1Highlight: string;
    p1Part2: string;
    p2Part1: string;
    p2Highlight: string;
    p2Part2: string;
    aiBadgeTitle: string;
    aiBadgeDesc: string;
    softSkillsTitle: string;
    languageTitle: string;
    languageSubtitle: string;
    academicTimelineTitle: string;
    additionalInfoTitle: string;
    additionalInfoItems: string[];
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    techCount: string;
    cardFooter: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerCta: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    filterLabel: string;
    filterAll: string;
    featuredBadge: string;
    codeBtn: string;
    demoBtn: string;
    emptyTitle: string;
    emptyDesc: string;
    emptyReset: string;
    viewCodeAria: string;
    viewDemoAria: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    milestones: {
      workBadge: string;
      workRole: string;
      workEntity: string;
      workLocation: string;
      workPeriod: string;
      workDescription: string;
      workTasks: string[];
      workCompetencies: string[];
      utnBadge: string;
      utnRole: string;
      utnEntity: string;
      utnLocation: string;
      utnPeriod: string;
      utnDescription: string;
      utnHighlights: string[];
      utnCompetencies: string[];
      fadenaBadge: string;
      fadenaRole: string;
      fadenaEntity: string;
      fadenaLocation: string;
      fadenaPeriod: string;
      fadenaDescription: string;
      fadenaHighlights: string[];
      fadenaCompetencies: string[];
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailCardTitle: string;
    emailCopy: string;
    emailCopied: string;
    emailSubtext: string;
    linkedinTitle: string;
    linkedinSubtext: string;
    phoneTitle: string;
    phoneSubtext: string;
    locationTitle: string;
    locationValue: string;
    locationSubtext: string;
    cvCardQuestion: string;
    cvCardSubtext: string;
    cvCardBtn: string;
    formTitle: string;
    formSubtitle: string;
    formSuccess: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
  };
  footer: {
    bio: string;
    navTitle: string;
    techTitle: string;
    techDesc: string;
    backToTop: string;
    rights: string;
    developedWith: string;
    fromLocation: string;
  };
  languageSwitcher: {
    ariaLabel: string;
    esLabel: string;
    enLabel: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
      downloadCv: 'Descargar CV',
      downloadCvFull: 'Descargar CV Completo',
      tagline: 'Software & Ciberdefensa',
      goToHome: 'Ir al inicio',
      toggleMenu: 'Alternar menú de navegación',
      githubAria: 'Perfil de GitHub',
      linkedinAria: 'Perfil de LinkedIn',
    },
    hero: {
      greeting: 'Hola, soy',
      badgeAvailability: 'Disponible para nuevos desafíos',
      location: 'Paraná, Entre Ríos',
      titleRole: 'Técnico Universitario en Programación',
      summary: {
        part1: 'Estudiante de',
        highlight1: 'Tecnicatura en Programación',
        part2: '(UTN) y',
        highlight2: 'Licenciatura en Ciberdefensa',
        part3: '(FADENA). Enfoque en',
        highlight3: 'arquitecturas backend robustas',
        part4: '(C#/.NET, Java/Spring Boot), desarrollo web full stack y resolución de problemas complejos aplicando IA como multiplicador técnico.',
      },
      ctaProjects: 'Ver Proyectos',
      ctaContact: 'Contactar',
      ctaCv: 'Descargar CV',
      metrics: {
        backendTitle: 'Backend',
        backendSubtitle: 'C# .NET & Java',
        backendDesc: 'Spring Boot, Maven, APIs',
        cyberTitle: 'Ciberdefensa',
        cyberSubtitle: 'LICENCIATURA en curso',
        cyberDesc: 'Seguridad & Redes',
        progTitle: 'Programación',
        progSubtitle: 'Finalizando TECNICATURA',
        progDesc: 'UTN Paraná - Prog. Último Año',
        aiTitle: 'Productividad',
        aiSubtitle: 'Uso de IA',
        aiDesc: 'Como Herramienta',
      },
    },
    about: {
      badge: 'SOBRE MÍ & FORMACIÓN',
      title: 'Fundamentos Sólidos, Aprendizaje Activo',
      subtitle:
        'Combinando el rigor algorítmico y la arquitectura de software de la UTN con la visión estratégica de seguridad y redes de la FADENA.',
      profileTitle: 'Perfil & Enfoque de Ingeniería',
      profileSubtitle: 'Metodología de desarrollo, resiliencia y mejora continua',
      p1Part1:
        'Soy un apasionado por la construcción de software con base sólida. Mi trayectoria combina una doble vocación formativa: por un lado, la',
      p1Highlight: 'Tecnicatura Universitaria en Programación',
      p1Part2:
        'en la Universidad Tecnológica Nacional (UTN Paraná), donde profundizo en paradigmas orientados a objetos, estructuras de datos, diseño de bases de datos relacionales y arquitectura de software.',
      p2Part1: 'Por otro lado, curso la',
      p2Highlight: 'Licenciatura en Ciberdefensa',
      p2Part2:
        'en la Facultad de Defensa Nacional (FADENA), lo que me proporciona una mentalidad orientada a la seguridad por diseño, el análisis riguroso de protocolos, la prevención de vulnerabilidades y la protección de infraestructuras.',
      aiBadgeTitle: 'Multiplicador de Productividad con IA:',
      aiBadgeDesc:
        'Integro activamente herramientas de Inteligencia Artificial para acelerar ciclos de investigación, optimizar flujos de refactorización y garantizar testing exhaustivo, manteniendo siempre el control crítico sobre el código.',
      softSkillsTitle: 'Habilidades Blandas & Dinámica de Trabajo',
      languageTitle: 'Competencia Idiomática',
      languageSubtitle: 'Comunicación efectiva y lectura técnica',
      academicTimelineTitle: 'Trayectoria Académica',
      additionalInfoTitle: 'Información Adicional & Logística',
      additionalInfoItems: [
        'Registro de conducir vigente clase B1 y movilidad propia (vehículo y bicicleta).',
        'Ubicación: Paraná, Entre Ríos, Argentina (con plena disponibilidad horaria para trabajo presencial, híbrido o remoto).',
      ],
    },
    skills: {
      badge: 'STACK TÉCNICO & DOMINIO',
      title: 'Habilidades & Tecnologías',
      subtitle:
        'Stack enfocado en confiabilidad, tipado estricto, modelado eficiente de datos y desarrollo orientado a arquitectura limpia.',
      techCount: 'techs',
      cardFooter: 'Aplicado en proyectos y entorno académico',
      bannerTitle: 'Flujo Moderno: IA como Acelerador de Desarrollo',
      bannerDesc:
        'Uso proactivo de asistentes de código para documentación precisa, refactorizaciones seguras y tests unitarios automatizados.',
      bannerCta: 'Ver Implementaciones →',
    },
    projects: {
      badge: 'PORTFOLIO & TRABAJOS',
      title: 'Proyectos Destacados',
      subtitle:
        'Soluciones de software diseñadas con rigor técnico, código limpio y tecnologías modernas de backend y full stack.',
      filterLabel: 'Filtrar:',
      filterAll: 'Todos',
      featuredBadge: 'Destacado',
      codeBtn: 'Código',
      demoBtn: 'Demo',
      emptyTitle: 'No hay proyectos en esta categoría',
      emptyDesc: 'Pronto se incorporarán nuevas implementaciones bajo esta especialidad.',
      emptyReset: 'Ver todos los proyectos',
      viewCodeAria: 'Ver código fuente en GitHub',
      viewDemoAria: 'Ver demo en vivo',
    },
    experience: {
      badge: 'TRAYECTORIA & ANTECEDENTES',
      title: 'Experiencia & Hitos',
      subtitle:
        'Combinación de experiencia operativa directa con usuarios y sólida constancia académica en programación y seguridad.',
      milestones: {
        workBadge: 'Experiencia Laboral',
        workRole: 'Atención al Cliente / Operaciones & Gestión',
        workEntity: 'Complejo Deportivo Tercer Tiempo',
        workLocation: 'Paraná, Entre Ríos',
        workPeriod: 'Verano 2025 – 2026',
        workDescription:
          'Gestión operativa integral y atención en predio deportivo de alto flujo de usuarios, garantizando servicio continuo y resolución de contingencias.',
        workTasks: [
          'Gestión operativa integral y cobro de turnos para canchas de fútbol 7 y pádel con alta demanda diaria.',
          'Atención directa al público y resolución ágil de consultas, reservas e incidencias en tiempo real.',
          'Supervisión y mantenimiento general de las instalaciones deportivas para asegurar estándares de calidad y seguridad.',
          'Arqueo de caja diaria y coordinación de horarios para optimizar la ocupación del predio.',
        ],
        workCompetencies: [
          'Gestión y cobro de reservas',
          'Resolución de consultas en tiempo real',
          'Organización de turnos',
          'Mantenimiento de infraestructura',
        ],
        utnBadge: 'Hito Académico',
        utnRole: 'Estudiante Avanzado de Programación (Último Año)',
        utnEntity: 'Universidad Tecnológica Nacional (UTN)',
        utnLocation: 'Facultad Regional Paraná',
        utnPeriod: 'En curso',
        utnDescription:
          'Formación profunda en desarrollo de software: C#/.NET, POO en Java, modelado relacional en PostgreSQL, estructuras de datos y metodologías ágiles de desarrollo.',
        utnHighlights: [
          'Desarrollo de proyectos backend y de escritorio orientados a buenas prácticas de código.',
          'Diseño y normalización de bases de datos relacionales para escenarios de alta concurrencia.',
          'Trabajo colaborativo y entrega metódica de software evaluado bajo estándares universitarios.',
        ],
        utnCompetencies: ['POO Avanzada', 'C# / .NET', 'Java', 'PostgreSQL', 'Algoritmia'],
        fadenaBadge: 'Especialización',
        fadenaRole: 'Licenciatura en Ciberdefensa',
        fadenaEntity: 'Facultad de Defensa Nacional (FADENA)',
        fadenaLocation: 'Argentina',
        fadenaPeriod: 'En curso',
        fadenaDescription:
          'Abordaje multidisciplinario de la ciberseguridad: protección de infraestructuras críticas, análisis de vulnerabilidades, redes de comunicaciones y legislación de ciberdefensa.',
        fadenaHighlights: [
          'Estudio de vectores de ataque, vectores de mitigación y seguridad perimetral.',
          'Comprensión integral de protocolos TCP/IP, modelos OSI y hardening de sistemas Linux.',
        ],
        fadenaCompetencies: ['Seguridad en Redes', 'Linux Shell', 'Criptografía', 'Análisis de Riesgos'],
      },
    },
    contact: {
      badge: 'COMUNICACIÓN DIRECTA',
      title: 'Iniciemos una Conversación',
      subtitle:
        'Abierto a propuestas laborales y proyectos desafiantes donde aportaré valor técnico y compromiso.',
      emailCardTitle: 'Correo Electrónico',
      emailCopy: 'Copiar',
      emailCopied: '¡Copiado!',
      emailSubtext: 'Respuesta garantizada en menos de 24 horas hábiles.',
      linkedinTitle: 'LinkedIn Profesional',
      linkedinSubtext: 'Conectemos en la red profesional',
      phoneTitle: 'Teléfono & WhatsApp',
      phoneSubtext: 'Mensajes o llamadas directas',
      locationTitle: 'Residencia Actual',
      locationValue: 'Paraná, Entre Ríos, Argentina',
      locationSubtext: 'Disponible presencial, híbrido y remoto',
      cvCardQuestion: '¿Necesitas una copia en PDF?',
      cvCardSubtext: 'Descarga el currículum vitae completo',
      cvCardBtn: 'Descargar CV',
      formTitle: 'Enviar Mensaje Directo',
      formSubtitle: 'Completa los campos a continuación para iniciar contacto por correo electrónico.',
      formSuccess:
        '¡Gracias por contactar! Se abrirá tu cliente de correo para enviar el mensaje con los datos completados.',
      nameLabel: 'Nombre y Apellido *',
      namePlaceholder: 'Ej. Roberto Gómez',
      emailLabel: 'Tu Correo Electrónico *',
      emailPlaceholder: 'tu-email@empresa.com',
      subjectLabel: 'Asunto o Motivo *',
      subjectPlaceholder: 'Ej. Oportunidad laboral / Propuesta de pasantía',
      messageLabel: 'Mensaje *',
      messagePlaceholder: 'Escribe tu mensaje, propuesta o consulta aquí...',
      submitBtn: 'Enviar Mensaje',
    },
    footer: {
      bio: 'Técnico Universitario en Programación enfocado en backend robusto, seguridad y soluciones web modernas. Estudiante en UTN Paraná y FADENA.',
      navTitle: 'Navegación',
      techTitle: 'Tecnología Web',
      techDesc:
        'Diseñado y construido con Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 y Lucide Icons.',
      backToTop: 'Volver arriba',
      rights: 'Todos los derechos reservados.',
      developedWith: 'Desarrollado con dedicación',
      fromLocation: 'desde Paraná, Entre Ríos, Argentina',
    },
    languageSwitcher: {
      ariaLabel: 'Seleccionar idioma',
      esLabel: 'Español',
      enLabel: 'Inglés',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      downloadCv: 'Download CV',
      downloadCvFull: 'Download Full CV',
      tagline: 'Software & Cyberdefense',
      goToHome: 'Go to home',
      toggleMenu: 'Toggle navigation menu',
      githubAria: 'GitHub Profile',
      linkedinAria: 'LinkedIn Profile',
    },
    hero: {
      greeting: "Hi, I'm",
      badgeAvailability: 'Available for new challenges',
      location: 'Paraná, Entre Ríos',
      titleRole: 'University Technician in Programming',
      summary: {
        part1: 'Student in',
        highlight1: 'Programming Degree',
        part2: '(UTN) and',
        highlight2: 'Cyberdefense Bachelor',
        part3: '(FADENA). Focused on',
        highlight3: 'robust backend architectures',
        part4: '(C#/.NET, Java/Spring Boot), full stack web development, and complex problem-solving using AI as a technical multiplier.',
      },
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      ctaCv: 'Download CV',
      metrics: {
        backendTitle: 'Backend',
        backendSubtitle: 'C# .NET & Java',
        backendDesc: 'Spring Boot, Maven, APIs',
        cyberTitle: 'Cyberdefense',
        cyberSubtitle: 'BACHELOR IN PROGRESS',
        cyberDesc: 'Security & Networks',
        progTitle: 'Programming',
        progSubtitle: 'FINAL DEGREE YEAR',
        progDesc: 'UTN Paraná - Final Year',
        aiTitle: 'Productivity',
        aiSubtitle: 'AI Powered',
        aiDesc: 'As Multiplier',
      },
    },
    about: {
      badge: 'ABOUT ME & EDUCATION',
      title: 'Solid Foundations, Continuous Learning',
      subtitle:
        'Combining algorithmic rigor and software architecture from UTN with strategic security and network insight from FADENA.',
      profileTitle: 'Engineering Profile & Approach',
      profileSubtitle: 'Development methodology, resilience, and continuous improvement',
      p1Part1:
        'I am passionate about building software with rock-solid foundations. My background combines dual academic pursuits: on one hand, the',
      p1Highlight: 'University Degree in Programming',
      p1Part2:
        'at Universidad Tecnológica Nacional (UTN Paraná), delving into object-oriented paradigms, data structures, relational database design, and software architecture.',
      p2Part1: 'On the other hand, I am pursuing a',
      p2Highlight: 'Bachelor in Cyberdefense',
      p2Part2:
        'at Facultad de Defensa Nacional (FADENA), providing me with a security-by-design mindset, rigorous protocol analysis, vulnerability mitigation, and critical infrastructure protection.',
      aiBadgeTitle: 'Productivity Multiplier with AI:',
      aiBadgeDesc:
        'I actively integrate Artificial Intelligence tools to accelerate research cycles, optimize refactoring workflows, and ensure exhaustive testing, always maintaining critical architectural control over code.',
      softSkillsTitle: 'Soft Skills & Work Dynamic',
      languageTitle: 'Language Proficiency',
      languageSubtitle: 'Effective communication and technical comprehension',
      academicTimelineTitle: 'Academic Journey',
      additionalInfoTitle: 'Additional Info & Logistics',
      additionalInfoItems: [
        'Valid driver’s license class B1 with personal vehicle (car and bicycle).',
        'Location: Paraná, Entre Ríos, Argentina (available for on-site, hybrid, or remote roles).',
      ],
    },
    skills: {
      badge: 'TECHNICAL STACK & MASTERY',
      title: 'Skills & Technologies',
      subtitle:
        'Stack focused on reliability, strict typing, efficient data modeling, and clean architecture-driven development.',
      techCount: 'techs',
      cardFooter: 'Applied in academic and software projects',
      bannerTitle: 'Modern Workflow: AI as Development Multiplier',
      bannerDesc:
        'Proactive use of code assistants for precise documentation, safe refactoring, and automated testing.',
      bannerCta: 'View Implementations →',
    },
    projects: {
      badge: 'PORTFOLIO & PROJECTS',
      title: 'Featured Projects',
      subtitle:
        'Software solutions engineered with technical rigor, clean code, and modern backend and full stack technologies.',
      filterLabel: 'Filter:',
      filterAll: 'All',
      featuredBadge: 'Featured',
      codeBtn: 'Code',
      demoBtn: 'Demo',
      emptyTitle: 'No projects in this category',
      emptyDesc: 'New implementations under this specialization will be added soon.',
      emptyReset: 'View all projects',
      viewCodeAria: 'View source code on GitHub',
      viewDemoAria: 'View live demo',
    },
    experience: {
      badge: 'BACKGROUND & MILESTONES',
      title: 'Experience & Milestones',
      subtitle:
        'Combination of direct operational customer-facing experience with rigorous academic training in programming and security.',
      milestones: {
        workBadge: 'Work Experience',
        workRole: 'Customer Service / Operations & Management',
        workEntity: 'Complejo Deportivo Tercer Tiempo',
        workLocation: 'Paraná, Entre Ríos',
        workPeriod: 'Summer 2025 – 2026',
        workDescription:
          'Comprehensive operations management and front-desk customer service at a high-traffic sports facility, ensuring smooth continuity and real-time conflict resolution.',
        workTasks: [
          'End-to-end operational management and fee collection for high-demand soccer and paddle courts.',
          'Direct customer support, handling bookings, queries, and real-time schedule modifications.',
          'Facility supervision and maintenance to ensure high quality and safety standards.',
          'Daily cash register reconciliations and schedule optimization for maximum court occupancy.',
        ],
        workCompetencies: [
          'Booking & payment management',
          'Real-time issue resolution',
          'Shift & schedule organization',
          'Facility maintenance',
        ],
        utnBadge: 'Academic Milestone',
        utnRole: 'Advanced Programming Student (Final Year)',
        utnEntity: 'National Technological University (UTN)',
        utnLocation: 'Paraná Regional Faculty',
        utnPeriod: 'In progress',
        utnDescription:
          'Deep technical training in software engineering: C#/.NET, Java OOP, PostgreSQL relational modeling, data structures, and agile development methodologies.',
        utnHighlights: [
          'Development of backend and desktop projects adhering to clean code standards and design patterns.',
          'Relational database schema design and normalization for high-concurrency environments.',
          'Collaborative teamwork and methodical software delivery evaluated under university standards.',
        ],
        utnCompetencies: ['Advanced OOP', 'C# / .NET', 'Java', 'PostgreSQL', 'Algorithms'],
        fadenaBadge: 'Specialization',
        fadenaRole: 'Bachelor in Cyberdefense',
        fadenaEntity: 'National Defense Faculty (FADENA)',
        fadenaLocation: 'Argentina',
        fadenaPeriod: 'In progress',
        fadenaDescription:
          'Multidisciplinary cybersecurity training: critical infrastructure protection, vulnerability assessments, communications networks, and cyberdefense frameworks.',
        fadenaHighlights: [
          'Study of cyber attack vectors, mitigation strategies, and perimeter defenses.',
          'In-depth comprehension of TCP/IP protocols, OSI models, and Linux system hardening.',
        ],
        fadenaCompetencies: ['Network Security', 'Linux Shell', 'Cryptography', 'Risk Assessment'],
      },
    },
    contact: {
      badge: 'DIRECT COMMUNICATION',
      title: "Let's Start a Conversation",
      subtitle:
        'Open to job opportunities and challenging projects where I can deliver technical value and dedication.',
      emailCardTitle: 'Email Address',
      emailCopy: 'Copy',
      emailCopied: 'Copied!',
      emailSubtext: 'Guaranteed response within 24 business hours.',
      linkedinTitle: 'Professional LinkedIn',
      linkedinSubtext: "Let's connect on professional network",
      phoneTitle: 'Phone & WhatsApp',
      phoneSubtext: 'Direct messages or calls',
      locationTitle: 'Current Residence',
      locationValue: 'Paraná, Entre Ríos, Argentina',
      locationSubtext: 'Available for on-site, hybrid, or remote roles',
      cvCardQuestion: 'Need a PDF resume copy?',
      cvCardSubtext: 'Download the complete curriculum vitae',
      cvCardBtn: 'Download CV',
      formTitle: 'Send Direct Message',
      formSubtitle: 'Fill out the form below to reach out via email.',
      formSuccess:
        'Thank you for reaching out! Your email client will open to send the message with your filled details.',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Robert Smith',
      emailLabel: 'Your Email *',
      emailPlaceholder: 'your-email@company.com',
      subjectLabel: 'Subject *',
      subjectPlaceholder: 'e.g. Job opportunity / Internship proposal',
      messageLabel: 'Message *',
      messagePlaceholder: 'Write your message, proposal, or inquiry here...',
      submitBtn: 'Send Message',
    },
    footer: {
      bio: 'University Technician in Programming focused on robust backend, cybersecurity, and modern web solutions. Student at UTN Paraná & FADENA.',
      navTitle: 'Navigation',
      techTitle: 'Web Technology',
      techDesc:
        'Engineered and built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Lucide Icons.',
      backToTop: 'Back to top',
      rights: 'All rights reserved.',
      developedWith: 'Crafted with dedication',
      fromLocation: 'from Paraná, Entre Ríos, Argentina',
    },
    languageSwitcher: {
      ariaLabel: 'Select language',
      esLabel: 'Spanish',
      enLabel: 'English',
    },
  },
};
