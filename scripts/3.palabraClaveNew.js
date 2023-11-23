//Combinacion de 1 objeto y una funcion
function Perro(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
    
}

//AñADES UNA ACCION A LA CLASE PERRO
Perro.prototype.ladrar = function(){
    return "GUAU"
}

let bobby = new Perro("Bobby", 12)

