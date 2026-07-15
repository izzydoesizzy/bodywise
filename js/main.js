/* Bodywise — small progressive-enhancement helpers (no dependencies) */
(function () {
  "use strict";

  // Mobile menu toggle
  var btn = document.getElementById("menuToggle");
  var menu = document.getElementById("mobileMenu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close on link tap
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Mobile "Work With Me" sub-menu toggle
  var subBtn = document.getElementById("mobileWorkToggle");
  var subMenu = document.getElementById("mobileWorkMenu");
  if (subBtn && subMenu) {
    subBtn.addEventListener("click", function () {
      subMenu.classList.toggle("hidden");
    });
  }

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
