const links = document.querySelectorAll("#nav a");

for (const link of links) {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });

    // ocultar el menú desplegable después de hacer clic en un enlace
    document.getElementById("nav").classList.remove("responsive");
  });
}

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("responsive");
  menuVisible = !menuVisible;
}
