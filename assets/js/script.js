

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


const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
