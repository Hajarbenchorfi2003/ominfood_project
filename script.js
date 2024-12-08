document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const yearsEl=document.querySelector(".year");
    const cureentyear=new Date().getFullYear();
yearsEl.textContent=cureentyear;
/////////// MAKE  MOBIL NAVIGATION WORK
const navToggle = document.querySelector('.nav-toggle');
const openIcon= document.querySelector('.opene-icon');
const closeIcon= document.querySelector('.close-icon');
openIcon.addEventListener('click', () => {
header.classList.toggle('open');
});
closeIcon.addEventListener('click', () => {
header.classList.remove('open');
});
    

 

// Smooth scrolling animation

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
      header.classList.toggle("open");
  });
});


});
/////////////// 

document.addEventListener("DOMContentLoaded", () => {
    // Sticky navigation
    const sectionHeroEl = document.querySelector(".section-hero");

    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);
        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        } else {
          document.body.classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-100px", 
      }
    );

    if (sectionHeroEl) {
      obs.observe(sectionHeroEl);
    }
  });

