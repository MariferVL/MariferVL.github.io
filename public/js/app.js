/* Loading */

function hideLoading() {
  var loadingDiv = document.getElementById('loadingDiv');
  loadingDiv.style.display = 'none';
}

window.addEventListener('load', hideLoading);


/* Language Switch */

const translations = {
  title: {
    es: "Portafolio de Marifer - ¡Bienvenido a Mi Mundo!",
    en: "Marifer's Portfolio - Welcome to My World!"
  },
  metaDescription: {
    es: "Sitio web de Portafolio futurista y visualmente cautivador que muestra mi recorrido como desarrolladora fullstack. Explora mis proyectos, habilidades y visión creativa para el diseño web.",
    en: "A futuristic and visually captivating portfolio website showcasing my journey as a fullstack developer. Explore my projects, skills, and creative vision for web design."
  },
  
  homeNav: {
    es: "Inicio",
    en: "Home"
  },
  aboutMe: {
    es: "Acerca de Mi",
    en: "About Me"
  },
  projects: {
    es: "Proyectos",
    en: "Projects"
  },
  curriculum: {
    es: "Currículum Vitae",
    en: "Resume"
  },
  life: {
    es: "La Vida",
    en: "Life"
  },
  contact: {
    es: "Contacto",
    en: "Contact"
  },
  homeTitle: {
    es: "Yo soy <span class='changing-word'>Innovadora</span>.",
    en: "I am <span class='changing-word'>Innovator</span>."
  },
  videoCaptionEn: {
    es: "Subtítulos en inglés",
    en: "English Subtitles"
  },
  videoCaptionEs: {
    es: "Subtítulos en español",
    en: "Spanish Subtitles"
  },
  aboutContent: {
    es: `¡Saludos, visitantes del futuro!<br><br>
          Soy <span class="fluorescent-blue">María-Fernanda Villalobos</span>, aka <span
          class="fluorescent-pink">Marifer</span>.<br><br>
          Bienvenidos a mi espacio virtual, donde un ser tecnológico como yo se mezcla con líneas de código y
          creatividad. Mi viaje comenzó en el mundo de la salud, pero mi pasión por la tecnología me llevó a
          explorar
          las maravillas del desarrollo de software.<br>

          Después de incontables líneas de código y travesías por el vasto mundo del desarrollo web y móvil, aquí
          estoy, lista para enfrentar desafíos futuristas.<br> Mi misión: transformar ideas en experiencias
          digitales
          asombrosas.<br>

          ¡Vamos a codificar el mañana juntos!`,
    en: `Greetings, visitors from the future!<br><br>
          I am <span class="fluorescent-blue">María-Fernanda Villalobos</span>, aka <span
          class="fluorescent-pink">Marifer</span>.<br><br>
          Welcome to my virtual space, where a technological being like me blends with lines of code and
          creativity. My journey began in the world of health, but my passion for technology led me to explore
          the wonders of software development.<br>

          After countless lines of code and journeys through the vast world of web and mobile development, here
          I am, ready to face futuristic challenges.<br> My mission: to transform ideas into amazing digital
          experiences.<br>

          Let's code tomorrow together!`
  },
  "html5-description": {
    en: "Structure of the web.",
    es: "Estructura de la web."
  },
  "css3-description": {
    en: "Styling and layout.",
    es: "Estilos y diseño."
  },
  "sass-description": {
    en: "Efficient CSS Preprocessor.",
    es: "Preprocesador CSS eficiente."
  },
  "javascript-description": {
    en: "Interactive web elements.",
    es: "Elementos web interactivos."
  },
  "angular-description": {
    en: "Powerful front-end framework.",
    es: "Potente framework de front-end."
  },
  "typescript-description": {
    en: "Typed superset of JavaScript.",
    es: "Superset tipado de JavaScript."
  },
  "bootstrap-description": {
    en: "Responsive design framework.",
    es: "Framework de diseño responsivo."
  },
  "python-description": {
    en: "Versatile programming language.",
    es: "Lenguaje de programación versátil."
  },
  "django-description": {
    en: "Python web framework.",
    es: "Framework web de Python."
  },
  'node-description': {
    en: 'Server-side JavaScript.',
    es: 'JavaScript en el lado del servidor.'
  },
  'express-description': {
    en: 'Node.js framework.',
    es: 'Framework de Node.js.'
  },
  'mysql-description': {
    en: 'Relational database system.',
    es: 'Sistema de base de datos relacional.'
  },
  'java-description': {
    en: 'Object-oriented programming.',
    es: 'Programación orientada a objetos.'
  },
  'rest-description': {
    en: 'Web service architecture.',
    es: 'Arquitectura de servicios web.'
  },
  'git-description': {
    en: 'Version control.',
    es: 'Control de versiones.'
  },
  'gitHub-description': {
    en: 'Code collaboration platform.',
    es: 'Plataforma de colaboración para código.'
  },
  'trello-description': {
    en: 'Project management tool.',
    es: 'Herramienta de gestión de proyectos.'
  },
  'figma-description': {
    en: 'UI/UX design collaboration.',
    es: 'Colaboración en diseño de UI/UX.'
  },
  'agile-description': {
    en: 'Project management methodology.',
    es: 'Metodología de gestión de proyectos.'
  },
  'kanban-description': {
    en: 'Visual workflow management.',
    es: 'Gestión visual de flujo de trabajo.'
  },
  'scrum-description': {
    en: 'Agile framework.',
    es: 'Marco de trabajo ágil.'
  },
  projectDescription1: {
    en: "Social Network for Group Events.",
    es: "Red Social para eventos grupales.",
  },
  projectDescription2: {
    en: "Website about Vedic Astrology",
    es: "Website sobre Astrología Védica",
  },
  projectDescription3: {
    en: "Administrative Website for Vegetarian Restaurant",
    es: "Website Administrativo para Restaurante Vegetariano",
  },
  projectDescription4: {
    en: "NPM Package to analyze .md files",
    es: "Paquete NPM para analizar archivos .md",
  },
  projectDescription5: {
    en: "Website Simulation of Hites as a technical challenge.",
    es: "Simulación Página Web Hites como reto técnico.",
  },
    projectTitle6: {
      en: "Bank Card Validator",
      es: "Validador Tarjeta Bancaria",
    },
    projectDescription6: {
      en: "Template that validates the card number and its issuer.",
      es: "Template que valida el número de la tarjeta y su empresa.",
    },
    projectDescription7: {
      en: "Website for animal rescue foundation.",
      es: "Website para fundación de rescate animal.",
    },
    projectDescription8: {
      en: "Memory and motor skills game.",
      es: "Juego de memoria y agilidad motriz.",
    },
    projectTitle9: {
      en: "Naif Style Portfolio",
      es: "Portafolio estilo Naif",
    },
    projectDescription9: {
      en: "Portfolio for professionals with Naif style.",
      es: "Portafolio para profesionales con estilo Naif.",
    },
    projectDescription10: {
      en: "Sensorimotor game based on a drum set.",
      es: "Juego sensoriomotor en base a un set de batería.",
    },
    projectTitle11: {
      en: "Movie and Music Trivia",
      es: "Trivia cine y música",
    },
    projectDescription11: {
      en: "Pre-Admission project for Laboratoria.",
      es: "Proyecto Pre-Admisión Laboratoria.",
    },
};


