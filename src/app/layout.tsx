import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Harahel Jesús Ayun | Técnico Universitario en Programación',
  description:
    'Portfolio profesional de Harahel Jesús Ayun. Estudiante de Tecnicatura en Programación (UTN) y Licenciatura en Ciberdefensa (FADENA). Especialista en C#/.NET, Java/Spring Boot, PostgreSQL y Full Stack en Paraná, Argentina.',
  keywords: [
    'Harahel Ayun',
    'Desarrollador Software',
    'Ciberdefensa',
    'UTN Paraná',
    'FADENA',
    'C# .NET',
    'Java Spring Boot',
    'PostgreSQL',
    'Full Stack Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Harahel Jesús Ayun' }],
  creator: 'Harahel Jesús Ayun',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://portfolio-harahel-ayun.vercel.app',
    title: 'Harahel Jesús Ayun | Desarrollador de Software & Ciberdefensa',
    description:
      'Portfolio profesional: proyectos en C#/.NET, Java/Spring Boot, PostgreSQL y aplicaciones web full stack con enfoque en seguridad y arquitectura limpia.',
    siteName: 'Harahel Jesús Ayun Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harahel Jesús Ayun | Desarrollador de Software & Ciberdefensa',
    description:
      'Portfolio profesional de Harahel Jesús Ayun. C#/.NET, Java/Spring Boot, PostgreSQL, Ciberdefensa y desarrollo web.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
