# npm-scripts

## Índice

* [Scripts para coaches](#Scripts-para-coaches)
* [Testing y linters (contribuidoras)](#Testing-y-linters)
* [Integración continua (mantenedoras)](#Integración-continua)
* [Tareas de mantenimiento (mantenedoras)](#Tareas-de-mantenimiento)

***

## Scripts para coaches

### create-cohort-project

Este _script_ está dirigido a coaches y se usa para crear un repo de proyecto
para usar con un cohort en particular. Las coaches de cada cohort son encargadas
de crear un repo para cada proyecto que haya disponible en dicho cohort.

⚠️ Es muy importante que todas las coaches siempre usemos este script
para crear repos de proyectos de cohorts. Así no solo nos aseguramos de estar
usando la versión más reciente sino que el script también se encarga de
_analizar_ los objetivos de aprendizaje del `project.yml` del proyecto y
genera la sección correspondiente en el `README.md` resultante en el repo para
usar con las estudiantes.

Este script necesita saber qué proyecto nos interesa, en qué lugar de nuestro
disco duro queremos crear la carpeta para el nuevo repo y opcionalmente un
_identificador_ para el cohort.

Por ejemplo, si queremos crear un repo con el proyecto de `cipher` para un
cohort que se llama `LIM014`, podríamos usar el siguiente comando:

```sh
npm run create-cohort-project projects/01-cipher ~/ LIM016
```

En el ejemplo de arriba estaríamos creando un repo con el proyecto `cipher`
(que está en la carpeta `projects/01-cipher`) en la carpeta `LIM014-cipher` en
`~/`.

Para de crear también el repo en GitHub y hacer un primer commit con el
_boilerplate_, tendremos primero que crear un
[_GitHub Personal Access Token_](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
en GitHub y de ahí especificar la variable de entorno `GITHUB_TOKEN`. Algo así:

```sh
GITHUB_TOKEN=xxxxxx npm run create-cohort-project ./projects/01-cipher ~/ LIM014
```

Para familiarizarte con el script puedes usar la opción `--noop` para que el
script te diga qué hubiera hecho en vez de hacerlo de verdad :wink:

#### Usage

`./scripts/create-cohort-project.js <src> <dest> [<cohortid>]`

Variables de entorno:

* `GITHUB_TOKEN`: Un _GitHub Personal Access Token_ con permiso para crear repos
  en la cuenta de GitHub correspondiente (por ejemplo `Laboratoria`).

Argumentos:

* `src`: Ruta a la carpeta del proyecto en el sistema de archivos.
* `dest`: Ruta a una carpeta donde crear la nueva carpeta de proyecto para el
   cohort correspondiente.
* `cohortid`: Un idendificador para el cohort. Esto se usará como prefijo en el
  nombre de la carpeta creada y repo.

Opciones:

* `--locale`: Puede ser `es-ES` o `pt-BR`. Por defecto es `es-ES`.
* `--noop`: Si esta opción está presente el script nos dirá que es lo que haríá
  paso a paso pero sin realmente hacer nada. Es útil para familiarizarse con el
  script.

***

## Testing y linters

### mdlint

Run MarkDown linter.

Related files: [`.mdlintignore`](../.mdlintignore), [`mdlintrc`](../.mdlintrc).

```sh
npm run mdlint
```

### eslint

Run JavaScript linter.

Related files: [`.eslintignore`](../.eslintignore), [`eslintrc`](../.eslintrc).

```sh
npm run eslint
```

### validate

The `validate` script runs the `build` script with the `--validate` option,
which basically allows us to validate the build without creating any files and
simply check the exit status to see whether it passed or not.

```sh
npm run validate
```

### test:topics

Ejecuta pruebas unitarias en los ejercicios de los _tópicos_.

NOTA: Estas pruebas se ejecutan con `mocha` ya que estas pruebas también
necesitan ejecutarse en el navegador (`jest` no corre en el navegador).

```sh
# Run topics tests with npm (and implicitly the pretest script)
npm run test:topics
```

### pretest

The `pretest` hook makes sure that linters and validation are run _before_
proceeding with the unit tests.

```sh
# Run pretest script via npm
npm run pretest

# Run equivalent command
npm run mdlint && npm run eslint && npm run validate && npm run test:topics
```

### test

Run unit tests (and implicitly the `pretest` script).

```sh
# Run tests with npm (and implicitly the pretest script)
npm test
```

### start

Arranca la interfaz web.

```sh
npm start
```

Alternativamente:

```sh
npx react-scripts start
```

### watch

Arranca la interfaz web y escucha cambios en los archivos de contenido (tópicos
y proyectos) para automáticamente reflejar cambios localmente.

```sh
npm run watch
```

***

## Integración continua

### build

The `build` script uses the `curriculum-parser` to analyse both _projects_ and
_topics_ and store the resulting JSON files in the `dist` directory.

Options:

* `--validate`: If this option is present no files will be written (used by the
  `validate` script, see above).

```sh
npm run build
```

### deploy

Este script se ejecuta através de GitHub Actions.

El script de despliegue solo se ejecuta en builds de tags de `release` o
`prerelease`. En caso de encontrarse un tag que comience con `v`, el script
enviará los proyectos y tópicos que hayan en el directorio `dist` por HTTP POST
a `api.laboratoria.la`.

⚠️ Antes de hacer un tag de release, es imprescindible:

1. Ejecutar comando `npm run changelog` y actualizar release en Github
   (reemplazar nombres por users en Github).
2. Actualizar el número de versión en `package.json`.
3. Reconstruir el directorio `dist` (`rm -rf dist && npm run build`).
4. Agregar cambios (`git add package* dist/`)
5. Hacer commit de los cambios
   (`git commit -m "chore(release): Bumps version to vX.X.X and updates dist files"`).
6. Crear la etiqueta/tag de release
   (`git tag -a vX.X.X -m "vX.X.X - Release name"`).
7. Empujar cambios y tags a upstream (`git push upstream main --tags`).

Variables de entorno:

* `GITHUB_REF`
* `LABORATORIA_API_EMAIL`
* `LABORATORIA_API_PASS`
* `LABORATORIA_API_URL`

Archivos relacionados: [`.github/workflows/node.js.yml`](../.github/workflows/node.js.yml).

```sh
npm run deploy
```

⚠️ Por el momento la interfaz web se despliegue manualmente a `firebase` a la
hora de etiquetar el release y reconstruir la carpeta `dist`.

```sh
firebase deploy --only hosting --project bootcamp-e078f
```

***

## Tareas de mantenimiento

### propagate

Compares the current state of each project to the `main` branch of each
private repo with the example/model implementations. If changes are detected, a
PR will be sent with the relevant changes.

```sh
./scripts/propagate.sh --noop
./scripts/propagate.sh
```

### create-gource-video

Create gource visualization like [this one](https://youtu.be/fqbcQliGPzE).

```sh
./scripts/create-gource-video.sh
```

### check-projects-deps

```sh
./scripts/check-projects-deps.sh
```
