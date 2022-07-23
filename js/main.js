const ckickHandler = () => {
    console.log("shadowplay")
}
console.log(ckickHandler) // imprime la fedinicion de la funcion () => {console.log("shadowplay")}
console.log(ckickHandler()) // imprime el resultado de la funcion linea 2 y despues undefine linea 5

const somevar = " hola "
console.log(somevar) // imprime el valor de una variable linea 7

let someObject = {
    method : function (){
        console.log(" hola ")
    }
}

 console.log(someObject.method) // imprime la definicion de function (){console.log(" hola ")}
 console.log(someObject.method()) // imprime el resultado de la funcion linea 12 y despues undefine linea 17

// En ambos casos sale indefinido por que no tiene un retorno
//si se le pone un reurn ya no esta indefinido y regresa el retorno
const ckickHandler2 = () => {
    console.log("shadowplay")
    return "retorno"
}
console.log(ckickHandler2())


const ckickHandler3 = () => {
    console.log("shadowplay")
}

$("#test-button").click(ckickHandler()) // En cualquier lugar donde se ponga el clickAndler con parentesis, ahi se va a ejecutar la funcion
$("#test-button1").click(ckickHandler3)

/*****************************************************/

// Al dar click se ejecuta la funcion anonima () => {} 
// que adentro tiene otra funcion ckickHandler4()
// ¿Cual?, la que se tiene guardada en const ckickHandler4

const ckickHandler4 = textToPrint => {
    console.log( textToPrint )
}

$("#test-button2").click( () => {       // Una funcion dentro de otra funcion
    ckickHandler4("replacement text")   //mando a llamar ckickHandler4 cun un parametro en especifico "replacement text"
})

//ckickHandler4("replacement text") 

/***************************************************************************/
// ckickHandler5 recibe un textToPrint
//¿De donde se obtiene "ckickHandler5()" el valor que va a imprimir?, ¿como se hereda?
// El argumento o parametro que recive es EVENT
// ya teniendo acceso al evento se le pueden extraer los propiedades y metodos
// como el Target 
// se agrega un data personalizado al elemento  data-text="sometext"
// por lo que se puede tomar el texto que esta dentro de mi boton y pasarcelo como argumento a ckickHandler5

//quien se encarga de imprimir es ckickHandler5 y se le pasa textoAImprimir por medio de la llamada a la funcion ckickHandler5()


const ckickHandler5 = textToPrint => {
    console.log( textToPrint )
}

$("#test-button3").click( event => {       
   console.log(event) // Entrega el objeto de mi evento
   console.log(event.target)  // Entrega el elemento que esta recibiendo el elemento <button type="button" id="test-button3">Test me!</button type="button">
   console.log(event.target.dataset.text) // Imprime el texto asignado al elemento 
   
    let textoAImprimir = event.target.dataset.text
   
   ckickHandler5(textoAImprimir)
})


/*
si yo tengo un array de elementos y hago N cantidad de botones con ese array, puedo
hacer que cada boton me imprima el nombre de de donde vino ¿como?, pasandole el 
valor del nombre como un data.

si lo que necesito es iterar botones, entonces voy a iterar dentro de todos los mentores,
voy a hacer que cada boton tenga la llave y en mi listener en ves de que el handler este 
directo como la funcion de borrar deberia estar encapsulado en una funcion flecha para 
poder extraer primero el id o la llave del sujeto que quiero borrar y despues ejecutar 
mi handler 
*/

//De forma predeterminada, JavaScript utilizará la zona horaria del navegador y mostrará una fecha como una cadena de texto completo:
const d = new Date();
console.log(d)

//Devuelve el número de milisegundos transcurridos desde las 00:00:00 UTC del 1 de enero de 1970.
const e = Date.now(); 
console.log(e)

var someDate = new Date()
console.log(someDate)
console.log(someDate.getMonth())
console.log(someDate.getFullYear())
console.log(someDate.getDate())
console.log(someDate.getYear())
console.log(someDate.getDay())

console.log(`${someDate.getDate()} / ${someDate.getMonth()} / ${someDate.getFullYear()}`)

// https://momentjs.com/

/*Como en Jquewry, copio el scipt, lo pego en mi html y ya tengo mi libreria disponible */
//https://cdnjs.com/libraries/moment.js

// ejemplo

const createPost = () => {
    let post = {
        title:"some title",
        content:"some content"
    }

    let today = new Date();

    let creationDate = `${today.getDate()} / ${today.getMonth()} / ${today.getFullYear()}`
    
    let creationTime = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`
    
    post = { ...post, creationDate, creationTime}

    console.log( post )

}

$("#test-button-time").click(createPost)