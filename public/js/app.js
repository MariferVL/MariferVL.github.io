window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll ();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
}
function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    // check if the section has passed the line 
     // what data will I need?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // check if the base is below the target line
     // what data will I need?
    const sectionEndAst = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndAst <= targetLine

    console.log('Did the session bottom go over the line?', sectionEndPassedTargetLine)


    // section boundaries
    const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }


}

// This is so that when you scroll down your navigation bar goes out
function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}


// Will make them appear smooth
ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home`);