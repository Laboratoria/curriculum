### **HITO 5:** - Buscando dentro de subcarpetas

Misma funcionalidad que el HITO 3 pero ahora la usuaria será capaz de pasar una
carpeta como ruta con más carpetas dentro además de posibles archivos.

La función `mdLinks(path, validate)` tendrá que recorrer todas las carpetas
existentes en la ruta y buscar los links en todos los archivos markdown que
encuentre.

Para resolver este hito te recomendacón leer acerca del concepto de
recursividad y ver algunos ejemplos (ojo con concepto de casos base)

¿Por qué utilizaremos la recursividad aquí?

La recursividad se utiliza en este caso porque no conocemos de antemano la
cantidad de carpetas y archivos que tendremos que recorrer antes de finalizar.
Cuando recibimos una ruta de carpeta, no sabemos si dentro de ella hay más
carpetas que también debemos abrir y leer, y estas a su vez pueden contener más
carpetas. Este tipo de problema se resuelve de manera eficiente utilizando un
proceso recursivo.

Entre los [recursos](#hito-5) de este proyecto hay una página
que te ayudará.

⚠️ **Test unitarios.** Antes de dar el proyecto por terminado, recuerda hacer
los tests del hito actual.

### [👈Todos los hitos](../README.md#6-hitos)