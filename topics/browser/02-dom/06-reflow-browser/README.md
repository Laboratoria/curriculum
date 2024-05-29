---
type: read
duration: 10min
---

# Redibujo del navegador

Con la llegada de las aplicaciones ricas de internet (RIA: Rich Internet
Applications), nuestras páginas requieren mejor experiencia de usuario, lo que
lleva a un mayor manejo del DOM con largas hojas de código `javascript`,
animaciones, etc. Pero esto lleva a un problema que no siempre se prevé antes
de desarrollar y de pronto todo empieza a funcionar lento o se come la memoria
de la maquina del cliente.

## Es útil entender cuándo se activan los re-flow

1.- Adición, eliminación o cambio de elementos DOM visibles.

> La primera es obvia, el uso de JavaScript para cambiar el DOM provocará un
re-flow.

2.- Adición, eliminación o cambio de estilos CSS.

> Del mismo modo, aplicar directamente estilos CSS o cambiar la clase puede
> alterar el diseño. Cambiar el ancho de un elemento puede afectar a todos los
> elementos de la misma rama DOM y a los que la rodean.

3.- Animaciones y transiciones CSS3.

>Cada marco de la animación causará un reflujo.

4.- Uso de `offsetWidth` y `offsetHeight`.

> Curiosamente, leer la propiedad `offsetWidth` y `offsetHeight` de un elemento
> puede desencadenar un reflow inicial para calcular las cifras.

5.- Acciones de usuario

> Finalmente, el usuario puede activar los re-flow activando un efecto `hover`,
> ingresando texto en un campo, cambiando el tamaño de la ventana, cambiando las
> dimensiones de fuente, cambiando hojas de estilo o fuentes.

El caudal de flujo de procesamiento de re-flow variará. Algunos navegadores
son mejores que otros en ciertas operaciones. Algunos elementos generan más
re-flow que otros. Afortunadamente, hay varios consejos generales que puede
utilizar para [mejorar el rendimiento](https://developers.google.com/speed/docs/insights/browser-reflow).
