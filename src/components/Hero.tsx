import React from 'react';
import { ArrowDown, Mail, Download, ShieldCheck, Terminal, Sparkles, MapPin } from 'lucide-react';
import { cvData } from '@/data/cv-data';

export default function Hero() {
  const { personal } = cvData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-cyan-600/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6 backdrop-blur-md shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-slate-200">{personal.availabilityBadge}</span>
          <span className="text-slate-600">|</span>
          <span className="inline-flex items-center gap-1 text-slate-400">
            <MapPin className="w-3 h-3 text-cyan-400" />
            Paraná, Entre Ríos
          </span>
        </div>

        {/* Greeting & Name */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 mb-2">
          <Terminal className="w-4 h-4" />
          <span>Hola, soy</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          <span className="block">{personal.fullName}</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            Técnico Universitario en Programación
          </span>
        </h1>

        {/* Professional summary */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-9 font-normal leading-relaxed text-balance">
          Estudiante de <strong className="text-white font-semibold">Tecnicatura en Programación</strong> (UTN) y{' '}
          <strong className="text-white font-semibold">Licenciatura en Ciberdefensa</strong> (FADENA). Enfoque en{' '}
          <span className="text-cyan-300 font-medium">arquitecturas backend robustas</span> (C#/.NET, Java/Spring Boot),
          desarrollo web full stack y resolución de problemas complejos aplicando IA como multiplicador técnico.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14 w-full sm:w-auto">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm transition-all shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
          >
            <span>Ver Proyectos</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto backdrop-blur-md"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contactar</span>
          </a>

          <a
            href={personal.cvPdfPath}
            download="CV-Harahel-Ayun.pdf"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-cyan-300 font-medium text-sm border border-cyan-500/30 hover:border-cyan-400 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            <span>Descargar CV</span>
          </a>
        </div>

        {/* Value pillars / Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
          <div className="glass-panel p-3.5 rounded-xl text-left border border-slate-800/90 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold">Backend</span>
            </div>
            <p className="text-sm font-medium text-white">C# .NET & Java</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Spring Boot, Maven, APIs</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border border-slate-800/90 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold">Ciberdefensa</span>
            </div>
            <p className="text-sm font-medium text-white">LICENCIATURA en curso</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Seguridad & Redes</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border border-slate-800/90 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold">Programacion</span>
            </div>
            <p className="text-sm font-medium text-white">Finalizando TECNICATURA</p>
            <p className="text-[11px] text-slate-400 mt-0.5">UTN Paraná - Prog. Último Año</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border border-slate-800/90 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-center gap-2 text-cyan-300 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold">Productividad</span>
            </div>
            <p className="text-sm font-medium text-white">Uso de IA</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Como Herramienta</p>
          </div>
        </div>
      </div>
    </section>
  );
}
