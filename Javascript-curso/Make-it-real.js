/*// cadenas de texto (strings)
const text = "dsfsdfgasfglkdj 847t45 -!*"

//recorrer

for (let i = 0; i < text.length; i++) {
    console.log(text[i])//tert.charArt(i) Asi tambien se puede recorrer una cadena
}

"hola".length
*/

// partir una cadena
//const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
/* const words = text.split(" ")
 console.log(words) */
  //console.log(text.toUpperCase())

/*console.log("Hola Mundo" [3]) //a
console.log("    " [2]) // " "

const words = ["Hola", "Mundo"]
console.log(words.join(----))*/
/*

function generatePassword(str) {
    str = str.toLowerCase()//codigo de nuestra función
    str = str.replace(/ /g, "") //(/ /g. ) esto mes una exporesion regular la "G" de global dice que busque todas las coincidencias que hay, si se omite la g solo se quita la primera expresionq ue se quiere cambiar.
    str =str.replace(/a/g, "4")
    return str

}

console.log(generatePassword("hola")); // "h0l4"
console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
console.log(generatePassword("")); // ""
*/

function capitalize (str) {
   //return str[0].toUpperCase() + str.substring(1)
   cosnt words = str.split(" ")
   for (let i=0; i < words.length; i++) {
       words[i]
   }
   return words.join(" ")
}
console.log(capitalize("make it real")) //Make It Real

