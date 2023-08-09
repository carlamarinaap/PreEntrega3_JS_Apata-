// Declaración de variables
const staff = [
  {
    id:'SOFIA',
    nombre:'Sofía',
    descripcion:'Sofi es profesora de eduación física desde 2016 e instructora de CrossFit desde 2019. Ella te acompañará en nuestras clases de funcional en la sede Buenos Aires',
    foto:'"../img/Sofia.webp"'
  },
  {
    id:'JULIO',
    nombre:'Julio',
    descripcion:'Julio es personal trainer desde 2012, además es triatlonista y un apasionado por el boxeo. Él te acompañará en las clases de spinning y de natación en todos los niveles en la sede de San Luis',
    foto:'"../img/Julio.webp"'
  },
  {
    id:'FERNANDO',
    nombre:'Fernando',
    descripcion:'Fer es profesor de educación física desde 2017 y personal trainer desde 2021. Además es instructor de karate. Él te acompañará en las clases de spinning y de karate en la sede de Córdoba',
    foto:'"../img/Fernando.webp"'
  },
  {
    id:'GASTON',
    nombre:'Gastón',
    descripcion:'Gasti es instructor de Crossfit y de Judo. Además es fanático de la calistenia. Él te acompañará en las clases de judo y de localizada en la sede de Buenos Aires',
    foto:'"../img/Gaston.webp"'
  },
  {
    id:'PIA',
    nombre:'Pía',
    descripcion:'Pía es instructora de boxeo, profesora de educación física desde 2018 y personal trainer. Ella te acompañará en las clases de boxeo y funcional en la sede de Santa Fe',
    foto:'"../img/Pia.webp"'
  },
  {
    id:'MILAGROS',
    nombre:'Milagros',
    descripcion:'Mili es profesora de eduación física desde 2016 e instructora de yoga. Ella te acompañará en las clases de hatha yoga y ashtanga yoga de la sede de Córdoba',
    foto:'"../img/Milagros.webp"'
  },
]

// Declaración de funciones

function cargarProfeElegido(profe,staff){
  const upperCase = profe.toUpperCase();
  const elegidos = staff.filter((el) => el.id.includes(upperCase))
  const eleccion = document.getElementById('eleccion');
  if (elegidos.length > 0){
    eleccion.innerHTML += `<h3>Elegidos</h3>`
    elegidos.forEach((profe) => {
      eleccion.innerHTML += `
      <div class="col-3">
      <div class="staff_container">
        <div class="img_container">
          <img src=${profe.foto} alt="${profe.nombre}" />
        </div>
        <div class="tarjetaInterna">
          <span class="float-end"><i class="fa-solid fa-circle-info"></i></span>
          <h3 class="my-md-4 my-1">${profe.nombre}</h3>
          <p>${profe.descripcion}</p>
        </div>
      </div>
      </div>
      `
    }
    )
    eleccion.innerHTML += `<div><hr /></div>`
  }
}

function cargarStaff(staff) {
  const contenedor = document.getElementById('imagesContainer');

  staff.forEach((profe) => {
    
    contenedor.innerHTML += `
    <div class="col-lg-4 col-md-6 col-12">
    <div class="staff_container">
      <div class="img_container">
        <img src=${profe.foto} alt="${profe.nombre}" />
      </div>
      <div class="tarjetaInterna">
        <span class="float-end"><i class="fa-solid fa-circle-info"></i></span>
        <h3 class="my-md-4 my-1">${profe.nombre}</h3>
        <p>${profe.descripcion}</p>
      </div>
    </div>
    </div>
    `
  })
 }

const profesorElegido = prompt('Elija un profesor: (Fernando,Gaston,Julio,Milagros,Pia,Sofia)')

cargarProfeElegido(profesorElegido,staff);
cargarStaff(staff);