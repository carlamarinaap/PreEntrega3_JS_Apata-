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
        <p>De acuerdo a tus datos, debes acompañar el siguiente plan con una dieta hipercalórica</p>
        <h3> Este es tu plan </h3>
        <ul class='list-unstyled'>
          <li>3x10 abdominales cortos</li>
          <li>3x10 biceps con mancuernas</li>
          <li>3x10 triceps en polea</li>
          <li>3x20 sentadillas con peso</li>
        </ul>
        `
      );
    }
    if(persona.imc >= 18.5 && persona.imc <= 24.9){
      return (
        info.innerHTML += `
        <h3> Este es tu plan </h3>
        <ul class='list-unstyled'>
          <li>3x10 abdominales cortos</li>
          <li>3x10 biceps con mancuernas</li>
          <li>3x10 triceps en polea</li>
          <li>3x20 sentadillas con peso</li>
        </ul>
        `
      );
    }
    if(persona.imc > 24.9 && persona.imc < 30){
      return (
        info.innerHTML += `
        <p>De acuerdo a tus datos, debes acompañar el siguiente plan con una dieta hipocalórica</p>
        <h3> Este es tu plan </h3>
        <ul class='list-unstyled'>
          <li>3x10 abdominales cortos</li>
          <li>3x10 biceps con mancuernas</li>
          <li>3x10 triceps en polea</li>
          <li>3x20 sentadillas con peso</li>
          <li>30 min cinta</li>
        </ul>
        `
      );
    }
    if(persona.imc >= 30){
      return (
        info.innerHTML += `
        <p>Te sugerimos hacer una consulta médica antes de comenzar el entrenamiento</p>
        `
      );
    }
  };

// Eventos
form.addEventListener("submit", submitHandler);