//VARIABLES
const projects = document.querySelector('.js-projects');
const proj1 = document.querySelector('.js-proj1');
const proj2 = document.querySelector('.js-proj2');
const proj3 = document.querySelector('.js-proj3');
const proj4 = document.querySelector('.js-proj4');

// When the projects come into view, I want them to fade in

window.addEventListener("scroll", function () {
    applyClassWhenInView(projects, 'fadeIn');
    applyClassWhenInView(proj1, 'fadeIn');
    applyClassWhenInView(proj2, 'fadeIn');
    applyClassWhenInView(proj3, 'fadeIn');
    applyClassWhenInView(proj4, 'fadeIn');
});

// Break this out to be reusable
function applyClassWhenInView(
    // Element to watch
    element,
    // Class name to add
    className
) {

    const viewportHeight = window.innerHeight;
    const positionOfElement = element.getBoundingClientRect();
    const distanceFromTop = positionOfElement.y;
    
    // When our element is in our viewport and halfway to the top...
    if (distanceFromTop < viewportHeight / 2) {

        // Lets check if the class is on our element
        // If not, we have to add the class to our element
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        }
    }
}