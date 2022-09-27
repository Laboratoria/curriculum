# Formularios

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `1h`

***

## Objetivos de Aprendizaje

En esta lectura aprenderemos:

- Qué son los formularios en HTML
- Aprenderás los principales elementos de un formulario
- Conocerás los atributos de los elementos de un formulario

## Veamos qué son los formularios

Los formularios son una forma sencilla de solicitar información al usuario en
una página web, permitiendo que el usuario ingrese información. Los formularios
son uno de los puntos principales de interacción entre un usuario y un sitio web
o aplicación.

## Guía de conceptos clave

Revisemos la documentación del MDN sobre
[formularios](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/form),
además tenemos la Zona de Aprendizaje de MDN donde podrás aprender a más
detalle sobre [los forms](https://developer.mozilla.org/es/docs/Learn/Forms).

Ahora que conocemos los elementos para realizar un formulario, crearemos uno.
Manos a la obra!!

1. Crea un archivo con el nombre `index.html` y agrega la etiqueta `form` para
   que empieces con tu formulario.

2. Luego agregarás un `input` donde el usuario ingresará su correo electrónico,
   este campo será obligatorio.
   > Recuerda colocar que tipo de `input` es y los atributos necesarios (no te
   > olvides usar el atributo `required` para considerar un input obligatorio)

   ```html
   <form>
     <input
       type="email"
       id="email-example"
       placeholder="Email"
       name="email-example"
       required
     />
   </form>
   ```

3. También agrega la etiqueta `label` para asociar el `input` que acabas de
   crear.

   ```html
   <form>
     <label for="email-example">Correo electrónico</label>
     <input
       type="email"
       id="email-example"
       placeholder="Email"
       name="email-example"
       required
     />
   </form>
   ```

4. Realiza los mismos pasos para un `input` de tipo contraseña.

   ```html
   <form>
     <label for="password-example">Password</label>
     <input
       type="password"
       id="password-example"
       placeholder="Password"
       name="password-example"
       required
     />
   </form>
   ```

5. Ahora, crearás un `select` para que el usuario pueda elegir un valor de la
   lista desplegable.

   ```html
   <select name="select-example">
     <option value="value1">Primera opción</option>
     <option value="value2" selected>Segunda opción</option>
     <option value="value3">Tercera opción</option>
   </select>
   ```

6. También agrega un radiobutton donde el usuario solo puede escoger una
   opción entre las distintas opciones relacionadas que se le presentan.

   ```html
   <label>
     <input type="radio" name="gender" value="female"> Mujer
   </label>
   <label>
     <input type="radio" name="gender" value="male"> Hombre
   </label>
   <label>
     <input type="radio" name="gender" value="no-gender"> No deseo brindar información
   </label>
   ```

7. Y adicionarás un checkbox para los términos y condiciones.

   ```html
   <label>
     <input type="checkbox" name="conditions" value="accept-conditions" checked />
     Acepto los términos y condiciones
   </label>
   ```

8. Por último pondrás un botón de enviar.

   ```html
   <button type="submit">Enviar</button>
   ```

El resultado de este HTML será:

![ejemplo de formularios](https://user-images.githubusercontent.com/25906896/39826718-2daeff3e-537b-11e8-8d60-bba02479bf16.png)

Ahora está en tus manos colocarle los estilos que desees en tu `css`

Ahora, si deseas aprender como trabajamos con los forms desde javascript podemos
ver el [capítulo 7 de javascript de librosweb](http://librosweb.es/libro/javascript/capitulo_7.html).
Además tenemos la documentación del capítulo 18 de [Eloquent JavaScript](https://eloquentjavascript.net/18_http.html),
de Marijn Haverbeke, 2014.
