const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = e.target.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
