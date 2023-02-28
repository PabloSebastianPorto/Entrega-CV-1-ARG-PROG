const links = document.querySelectorAll("#nav a");

for (const link of links) {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que el enlace redirija a otra página

    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" }); // Desplaza suavemente hacia la sección correspondiente
  });
}
