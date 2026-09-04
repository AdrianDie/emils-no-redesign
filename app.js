(function () {
  "use strict";

  // Mobile menu
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("mobileMenu");
  var backdrop = document.getElementById("mobileMenuBackdrop");
  var closeBtn = document.getElementById("mobileMenuClose");

  function openMenu() {
    menu.classList.add("open");
    backdrop.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    menu.classList.remove("open");
    backdrop.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (toggle && menu && backdrop) {
    toggle.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  // Footer year safety (static copyright stays as authored; no auto-injection needed)
})();
