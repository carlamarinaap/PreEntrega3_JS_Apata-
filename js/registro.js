// Declaracion de variables
let form = document.querySelector("#form_registro");
let info = document.querySelector("#info");


//Declaracion de Funciones
function submitHandler(evt) {
  evt.preventDefault();
  validarDatos(evt);
}

function validarDatos(evt) {
  if (
    (evt.target.correo.value == "") |
    (evt.target.contrasena.value == "")|
    (evt.target.confirmacion.value == "") |
    (evt.target.genero.value == "") |
    (evt.target.nombre.value == "") 
  ) {
    info.innerHTML = `<p class='text-danger'>Debe completar todos los campos</p>`;
  } else if (localStorage.getItem(evt.target.correo.value)) {
    info.innerHTML = `<p class='text-danger'>Ya existe una cuenta con este correo</p>`;
  } else if (evt.target.contrasena.value !== evt.target.confirmacion.value){
    info.innerHTML = `<p class='text-danger'>Las contraseñas no coinciden</p>`;
  } else {
    let cliente ={
      'nombre': evt.target.nombre.value,
      'correo': evt.target.correo.value,
      'genero': evt.target.genero.value,
      'contrasena': evt.target.confirmacion.value
    };
      localStorage.setItem(evt.target.correo.value, JSON.stringify(cliente));
      info.innerHTML = `
      <div>
        <p class='text-success'>El usuario se ha registrado con éxito.</p>
        <p class='text-success'>Ahora debe iniciar sesión para acceder a su plan de entrenamiento</p>
        <a href="./inicia_sesion.html" class="btn btn-sm btn-outline-warning"
        >Inicia Sesión</a
      >
      </div>`;
  }
}

// Eventos
form.addEventListener("submit", submitHandler);