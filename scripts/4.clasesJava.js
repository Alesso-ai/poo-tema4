//
function animales(nombre, edad) {
  let nuevoAnimal = object.create(ConstructorAnimal);
  nuevoAnimal.nombre = nombre;
  nuevoAnimal.edad = edad;
  return nuevoAnimal;
}

let ConstructorAnimal={
    canta: function (){
        return `${this.nombre} puede cantar`
    },
    baila: function(){
        return `${this.nombre}`
    }
}

functionGato(nombre,edad,colorBigotes){
    let nuevoGato = Animal(nombre,edad)
    
}

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  comer(){
    return "Tengo hambre"

  }
}
