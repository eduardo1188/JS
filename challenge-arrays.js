/*
//Imprime el arreglo

var names = ["Simon", "Natalia", "Nayib", "Diana", "Germán"]

for (var i = 0; i < 5; i++) { //o names.length
    console.log(array[i])
}
*/
/*
//Accediendo al elemento correcto

var numbers = [1, 2, 3, 4, 5]
var elemtOne = numbers[1]
var elementTwo = numbers[3]

var message = "Los elementos a imprimir son " + elemtOne + " y " + elementTwo
console.log(message)
*/
/*
//Agregando un último elemento

var positions = ["Primero", "Segundo", "Tercero", "Cuarto"]
positions.push("Soy el último elemento")

for (i = 0; i < positions.length; i++) {
    console.log(positions[i])
}
*/
//Corrigiendo posiciones
/*
var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"]
var newArray = ["Quinto", "Sexto"]
var i = 0
var elem = arr.pop()

newArray.push(elem)

for (i = 0; i < newArray.length; i++) {
    arr.push(newArray[i])
}

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
*/
//Mayores de edad
//Objetivo: Imprimir los elementos del siguiete arreglo, que sean números mayores o iguales a 18. Los números representan la edad de personas.

var ages = [12, 3, 5, 44, 18, 2, 55, 26]

for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) { 
        console.log(ages[i])
    }
}

