# Principios de diseño y tipos de bots

* Tipo: `seminario`
* Formato: `guiado`
* Duración: `30min`

## Objetivos del seminario

* Hacer un resumen de lo que vamos a aprender en esta unidad
* Aclarar la _hoja de ruta_ de la unidad en el contexto del curso
* Preguntas y conceptos clave de esta unidad

***

## ¿Qué es un Bot y porque implementarlo en Azure?

Los bots son sistemas que permiten a los usuarios interactuar con aplicaciones o
servicios de la misma forma que lo harían si estuviera hablando con otra
persona. Esto permite llevar a cabo acciones como encargar comida o pedir un
taxi de manera cómoda y natural. Los bots no solo pueden interactuar con las
personas, sino que también pueden comunicarse entre ellos para llevar a cabo
tareas.

Podemos resumir que un bot es una aplicación que realizá tareas automatizadas,
evitándonos trabajos repetitivos y Azure nos puede apoyar en mantener nuestro
bot siempre activo.

## Tipos de Bot

* Crawlers
* Bots Informativos
* Chat Bots (Bots conversacionales)
* Bots Transaccionales
* Hacker bots
* Spam bots
* Game bots
* Scraper bots

En este taller veremos Chat Bots conectados a Facebook Messenger o Web Chat.

## ¿Qué utilidades le podemos dar a los bots?

Los usos más habituales de los bots son:

* Automatización de pedidos
* Solicitar reservas en restaurantes
* Atención al cliente
* Solicitud de asistencia médica

