// GENERAL SCRIPT FOR ANIMATIONS & SMOOTH EFFECTS

// Fade-in & slide-up animations on scroll
const fadeElements = document.querySelectorAll(".fade-in, .slide-up");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach(el => observer.observe(el));


// Smooth scroll for nav links (optional)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
