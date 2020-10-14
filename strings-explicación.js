// Recorrer los caracteres de una cadena usando ciclo
/*var str = "Hola Mundo"

for (var i = 0; i < str.length; i++) {
    console.log(str[i])
}*/
/*
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
console.log(lorem.endsWith("laborum.")
)
*/

//Ejercicios
//Objetivo: Identificar que debe retornar la consola al acceder al caracter ubicado en el index especificado para cada uno de los siguientes casos, e imprimirlo en la consola.
/*
console.log("Hola mundo"[3])
console.log("    "[2])
console.log("Estoy aprendiendo"[7])
console.log("El azul es mi color favorito"[12])
console.log(""[0])
console.log(" El cielo es azul"[20])
*/

//Objetivo: Escribir una función llamada countingEs que reciba como parámetro un string (cadena de texto) y retorne el número de caracters "e" (minúscula).
/*
function countingEs(string) {
    var count = 0

    for (var i = 0; i < string.length; i++) {
        if (string[i] === "e"){
            count += 1 //lo mismo que count++
        }
    }
    return count
}
function sumar() {
    const numA = countingEs('quiubo perrito') // 1
    const numB  = countingEs('eeeee') // 5

    return numA + numB 
    
}

const suma = sumar() // 6
console.log(suma)

console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
*/
//Objetivo: Define una función message, que reciba como parámetro un arreglo y retorne las siguientes cadenas de texto para cada uno de los casos de prueba.
/*
function message(array) {
    let string = array.join(" ")

    return string
}

console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); // Estoy aprendiendoJavaScript!
console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"])); //  El método join me permite unir elementos
console.log(message(["Java", "Script", "es", "muy", "útil"])) //JavaScript es muy útil

*/
//Objetivo: Escribir una función llamada contrasena que reciba un string y retorne otro string realizando los siguientes cambios sobre el string de entrada:
/*
Remplaza las mayúsculas por minúsculas.
Elimina los espacios en blanco.
Remplaza el caracter "a" por "4".
Remplaza el caracter "e" por "3".
Remplaza el caracter "i" por "1".
Remplaza el carater "o" por "0".*/
/*
function contraseña(string) {
    let contrasenaFinal = ""
    for (let i = 0; i < string.length; i++) {
        contrasenaFinal = string.toLowerCase()
        contrasenaFinal = contrasenaFinal.trim()
        contrasenaFinal = contrasenaFinal.replace(/a/g, "4")
        contrasenaFinal = contrasenaFinal.replace(/e/g, "3")
        contrasenaFinal = contrasenaFinal.replace(/i/g, "1")
        contrasenaFinal = contrasenaFinal.replace(/o/g, "0")
        

    }
    
        return contrasenaFinal
}
console.log(contraseña("Hola")); // "h0l4"
console.log(contraseña("esta es una prueba")); // "3st43sun4pru3b4"
console.log(contraseña("")); // ""
*/
//
function capitalize(string) {
    var words = string.split(' ');

    for(var i = 0; i < words.length; i++) { // 11
      var chars = words[i].split('');
  
      chars[0] = chars[0].toUpperCase();
  
      words[i] = chars.join('');
    }
  
    return words.join(' ');
  }

  // casos de prueba
console.log(capitalize("pedro perez")); // "Pedro Perez"
console.log(capitalize("make it real")); // "Make It Real"
