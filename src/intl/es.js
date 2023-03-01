const es = {
  home: 'Inicio',
  projects: 'Proyectos',
  topics: 'Tópicos',
  signin: 'Iniciar sesión',
  signout: 'Cerrar sesión',
  learningObjectives: 'Objetivos de aprendizaje',
  webDev: 'Desarrollo Web',
  ux: 'Diseño UX',
  submit: 'Enviar',
  reset: 'Reiniciar',

  'home/alert': `
    <p>
      En este sitio web encontrarás contenido de referencia y apoyo que
      usamos en nuestros bootcamps.
    </p>
    <p>
      Si estás interesada en postular,
      <a href="https://bootcamp.laboratoria.la/es/">acá</a>
      puedes encontrar más información.
    </p>
  `,

  'projects.web-dev.intro': `
    <p>
      Nuestra propuesta de aprendizaje se basa en
      <strong>aprender haciendo</strong>. El foco central de nuestro curriculum
      es un catálogo de proyectos de complejidad gradualmente creciente, y
      asociados a objetivos de aprendizaje concretos.
    </p>
    <p>
      <strong>Tanto la ruta de proyectos elegida como la duración y alcance de
      cada uno, dependerán de las necesidades, intereses y ritmo de aprendizaje
      de cada estudiante</strong>. Esto significa que no se espera que
      todas hagan los mismos proyectos, ni la misma cantidad de proyectos. Eso
      sí, se espera que se complete por lo menos un proyecto de cada uno de los
      niveles 0 al 4, habiendo cumplido con la mayoría de objetivos de
      aprendizaje correspondientes.
    </p>
  `,

  'projects.web-dev.level.0': `
    <p>
      Los proyectos de este nivel se caracterizan por ser <strong>apps vanilla,
      todavía sin backend, sin persistencia y sin autenticación</strong>.
    </p>
    <p>
      El foco en esta etapa son <strong>fundamentos de JavaScript</strong>,
      incluyendo conceptos como <strong>variables</strong>,
      <strong>condicionales</strong>, <strong>strings</strong> y
      <strong>funciones</strong>, así como
      <strong>manipulación básica del DOM</strong>,
      <strong>eventos del DOM</strong>, fundamentos de <strong>HTML</strong>
      (<em>semántica</em>) y <strong>CSS</strong> (<em>selectores</em> y
      <em>reglas de estilo</em>).
    </p>
  `,

  'projects.web-dev.level.1': `
    <p>
      Los proyectos de este nivel siguen siendo <strong>apps de una sola vista o
      página, vanilla, todavía sin backend, ni persistencia, ni
      autenticación</strong>.
    </p>
    <p>
      En este nivel profundizamos un poco más en
      <strong>fundamentos de JavaScript</strong>, exploramos
      <strong>bucles</strong> e <em>iteración</em>, además de introducir la idea
      de <strong>pruebas unitarias</strong>, <strong>linters</strong>,
      <strong>módulos</strong> (<code>import</code>/<code>export</code>),
      <strong>control de versiones</strong> y <code>despliegue</code> a GitHub
      Pages. También se introduce en detalle la idea del
      <strong>modelo de caja (box model) en CSS</strong>.
    </p>
  `,

  'projects.web-dev.level.2': `
    <p>
      Los proyectos de este nivel siguen siendo <strong>apps de una sola vista o
      página, vanilla, todavía sin backend, ni persistencia, ni
      autenticación</strong>, pero poco a poco vamos agregando complejidad,
      <strong>más interacción con el DOM</strong>, tipos de datos más complejos,
      <strong>arreglos</strong> (filtrado, ordenado, etc) y
      <strong>objectos</strong>, así como <strong>colaboración</strong> en
      GitHub e integración de cambios a través de <strong>pull requests</strong>
      y <strong>code review</strong>.
    </p>
    <p>
      En este momento también se introduce <strong>flexbox</strong> además de
      conceptos de UX como <strong>pruebas de usabilidad</strong>.
    </p>
  `,

  'projects.web-dev.level.3': `
    <p>
      Llegado a este <em>nivel</em> finalmente pasamos a <strong>aplicaciones
      con múltiples vistas, aunque todavía vanilla</strong>. También se incluye
      <strong>autenticación con Firebase Auth</strong>, <strong>persistencia de
      datos con Firestore</strong> y <strong>ruteo de vistas o componentes
      </strong>, introduciendo el concepto de <strong>SPA (Single Page
      Application)</strong>.
    </p>
    <p>
      En este nivel se profundiza en <strong>asícronía con callbacks y promesas
      </strong> y se introducen también las <strong>pruebas unitarias
      asíncronas</strong> y <strong>mocks</strong>.
    </p>
      En cuanto a colaboración, se espera el uso de <strong>issues</strong>,
      <strong>milestones</strong>, y seguimiento del avance con
      <strong>GitHub projects</strong>.
    </p>
  `,

  'projects.web-dev.level.4': `
    <p>
      Este <em>nivel</em> es mucho más amplio. Acá encontramos proyectos de
      frontend usando <strong>frameworks como React, Angular o Vue</strong>, así
      como proyectos que salen fuera del ámbito propio del frontend, haciendo
      uso de <strong>Node.js</strong>. Así encontramos proyectos de
      <strong>CLI</strong>, de <strong>backend con express</strong> e incluso
      algo de <strong>bases de datos</strong>.
    </p>
    <p>
      Llegado a este punto se espera que cada persona vaya eligiendo proyectos
      cada vez más diferentes, y por lo tanto adquiriendo habilidades y
      objetivos de aprendizaje distintos.
    </p>
  `,

  'projects.web-dev.level.5': `
    <p>
      A medida que avazamos de nivel, el rango de opciones se va ampliando. En
      este nivel tenemos proyectos variados que cubren temas tanto de
      <strong>frontend</strong> como de <strong>backend</strong>. La mayoría de
      estos proyectos quedan dentro del universo de
      <strong>JavaScript/Node.js</strong>, pero no todos, habiendo también
      proyectos implementados en otros lenguajes de programación, como por
      ejemplo <strong>PHP/WordPress</strong>.
    </p>
    <p>
      En este nivel veremos proyectos que introducen tecnologías como
      <strong>cloud functions</strong>, <strong>web sockets</strong>,
      <strong>React Native</strong> y <strong>Docker</strong> entre otros.
    </p>
    <p>
      Este <em>nivel</em> es <em>opcional</em>, y no se espera que todas tengan
      el tiempo de llegar a estos proyectos durante el período del bootcamp.
    </p>
  `,

  'projects.web-dev.level.6': `
    <p>
      Como último nivel tenemos un único proyecto llamado
      <em>Job Application</em>. Este proyecto está enfocado en preparación para
      salir a buscar empleo como developer. Este proyecto está listado al final,
      pero eso no significa que se comienza una vez completado los
      <em>niveles</em> anteriores. <strong>Este <em>nivel</em> es obligatorio, a
      diferencia del anterior, que es <em>opcional</em></strong>.
    </p>
  `,

  'projects.ux.intro': `
    <p>
      Nuestra propuesta de aprendizaje se basa en
      <strong>aprender haciendo</strong>. El foco central de nuestro curriculum
      es un catálogo de proyectos de complejidad gradualmente creciente, y
      asociados a objetivos de aprendizaje concretos.
    </p>
    <p>
      Los primeros proyectos de la ruta de aprendizaje son introductorios al
      diseño de experiencias de usuario. Y los siguientes son proyectos más
      aplicados en los cuales las estudiantes podrán trabajar con retos reales
      de empresas. La elección de los retos a trabajar dependerá de las <strong>
      necesidades e intereses de cada estudiante</strong>. Esto significa que en
      los proyectos que involucran a empresas ellas podrán elegir con qué
      empresa y equipo trabajar. Eso sí, se espera que se complete por lo menos
      un proyecto de cada uno de los niveles 0 al 4, habiendo cumplido con la
      mayoría de objetivos de aprendizaje correspondientes.
    </p>
  `,

  'projects.ux.level.0': `
    <p>
    Es el primer acercamiento de nuestras estudiantes con el Diseño Centrado en
    el Humano. Se da durante el proceso de admisión.
    </p>
  `,

  'projects.ux.level.1': `
    <p>
    Se desarrolla la mentalidad del diseño centrado en el humano trabjando
    en distintos proyectos, también se fortalecen las bases de habilidades
    que serán transversales en su trabajo como UX Designers como son:
    <strong>user resesarch</strong> y <strong>UI design</strong>.
    </p>
  `,

  'projects.ux.level.2': `
    <p>
    Es el primer reto en el que se trabaja con un cliente real. Además de los
    conceptos básicos de UX Design, las estudiantes tienen que aprender a
    entender el negocio, comunicarse y negociar con clientes. Y a definir el
    alcance de sus proyectos.
    </p>
  `,

  'projects.ux.level.3': `
    <p>
    Durante estos retos las estudiantes pondrán en práctica todo lo aprendido
    durante el bootcamp para realizar una consultoria en UX a distintas empresas
    de la industria. Estos retos incorporan temas como
    <strong>service design</strong>, <strong>manejo de data</strong>,
    <strong>definición de KPIs</strong>, entre otros.
    </p>
  `,

  'projects.ux.level.4': `
    <p>
    A lo largo del bootcamp tenemos un proyecto llamado Portafolio, enfocado en
    construir un portafolio online en el que puedan mostrar los proyectos en
    los cuáles trabajaron durante el bootcamp.
    </p>
  `,

  'gym': 'Ejercicios',

  'quiz-results': 'Respuestas correctas: {success}/{total}',
};

export default es;
