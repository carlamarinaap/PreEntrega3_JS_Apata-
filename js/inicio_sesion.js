// Declaracion de variables
let form = document.querySelector("#form_inicioSesion");
let info = document.querySelector("#info");


//Declaracion de Funciones
function submitHandler(evt) {
  evt.preventDefault();
  validarDatos(evt);
}

function validarDatos(evt) {
  if (
    (evt.target.correo.value == "") |
    (evt.target.contrasena.value == "")
  ) {
    info.innerHTML = `<p class='text-danger'>Debe completar todos los campos</p>`;
  } else
  if (localStorage.getItem(evt.target.correo.value)) {
    let persona = JSON.parse(localStorage.getItem(evt.target.correo.value))
    form.setAttribute("class", "d-none");
    recomendacion(persona);
  
  } else {
    info.innerHTML = `<p class='text-danger'>Correo Incorrecto</p>`;
  }
}

function saludar(persona) {
  if (persona.genero == "F") {
    info.innerHTML = `
    <h3 class='text-warning'>Bienvenida ${persona.nombre}!</h3>`
  } else {
    info.innerHTML = `
    <h3 class='text-warning'>Bienvenido ${persona.nombre}!</h3>`
  }
}

function recomendacion(persona){
  saludar(persona)
    if(persona.imc < 18.5){
      return (
        info.innerHTML += `
        <h3> Recomendación </h3>
        <p>${persona.nombre}: Te sugerimos una rutina de hipertrofia y dieta hipercalórica</p>
        `
      );
    }
    if(persona.imc >= 18.5 && persona.imc <= 24.9){
      return (
        info.innerHTML += `
        <h3> Recomendación </h3>
        <p>Te sugerimos la rutina de rendimiento y/o de fuerza y dieta regular</p>
        `
      );
    }
    if(persona.imc > 24.9 && persona.imc < 30){
      return (
        info.innerHTML += `
        <h3> Recomendación </h3>
        <p>Te sugerimos la rutina para adelgazar y/o de fuerza y dieta hipocalórica</p>
        `
      );
    }
    if(persona.imc >= 30){
      return (
        info.innerHTML += `
        <h3> Recomendación </h3>
        <p>Te sugerimos hacer una consulta médica antes de comenzar el entrenamiento</p>
        `
      );
    }
  };

// Eventos
form.addEventListener("submit", submitHandler);