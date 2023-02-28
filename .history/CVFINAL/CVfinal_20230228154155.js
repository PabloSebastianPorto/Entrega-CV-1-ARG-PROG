// Obtener todos los enlaces de la navegación
const navLinks = document.querySelectorAll("#nav a");

// Agregar un evento de clic a cada enlace
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevenir el comportamiento predeterminado del enlace
    e.preventDefault();

    // Obtener el valor del atributo href del enlace
    const href = link.getAttribute("href");

    // Obtener la posición de la sección a la que el enlace apunta
    const section = document.querySelector(href);
    const sectionPosition = section.offsetTop;

    // Desplazarse suavemente a la sección
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  });
});
