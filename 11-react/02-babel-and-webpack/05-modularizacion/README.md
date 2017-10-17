# Modularización

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Intro

Analicemos un segundo la estructura de nuestra aplicación:

```text
├── .babelrc
├── index.html
├── index.js
├── package.json
├── Page.js
├── styles.css
├── webpack.config.js
└── yarn.lock
```

¿No hay algo que te hace ruido? ¿No te parece algo desordenado que los archivos
de configuración y el código fuente, estén todos revueltos?

## Ejercicio

Modifica tu aplicación para que quede con la siguiente estructura:

```text
├── src
│   ├── lib
│   │   └──components
│   │      ├── Aside.js
│   │      ├── Header.js
│   │      ├── MainSection.js
│   │      └── Page.js
│   ├── index.html
│   ├── index.js
│   └── styles.css
├── .babelrc
├── package.json
├── webpack.config.js
└── yarn.lock
```

### Ayuda

Configura dentro de `webpack` a la carpeta `src` como tu root

```js
const config = {
  context: resolve(__dirname, 'src'),

  // ... el resto de la configuracion
}
```
