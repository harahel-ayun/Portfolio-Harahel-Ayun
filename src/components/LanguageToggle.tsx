'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageToggleProps {
  variant?: 'navbar' | 'compact' | 'drawer';
  className?: string;
}

export default function LanguageToggle({ variant = 'navbar', className = '' }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === 'drawer') {
    return (
      <div className={`flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
          <Globe className="w-4 h-4 text-cyan-400" />
          <span>Idioma / Language:</span>
        </div>
        <div className="inline-flex items-center p-1 rounded-lg bg-slate-950/70 border border-slate-800/80">
          <button
            type="button"
            onClick={() => setLanguage('es')}
            aria-pressed={language === 'es'}
            aria-label="Cambiar a Español"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
              language === 'es'
                ? 'bg-gradient-to-r from-cyan-500/25 to-blue-600/25 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.25)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="text-xs">🇪🇸</span>
            <span>Español</span>
          </button>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            aria-label="Switch to English"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
              language === 'en'
                ? 'bg-gradient-to-r from-cyan-500/25 to-blue-600/25 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.25)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="text-xs">🇬🇧</span>
            <span>English</span>
          </button>
        </div>
      </div>
    );
  }

  // Navbar & Compact desktop / mobile top bar
  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md shadow-inner transition-all hover:border-slate-700 ${className}`}
      role="group"
      aria-label="Selección de idioma / Language selector"
    >
      <div className="pl-1.5 pr-1 hidden sm:flex items-center text-cyan-400" aria-hidden="true">
        <Globe className="w-3.5 h-3.5" />
      </div>

      {/* Spanish Option */}
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
        title="Español (Spanish)"
        aria-label="Cambiar idioma a Español"
        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
          language === 'es'
            ? 'bg-gradient-to-r from-cyan-500/25 to-blue-600/25 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(34,211,238,0.25)]'
            : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent'
        }`}
      >
        <span className="text-[11px] leading-none" aria-hidden="true">
          🇪🇸
        </span>
        <span className="tracking-wide">ES</span>
      </button>

      <span className="text-slate-700 select-none text-[10px] px-0.5" aria-hidden="true">
        |
      </span>

      {/* English Option */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        title="English (Inglés)"
        aria-label="Switch language to English"
        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
          language === 'en'
            ? 'bg-gradient-to-r from-cyan-500/25 to-blue-600/25 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(34,211,238,0.25)]'
            : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent'
        }`}
      >
        <span className="text-[11px] leading-none" aria-hidden="true">
          🇬🇧
        </span>
        <span className="tracking-wide">EN</span>
      </button>
    </div>
  );
}
