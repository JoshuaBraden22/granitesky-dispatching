// GraniteSky Dispatching Website
document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // Mobile Navigation
  // ==========================
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // ==========================
  // Smooth Scroll
  // ==========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      e.preventDefault();

      window.scrollTo({
        top: target.offsetTop - 75,
        behavior: "smooth"
      });

    });
  });

  // ==========================
  // Scroll Reveal
  // ==========================
  const revealElements = document.querySelectorAll(
    ".card, .feature, .step, .photo-card, .section-title, .contact-panel"
  );

  revealElements.forEach(el => {
    el.classList.add("reveal");
  });

  function reveal() {

    revealElements.forEach(el => {

      const top = el.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        el.classList.add("show");
      }

    });

  }

  reveal();

  window.addEventListener("scroll", reveal);

  // ==========================
  // Sticky Header Shadow
  // ==========================
  const header = document.querySelector(".site-header");

  function headerShadow() {

    if (!header) return;

    if (window.scrollY > 40) {
      header.style.boxShadow = "0 10px 35px rgba(0,0,0,.25)";
    } else {
      header.style.boxShadow = "none";
    }

  }

  headerShadow();

  window.addEventListener("scroll", headerShadow);

  // ==========================
  // Active Navigation
  // ==========================
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  function activeSection() {

    let current = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }

    });

    navItems.forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }

    });

  }

  activeSection();

  window.addEventListener("scroll", activeSection);

  // ==========================
  // Button Ripple Effect
  // ==========================
  document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

      const circle = document.createElement("span");

      const diameter = Math.max(
        this.clientWidth,
        this.clientHeight
      );

      const radius = diameter / 2;

      circle.style.width = circle.style.height = diameter + "px";

      circle.style.left =
        e.clientX - this.getBoundingClientRect().left - radius + "px";

      circle.style.top =
        e.clientY - this.getBoundingClientRect().top - radius + "px";

      circle.classList.add("ripple");

      const ripple = this.querySelector(".ripple");

      if (ripple) ripple.remove();

      this.appendChild(circle);

    });

  });

});

// ==========================
// Ripple CSS (Injected)
// ==========================
const style = document.createElement("style");

style.innerHTML = `
.btn{
position:relative;
overflow:hidden;
}

.ripple{
position:absolute;
border-radius:50%;
transform:scale(0);
animation:ripple .6s linear;
background:rgba(255,255,255,.4);
}

@keyframes ripple{
to{
transform:scale(4);
opacity:0;
}
}
`;

document.head.appendChild(style);
