export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: 'En curso' | 'Completado';
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

export const cvData = {
  personal: {
    fullName: 'Harahel Jesús Ayun',
    shortName: 'Harahel Ayun',
    monogram: 'HA',
    role: 'Desarrollador de Software & Estudiante de Ciberdefensa',
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
      description: 'Formación académica integral con énfasis en valores humanos, disciplina y pensamiento lógico.',
    },
  ] as EducationItem[],

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
      skills: ['Resolución en tiempo real', 'Gestión operativa', 'Trabajo bajo presión', 'Atención al cliente', 'Organización'],
    },
  ] as ExperienceItem[],

  skillCategories: [
    {
      title: 'Backend & Arquitectura',
      subtitle: 'Construcción de servicios sólidos, seguros y escalables',
      iconName: 'Server',
      skills: [
        { name: 'C# / .NET', level: 'Backend & Escritorio', description: 'Desarrollo con .NET, LINQ, POO avanzada y patrones de diseño' },
        { name: 'Java', level: 'POO & Enterprise', description: 'Programación orientada a objetos, tipado estricto y testing' },
        { name: 'Spring Boot', level: 'Framework Backend', description: 'Desarrollo de REST APIs, inyección de dependencias y JPA' },
        { name: 'Maven', level: 'Gestión de Dependencias', description: 'Automatización de compilación, empaquetado y ciclo de vida' },
        { name: 'Python', level: 'Scripting & Seguridad', description: 'Automatización, análisis de datos y utilidades de ciberseguridad' },
      ],
    },
    {
      title: 'Web & Frontend',
      subtitle: 'Interfaces modernas, accesibles y de alto rendimiento',
      iconName: 'Layout',
      skills: [
        { name: 'HTML5 & CSS3', level: 'Semántica & Estilos', description: 'Estructuración semántica accesible y maquetación avanzada' },
        { name: 'JavaScript & TypeScript', level: 'Lógica Frontend', description: 'ES6+, tipado estricto y manipulación moderna del DOM' },
        { name: 'Responsive Design', level: 'Multi-dispositivo', description: 'Diseño mobile-first optimizado para cualquier resolución' },
        { name: 'Tailwind CSS', level: 'Diseño Rápido & Limpio', description: 'Sistemas de diseño modernos, modo oscuro y micro-interacciones' },
      ],
    },
    {
      title: 'Bases de Datos',
      subtitle: 'Modelado relacional eficiente y persistencia de datos',
      iconName: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 'RDBMS Principal', description: 'Consultas complejas, índices, transacciones ACID y triggers' },
        { name: 'SQL Relacional', level: 'Consultas DDL / DML', description: 'Modelado Entidad-Relación, normalización y optimización' },
        { name: 'Modelado de Datos', level: 'Diseño Arquitectónico', description: 'Diagramación lógica y física de estructuras de información' },
      ],
    },
    {
      title: 'Herramientas & Entorno',
      subtitle: 'Flujo de trabajo ágil, seguridad y productividad',
      iconName: 'Terminal',
      skills: [
        { name: 'Git & GitHub', level: 'Control de Versiones', description: 'Flujos de ramas, pull requests, semántica y trabajo colaborativo' },
        { name: 'Linux / Terminal', level: 'Entorno de Desarrollo', description: 'Manejo fluido de shell Bash, administración básica de paquetes' },
        { name: 'IA para Productividad', level: 'Multiplicador Técnico', description: 'Uso estratégico de IA generativa para refactorización, debugging y documentación' },
        { name: 'Automatización', level: 'Flujos Eficientes', description: 'Creación de scripts para optimizar tareas repetitivas' },
      ],
    },
  ] as SkillCategory[],

  softSkills: [
    { title: 'Resolución de problemas complejos', desc: 'Capacidad de descomponer desafíos técnicos en partes manejables y encontrar soluciones eficaces.' },
    { title: 'Trabajo en equipo y colaboración', desc: 'Comunicación asertiva, escucha activa y empatía para construir soluciones en conjunto.' },
    { title: 'Aprendizaje activo y autónomo', desc: 'Curiosidad técnica constante y rápida asimilación de nuevos stacks y frameworks.' },
    { title: 'Organización y gestión del tiempo', desc: 'Priorización metódica de entregas académicas, proyectos personales y responsabilidades.' },
    { title: 'Uso de IA como multiplicador', desc: 'Integración proactiva de herramientas de IA en el ciclo de vida del desarrollo de software.' },
    { title: 'Resiliencia y adaptabilidad', desc: 'Persistencia constructiva ante errores técnicos y adaptación fluida a entornos cambiantes.' },
  ],

  languages: [
    { name: 'Español', level: 'Nativo / Avanzado', percent: 100 },
    { name: 'Inglés', level: 'Básico / Técnico (Lectura de documentación técnica)', percent: 45 },
  ],

  otherInfo: [
    'Registro de conducir vigente categoría B1',
    'Movilidad propia (automóvil y bicicleta)',
    'Disponibilidad horaria para pasantías y posiciones Jr.',
  ],
};
