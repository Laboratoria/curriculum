# Modularización

## Intro

Analicemos un segundo la estructura de nuestra aplicación:

```text
├── .babelrc
├── index.html
├── main.js
├── package.json
├── page.js
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
│   │   ├── aside.js
│   │   ├── header.js
│   │   ├── main-section.js
│   │   └── page.js
│   ├── index.html
│   ├── main.js
│   └── styles.css
├── .babelrc
├── package.json
├── webpack.config.js
└── yarn.lock
```

### Ayuda

Configura dentro de `webpack` a la carpeta `src` como tu root

```javascript
const config = {
  context: resolve(__dirname, 'src'),

  // ... el resto de la configuracion
}
```
