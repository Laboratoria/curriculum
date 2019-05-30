#! /usr/bin/env bash

POSITIONAL=()
while [[ $# -gt 0 ]]; do
  key="$1"

  case $key in
    -n|--noop)
      NOOP=YES
      shift # past argument
      ;;
    *)
      POSITIONAL+=("$1") # save it in an array for later
      shift # past argument
      ;;
  esac
done


src=${POSITIONAL[0]}
dest=${POSITIONAL[1]}


cp -r "${src}/." "${dest}"
cat "${src}/README.md" | sed -e 's/^|\([^|]*\)|.*|$/|\1|/g' > "${dest}/README.md"
cd "${dest}"
git init
git add .
git commit -m "chore(init): Adds project files from curriculum"


echo "
Para continuar accede al directorio del proyecto del cohort:

cd $(pwd)

Después crea un repo en GitHub específicamente para tu cohort si todavía no lo
has hecho.

Cuando ya hayas creado el repo en github procede a empujar nuestro commit
inicial. Algo como:

git remote add upstream git@github.com:<user>/<cohort-id>-<project-slug>.git
git push -u upstream master

🚀🚀🚀"
