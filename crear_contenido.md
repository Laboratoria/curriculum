## Creadores de contenido

En la creación de nuevos cursos para Laboratoria intervienen 2 personas:

- El coordinador del curso (Laboratoria)
- El creador de contenido (externo)

Para crear un nuevo curso, se siguen los siguientes pasos:

### Paso 1

El coordinador del curso identifica la necesidad del curso y realiza lo siguiente:

1. Crear branch `00-nombre-del-curso`
2. Crear directorio `00-nombre-del-curso`
3. Crear `README.md` basado en [esta plantilla](#) y debe contener lo siguiente:
	* Título del curso
	* Breve descripción
	* Formato
	* Duración / temas logísticos 
	* Quién será el creador del contenido del curso
4. Y agrega al creador de contenido al repositorio de Laboratoria


### Paso 2

El creador de contenido deberá:

1. _Fork_ repo
2. Desarrollar propuesta del curso (outline) 
3. Enviar pull request
4. Review y discusión
5. Ajustes

Este paso deberá tomar entre 2 y 3 semanas. 


### Paso 3 

Una vez que el outline esté cerrado entre el coordinador del curso y el creador de contenido, el coordinador buscará obtener feedback adicional de la comunidad. Este paso deberá tomar como máximo 1 semana.


### Paso 4 

Con el outline completo, el creador de contenido empezará a crear lo necesario para el desarrollo de la primera semana de clases y será guardado en la carpeta `Semana-01` en el mismo repositorio. El contenido a crear incluye:

* **Scripts**: estos guiones servirán como guías para los videos y para el dictado de las clases que se soportarán por los slides. Aquí puedes ver un ejemplo:

>
[Script] Computers generally tend to spend about a full quarter of their processing power on sorting different data. As an example, a computer in a hospital may maintain a very large database of all patients who have ever been to the hospital for treatment in the past 5 years. Different people in the hospital might want different lists of patients. A person managing hospital finances might want a list of patients ordered by their hospital charges. A researcher might want a list ordered by the disease for which they were treated. An administrator might want a list ordered by the doctor who treated the patient. While generating these lists, the computer will have to sort the data afresh every time according to the need of the user.

> [Ask] Can you think of any other scenario in which sorting is important? What advantages are there of maintaining sorted data over unsorted data? What are the possible disadvantages?

>[Script] Computers are actually very simple machines. They can really only do one thing at a time. Their power lies in being able to do these things very quickly which gives the illusion that they are very smart. However we will see as we discover how to solve a fundamental computing problem: sorting a list, exactly how dumb computers really are. Let’s start with a group exercise!


* **Screencasts:** para ver cómo crear un screencast puedes mirar este [link](https://learn.onemonth.com/how-to-record-your-screen-and-make-a-video-tutorial-c6d37e78cf18). Adicionalmente, puedes ver [este screencast hecho por nosotros](https://laboratoria.wistia.com/medias/tstcuensp9) para que te des una idea de lo que buscamos. La intención del screencast que nos envies es que nos muestres tu idea de desarrollo de los ejercicios. De todos modos, Laboratoria realizará una producción del video . 

* **Ejercicios guiados:** deberán incluir paso a paso el desarrollo del ejercicio que el profesor realizará. Este ejercicio deberá tener la solución en github y un screencast del paso a paso.




* **Ejercicios prácticos/casos:** para estos casos el creador de contenido deberá sugerir si se deben desarrollar en grupo o individualmente y el tiempo que se le debe dar a cada alumno para resolver el caso.

	Ejemplo:

	>**Does the array contain "wdi"?**
	Given an array, return `true` if it contains the string "wdi" and `false` if it does not contain that string.

	```javascript
findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false
```

	<details>
	<summary>Function signature (only look at this after you've thought about what it should look like)</summary>
	
	```javascript
	
		function findWdi(arr){
			// TODO: Place your code here
		}
	
	```
	</details>


* **Quizzes:** son necesarios para probar el conocimiento de las estudiantes luego de ver las clases en video. Deben ser creados en google form e incluir el link en el repo.


	Ejemplo: 

	| # | Tipo | Tópico           
	| - | ----- | -----
	| 01 | video | ¿Qué son variables?
	| 02 | video | Recibe información del usuario utilizando `prompt()` y guarda los datos en variables
	| 03 | video | Nombrando variables
	| 04 | reto | Crea nuevas variables y modifica su valor
	| 05 | video | Valores y tipos de datos
	| 06 | quiz | Prueba tu conocimiento



### Paso 5 

1. Enviar pull request
2. Review y discusión: esta revisión está a cargo del coordinador del curso.

### Paso 6 

Una vez cerrada la primera semana de contenido, esta pasa a los encargados de producir el material.

El creador de contenido vuelve al paso 4 para crear el material de las siguientes semanas.


### Paso 7 

1. El coordinador del curso aprueba el contenido de la primera semana y hace **Merge to master**

