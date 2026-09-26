'use client';

import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Star,
  Layers,
  ArrowUpRight,
  Filter,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/SocialIcons';
import { projects } from '@/data/projects';
import { ProjectCategory } from '@/types/project';

type FilterType = 'Todos' | ProjectCategory;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Todos');

  const categoriesPresent = Array.from(new Set(projects.map((p) => p.category)));
  const filterCategories: FilterType[] = ['Todos', ...categoriesPresent];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO & TRABAJOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Proyectos Destacados
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Soluciones de software diseñadas con rigor técnico, código limpio y tecnologías modernas de backend y full stack.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-mono mr-2">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filtrar:</span>
          </div>
          {filterCategories.map((cat) => {
            const count =
              cat === 'Todos'
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950/40'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800/80'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    isActive
                      ? 'bg-cyan-500/30 text-cyan-200'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-panel p-12 rounded-2xl text-center max-w-md mx-auto border border-slate-800">
            <Layers className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white">No hay proyectos en esta categoría</h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              Pronto se incorporarán nuevas implementaciones bajo esta especialidad.
            </p>
            <button
              onClick={() => setActiveFilter('Todos')}
              className="px-4 py-2 rounded-lg bg-slate-800 text-xs text-cyan-400 hover:bg-slate-700 transition-colors"
            >
              Ver todos los proyectos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:shadow-xl hover:shadow-cyan-950/20 hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Card top badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700/80">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        Destacado
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5 flex items-start justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-slate-300 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer with links */}
                <div className="p-4 px-6 bg-slate-950/60 border-t border-slate-800/70 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                        aria-label={`Ver código fuente de ${project.title} en GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Código</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                        aria-label={`Ver demo en vivo de ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-500 font-mono">
                    ID: #{project.id.slice(0, 7)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
