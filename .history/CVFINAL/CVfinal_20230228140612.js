// Seleccionar todos los elementos <a> dentro del elemento <nav> y añadir un event listener
document.querySelectorAll("header nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // prevenir el comportamiento predeterminado del enlace
    const targetId = event.target.getAttribute("href"); // obtener el ID del elemento de destino
    const targetElement = document.querySelector(targetId); // seleccionar el elemento de destino
    targetElement.scrollIntoView({ behavior: "smooth" }); // desplazarse hacia el elemento de destino con desplazamiento suave
  });
});