document.getElementById("language-toggle").addEventListener("change", () => {
  const lang = document.getElementById("language-toggle").checked ? "en" : "es";
  updateContent(lang);
  
  document.getElementById("html").setAttribute("lang", lang);
  const metaDescriptionElement = document.querySelector('meta[class="websiteDescription"][data-translate="metaDescription"]');
  const translatedDescription = translations["metaDescription"][lang];
  metaDescriptionElement.setAttribute("content", translatedDescription);

  const video = document.querySelector("video"); 
  const sourceElement = lang === "es"
    ? video.querySelector('[data-lang="es"]')
    : video.querySelector('[data-lang="en"]');
  
  video.src = sourceElement.getAttribute("src");
  video.load();

});

function updateContent(lang) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  elementsToTranslate.forEach(element => {
    const translationKey = element.getAttribute("data-translate");
    element.innerHTML = translations[translationKey][lang];
  });
}




/* Navbar Functionality */

const sections = document.querySelectorAll("section");

document.addEventListener('scroll', onScroll);

function onScroll() {
  activateMenuAtCurrentSection();
}

function activateMenuAtCurrentSection() {
  const targetLine = scrollY + innerHeight / 2;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
    const sectionEndAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine;

    const sectionBoundaries =
      sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`#mainNavigation a.nav-link[href="#${sectionId}"], #mainNavigation a.dropdown-item[href="#${sectionId}"]`);

    menuElement.classList.remove('show');
    if (sectionBoundaries) {
      menuElement.classList.add('show');
    }
  });
}


/* Scroll Progress Bar */

const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});



/* Scroll Up */


let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* Mobile navbar */

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll('#offcanvasNavbar2 .nav-link, #offcanvasNavbar2 .dropdown-item');
  const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar2'));


  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!link.classList.contains('dropdown-toggle')) {
        offcanvas.hide();
      }
    });
  });



});

const checkbox = document.getElementById("checkbox");
const menuToggle = document.getElementById("menu");

checkbox.addEventListener("change", function () {
  menuToggle.style.display = checkbox.checked ? "none" : "flex";
});

document.getElementById("closeNavBtn").addEventListener("click", function () {
  checkbox.checked = false;
  menuToggle.style.display = "flex";
});


/* Home Title */

const changingWords = ["Innovadora", "Colaboradora", "Inquisitiva", "FullStack Developer"];
const changingWord = document.querySelector('.changing-word');

let index = 0;
let letterIndex = 0;
let isDeleting = false;

function change() {
  const currentWord = changingWords[index];

  if (!isDeleting) {
    changingWord.textContent = currentWord.slice(0, letterIndex);
    letterIndex++;

    if (letterIndex > currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
      }, 2000);
    }
  } else {
    changingWord.textContent = currentWord.slice(0, letterIndex);
    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      index = (index + 1) % changingWords.length;
      setTimeout(() => {
        isDeleting = false;
      }, 2000);
    }
  }
}

setInterval(change, 150);



/* Projects Section Tabs */

const tabButtons = document.querySelectorAll('.tab-button');
const categories = document.querySelectorAll('.category');


tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    categories.forEach(category => category.classList.remove('active'));

    const categoryToShow = button.getAttribute('data-category');
    document.querySelector(`.category.${categoryToShow}`).classList.add('active');
  });
});



/* Contact Form */

const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach((input, index) => {
  input.addEventListener('focus', () => {
    const label = input.previousElementSibling;
    label.style.display = 'block';
    input.removeAttribute('placeholder')
  });

  input.addEventListener('blur', () => {
    const label = input.previousElementSibling;
    if (input.value === '') {
      input.placeholder = label.textContent;
      label.style.display = 'none';

    }
  });
});

