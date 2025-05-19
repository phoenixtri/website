// const parralax = () => {
//     const banners = Array.from(document.getElementsByClassName("plx-bg"));

//     const updateBackgroundPosition = (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const element = entry.target;
//                 const scrollY = window.scrollY; // Get the current scroll position
//                 // Change the background position based on scroll position
//                 element.style.backgroundPositionY = `${scrollY * -0.5}px`; // Change 2 to any factor you want
//             }
//         });
//     };

//     // Create an Intersection Observer
//     const observer = new IntersectionObserver(updateBackgroundPosition, {
//         root: null, // Use the viewport as the root
//         threshold: 0.1 // Trigger when 10% of the element is in view
//     });

//     // Observe each banner element
//     banners.forEach(element => {
//         observer.observe(element);
//     });

//     // Update background position on scroll for elements in view
//     window.addEventListener("scroll", () => {
//         banners.forEach(element => {
//             const rect = element.getBoundingClientRect();
//             if (rect.top < window.innerHeight && rect.bottom > 0) {
//                 const scrollY = window.scrollY; // Get the current scroll position
//                 element.style.backgroundPositionY = `${scrollY * 0.5}px`; // Change 2 to any factor you want
//             }
//         });
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//     parralax();
// });


// const parralax = () => {
//     const banners = Array.from(document.getElementsByClassName("plx-bg"));

//     const updateBackgroundPosition = () => {
//         const scrollY = window.scrollY;
//         banners.forEach(element => {
//             element.style
//             element.style.backgroundPositionY = `${scrollY * 0.2}px`;
//         });
//     };

//     updateBackgroundPosition();

//     window.addEventListener("scroll", updateBackgroundPosition);
// }

// document.addEventListener("DOMContentLoaded", () => {
//     parralax();
// });

switch (window.location.pathname) {
    case '/aquathlon':
        window.location.hash = 'aquathlon';
    default
        break;
}
