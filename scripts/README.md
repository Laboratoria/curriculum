# npm-scripts

## Testing y linters

### mdlint

Run MarkDown linter.

Related files: [`.mdlintignore`](../.mdlintignore), [`mdlintrc`](../.mdlintrc).

```sh
# Run mdlint script via npm
npm run mdlint

# Run equivalent command via npx
npx mdlint .
```

### eslint

Run JavaScript linter.

Related files: [`.eslintignore`](../.eslintignore), [`eslintrc`](../.eslintrc).

```sh
# Run eslint script via npm
npm run eslint

# Run equivalent command via npx
npx eslint topics/
```

### validate

The `validate` script runs the `build` script with the `--validate` option,
which basically allows us to validate the build without creating any files and
simply check the exit status to see whether it passed or not.

```sh
# Run validate script via npm
npm run validate

# Run script directly
./scripts/build.sh --validate
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

## CI Related

### build

The `build` script uses the `curriculum-parser` to analyse both _projects_ and
_topics_ and store the resulting JSON files in the `build` directory.

Options:

* `--validate`: If this option is present no files will be written (used by the
  `validate` script, see above).

```sh
# Run build script via npm
npm run build

# Run script directly
./scripts/build.sh
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
./scripts/deploy.sh
```

## Chores

### create-cohort-project (coaches)

Helper aimed at **coaches**, used to create a _copy_ of a particular project,
as _coaches_ do when creating a repo for a specific _cohort_.

Usage: `./scripts/create-cohort-project.sh <src> <dest> [<cohortid>]`

Arguments:

* `src`: Path to project dir in file system.
* `dest`: Path to dir where to create the new cohort project folder.
* `cohortid`: The _cohortid_ (legacy) or _slug_ identifying the cohort.

Options:

* `--locale`: Either `es-ES` or `pt-BR`. Default value is `es-ES`.
* `--noop`: If this option is present the command will only say what it would
  have done instead of actually doing anything. Useful to familiarize yourself
  with the command.

```sh
./scripts/create-cohort-project.sh projects/01-cipher ~/ LIM012
```

### propagate (maintainers)

Compares the current state of each project to the `main` branch of each
private repo with the example/model implementations. If changes are detected, a
PR will be sent with the relevant changes.

```sh
./scripts/propagate.sh --noop
./scripts/propagate.sh
```

### create-gource-video (maintainers)

Create gource visualization like [this one](https://youtu.be/fqbcQliGPzE).

```sh
./scripts/create-gource-video.sh
```
