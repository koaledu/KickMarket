// @ts-check
// Comprobación de errores con TypeScript

// Menú hamburguesa en móvil con JQuery
$(function () {
  $(".navbar-burger").on("click", function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
