# Retos

- Tipo: `práctica`
- Formato: `self-paced`
- Duración: `20h`

## Objetivos

- A continuación te presentamos los retos que debes completar para poner tus
  conocimientos a prueba. Recuerda que con estos ejercicios debes aplicar
  manejo del DOM  y eventos con Jquery.

***

### 1. F O O D M A P

Crea una web-app que a través de un input pueda filtrar los restaurantes
que se encuentran cerca de ti *(Tú decides la estructura que tendrán tus datos,
puedes crear una lista de restaurantes en un arreglo, en un objeto, de manera
individual. El diseño es totalmente libre)*.

#### Flujo de la aplicación.

Vista splash con duración de 2 a 5 segundos que redirecciona a tu vista
principal.
![Splash](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/splash.jpg?raw=true)

En la vista principal se muestran todos los restaurantes "cerca de ti" junto
con el input para filtrar tu elección *(Los criterios de filtrado son decisión
tuya, puede ser por tipo de comida, costos, orden alfabético, etc.)*.
![vista principal](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/2.jpg?raw=true)

Ya que se hizo la elección del filtro deben mostrarse únicamente aquellos
restaurantes que cumplan con la condición.
![vista filtrado](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/3.jpg?raw=true)

Al seleccionar alguno de los restaurantes, deberá mostrarse la información de
este a través de un modal.
![modal imagen](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/5.jpg?raw=true)

Una vez cerrado el modal debe volver a la vista principal.
![ultima vista](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/6.jpg?raw=true)

### 2. L Y F T

Desarrolla una web-app que replique el sitio de **Lyft**, en este reto deberás
cumplir los pasos necesarios para que tu usuario pueda registrarse.

#### Flujo de la aplicación.

Vista splash con duración de 2 a 5 segundos que redirecciona a
tu vista de inicio. La vista de inicio cuenta con dos botones, en esta ocasión
seguiremos el flujo de **SING UP**.
![inicio](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ff67ceb625957cd36d4c16ba6e0408c727bd0682/04-social-network/02-jquery/08-code-challenges/lyft/splash.png)

En la siguiente vista tenemos un formulario donde nuestro usuario puede
escoger el país y debe ingresar su número de teléfono.
El botón de **NEXT** debe estar deshabilitado hasta que se ingrese
un número de 10 dígitos.
![registro](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/lyft/ingreso-numero.jpg?raw=true)

Una vez ingresado el número de teléfono se habilita el botón y al dar *click*
debe enviar una alerta con un código generado aleatoriamente (LAB-000) y
redireccionar a la siguiente vista.
![codigo](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/lyft/generacion-codigo.jpg?raw=true)

En esta vista se debe ingresar el código dado anteriormente y una
vez hecho esto se habilita el botón que redirecciona a nuestro usuario a la
vista donde ingresa sus datos. *(Puede tener la opción de enviar otro código.)*
![verificacion](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/lyft/verificacion-numero.jpg?raw=true)

Para ingresar sus datos necesitamos un formulario que le pida su nombre,
apellido y correo electrónico. Deberá también tener un checkbox para que se
acepten los términos y condiciones del servicio.
![datos](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ff67ceb625957cd36d4c16ba6e0408c727bd0682/04-social-network/02-jquery/08-code-challenges/lyft/ingreso-datos.png)

Ya que se ha realizado lo anterior, sólo se deberá mostrar una vista al usuario
que le indique que ha concluido con el registro exitosamente.
![final](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ff67ceb625957cd36d4c16ba6e0408c727bd0682/04-social-network/02-jquery/08-code-challenges/lyft/final.png)

**NOTA:** Todas nuestras vistas deben de contar con una manera de regresar a
la vista anterior