Las utilidades son infinitas según nuestras necesidades, podemos implementar
bots para automatizar montones de cosas. Como curiosidad, [acá pueden ver un
caso curiosioso llevando al extremo la automatización](https://computerhoy.com/noticias/apps/este-programador-automatiza-asi-su-trabajo-base-scripts-37481)

## Princios de Diseño

**Microsoft Bot Framework** nos permitirá crear experiencias bot convincentes
que resuelven una variedad de problemas de negocios. Al aprender los conceptos
del marco de trabajo de Bot, podremos diseñar un bot que se alinee con las
mejores prácticas y capitalice las lecciones aprendidas hasta ahora en este
campo relativamente nuevo.

## Diseñando un bot

Si creamos un bot, asumimos que los usuarios lo usarán y preferirán la
experiencia de nuestro bot frente a experiencias alternativas como aplicaciones,
sitios web, llamadas telefónicas y otros medios que abordan las necesidades de
automatizar ciertas actividades. En otras palabras, tu bot compite por el tiempo
de los usuarios contra cosas como aplicaciones y sitios web. Entonces, ¿cómo
puede maximizar las probabilidades de que tu bot logre su objetivo final de
atraer y mantener a los usuarios? Es simplemente una cuestión de priorizar los
factores correctos al diseñar tu bot.

## Factores que no garantizan el éxito de un bot

Cuando diseñes un bot, ten en cuenta que ninguno de los siguientes factores
necesariamente garantiza el éxito de un bot:

**Qué tan "inteligente" es el bot:** en la mayoría de los casos, es poco
probable que hacer que tu bot sea más inteligente te garantizará usuarios
felices y la adopción de tu plataforma. En realidad, muchos bots tienen poco
aprendizaje avanzado de máquina o capacidades de lenguaje natural. Por supuesto,
un robot puede incluir esas capacidades si son necesarias para resolver los
problemas para los que está diseñado. Sin embargo, no debes asumir ninguna
correlación entre la inteligencia de un robot y la adopción por parte del
usuario del bot.

**La cantidad de lenguaje natural que admite el bot:** tu bot puede ser
excelente en las conversaciones. Puede tener un amplio vocabulario e incluso
puede hacer grandes bromas. Pero a menos que aborde los problemas que sus
usuarios deben resolver, estas capacidades pueden contribuir muy poco a que su
bot sea exitoso. De hecho, algunos bots no tienen capacidad de conversación en
absoluto. Y en muchos casos, eso está perfectamente bien.

**Voz:** No siempre es el caso que habilitar los bots para hablar dará lugar a
grandes experiencias de usuario. A menudo, forzar a los usuarios a usar la voz
puede resultar en una experiencia de usuario frustrante. Al diseñar su bot,
siempre considere si la voz es el canal apropiado para el problema dado. ¿Va a
haber un ambiente ruidoso? ¿La voz transmitirá la información que necesita ser
compartida con el usuario?

## Factores que sí influyen en el éxito de un bot

La mayoría de las aplicaciones o sitios web exitosos tienen al menos una cosa en
común: una gran experiencia de usuario. Los Bots no son diferentes en ese
sentido. Por lo tanto, garantizar una gran experiencia de usuario debería ser su
prioridad número uno al diseñar un bot. Algunas consideraciones clave incluyen:

* ¿El bot soluciona fácilmente el problema del usuario con la cantidad mínima de
  pasos?
* ¿El bot soluciona el problema del usuario mejor / más fácil / más rápido que
  cualquiera de las experiencias alternativas?
* ¿Se ejecuta el bot en los dispositivos y plataformas que le interesan al
  usuario?
* ¿Es el bot detectable? ¿Saben los usuarios, naturalmente, qué hacer cuando lo
  usan?

## Las primeras impresiones importan

La primera interacción entre el usuario y el bot es crítica para la experiencia
del usuario. Al diseñar su bot, ten en cuenta que hay más en ese primer mensaje
que simplemente decir "hola". Cuando construyes una aplicación, diseñas la
primera pantalla para proporcionar indicaciones de navegación importantes. Los
usuarios deben entender intuitivamente cosas tales como dónde se encuentra el
menú y cómo funciona, dónde buscar ayuda, cuál es la política de privacidad,
etc. Cuando diseñas un bot, la primera interacción del usuario con el bot
debería proporcionar el mismo tipo de información. En otras palabras, solo decir
"hola" no será suficiente.

## Diseñar y controlar el flujo de conversación

En una aplicación tradicional, la interfaz de usuario (UI) es una serie de
pantallas. Una sola aplicación o sitio web puede usar una o más pantallas según
sea necesario para intercambiar información con el usuario. La mayoría de las
aplicaciones comienzan con una pantalla principal donde los usuarios
inicialmente aterrizan y proporcionan navegación que conduce a otras pantallas
para diversas funciones, como iniciar un nuevo pedido, explorar productos o
buscar ayuda.

Al igual que las aplicaciones y los sitios web, los bots tienen una IU, pero
está formada por cuadros de diálogo, en lugar de pantallas. Los cuadros de
diálogo permiten al desarrollador del bot separar lógicamente varias áreas de la
funcionalidad del bot y guiar el flujo conversacional. Por ejemplo, puede
diseñar un diálogo para contener la lógica que ayuda al usuario a buscar
productos y un cuadro de diálogo separado para contener la lógica que ayuda al
usuario a crear un nuevo pedido.

## Diálogos, stacks y humanos

Puede ser tentador suponer que los usuarios navegarán a través de los diálogos,
creando una pila de diálogo, y en algún momento volverán a la dirección en la
que vinieron, desapilando los diálogos uno por uno de una manera limpia y
ordenada. Por ejemplo, el usuario iniciará en el cuadro de diálogo raíz,
invocará el nuevo cuadro de diálogo de pedido desde allí y luego invocará el
cuadro de diálogo de búsqueda del producto. Luego, el usuario seleccionará un
producto y lo confirmará, saldrá del cuadro de diálogo de búsqueda del producto,
completará el pedido, saldrá del nuevo cuadro de diálogo de pedido y regresará
al cuadro de diálogo raíz.

Aunque sería genial si los usuarios siempre viajaran por una ruta lineal y
lógica, esto rara vez ocurre. Los humanos no se comunican en "pilas". Tienden a
cambiar sus mentes con frecuencia. Considere el siguiente ejemplo:

Mientras que tu bot puede haber construido lógicamente una pila de cuadros de
diálogo, el usuario puede decidir hacer algo completamente diferente o hacer una
pregunta que puede no estar relacionada con el tema actual. En el ejemplo, el
usuario hace una pregunta en lugar de proporcionar la respuesta sí / no que
espera el diálogo. ¿Cómo debería responder tu diálogo?

* Insiste en que el usuario responda la pregunta primero.
* Haz caso omiso de todo lo que el usuario haya hecho anteriormente, restablezca
  toda la pila de diálogo y comience desde el principio intentando responder la
  pregunta del usuario.
* Intente responder a la pregunta del usuario y luego regrese a esa pregunta
  sí / no y trate de continuar desde allí.

## Diseño de navegación

Los usuarios pueden navegar por sitios web utilizando rutas de navegación,
aplicaciones que usan menús y navegadores web usando botones como avanzar y
retroceder. Sin embargo, ninguna de estas técnicas de navegación bien
establecidas aborda completamente los requisitos de navegación dentro de un bot.
Como se vimos anteriormente, los usuarios a menudo interactúan con los bots de
forma no lineal, lo que dificulta el diseño de la navegación bot que brinda una
excelente experiencia de usuario. Considera los siguientes dilemas:

* ¿Cómo se asegura de que un usuario no se pierda en una conversación con un
  robot?
* ¿Puede un usuario navegar "atrás" en una conversación con un bot?
* ¿Cómo navega el usuario hacia el "menú principal" durante una conversación con
  un bot?
* ¿Cómo un usuario "cancela" una operación durante una conversación con un bot?

Los detalles del diseño de navegación de su bot dependerán en gran medida de las
funciones y funcionalidades que admita su bot. Sin embargo, independientemente
del tipo de bot que esté desarrollando, querrá evitar las trampas comunes de las
interfaces conversacionales mal diseñadas.

## Diseña la experiencia del usuario

Los bots generalmente usan una combinación de controles de usuario enriquecidos,
texto y lenguaje natural, y voz para intercambiar información con los usuarios.

* Controles de usuario ricos

Los controles de usuario enriquecidos son controles de interfaz de usuario
comunes, como botones, imágenes, carruseles y menús que el robot presenta al
usuario y con los que el usuario interactúa para comunicar la elección y la
intención. Un bot puede usar una colección de controles de interfaz de usuario
para imitar una aplicación o incluso puede ejecutar incrustado dentro de una
aplicación. Cuando un bot está incrustado dentro de una aplicación o sitio web,
puede representar virtualmente cualquier control de UI al aprovechar las
capacidades de la aplicación que lo hospeda.

Durante décadas, los desarrolladores de aplicaciones y sitios web han confiado
en los controles de interfaz de usuario para permitirles a los usuarios
interactuar con sus aplicaciones. Estos mismos controles UI también pueden ser
muy efectivos en bots. Por ejemplo, los botones son una gran manera de
presentarle al usuario una opción simple. Permitir que el usuario comunique
"Hoteles" haciendo clic en un botón denominado Hoteles es más fácil y rápido que
forzar al usuario a escribir "Hoteles". Esto es especialmente cierto en los
dispositivos móviles, donde el clic es preferible a la escritura.

Cuando diseñes un bot, no descartes automáticamente los elementos comunes de UI
ya que no son **”lo suficientemente inteligentes"**. Como se vimos
anteriormente, su bot debe estar diseñado para resolver el problema del usuario
de la mejor manera / más rápida / más fácil posible. Evite la tentación de
comenzar incorporando la comprensión del lenguaje natural, ya que a menudo es
innecesario y solo introduce una complejidad injustificada.

Avanza a la siguiente unidad, donde conoceremos los componentes de **Microsoft
Bot Framework**

## Lecturas complementarias

* [Qué es un bot?](https://mva.microsoft.com/es-es/training-courses/introduccin-a-bots-18179)
* [Distintos tipos de bots](https://azure.microsoft.com/es-mx/solutions/architecture/commerce-chatbot/)
* [Galería de bots públicos](https://bots.botframework.com/)
