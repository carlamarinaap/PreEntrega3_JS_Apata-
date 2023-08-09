//Declaración de variables//
const personas = [];

// Declaración de objetos constructores
function Persona (nombre, altura, peso, correo) {
  this.nombre = nombre;
  this.altura = altura;
  this.peso = peso;
  this.correo = correo
  this.imc = function(){ 
    return this.peso/(this.altura/100)**2
  }
  }

//Declaracion de funciones//
function saludar(nombre) {
  if(genero == "F"){
    alert("Bienvenida " + nombre); 
  } else {
    alert("Bienvenido " + nombre);
  }
}

function recomendacion(personas){

  const recomendaciones = document.getElementById('recomendaciones')
  
  personas.forEach(persona => {
    if(persona.imc() < 18.5){
      return (
        recomendaciones.innerHTML += `
        <h3> Recomendación </h3>
        <p>${persona.nombre}: Te sugerimos una rutina de hipertrofia y dieta hipercalórica</p>
        `
      );
    }
    if(persona.imc() >= 18.5 && persona.imc() <= 24.9){
      return (
        recomendaciones.innerHTML += `
        <h3> Recomendación </h3>
        <p>${persona.nombre}: Te sugerimos la rutina de rendimiento y/o de fuerza y dieta regular</p>
        `
      );
    }
    if(persona.imc() > 24.9 && persona.imc() < 30){
      return (
        recomendaciones.innerHTML += `
        <h3> Recomendación </h3>
        <p>${persona.nombre}: Te sugerimos la rutina para adelgazar y/o de fuerza y dieta hipocalórica</p>
        `
      );
    }
    if(persona.imc() >= 30){
      return (
        recomendaciones.innerHTML += `
        <h3> Recomendación </h3>
        <p>${persona.nombre}: Te sugerimos hacer una consulta médica antes de comenzar el entrenamiento</p>
        `
      );
    }
  });
  
}

function llenarInputs(cliente){
  const nombre = document.getElementById('nombre');
  const peso = document.getElementById('peso');
  const correo = document.getElementById('correo');
  nombre.setAttribute('value', cliente.nombre)
  peso.setAttribute('value', cliente.peso)
  correo.setAttribute('value', cliente.correo)
}

//Datos del usuario//
nombre = prompt("Ingresá tu nombre completo");
correo = prompt("Ingresá tu correo electrónico");
genero = prompt("Ingresá tu género (F o M)").toUpperCase();
saludar(nombre);
altura = Number(prompt("Ingreá tu altura en cms"));
peso = Number(prompt("Ingresá tu peso actual en kg"));

const cliente = new Persona(nombre, altura, peso, correo)
personas.push(cliente);

if(confirm("Quisieras consultar por alguien más?")) {

  let cantPersonas = Number(prompt("Ingrese cantidad de personas que quiere consultar"));

  for(let i = 0; i < cantPersonas; i+=1){
    nombre = prompt("Ingrese el nombre");
    altura = Number(prompt("Ingrese altura en cms"));
    peso = Number(prompt("Ingrese su peso actual en kg"));
    const persona = new Persona (nombre, altura, peso);
    personas.push(persona);
  }

}
alert("Gracias por utilizar nuestros servicios, a continuación verá el detalle de las rutinas sugeridas")
recomendacion(personas);
llenarInputs(cliente);