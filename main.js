// FOR NAV
const mobileNavButton = document.querySelector(".js-nav-button");
const mobileNav = document.querySelector(".js-nav-menu");

mobileNavButton.addEventListener("click",function(){
    if(mobileNav.classList.contains("mobile-menu--closed")){
        mobileNav.classList.remove("mobile-menu--closed");
        mobileNav.classList.add("mobile-menu--open")
    }
    else if(mobileNav.classList.contains("mobile-menu--open")){
        mobileNav.classList.remove("mobile-menu--open");
        mobileNav.classList.add("mobile-menu--closed")
    }
});
//FOR FADEINS
const windowPath = window.location.pathname;

if (windowPath == "/" || windowPath.includes("case-studies") ){
    const projects = document.querySelector('.js-projects');
    const proj1 = document.querySelector('.js-proj1');
    const proj2 = document.querySelector('.js-proj2');
    const proj3 = document.querySelector('.js-proj3');
    const proj4 = document.querySelector('.js-proj4');
    
    window.addEventListener("scroll", function () {
        applyClassWhenInView(projects, 'fadeIn');
        applyClassWhenInView(proj1, 'fadeIn');
        applyClassWhenInView(proj2, 'fadeIn');
        applyClassWhenInView(proj3, 'fadeIn');
        applyClassWhenInView(proj4, 'fadeIn');
    
    });
}
else if (windowPath.includes("creative")){
    const gal1 = document.querySelector('.js-gallery1');
    const gal2 = document.querySelector('.js-gallery2');
    const gal3 = document.querySelector('.js-gallery3');
    const gal4 = document.querySelector('.js-gallery4');
    const gal5 = document.querySelector('.js-gallery5');
    const gal6 = document.querySelector('.js-gallery6');
    const gal7 = document.querySelector('.js-gallery7');
    const gal8 = document.querySelector('.js-gallery8');
    const gal9 = document.querySelector('.js-gallery9');
    const gal10 = document.querySelector('.js-gallery10');
    const gal11 = document.querySelector('.js-gallery11');
    const gal12 = document.querySelector('.js-gallery12');

    // When the projects come into view, I want them to fade in


    window.addEventListener("scroll", function () {
        applyClassWhenInView(gal1, 'fadeIn');
        applyClassWhenInView(gal2, 'fadeIn');
        applyClassWhenInView(gal3, 'fadeIn');
        applyClassWhenInView(gal4, 'fadeIn');
        applyClassWhenInView(gal5, 'fadeIn');
        applyClassWhenInView(gal6, 'fadeIn');
        applyClassWhenInView(gal7, 'fadeIn');
        applyClassWhenInView(gal8, 'fadeIn');
        applyClassWhenInView(gal9, 'fadeIn');
        applyClassWhenInView(gal10, 'fadeIn');
        applyClassWhenInView(gal11, 'fadeIn');
        applyClassWhenInView(gal12, 'fadeIn');
    });
}
else if(!windowPath.includes("hydrate") && !windowPath.includes("stardew") && !windowPath.includes("ylpl") && !windowPath.includes("responsive")){
    const projects = document.querySelector('.js-projects');
    const proj1 = document.querySelector('.js-proj1');
    const proj2 = document.querySelector('.js-proj2');
    const proj3 = document.querySelector('.js-proj3');
    const proj4 = document.querySelector('.js-proj4');
    
    window.addEventListener("scroll", function () {
        applyClassWhenInView(projects, 'fadeIn');
        applyClassWhenInView(proj1, 'fadeIn');
        applyClassWhenInView(proj2, 'fadeIn');
        applyClassWhenInView(proj3, 'fadeIn');
        applyClassWhenInView(proj4, 'fadeIn');
    
    });
}
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
    if (distanceFromTop < viewportHeight / 1.15) {

        // Lets check if the class is on our element
        // If not, we have to add the class to our element
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        }
    }
}