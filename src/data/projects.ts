import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'cartografo',
    title: 'Cartógrafo — Onboarding & Cartografía de Código Legacy',
    description:
      'Plataforma integral de análisis y comprensión de software para acelerar el onboarding en bases de código heredadas y monolitos complejos. Permite la exploración visual de arquitecturas en capas, grafos interactivos de dependencias, diagramas ERD de bases de datos, detección de vulnerabilidades (CVEs), deuda técnica y generador de tours guiados con hitos formativos. El análisis estático corre 100% en memoria en el navegador con JSZip, garantizando total privacidad del código.',
    tags: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'JSZip',
      'Full Stack',
      'Hackathon',
    ],
    category: 'Full Stack',
    githubUrl: 'https://github.com/LuchoDB/Cartografo',
    liveUrl: 'https://luchodb.github.io/Cartografo/',
    featured: true,
  },
  {
    id: 'gestion-terceros-facturas-spring',
    title: 'Sistema de Gestión de Terceros, Facturas y Pagos',
    description:
      'Aplicación empresarial full-stack desarrollada para la cátedra de Programación 3 en la UTN Facultad Regional Paraná. Implementa arquitectura en capas sobre Spring Boot y Spring Data JPA / Hibernate sobre PostgreSQL, acoplada a una interfaz web dinámica construida en Java con Vaadin Flow. Cuenta con CRUD integral de terceros (CUIT, situación IVA, direcciones), asociación de facturas comerciales, registro y conciliación de pagos, y filtros de búsqueda en grillas interactivas.',
    tags: [
      'Java 25',
      'Spring Boot',
      'Vaadin Flow',
      'PostgreSQL',
      'Spring Data JPA',
      'Hibernate',
      'Maven',
      'UTN FRP',
    ],
    category: 'Backend',
    githubUrl: 'https://github.com/harahel-ayun/Trabajo-Practico-Prog2026',
    featured: true,
  },
];
