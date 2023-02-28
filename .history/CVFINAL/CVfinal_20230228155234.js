// Espera a que se cargue la página
window.onload = function () {
  // Obtén los elementos del menú
  var inicio = document.getElementById("inicio");
  var sobremi = document.getElementById("sobremi");
  var historial = document.getElementById("historial");
  var contacto = document.getElementById("contacto");

  // Obtén las posiciones de los elementos
  var inicioPos = inicio.offsetTop;
  var sobremiPos = sobremi.offsetTop;
  var historialPos = historial.offsetTop;
  var contactoPos = contacto.offsetTop;

  // Obtén los botones del menú
  var btnInicio = document.querySelector("#nav a[href='#inicio']");
  var btnSobremi = document.querySelector("#nav a[href='#sobremi']");
  var btnHistorial = document.querySelector("#nav a[href='#historial']");
  var btnContacto = document.querySelector("#nav a[href='#contacto']");

  // Agrega los listeners de eventos a los botones del menú
  btnInicio.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: inicioPos, behavior: "smooth" });
  });

  btnSobremi.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: sobremiPos, behavior: "smooth" });
  });

  btnHistorial.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: historialPos, behavior: "smooth" });
  });

  btnContacto.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: contactoPos, behavior: "smooth" });
  });
};
