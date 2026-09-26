import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Building2 } from 'lucide-react';
import { cvData } from '@/data/cv-data';

export default function Experience() {
  const { experience } = cvData;

  const milestones = [
    {
      type: 'work',
      role: 'Atención al Cliente / Operaciones & Gestión',
      entity: 'Complejo Deportivo Tercer Tiempo',
      location: 'Paraná, Entre Ríos',
      period: 'Verano 2025 – 2026',
      badge: 'Experiencia Laboral',
      description:
        'Gestión operativa integral y atención en predio deportivo de alto flujo de usuarios, garantizando servicio continuo y resolución de contingencias.',
      highlights: experience[0].tasks,
      competencies: [
        'Gestión y cobro de reservas',
        'Resolución de consultas en tiempo real',
        'Organización de turnos',
        'Mantenimiento de infraestructura',
      ],
    },
    {
      type: 'academic',
      role: 'Estudiante Avanzado de Programación (Último Año)',
      entity: 'Universidad Tecnológica Nacional (UTN)',
      location: 'Facultad Regional Paraná',
      period: 'En curso',
      badge: 'Hito Académico',
      description:
        'Formación profunda en desarrollo de software: C#/.NET, POO en Java, modelado relacional en PostgreSQL, estructuras de datos y metodologías ágiles de desarrollo.',
      highlights: [
        'Desarrollo de proyectos backend y de escritorio orientados a buenas prácticas de código.',
        'Diseño y normalización de bases de datos relacionales para escenarios de alta concurrencia.',
        'Trabajo colaborativo y entrega metódica de software evaluado bajo estándares universitarios.',
      ],
      competencies: ['POO Avanzada', 'C# / .NET', 'Java', 'PostgreSQL', 'Algoritmia'],
    },
    {
      type: 'academic',
      role: 'Licenciatura en Ciberdefensa',
      entity: 'Facultad de Defensa Nacional (FADENA)',
      location: 'Argentina',
      period: 'En curso',
      badge: 'Especialización',
      description:
        'Abordaje multidisciplinario de la ciberseguridad: protección de infraestructuras críticas, análisis de vulnerabilidades, redes de comunicaciones y legislación de ciberdefensa.',
      highlights: [
        'Estudio de vectores de ataque, vectores de mitigación y seguridad perimetral.',
        'Comprensión integral de protocolos TCP/IP, modelos OSI y hardening de sistemas Linux.',
      ],
      competencies: ['Seguridad en Redes', 'Linux Shell', 'Criptografía', 'Análisis de Riesgos'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRAYECTORIA & ANTECEDENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experiencia & Hitos
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Combinación de experiencia operativa directa con usuarios y sólida constancia académica en programación y seguridad.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
          {milestones.map((item) => (
            <div key={item.role} className="relative pl-6 sm:pl-10 group">
              {/* Timeline marker */}
              <div className="absolute -left-3 sm:-left-3.5 top-1.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-slate-950 border-2 border-cyan-400/80 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-300 transition-all shadow-[0_0_12px_rgba(34,211,238,0.4)]">
                {item.type === 'work' ? (
                  <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                ) : (
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                )}
              </div>

              {/* Timeline Content Card */}
              <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-950/20">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.role}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    {item.entity}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Competencies pills */}
                <div className="pt-3 border-t border-slate-800/70 flex flex-wrap gap-1.5">
                  {item.competencies.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
