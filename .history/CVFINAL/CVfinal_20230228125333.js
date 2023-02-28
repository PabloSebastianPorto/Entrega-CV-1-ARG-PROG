// Selecciona todos los enlaces dentro de la barra de navegación
const links = document.querySelectorAll(
  ".inicio .contenido-seccion header nav a"
);

// Añade un controlador de eventos de clic a cada enlace
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtiene el ID del elemento al que se va a desplazar
    const targetId = event.target.getAttribute("href");

    // Utiliza el método `scrollIntoView` para desplazarse suavemente a la sección objetivo
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
