# WorldTour KGR BBDD 

Proyecto 6 para ROCKTHECODE, donde conectamos a una base de datos creada desde Atlas Mongo, y creamos dos colecciones, Equipos del worldTour de ciclismo de la UCI, y dentro de estos colocamos a los mejores ciclistas del mundo.

## Comencemos 🚀

Aquí esta el repositorio del proyecto.
[Repositorio del proyecto](https://github.com/Kiger22/WorldTourBBDD)


### Pre-requisitos 📋

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) versión 14 o superior
- [npm](https://www.npmjs.com/) 
- Base de datos [MongoDB](https://www.mongodb.com/es)


### Instalación 🔧

El proyecto esta realizado utilizando NODE.js por lo tanto solo hay que intalar las despendencias.
para el proyecto se han utilizado las librerias de Express, mongoose y dotenv.
```
>npm install
```

_Para probar que la base de datos y sus controladores funcionan correctamente hemos utilizado [INSOMNIA](https://insomnia.rest/)_

_En el la raiz del proyecto hay un Archivo **.env** con las variables necesarias para conectarse a la base de datos._

## Ejecutando las pruebas ⚙️

### Endpoints

**_Rutas para ciclistas_**

1.Crear Ciclistas (método POST /)

```
http://localhost:3000/api/v1/cyclist
```
crear a traves de modelo JSON, ejemplo:
```
{
  "nombre": "Enric Mas",
  "nacionalidad": "España",
  "especialidad": "Escalador",
  "puestoRankingUCI": 10,
  "victoriasGrandesVueltas": {
    "tourDeFrancia": 0,
    "vueltaEspaña": 0,
    "giroDeItalia": 0
  },
  "victoriasMonumentos": 0,
  "otrasVictorias": {
    "otrosTours": 2
  },
  "imagen": "https://example.com/enric-mas.jpg"
}
```

2.Obtener Ciclistas (método GET /)
```
http://localhost:3000/api/v1/cyclist
```
3.Obtener un ciclista por su ID.

```
http://localhost:3000/api/v1/cyclist/id/"ID del ciclista"
```

_Lo mo para la nacionalidad, nombre, o ranking._


```
http://localhost:3000/api/v1/cyclist/nacionalidad/name/"nombre"
http://localhost:3000/api/v1/cyclist/nacionalidad/"nacionalidad"
http://localhost:3000/api/v1/cyclist/ranking/"puestoRankingUCI"
```
_Para actualizar un elemento con el método PUT_

```
http://localhost:3000/api/v1/cyclist/"ID del ciclista"
```

_Y finalmente para eliminar el elemento, con el método DELETE_
```
http://localhost:3000/api/v1/cyclist/"ID del ciclista"
```

### Y las pruebas de estilo de codificación ⌨️

_Los enpoints  para los Equipos tienes las siguinete rutas y los mismo metodos que para los Ciclistas_


http://localhost:3000/api/v1/teams,  _getTeam_
http://localhost:3000/api/v1/teams/**"id"**,  _getTeamById_ http://localhost:3000/api/v1/teams/name/**"nombre"**,  _getTeamByName_
http://localhost:3000/api/v1/team/country/**"país"**, _getTeamByLocation_
http://localhost:3000/api/v1/team/ranking/**"rankingUCI"**, _getTeamByRanking_;
http://localhost:3000/api/v1/team, _postTeam_;
http://localhost:3000/api/v1/team/**"id"**, _putTeam_;
http://localhost:3000/api/v1/team/**"id"**, _deleteTeam;_


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
⌨️ por [kiger22](https://github.com/Kiger22) 😊
