'use client';

import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Phone,
  MessageSquare,
  Send,
  Download,
  ExternalLink,
} from 'lucide-react';
import { LinkedinIcon } from '@/components/icons/SocialIcons';
import { cvData } from '@/data/cv-data';

export default function Contact() {
  const { personal } = cvData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Prepare mailto link as fallback to actually send the email easily
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || 'Contacto desde Portfolio Web'
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMUNICACIÓN DIRECTA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Iniciemos una Conversación
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Abierto a propuestas laborales y proyectos desafiantes donde aportaré valor técnico y compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800/90 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all"
                  aria-label="Copiar dirección de email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Correo Electrónico
              </h3>
              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors break-all"
              >
                {personal.email}
              </a>
              <p className="text-[11px] text-slate-400 mt-2">
                Respuesta garantizada en menos de 24 horas hábiles.
              </p>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800/90 flex items-center justify-between group hover:border-blue-500/40 transition-all block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    LinkedIn Profesional
                  </h3>
                  <p className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    Harahel Ayun
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Conectemos en la red profesional</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* WhatsApp / Phone Card */}
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800/90 flex items-center justify-between group hover:border-emerald-500/40 transition-all block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Teléfono & WhatsApp
                  </h3>
                  <p className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {personal.phoneFormatted}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Mensajes o llamadas directas</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Location Card */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800/90 flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Residencia Actual
                </h3>
                <p className="text-base font-bold text-white">Paraná, Entre Ríos, Argentina</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Disponible presencial, híbrido y remoto</p>
              </div>
            </div>

            {/* CV Download CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-white">¿Necesitas una copia en PDF?</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Descarga el currículum vitae completo</p>
              </div>
              <a
                href={personal.cvPdfPath}
                download="CV-Harahel-Ayun.pdf"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold whitespace-nowrap transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Descargar CV
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Enviar Mensaje Directo</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Completa los campos a continuación para iniciar contacto por correo electrónico.
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    ¡Gracias por contactar! Se abrirá tu cliente de correo para enviar el mensaje con los datos completados.
                  </span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-300 mb-1.5 uppercase"
                    >
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Roberto Gómez"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-300 mb-1.5 uppercase"
                    >
                      Tu Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu-email@empresa.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-slate-300 mb-1.5 uppercase"
                  >
                    Asunto o Motivo *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ej. Oportunidad laboral / Propuesta de pasantía"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-300 mb-1.5 uppercase"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe tu mensaje, propuesta o consulta aquí..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_28px_rgba(34,211,238,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
