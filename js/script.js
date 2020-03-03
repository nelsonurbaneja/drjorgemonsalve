"use strict";

var showMenu = function showMenu(idToggle, idMenu) {
  var toggle = document.getElementById(idToggle);
  var menu = document.getElementById(idMenu);

  if (toggle && menu) {
    toggle.addEventListener('click', function (e) {
      menu.classList.toggle('show');
    });
  }
};

showMenu('main-toggle', 'main-menu');

// var comments = function comments(id) {
//   var fbComments = "<div class = \"fb-comments\" data-href = \"".concat(location.href, "\" data-width = \"\" data-numposts = \"5\" > </div>");
//   var container = document.getElementById(id);
//   addEventListener('DOMContentLoaded', function () {
//     if (id) container.innerHTML = fbComments;
//   });
// };

// comments('container'); 

const form = document.getElementById('formulario')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Temporalmente desabilitado')
    let nombre = e.target.nombre.value
    let correo = e.target.correo.value
    let telefono = e.target.nombre.value
    let asunto = e.target.asunto.value
    const person = {
        nombre : nombre,
        correo : correo,
        telefono : telefono,
        asunto : asunto
    }
    console.log(person)
});
const form2 = document.getElementById('formulario2')
form2.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Temporalmente desabilitado')
    let nombre = e.target.nombre.value
    let correo = e.target.correo.value
    let telefono = e.target.nombre.value
    let asunto = e.target.asunto.value
    const person = {
        nombre : nombre,
        correo : correo,
        telefono : telefono,
        asunto : asunto
    }
    console.log(person)
});