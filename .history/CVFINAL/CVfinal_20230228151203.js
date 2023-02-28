const links = document.querySelectorAll("#nav a");

for (const link of links) {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
}
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
