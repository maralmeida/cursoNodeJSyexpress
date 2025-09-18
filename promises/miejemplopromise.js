//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.

// promises siempre tienen 2 parametros ( (exito, error) => {cod para exito} )
let promiseUno = new Promise ( (exitop1,reject) => {
    
    setTimeout ( () => { exitop1("ok #1"),16000 })

 }
)

let promiseDos = new Promise ( (exitop2, reject) => {
    setTimeout ( () => {exitop2("ok #2"),3000})
 }
)

//llama a promesas 1 y 2 de forma secuencial y espera a su resolución para mostrar mensaje
 promiseUno.then( (successMessage) => {

    console.log("estado promise p1: --"+ successMessage)

    promiseDos.then ( (mensajeSuceso) => {
        console.log("estado promise p2: --"+ mensajeSuceso)
    })

 })
