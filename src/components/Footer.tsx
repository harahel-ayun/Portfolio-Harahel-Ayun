'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { cvData, t } = useLanguage();
  const { personal } = cvData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Profile */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/40 bg-slate-950 flex items-center justify-center shrink-0">
                <Image
                  src="/icon.png"
                  alt={`Logo ${personal.fullName}`}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <span className="font-bold text-base text-white">{personal.fullName}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {t.footer.bio}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0077b5] hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">{t.footer.navTitle}</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-cyan-300 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-300 transition-colors">
                  {t.nav.experience}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech Stack & Architecture */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">{t.footer.techTitle}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.techDesc}
            </p>
            <div className="pt-2">
              <a
                href="#hero"
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors group font-medium"
              >
                <span>{t.footer.backToTop}</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {personal.fullName}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-1">
            <span>{t.footer.developedWith}</span>
            <span>{t.footer.fromLocation}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
