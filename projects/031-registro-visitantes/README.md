# Registro de Visitantes

## Preámbulo

El registro de visitantes en una empresa en América Latina es un proceso tedioso
y manual. Lo común es que una persona esté en la recepción tomando nota - a
veces con papel y lápiz - de cada visitante. Por razones de seguridad,
usualmente piden a cada visitante dejar una identificación. Si vivimos en la era
digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal
si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de
pedir una identificación, tomamos una foto? ...

## Introducción

En este proyecto la empresa de coworking donde opera Laboratoria en tu ciudad ha
decidido contratarte a ti y a dos compañeras para reinventar su proceso de
registro de visitantes. Con la entrada de [WeWork](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwilrK_T5KjcAhWCj7MKHexzAEgYABAAGgJxbg&ohost=www.google.cl&cid=CAASE-RoAxXTp1Cd0ErxEHpPSGuF4Hk&sig=AOD64_38ykNPf0QRtI9n4CFtpQpth-MrNQ&q=&ved=0ahUKEwjswKvT5KjcAhVkU98KHUcYCeMQ0QwIJA&adurl=)
al mercado latinoamericano, tienen mucha más competencia y necesitan invertir en
tecnología para mejorar su servicio; el registro de visitantes es un primer
acercamiento. Te dan la referencia de [Envoy](https://envoy.com/) en EEUU (un
servicio que ofrece un sistema digital de registro de visitantes) y ustedes
tienen que desarrollar una versión mínima viable (ver anexo I abajo).

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que pongas en práctica todo lo
aprendido durante el common core, con foco en la calidad, trabajando en un
equipo multifuncional y presentando tu solución a una audiencia.

## Consideraciones generales

Para completar este proyecto deberás trabajar en un equipo de tres y seguir las
siguientes consideraciones:

### 1. Planificación y organización

#### Roles, squad multifuncional

Cada integrante del equipo debe asumir alguno de los siguientes "roles" (\*),
liderando las siguientes áreas de trabajo:

1. Diseñadora UX
   * Diseñar la experiencia de la aplicación (flujo, interacción, etc.).
   * Identificar, documentar y priorizar las historias de usuario.
   * Crear el diseño visual de la interfaz.
2. Desarrolladoras Front-end
   * Implementar la interfaz de usuario diseñada (HTML/CSS/JS).
   * Deben dividirse las funcionalidades entre las dos desarrolladoras.
   * Todas los desarrollos deben incluir pruebas unitarias.

(\*) Al no haber rol de Product Manager, las responsabilidades de gestión son
compartidas entre todas las integrantes.

Planificación inicial

