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
# Run mdlint script via npm
npm run mdlint
```

### eslint

Run JavaScript linter.

Related files: [`.eslintignore`](../.eslintignore), [`eslintrc`](../.eslintrc).

```sh
# Run eslint script via npm
npm run eslint
```

### validate

The `validate` script runs the `build` script with the `--validate` option,
which basically allows us to validate the build without creating any files and
simply check the exit status to see whether it passed or not.

```sh
# Run validate script via npm
npm run validate
```

### test

Run unit tests (and implicitly the `pretest` script).

NOTE: Tests are run with `mocha` because most tests are exercise tests that will
need to run in the browser (`jest` does not run in the browser).

```sh
# Run tests with npm (and implicitly the pretest script)
npm test

# Run unit tests via npx (no pretest hook)
npx mocha './topics/!(node_modules)/**/*.spec.js' --verbose
```

### pretest

The `pretest` hook makes sure that linters and validation are run _before_
proceeding with the using tests.

```sh
# Run pretest script via npm
npm run pretest

# Run equivalent command
npm run mdlint && npm run eslint && npm run validate
```

***

## Integración continua

### build

The `build` script uses the `curriculum-parser` to analyse both _projects_ and
_topics_ and store the resulting JSON files in the `build` directory.

Options:

* `--validate`: If this option is present no files will be written (used by the
  `validate` script, see above).

```sh
# Run build script via npm
npm run build
```

### deploy

Run deploy script. This script is run via GitHub Actions.

The deploy script is only run for builds containing a `release` or `prerelease`
git tag. If such a tag is present it will implicitly run the `build` script
and then POST the JSON docs to the Laboratoria API.

Env vars:

* `GITHUB_REF`
* `LABORATORIA_API_EMAIL`
* `LABORATORIA_API_PASS`
* `LABORATORIA_API_URL`

Related files: [`.github/workflows/node.js.yml`](../.github/workflows/node.js.yml).

```sh
# Run build script via npm
npm run deploy
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
