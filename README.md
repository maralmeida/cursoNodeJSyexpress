# curso backend with NodeJS y express

existen frameworks back end como Django para Python  | laravel ...

Node.js
* basado en eventos unihilo
* cada archivo.js es un módulo en node.js
* un paquete contiene uno o más módulos (módulos son scripts contenidos en librerías)
* todo paquete contiene un fichero package.json con detalles sobre módulos node.js.
*   si archivo no existe, se asume que la clase principal se llama index.js
*   si el archivo principal es otro, indicar ruta en parámetro main

* la función require permite importar módulos (scripts) (./fichero1) con rutas relativas
--> con módulo http puedo crear app que escucha y retorna mensajes a solicitudes HTTP

  ## puntos de interés en el aprendizaje :
  * callback functions: son funciones dentro de funciones
  * nested callback functions: son funciones anidadas donde la salida de un es el parámetro de entrada de otra
  
  ** formas de mitigar errores en nested callback functions:
      * escribiendo comentarios
      * dividir funciones en funciones más pequeñas
      * usar promises
      * usa async/wait
  
#### promises
Es un objeto retornado por un método asíncrono.
Se puede usar cuando se sabe que la respuesta tomará tiempo y la operación podría causar bloqueos de recursos.
* estados: pending (inicial), resolved (completada), rejected (error)
* usa: API requests, I/O operations
* AXIOS package es usado en nodejs to handle HTTP request
  