Es muy importante que al dividirse/distribuir/repartir el trabajo, lo hagan
pensando de manera ágil y no en cascada. Es decir, si una de ustedes está
esperando a que otra termine "su parte" para empezar a trabajar, algo anda mal,
¡[eso se parece a la organización del trabajo industrial!](https://media.giphy.com/media/OQ872dEsRi8cU/source.gif).
Todas son responsables del producto final y todas pueden (y deben) colaborar en
el diseño, el desarrollo y la planificación.

TIPS:

* Recuerda a nuestras nuevas BFFs, [las historias de usuario](http://jmbeas.es/guias/historias-de-usuario/)
* Ten siempre en mente evitar el desperdicio. Por ejemplo: ¿de qué sirve que
  tengas el prototipo del 100% de un proyecto en Figma (alta definición) si
  solamente implementas el 50% del proyecto? El otro 50% del prototipo se podría
  considerar como desperdicio.
* Limitar el trabajo en progreso. Si son 3 personas, procuren no tener más de 3
  tareas a la vez en "doing".
* ¿Estás segura de que quieren seguir invirtiendo más minutos de tu vida (que no
  volverán) en discutir los colores del logotipo?
  [Aquí hay algo que te puede ayudar a decidir](https://play.google.com/store/apps/details?id=com.flip.war_daddy.flip_coin).

### 2. Detalles sobre la implementación

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6), HTML y CSS.
* Está permitido usar librerías o frameworks tanto de CSS como de JS, pero no es
  obligatorio. Elige bien las batallas que quieres luchar.
* En este proyecto, no contamos con un boilerplate, por lo que deberás definir
  la estructura de carpetas y archivos que consideres necesaria, puedes guiarte
  de los proyectos anteriores.
* Los tests y el setup necesario para ejecutarlos serán hechos enteramente por
  ti.
* Para armar las interfaces visuales utiliza como base alguna de estas guías de
  componentes:
  * [Guía Desktop 1](https://www.figma.com/file/F3aUqpHWOfZsEQifTPIleXo6/material-kit-free)
  * [Guía Desktop 2](https://www.figma.com/file/S39H0B1LOnaVICIUiApFTfoP/_Style-Guide---Desktop---Style-Guide)
  * [Guía Mobile 1](https://www.figma.com/file/00VTwmTNvLVaBLkxrMFbT8/Google-Material-Design)
  * [Guía Mobile 2](https://www.figma.com/file/O2Xraz3mraQHvevNsicMl91V/ejemplos-2)
* Guardar la data de los visitantes de forma remota usando [Firebase](https://firebase.google.com/).
* A nivel de arquitectura:
  * El uso de Firebase implica que debes trabajar bajo una arquitectura
    serverless.
  * Te sugerimos que desacoples el proyecto en componentes y manejo de estados
    para que trabajes de forma ordenada y facilite la implementación de tus
    tests. Revisa la [charla](https://www.youtube.com/watch?v=g_BxnUJTUSk) y
    el [blog post](https://medium.com/laboratoria-developers/arquitectura-de-interfaces-web-parte-1-a41053c2a1f2)
    de Lupo sobre este tema ;)

### 3. Tiempo

Tendrán 1 semana para trabajar en este proyecto. Este tiempo es un poco corto
para iterar y hacer las ceremonias que usualmente hacemos. Puedes elegir hacer
tus sprints de 2-3 días o simplemente correr un único sprint con "hitos" durante
la semana. Es decisión del equipo. Lo que sí les recomendamos es asegurar que
usan bien los dailys, esto les permitirá hacer "mini" iteraciones cada 24 horas.

## Entregables obligatorios

Los criterios mínimos de aceptación para considerar que has completado este
proyecto son:

### Diseño

1. Haber realizado y documentado (con fotos, videos, aprendizajes, etc.)  al
   menos 3 entrevistas con usuarios diferentes.
2. Haber probado de "cliente incógnito" el registro de visitas en WeWork y
   compararla con tu solución y con la referencia que te brindaron ([Envoy](https://envoy.com/)).
3. Entregar un prototipo clickeable de alta fidelidad hecho en [Figma](https://www.figma.com/)
   u otro editor gráfico como Illustrator, Photoshop, PowerPoint, Keynote, etc.
   linkeado con [Marvel](https://marvelapp.com/) / [Invision](https://www.invisionapp.com/).
4. Haber hecho y documentado (con fotos, videos, aprendizajes, lista de cambios
   realizados, etc.) sesiones de testing del prototipo con usuarios.

### Implementación

Tu producto final debe estar desplegado en la web y, como mínimo, debe:

1. Permitir al usuario visitante registrarse con sus datos personales,
   incluyendo su foto.
2. Permitir al usuario visitante seleccionar a la persona a quien viene a
   visitar.
3. Notificar a la persona a quien vienen a visitar. Para esto te recomendamos
   revisar:
   * Los servicios de [Sendgrid](https://sendgrid.com/)
   * El [API de Mandrill](https://mandrillapp.com/docs/) para mandar correos de
     forma automática
   * El [API de notificaciones de HTML 5](https://developer.mozilla.org/en-US/docs/Web/API/notification)
4. Permitir al usuario administrador visualizar la data de los visitantes,
   incluyendo la fecha y hora de registro de cada uno
5. Los tests unitarios deben cubrir un mínimo del 70% de statements, functions y
   lines, y un mínimo del 50% de branches.

### Presentación

Deberás hacer dos presentaciones ante un jurado que te dará feedback
inmediatamente. La primera será a mitad de semana para compartir tu avance y la
segunda será al final de la semana para compartir tu producto final.

Las reglas para las dos presentaciones son:

1. Tendrás 3 minutos de presentación, ni un segundo más.
2. Habrán 2 minutos para preguntas del jurado.
3. Te recomendamos que la mayoría del tiempo lo enfoque en demostrar cómo se
   utiliza tu producto, el cual debe estar desplegado en la web.
   * NO se permite presentar cosas en tu local ni videos previamente grabados.
   * NO inviertas tiempo presentándote, ni listando al equipo, ni dando una
     introducción que ya el jurado conoce. Como al hacer el producto, en la
     presentación también debes priorizar qué decir.
   * NO utilices slides de powerpoint, enfócate en presentar tu DEMO.
   * Durante el DEMO, enfócate en narrar y explicar el valor que tu producto le
     brinda al usuario.
   * Cuida tu lenguaje no verbal; recuerda mirar al público y tener un tono de
     voz adecuado para que toda la audiencia te pueda escuchar.
   * Idealmente debe presentar una sola integrante del equipo. Si deciden que
     presenta más de una persona, asegúrense de haber coordinado bien el flujo
     de la presentación.

## Hacker edition

Features/características extra sugeridas:

* Como el WiFi a veces es nuestro peor enemigo, ¿es posible que tu aplicación
  pueda, sin Internet, registrar los datos del visitante, guardar los datos
  localmente y cuando tenga Internet mandarlos a la base de datos? Si te animas
  a hacer esto dale una revisada a los siguientes recursos:
  * [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
  * [Offline first manifesto](http://offlinefirst.org/)
* También sería ideal poder registrar la firma del visitante en el registro.
* Sería genial también permitir generar un "pase" para el visitante, así
  fácilmente a la vista se sabe quién está de visita.
* Al administrador le interesa tener un dashboard de "analíticas" de los
  visitantes: # de visitantes por día, horarios frecuentes de visita, a quién
  vienen a visitar, etc.

## Anexo I: Construyendo un MVP

Una modelo mental común para representar el desarrollo de productos es
visualizarlo como una pirámide: el producto que construyes consiste en una serie
de funcionalidades que le dan beneficios al usuario, los cuales le generan
valor. El detalles está en que no todas las funcionalidades que creas le agregan
la misma cantidad de valor al usuario. Es más, muchas funcionalidades le agregan
cero valor. Son cosas que creemos que generan valor, pero que no terminan
haciéndolo (recuerda que vivimos en un mundo incierto, donde no podemos
predecir). Por lo tanto, al definir tu producto mínimo viable (MVP), tu misión
es crear las mínimas funcionalidades que maximicen el valor que entregas. Menos
es más ;)

![Construyendo un MVP](https://lh5.googleusercontent.com/Y0pAAgnYJcYs0DCK2vo28H0709vIJ4OvMkGs5P1xCS4_6k3XQS0jqOA3KQLKsFX1SrCcOqab9jMwuTCRZVATELmlhFr5VihRIrftA5Fj8q0PFQ8JDoktKfHTrZX5CG4ASzv7vyxL)

## Anexo II: Envío de emails

Para poder hacer envíos de email necesitas un servicio. Aquí te dejamos un
acceso a una cuenta de [Mandrill](https://mandrillapp.com/) de Laboratoria para
que la puedas utilizar en tu proyecto.

```text
Host: smtp.mandrillapp.com
Port: 587
SMTP Username: Laboratoria.La
SMTP Password: Te lo daremos antes de comenzar
```
