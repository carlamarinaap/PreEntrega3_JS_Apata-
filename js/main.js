//Declaración de variables
let form = document.getElementById("formulario");
let plan = document.querySelector(".plan");

//Declaracion de funciones
function submitHandler(evt) {
  evt.preventDefault();
  validarDatos(evt);
}

function validarDatos(evt) {
  if (
    (evt.target.nombre.value == "") |
    (evt.target.correo.value == "") |
    (evt.target.genero.value == "") |
    (evt.target.altura.value == "") |
    (evt.target.peso.value == "")
  ) {
    plan.innerHTML = `<p class='text-danger text-center'>Debe completar todos los campos</p>`;
  } else {
    form.setAttribute("class", "d-none");
    plan.innerHTML = `
      <div class='text-center'>
        <h4>Hola ${evt.target.nombre.value}!</h4>
        <p>Tu plan fue creado exitosamente, para verlo debes iniciar sesión</p>
        <a href="./pages/inicia_sesion.html" class="btn btn-sm btn-outline-warning m-auto">Inicia Sesión</a>
      </div>`;
    let imc = Math.round(evt.target.peso.value/((evt.target.altura.value/100)**2)) ;
    console.log(imc);
    let persona ={
      'nombre': evt.target.nombre.value,
      'correo': evt.target.correo.value,
      'genero': evt.target.genero.value,
      'altura': evt.target.altura.value,
      'peso': evt.target.peso.value,
      'imc': imc
    }
      localStorage.setItem(evt.target.correo.value, JSON.stringify(persona));
  }
}


//Eventos

form.addEventListener("submit", submitHandler);
