// Ferrari Dubai Showroom - script.js
// Used only for slide-in animations, closing the side menu and the form message.

// 1. Slide elements in (left, right, up, down) when they appear on screen
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealItems.forEach(function (item) {
    observer.observe(item);
});

// 2. Close the side menu after clicking a link
const sideMenu = document.getElementById("sideMenu");

document.querySelectorAll(".side-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        bootstrap.Offcanvas.getOrCreateInstance(sideMenu).hide();
    });
});

// 3. Show a thank you message when the test drive form is submitted
const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("formMsg").classList.remove("d-none");
    form.reset();
});
