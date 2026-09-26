'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { cvData } from '@/data/cv-data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Ir al inicio"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 group-hover:border-cyan-400 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_16px_rgba(34,211,238,0.35)] flex items-center justify-center bg-slate-950 shrink-0">
              <Image
                src="/icon.png"
                alt="Logo Harahel Ayun"
                width={40}
                height={40}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {cvData.personal.shortName}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                Software & Ciberdefensa
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action buttons (CV & Socials) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={cvData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-700 transition-all"
              aria-label="Perfil de GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={cvData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-[#0077b5] hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-700 transition-all"
              aria-label="Perfil de LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={cvData.personal.cvPdfPath}
              download="CV-Harahel-Ayun.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide transition-all shadow-[0_0_12px_rgba(34,211,238,0.15)] hover:shadow-[0_0_18px_rgba(34,211,238,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar CV</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={cvData.personal.cvPdfPath}
              download="CV-Harahel-Ayun.pdf"
              className="p-2 text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-lg hover:bg-cyan-900/40"
              aria-label="Descargar CV"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={isOpen}
              aria-label="Alternar menú de navegación"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-800/90 bg-[#090d16]/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a
                href={cvData.personal.cvPdfPath}
                download="CV-Harahel-Ayun.pdf"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold text-sm hover:bg-cyan-500/30 transition-all"
              >
                <Download className="w-4 h-4" />
                Descargar CV Completo
              </a>
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={cvData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={cvData.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
