import React from 'react';
import {
  Server,
  Layout,
  Database,
  Terminal,
  CheckCircle,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { cvData } from '@/data/cv-data';

export default function Skills() {
  const { skillCategories } = cvData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-teal-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>STACK TÉCNICO & DOMINIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Habilidades & Tecnologías
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Stack enfocado en confiabilidad, tipado estricto, modelado eficiente de datos y desarrollo orientado a arquitectura limpia.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/70">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-sm">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{category.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {category.skills.length} techs
                  </span>
                </div>

                {/* Skills inside Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 transition-all group/item"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/item:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-cyan-400 border border-slate-700/60">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-slate-400 leading-snug">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative highlight */}
              <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400/80">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Aplicado en proyectos y entorno académico
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* AI & Automation highlight banner */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-blue-950/30 border border-cyan-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Flujo Moderno: IA como Acelerador de Desarrollo
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Uso proactivo de asistentes de código para documentación precisa, refactorizaciones seguras y tests unitarios automatizados.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 text-cyan-300 text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Ver Implementaciones &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
