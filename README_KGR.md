# WorldTour KGR BBDD

Proyecto 6 para ROCKTHECODE, donde conectamos a una base de datos creada desde Atlas Mongo, y creamos dos colecciones, Equipos del worldTour de ciclismo de la UCI, y dentro de estos colocamos a los mejores ciclistas del mundo.

## Comencemos 🚀

En este link esta el repositorio de gitHUb del proyecto._

[Repositorio del proyecto](https://github.com/Kiger22/WorldTourBBDD)


### Pre-requisitos 📋

Los datos de la BBDD están en el archivo .env, asi como los datos de los ciclistas y los equipos WT están en la carpeta data dentro de SRC.
```

### Instalación 🔧

El proyecto esta realizado utilizando NODE.js por lo tanto solo hay que intalar las despendencias.
para el proyecto se han utilizado las librerias de Express, mongoose y dotenv.


>npm install

```


_Para probar que la base de datos y sus controladores funcionan correctamente hemos utilizado INSOMNIA_

## Ejecutando las pruebas ⚙️

_Donde hemos probado las rutas correspondientes a cada controlador_

_Rutas para ciclistas_

```
http://localhost:3000/api/v1/cyclist
```
Para ver el listado de ciclistas con el método GET 

```
http://localhost:3000/api/v1/cyclist/"ID del ciclista"
```

Para ver el listado de un  ciclistas en concreto con el método GET 

_Lo mo para la nacionalidad, nombre, o ranking._

_Para los equipos utilizaremos los mismo controladores y las rutas de misma manera con la diferencia a en lugar de /cyclist utilizaremos /teams_

```
http://localhost:3000/api/v1/teams
```

### Y las pruebas de estilo de codificación ⌨️

_Las pruebas también se hicieron con el método post para agregar un elemento tanto en ciclistas como en equipos_

```
http://localhost:3000/api/v1/cyclist
```
_También utilizando el ID del elemento podemos actualizar sus parámetros( a traves del formato JSON), como eliminar este de la base de datos_

```
http://localhost:3000/api/v1/cyclist/"ID del elemento"
```

## Construido con 🛠️

_Se utilizaron para este proyecto JavaScript, NODE.js y las librerias de Express, Nodemon, Dotenv y Mongoose._

* [Node.js](https://nodejs.org/en) - El framework web usado
* [Express](https://expressjs.com/es/) - Manejador de BBDD
* [MongoDB](https://www.mongodb.com/es) -Plataforma de BBDD



## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/Kiger22/WorldTourBBDD).

## Autores ✒️

_Este proyecto Esta realizado por Guillermo Mendoza_

* **Kiger22** - *Proyecto* - [LinkedIn](www.linkedin.com/in/guillermo-mendoza-costa-46a87744)


También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Primer proyecto de BackEnd 📢 
* Gracias por las contribuciones, feedback y correcciones 🤓.


---
⌨️ con ❤️ por [kiger22](https://github.com/Kiger22) 😊
