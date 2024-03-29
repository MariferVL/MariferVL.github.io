import translations from "./translations.js";

/* Loading */

function hideLoading() {
  var loadingDiv = document.getElementById('loadingDiv');
  loadingDiv.style.display = 'none';
}

window.addEventListener('load', hideLoading);


/* Language Switch */

function updateContent(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  elementsToTranslate.forEach(element => {
    const translationKey = element.getAttribute("data-translate");
    element.innerHTML = translations[translationKey][language];
  });
}


const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
let currentLanguage = 'es';
function updatePlaceholders(language) {
  nameInput.placeholder = translations.contactName[language];
  emailInput.placeholder = translations.contactEmail[language];
  messageInput.placeholder = translations.contactMessage[language];
}


document.getElementById("language-toggle").addEventListener("change", () => {
  const lang = document.getElementById("language-toggle").checked ? "en" : "es";
  updateContent(lang);
  updatePlaceholders(lang);
  currentLanguage = lang;

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


const changingWords = [
  { en: "Innovative", es: "Innovadora" },
  { en: "Collaborative", es: "Colaboradora" },
  { en: "Inquisitive", es: "Inquisitiva" },
  { en: "FullStack Developer", es: "Desarrolladora FullStack" }
];

let index = 0;
let letterIndex = 0;
let isDeleting = false;


function change() {
  const currentWord = changingWords[index][currentLanguage];
  let changingWord = document.querySelector('.changing-word');


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

