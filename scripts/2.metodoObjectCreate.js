//Objeto a partir de funcion

function Perro(nombre, edad){ //Abajo llamas como quieras
    let perro = Object.create(ObjetoConstructor);
    perro.nombre = nombre 
    perro.edad = edad
    return perro;
}

/*Seria igual a esto
class Perro{
    private nombre;
    private edad;
} 
*/

let ObjetoConstructor = {
    ladrar: function(){
        return "GUAUU"
    }
}

let dani = Perro("Dani",9)
console.log(dani)