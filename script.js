(() => {
  "use strict";

  /* ------------------------------------------------------------
     Config — replace WHATSAPP_LINK with the real channel URL
  ------------------------------------------------------------ */
  const WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb75ljYLY6cyaatHNZ2W";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ------------------------------------------------------------
     Year in footer
  ------------------------------------------------------------ */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------
     WhatsApp link wiring
  ------------------------------------------------------------ */
  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    el.setAttribute("href", WHATSAPP_LINK);
  });

  /* ------------------------------------------------------------
     Toast helper
  ------------------------------------------------------------ */
  const toastEl = document.getElementById("toast");
  let toastTimer = null;
  function showToast(message, duration = 2600) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("is-visible");
    }, duration);
  }

  /* ------------------------------------------------------------
     Sticky nav shadow + mobile menu
  ------------------------------------------------------------ */
  const nav = document.querySelector(".nav");
  const navToggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && navMobile) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMobile.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navMobile.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMobile.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  /* ------------------------------------------------------------
     Scroll reveal (IntersectionObserver)
  ------------------------------------------------------------ */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ------------------------------------------------------------
     Easter egg: logo multi-click
  ------------------------------------------------------------ */
  const mark = document.querySelector(".nav__mark");
  let clickCount = 0;
  let clickTimer = null;
  if (mark) {
    mark.addEventListener("click", (e) => {
      clickCount += 1;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => (clickCount = 0), 900);
      if (clickCount >= 5) {
        e.preventDefault();
        clickCount = 0;
        showToast("✨ vibe check: passed");
      }
    });
  }

  /* ------------------------------------------------------------
     Easter egg: Konami code
  ------------------------------------------------------------ */
  const KONAMI = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a",
  ];
  let konamiProgress = 0;
  document.addEventListener("keydown", (e) => {
    const expected = KONAMI[konamiProgress];
    if (e.key.toLowerCase() === expected.toLowerCase()) {
      konamiProgress += 1;
      if (konamiProgress === KONAMI.length) {
        konamiProgress = 0;
        showToast("frieren would be proud 🌙", 3200);
      }
    } else {
      konamiProgress = e.key === KONAMI[0] ? 1 : 0;
    }
  });

  /* ------------------------------------------------------------
     Easter egg: console greeting
  ------------------------------------------------------------ */
  const styleTitle = "font-size:16px;font-weight:700;color:#7C9BFF;";
  const styleBody = "font-size:12px;color:#B7BDD1;";
  console.log("%cHey, curious one. 👋", styleTitle);
  console.log(
    "%cThis site is hand-built with plain HTML, CSS, and JS — no frameworks. If you're poking around, say hi on GitHub: https://github.com/faizanovansa",
    styleBody
  );

  /* ------------------------------------------------------------
     Aurora / motion: pause decorative animation if reduced motion
  ------------------------------------------------------------ */
  if (prefersReducedMotion) {
    document.querySelectorAll(".aurora, .portrait-frame__firefly, .hero__scroll span")
      .forEach((el) => (el.style.animation = "none"));
  }
})();
