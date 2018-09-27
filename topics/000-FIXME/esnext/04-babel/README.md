# Babel

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

En este curso usaremos muchos features de ES6, y para permitir que nuestro
código funcione en navegadores que solo implementan ES5, podemos usar un
transpilador, como `babel` que convierta nuestro código en ES5 de forma
automática.

Babel incluye una herramienta llamada `babel-cli` que podemos instalar así:

```sh
npm install --global babel-cli
```

Una vez hayamos instalado `babel-cli` globalmente, podemos ejecutar el comando
`babel` en la línea de comando para transpilar nuestro código. Para ello tendrás
también que instalar un preset (por ejemplo `babel-preset-env`) y crear un
archivo `.babelrc` con la configuración necesaria.

Para más detalles sobre `babel` y `babel-cli` ver la
[documentación oficial](https://babeljs.io).
