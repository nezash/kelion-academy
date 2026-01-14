const COURSES = [
  {
    id: "radioproteccion",
    group: "primary",
    title: "Radioprotección",
    tagline: "Formación técnica orientada al control, medición y cumplimiento normativo.",
    image: "img/cursos/radio1.jpg",
    bullets: [
      "Fundamentos físicos de la radiación",
      "Blindajes, zonas controladas y procedimientos operativos",
      "Normativa aplicable y buenas prácticas",
      "Preparación alineada a requisitos y lineamientos del IPEN"
    ],
    meta: ["Programa orientado a profesionales y técnicos que requieren formación verificable y aplicable."]
  },
  {
    id: "forense",
    group: "primary",
    title: "Medicina forense",
    tagline: "Formación especializada en el análisis técnico y científico aplicado a contextos forenses.",
    image: "img/cursos/MF1.jpg",
    bullets: [
      "Principios básicos de medicina forense",
      "Análisis de indicios y evidencia",
      "Interpretación técnica de resultados",
      "Contextos legales y periciales",
      "Evaluación basada en criterios técnicos definidos"
    ],
    meta: ["Programa orientado a comprensión aplicada, no a práctica clínica directa."]
  },
  {
    id: "ecotoxicologia",
    group: "primary",
    title: "Ecotoxicología",
    tagline: "Formación en el análisis del impacto de sustancias químicas y contaminantes.",
    image: "img/cursos/toxic1.jpg",
    bullets: [
      "Principios de toxicología ambiental",
      "Evaluación de riesgos ecológicos",
      "Interpretación de efectos y exposición",
      "Marco normativo y criterios técnicos",
      "Enfoque en análisis y evaluación técnica"
    ],
    meta: ["Programa orientado a contextos ambientales, regulatorios y de evaluación técnica."]
  },

  {
    id: "prog-inicio",
    group: "extra",
    title: "Introducción a la Programación con Unity",
    tagline: "Curso introductorio a personas sin experiencia previa en programación.",
    image: "img/cursos/unity1.jpg",
    bullets: [
      "Fundamentos de programación",
      "Introducción básico en C#",
      "Familiarizarse con Unity"

    ],
    meta: ["Programa pensado como primer contacto con la programación"]
  },
  {
    id: "prototipo",
    group: "extra",
    title: "Prototipado de Videojuegos",
    tagline: "Curso introductorio orientado al proceso de diseño, prueba e iteración de mecánicas de juego.",
    image: "img/cursos/pro1.jpg",
    bullets: [
      "Conceptos básicos de prototipado en videojuegos",
      "Uso de entornos digitales para validar ideas de forma rápida"
    ],
    meta: ["Programa orientado al proceso de prueba"]
  }
];

function createCourseCard(course, compact = false) {
  const el = document.createElement("article");
  el.className = "course-card" + (compact ? " course-card--compact" : "");

    el.innerHTML = `
    <div class="course-card__head">
        <h4 class="course-card__title">${course.title}</h4>
        <p class="course-card__subtitle">${course.tagline}</p>
    </div>

    <div class="course-card__media">
        <img src="${course.image}" alt="">
    </div>

    <div class="course-card__body">
        <div class="course-card__content">
        <ul class="course-card__list">
            ${course.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
        </div>
        <div class="course-card__meta">
        ${(course.meta || []).map(m => `<span>• ${m}</span>`).join("")}
        </div>
    </div>
    `;

  return el;
}

function renderCourses() {
  const primaryWrap = document.getElementById("coursesPrimary");
  const extraWrap = document.getElementById("coursesExtra");
  if (!primaryWrap || !extraWrap) return;

  const primary = COURSES.filter(c => c.group === "primary");
  const extra = COURSES.filter(c => c.group === "extra");

  primaryWrap.innerHTML = "";
  extraWrap.innerHTML = "";

  primary.forEach(c => primaryWrap.appendChild(createCourseCard(c, false)));
  extra.forEach(c => extraWrap.appendChild(createCourseCard(c, true)));
}

document.addEventListener("DOMContentLoaded", renderCourses);