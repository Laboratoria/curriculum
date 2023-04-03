---
type: read
duration: 60min
---

# Bootstrap

## Objetivos de Aprendizaje

- Conocer y entender qué es Bootstrap.

## ¿Qué es Bootstrap?

Bootstrap es un increíble framework que hace que el desarrollo web front-end sea
más rápido y más fácil.

Inicialmente fue creado como una solución interna para Twitter y posteriormente
fue liberado al público en agosto del 2011 como un proyecto Open Source en
GitHub.

![Bootstrap](https://cdn-images-1.medium.com/max/800/1*aJ_JLvfVyiQj5iYryIulhw.jpeg)

Está hecho para que pueda ser utilizado por gente de todos los niveles, los
dispositivos de todas las formas y para proyectos de todos los tamaños.

Bootstrap tiene dos versiones para trabajar actualmente (versiones 3 y 4). La
más popular es la versión 3 y es la que aprenderemos. Podemos encontrar
Bootstrap [aquí](https://getbootstrap.com/docs/3.3/)

Podemos usar Bootstrap en nuestros proyectos de diferentes maneras, ya sea
agregando el código CDN a nuestro HTML para usarlo de manera remota o
descargando Bootstrap de su página web.

![Bootstrap](https://raw.githubusercontent.com/Laboratoria/curricula-js/c6232fc0a639688fc216c72d17e325a588abae9d/04-social-network/01-css-frameworks/02-bootstrap/bcdn.png)

Si utilizamos las opción de descargar Bootstrap, debemos descomprimir y agregar
los archivos del framework al proyecto. Además, debemos *linkear* todo en el
HTML para que funcione.

![Bootstrap](https://cdn-images-1.medium.com/max/800/0*NuuR2bjpZck1wC6g.)

Hablando de CDN, necesitamos entender: __¿Qué es CDN?__

Imagina que quieres usar el CSS de Bootstrap o de alguna otra librería.
Podríamos simplemente descargar el archivo .css o .js y agregarlo a nuestro
HTML. Pero, ¿que pasa si este archivo __NO__ esta en nuestra computadora si no
en algún lugar de internet?

Cuando tenemos el archivo en algún lugar de internet, en realidad está __en otra
computadora__ alrededor del mundo.

¿Que pasará si esta computadora esta al otro lado del mundo? ¿En China? ¿Korea?

¿Crees que la distancia en nuestra computadora (que va a usar el archivo)
y la computadora que tiene el archivo, afecte la carga de la página?

__Si__, lo afecta bastante.

Esto es por que conectarse a una computadora al otro lado del mundo es
 mas tardado que conectarse a la computadora que esta al lado de
 nosotros.

CDN significa __Content Delivery Network__ (Red de distribución de contenido).

Imaginemos que la computadora que tiene el archivo de bootstrap.css está
originalmente en China.

Usando CDN ya no te conectas a China.

Te conectas a algún lugar mas cercano. Como Estados Unidos.

Analiza la siguiente imagen:

![cdn-example](http://ba-devlab.com/wp-content/uploads/2016/04/cdn.png)

Si estas en Africa, no te conectas a Europa. __Te conectas a Africa.__

Si estas en Australia, no te conectas a Europa. __Te conectas a Australia.__

Esto hace que los archivos __tarden menos__ en cargar (y tu página también).

Sigamos con Bootstrap.

Ahora sí, ya que esta descargado en nuestro proyecto podemos empezar a probar un
poco de todo lo que nos ofrece:

Una grid, íconos, botones, barras de navegación, etc.

![Bootstrap](http://www.boss-development.biz/sites/default/files/bootstrap-02.png)

La grid de Bootstrap está compuesta de 12 columnas y cuenta con los elementos
típicos de un grid system (como rows y columns). También posee dos tipos de
containers (container-fluid y container) y columnas para distintos tamaños de
pantalla.

| Clase | Dispositivo | Medida |
| :-------: | :------: | :-----: |
| col-xs-   | móvil    | < 768 px  |
| col-sm-   | tablets  | >= 768 px|
| col-md-   | desktop  | >= 992 px |
| col-lg-   | Desktop más grande| >= 1200 px |

Además de la grid y lo mencionado antes, Bootstrap cuenta con muchos componentes
que podemos reutilizar las veces que sean necesarias.

### ¿Cómo hacemos uso de este gran poder?

Para utilizar lo que ya nos ofrece nuestro framework, solo necesitamos ir a su
página, buscar el componente que queremos usar y *copiar y pegar* en nuestro
HTML el código que ahí nos viene.

![Bootstrap-btn](https://raw.githubusercontent.com/Laboratoria/curricula-js/f659ee55eeb322341c314d7d080bb22468e9a576/04-social-network/01-css-frameworks/02-bootstrap/btn-example.PNG)

Y así de fácil y maravilloso ya tenemos nuestros botones.

Si queremos saber un poco más sobre Bootstrap y cómo funciona [aquí](https://www.youtube.com/playlist?list=PLhSj3UTs2_yWTKvu1Aq3xUhzIJNBZ3MFW)
hay una serie de videos pero siempre es más divertido probarlo nosotras mismas.
