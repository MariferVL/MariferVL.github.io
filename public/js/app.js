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
