# Fleet Management Software API en Python

## Stack de tecnologías

La ecosistema de Python ofrece muchas opciones de frameworks para hacer un API.
Recomendamos que eliges entre estos dos stacks para construir tu app.

### Flask

Flask es un microframework para desarrollo web en Python, proporcionando
las herramientas básicas para crear una aplicación web sin incluir muchas
de las funcionalidades preinstaladas que tienen otros frameworks más grandes.
Esto permite una mayor flexibilidad y control, pero también significa que
puede que necesites instalar extensiones adicionales para funcionalidades
más avanzadas. Flask es un framework que permite ambos estilos de
programación: funcional y orientado a objetos (basado en clases).

* [Flask documentación Oficial](https://flask.palletsprojects.com/en/3.0.x/)
* [Flask Quickstart](https://flask.palletsprojects.com/en/3.0.x/quickstart/)
* [Postgresql](https://www.postgresql.org/): como base de datos.
* Algo mas?

### Django

Django es un framework web que fomenta el desarrollo rápido y limpio de
aplicaciones web, el cual es pensado para fomentar la escalabilidad en el desarrollo,
entre las características más importantes es que django trabaja con un [ORM](https://es.wikipedia.org/wiki/Mapeo_relacional_de_objetos)
para facilitar la interacción con la base de datos, django es una excelente opción
para desarrollar aplicaciones web complejas que requieren una amplia variedad de
funcionalidades integradas, una arquitectura MVT sólida y una gran comunidad de
apoyo.

* [Django](https://www.djangoproject.com):
  como framework para implementar un servidor HTTP.
* [Django REST Framework](https://www.django-rest-framework.org): como biblioteca
complementaria para crear APIs web RESTful.
* [Postgresql](https://www.postgresql.org/): como base de datos.

#### Pistas para trabajar con django

* Tus primeras instalaciones: para trabajar con django puedes usar entornos virtuales
en el siguiente [video](https://youtu.be/T2CZ7bltuMs) puedes guiarte para crear
un entorno virtual, también hemos preparado un [video](https://youtu.be/YoKjtqxAXXw)
que ejemplifica la forma en como inicializar un proyecto con django.

* Cargar la información a la base de datos: una vez tengas acceso a una instancia
de PostgreSQL, La HU1 nos habla de crear las tablas para cargar la información,
uno de los caminos que te sugerimos es  $\rightarrow$ crear los modelos $\rightarrow$
después generar las migraciones (usando el ORM de django) $\rightarrow$ por ultimo
cargar la información a tu base de datos.  
Para eso recomendamos primero tener una sola app para controlar todo lo
relacionado a la administración de taxis y dentro de la app crear dos modelos, uno
para almacenar la información de taxis y otro para almacenar la información de
ubicaciones.  
Deberás definir los campos de cada modelo de acuerdo a la información entregada.
Al momento de querer cargar la información es necesario que modifiques en el script
para especificar en que app trabajaran las 2 tablas hemos preparado el siguiente.

Ejemplo de la modificación:

```SQL
-- Así se visualiza originalmente una linea en el script
INSERT INTO trajectories (id, date, latitude, longitude ) VALUES ('10133','2008-02-02 13:47:59',116.37659,39.85567);
```

Agregando el nombre de la app (taxi):

```SQL
-- Así se visualiza con el nombre de la tabla cambiado
INSERT INTO taxi_trajectories (id, date, latitude, longitude ) VALUES ('10133','2008-02-02 13:47:59',116.37659,39.85567);
```

Preparamos este [video](youtube.com) para ejemplificar este paso.

* Generando tus endpoints: con django es posible integrar herramientas como
django rest framework para trabajar la creacion de una API y su [documentación oficial](https://www.django-rest-framework.org)
es clave para guiarte en la instalación y uso de la herramienta.

* Documentando los endpoints: al momento en que empieces a documentar los endpoints
de tu API. Debes usar [Swagger para rest framework](https://drf-yasg.readthedocs.io/en/stable/readme.html)
