Trabajo realizado para UTN Incluyeme
El trabajo realizado para UTN Incluyeme se centró en la creación de un sitio con Node
Front con HBS, back con express, la base de datos en NoSql MongoDB y use la api de la nasa que muestra el titulo y un parrafo con una imagen tomada
por la nasa, la api se llama Imagen del dia de la nasa



-La pagina Presenta un Home como presentacion con su nav y su footer.
-Un crud para crear astronautas que almacena en MondoDB
-La pagina permite editar el astronauta conserva la imagen cargada desde la creacion del astronauta 
o permite cambiarla por una nueva mostrando la imagen que ya esta cargada en el form de editar.
-La pagina de Imagen del dia de la nasa

Para correr el proyecto hace falta la orden npm i, para instalar los node_modules
npm i
tambien crear una base de datos en mongo, nombre nasaApp y coleccion astronautas
BD : nasaApp
coleccion : astronautas

buscar una llave 'key' en la pagina de la nasa y agregar al campo correspondiente en
public/scripts/script.js

let api_key = "tu key";

en .env agregar las variables de la BD
PORT=El puerto usado en App.js
MONGODB_URI=mongodb://-Tu localhost:el puerto de tu base de datos-Esta cuando abris el mongoDB antes de conectarte-/nasaApp(nombre de la base de datos)


entonces esta listo para correr el proyecto
npm run start

