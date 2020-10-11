/*array = [1, "Pedro", true, false, "Juan"]
array[0]
array[1]
"Pedro"
array[2]
true
array[3]
false
array[4]
"Juan"
//para obtener el último elemento de unn array:
array[array.length -1]
Juan
*/
//Recorriendo una array
/*var array = [1, "Pedro", true, false, "Juan"]

for (var i = 0; i < array.length; i++) {
    console.log(array[i])
}
*/
//reemplazando un elemeto
/*var array = [1, "Pedro", true, false, "Juan"] //(Juan es la posicion 4 del array, lo reemplace por German)

array[4] ="Germán"
*/
//Insertando nuevos elementos¨en la ultima posicion
/*var array = ["Pedro"]
array.push("German")//Ahora el arry se compone por Pedro y por German
array.push("Diana") //ahora inserte a diana
*/
//Insertando nuevos elementos en otra posicion.
/*var array = ["Pedro", "Germán", "Diana"]

array.splice(0, 0, "Juan")//Inmserto a Juan en la posicion 0 lo inserte, la segunda siempre es 0,   
                            //el resto es lño que quiero agregar)
*/
//Eliminando elementos
var array = ["Pedro","Germán","Diana"]

array.splice(1, 2) //Elimino del indice del elemento que quiero eliminar y
                    // la cantidad de elemetos a elimiar hacia la derecha, si no pongoi el segundo numero 
                    //se boprra todolo lo que este a la derecha del indice
