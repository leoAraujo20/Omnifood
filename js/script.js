// Current year
let yearEL = document.querySelector(".year");
let currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// Mobile nav bar
const headerEL = document.querySelector(".header");
const btnNavEL = document.querySelector(".btn-mobile-nav");

btnNavEL.addEventListener("click", function () {
    headerEL.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
            headerEL.classList.toggle("nav-open");
    });
});

// STICKY NAV BAR 
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);