

/* Cursor */
const customCursor = document.getElementById('laser-cursor');
const hoverContainer = document.querySelector('.hover-container');
const updateCursorPosition = (event) => {

  customCursor.style.top = `${event.clientY}px`;

  customCursor.style.left = `${event.clientX}px`;

}

window.addEventListener('mousemove', (event) => {

  updateCursorPosition(event)

  if (hoverContainer.matches(':hover')) {
    customCursor.classList.add('zoom')
  } else {
    customCursor.classList.remove('zoom')
  }
})



/* Language Switch */

const translations = {
    // Objeto con traducciones en español e inglés
    // Define your translations here
  };
  
  document.getElementById("language-toggle").addEventListener("change", () => {
    const lang = document.getElementById("language-toggle").checked ? "en" : "es";
    updateContent(lang);
  });
  
  function updateContent(lang) {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
  
    elementsToTranslate.forEach(element => {
      const translationKey = element.getAttribute("data-translate");
      element.textContent = translations[translationKey][lang];
    });
  }
  

/* Navbar Functionality */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#mainNavigation a.nav-link");

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

        menuElement.classList.remove('active');
        if (sectionBoundaries) {
            menuElement.classList.add('active');
        }
    });
}

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