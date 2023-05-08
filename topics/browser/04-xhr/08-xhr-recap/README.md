---
type: read
duration: 30min
---

# XHR Recap

## Objetivos de Aprendizaje

- Reflexionar lo aprendido sobre XHR

## Como usamos XHR

Hay una serie de pasos que debemos seguir para enviar una solicitud HTTP
de forma asíncrona con JavaScript.

### Para enviar una petición

- Creamos un objeto XHR con la función del constructor XMLHttpRequest

- Utilizamos el método .open() y configuramos el método HTTP y la URL
  del recurso que se va a buscar

- Establecemos la propiedad .onload a nuestro objeto y a esto le asignamos
  una función que se ejecutará en una búsqueda exitosa

- Establecer la propiedad .onerror a nuestro objeto y a esto le asignamos una
  función que se ejecutará cuando se produzca un error

- Usamos el método .send() para que envíe la solicitud

### Para usar la respuesta

- Usamos la propiedad .responseText, que contiene el texto de la respuesta de
  la solicitud asincrónica

- Podemos usarla tal cual nos es devuelta o en caso de ser devuelta como un JSON
  la convertimos en Objeto JavaScript con JSON.parse()

## Qué sigue?

Probablemente te preguntes si realmente es necesario escribir todos esos pasos
para conseguir nuestras peticiones asíncronas, la respuesta es **Sí** pero lo
que no es necesario es escribir todas esas líneas de código. Si hacemos uso de
alguna biblioteca como jQuery, esta puede hacer la petición por nosotros y ya
sabemos que cada que usamos una biblioteca se ocupa menos código y lo hacemos
un poco más eficiente.
