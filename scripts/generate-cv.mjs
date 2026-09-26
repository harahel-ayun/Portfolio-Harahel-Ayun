import fs from 'node:fs';
import path from 'node:path';

function createPdf() {
  const contentLines = [
    'BT',
    '/F1 20 Tf',
    '50 740 Td',
    '(HARAHEL JESUS AYUN) Tj',
    '/F1 12 Tf',
    '0 -24 Td',
    '(Desarrollador de Software & Estudiante de Ciberdefensa) Tj',
    '/F1 10 Tf',
    '0 -18 Td',
    '(Parana, Entre Rios, Argentina | Email: harahelayun54@gmail.com | Tel: +54 343-5185459) Tj',
    '0 -14 Td',
    '(LinkedIn: linkedin.com/in/harahel-ayun | GitHub: github.com/harahelayun) Tj',
    '0 -24 Td',
    '/F1 13 Tf',
    '(PERFIL PROFESIONAL) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(Estudiante de Tecnicatura en Programacion \\(UTN\\) y Licenciatura en Ciberdefensa \\(FADENA\\).) Tj',
    '0 -14 Td',
    '(Especializado en backend \\(C#/.NET, Java/Spring Boot\\), desarrollo web full stack y seguridad.) Tj',
    '0 -14 Td',
    '(Proactivo, con fuerte aprendizaje autonomo y uso activo de IA para potenciar la productividad.) Tj',
    '0 -24 Td',
    '/F1 13 Tf',
    '(EDUCACION) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(- Licenciatura en Ciberdefensa - En curso | FADENA \\(Facultad de Defensa Nacional\\)) Tj',
    '0 -14 Td',
    '(- Tecnicatura en Programacion - En curso \\(ultimo ano\\) | UTN Parana) Tj',
    '0 -14 Td',
    '(- Diplomatura en Programacion Web Full Stack | Formacion front-end y back-end) Tj',
    '0 -14 Td',
    '(- Curso Desarrollo de Aplicaciones Android | Certificacion completada) Tj',
    '0 -14 Td',
    '(- Secundario Completo | Colegio N6 La Salle - Parana) Tj',
    '0 -24 Td',
    '/F1 13 Tf',
    '(HABILIDADES TECNICAS) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(- Lenguajes: C# / .NET \\(backend y escritorio\\), Java \\(POO\\), Python, JavaScript, TypeScript) Tj',
    '0 -14 Td',
    '(- Web & Frontend: HTML5, CSS3, Tailwind CSS, React, Next.js, Responsive Design) Tj',
    '0 -14 Td',
    '(- Frameworks & Herramientas: Spring Boot, Maven, Git, GitHub, Linux / Terminal, Docker) Tj',
    '0 -14 Td',
    '(- Bases de Datos: PostgreSQL, SQL Relacional, Modelado Entidad-Relacion) Tj',
    '0 -24 Td',
    '/F1 13 Tf',
    '(EXPERIENCIA LABORAL) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(- Atencion al Cliente / Operaciones | Complejo Deportivo Tercer Tiempo \\(Verano 2025-2026\\)) Tj',
    '0 -14 Td',
    '(  * Gestion y cobro de turnos de futbol 7 y padel) Tj',
    '0 -14 Td',
    '(  * Atencion al publico y resolucion de consultas en tiempo real) Tj',
    '0 -14 Td',
    '(  * Mantenimiento general de instalaciones deportivas y coordinacion) Tj',
    '0 -24 Td',
    '/F1 13 Tf',
    '(HABILIDADES BLANDAS & IDIOMAS) Tj',
    '/F1 10 Tf',
    '0 -16 Td',
    '(- Resolucion de problemas complejos, Trabajo en equipo, Adaptabilidad, Resiliencia) Tj',
    '0 -14 Td',
    '(- Uso de herramientas de IA para optimizacion de flujos de desarrollo) Tj',
    '0 -14 Td',
    '(- Idiomas: Espanol \\(Nativo / Avanzado\\), Ingles \\(Tecnico / Lectura\\)) Tj',
    'ET',
  ];

  const stream = contentLines.join('\n');
  const streamLength = Buffer.byteLength(stream, 'utf-8');

  let pdf = '%PDF-1.4\n';
  const offsets = [];

  function addObj(content) {
    offsets.push(Buffer.byteLength(pdf, 'utf-8'));
    pdf += content + '\n';
  }

  addObj('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');
  addObj('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj');
  addObj(
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj'
  );
  addObj('4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj');
  addObj(`5 0 obj\n<< /Length ${streamLength} >>\nstream\n${stream}\nendstream\nendobj`);

  const startxref = Buffer.byteLength(pdf, 'utf-8');
  pdf += 'xref\n0 6\n0000000000 65535 f \n';
  for (let i = 0; i < offsets.length; i++) {
    pdf += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
  }
  pdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF`;

  const destDir = path.join(import.meta.dirname, '..', 'public');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const destPath = path.join(destDir, 'cv-harahel-ayun.pdf');
  fs.writeFileSync(destPath, pdf, 'binary');
  console.log('CV PDF generated successfully at:', destPath);
}

createPdf();
