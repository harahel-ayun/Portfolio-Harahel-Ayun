'use client';

import React from 'react';
import {
  GraduationCap,
  Shield,
  Code2,
  Cpu,
  BrainCircuit,
  Compass,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Languages,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { cvData, t } = useLanguage();
  const { education, softSkills, languages } = cvData;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.about.title}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Methodological Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.about.profileTitle}</h3>
                  <p className="text-xs text-slate-400">{t.about.profileSubtitle}</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {t.about.p1Part1}{' '}
                  <strong className="text-white">{t.about.p1Highlight}</strong>{' '}
                  {t.about.p1Part2}
                </p>
                <p>
                  {t.about.p2Part1}{' '}
                  <strong className="text-white">{t.about.p2Highlight}</strong>{' '}
                  {t.about.p2Part2}
                </p>
                <p className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-cyan-300 text-xs sm:text-sm font-medium flex items-start gap-2.5">
                  <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.about.aiBadgeTitle}</strong> {t.about.aiBadgeDesc}
                  </span>
                </p>
              </div>
            </div>

            {/* Soft Skills Cards */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/90">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>{t.about.softSkillsTitle}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div
                    key={skill.title}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-white font-medium text-xs sm:text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{skill.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal pl-6">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-800/30 text-cyan-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.about.languageTitle}</h4>
                  <p className="text-xs text-slate-400">{t.about.languageSubtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                {languages.map((lang) => (
                  <div key={lang.name} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                    <span className="text-white font-medium">{lang.name}: </span>
                    <span className="text-cyan-400 font-mono">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Timeline & Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>{t.about.academicTimelineTitle}</span>
              </div>
              <span className="text-[11px] text-cyan-400 font-mono">UTN & FADENA</span>
            </div>

            <div className="space-y-3.5">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    item.highlight
                      ? 'bg-slate-900/80 border-cyan-500/30 hover:border-cyan-500/60 shadow-lg shadow-cyan-950/20'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {item.highlight && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none" />
                  )}

                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      {index === 0 ? (
                        <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                      ) : index === 1 ? (
                        <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                      <h4 className="text-sm sm:text-base font-bold text-white">{item.degree}</h4>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full shrink-0 font-medium ${
                        item.status === 'En curso' || item.status === 'In progress'
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                          : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-cyan-300/90 mb-2">{item.institution}</p>

                  {item.description && (
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Mobility and Location Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>{t.about.additionalInfoTitle}</span>
              </div>
              <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-1 pt-1">
                {t.about.additionalInfoItems.map((info, idx) => (
                  <li key={idx}>{info}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
