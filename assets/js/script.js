

// Navigation toggle
(function () {
  "use strict";
  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();

// page scroll-down function
const myNav = document.querySelector(".navbar-color");
const backToTopBtn = document.getElementById("myBtn");

window.onscroll = () => {
  "use strict";
  if (
    document.body.scrollTop >= 400 ||
    document.documentElement.scrollTop >= 75
  ) {
    myNav.classList.add("navbar-color-onscroll");
    myNav.classList.remove("navbar-default-color");
    backToTopBtn.style.display = "block";
  } else {
    myNav.classList.add("navbar-default-color");
    myNav.classList.remove("navbar-color-onscroll");
    backToTopBtn.style.display = "none";
  }
};

// Back to Top Function
const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


// Scrolling in animations (scrollable elements)
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});