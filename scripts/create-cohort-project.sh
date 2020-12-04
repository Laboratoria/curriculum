#! /usr/bin/env bash

deps=(basename realpath read mkdir cp cat sed git curl node pwd)

for dep in "${deps[@]}"; do
  command -v "$dep" >/dev/null 2>&1 \
  || { echo >&2 "I require ${dep} but it's not installed. Aborting."; exit 1; }
done


positional=()
while [[ $# -gt 0 ]]; do
  key="$1"

  case $key in
    -l|--locale)
      shift
      locale="$1"
      shift
      ;;
    -n|--noop)
      noop=YES
      shift # past argument
      ;;
    *)
      positional+=("$1") # save it in an array for later
      shift # past argument
      ;;
  esac
done

if [[ ! -n "$locale" ]]; then
  locale="es-ES"
fi

if [[ "$locale" != "es-ES" && "$locale" != "pt-BR" ]]; then
  echo "Unknown locale: ${locale}"
  exit 1
fi


src=${positional[0]}
dest=${positional[1]}
cohortid=${positional[2]}
project_dirname=$( basename "${src}" )
slug=${project_dirname:3}
repo_name="${slug}"


if [[ -z "$src" ]]; then
  echo "Please specify a source dir containing a project"
  exit 1
fi

if [[ ! -d "$src" ]]; then
  echo "Source dir is not a directory!"
  exit 1
fi

if [[ ! -z "${cohortid}" ]]; then
  repo_name="${cohortid}-${slug}"
fi

if [[ -z "$dest" ]]; then
  dest="${repo_name}"
else
  dest="$( realpath "${dest}" )/${repo_name}"
fi


if [[ -f "$dest" ]]; then
  echo "Destination exists and its a file??"
  exit 1
fi

if [[ -d "$dest" ]]; then
  echo -n "Dir ${dest} already exists.. use it anyway? [y/N]: "
  read use_existing_dir
  if [[ "${use_existing_dir}" != "y" && "${use_existing_dir}" != "Y" ]]; then
    echo "Aborting..."
    exit 1
  fi
else
  if [[ "${noop}" == "YES" ]]; then
    echo "Would have created directory ${dest}"
  else
    mkdir -p "${dest}"
  fi
fi


echo "You are about to copy all files from ${src} to ${dest}"
echo -n "Are you sure you want to continue? [Y/n]: "
read confirm_copy
if [[ "${confirm_copy}" == "n" || "${confirm_copy}" == "N" ]]; then
  exit 1
fi


if [[ "${noop}" == "YES" ]]; then
  echo "Would have copied files from ${src} to ${dest}"
else
  echo "Copying files..."
  cp -r "${src}/." "${dest}"
  if [[ "$locale" == "es-ES" ]]; then
    rm "${dest}/README.pt-BR.md"
  elif [[ "$locale" == "pt-BR" ]]; then
    mv "${dest}/README.pt-BR.md" "${dest}/README.md"
  fi
fi


if [[ "${noop}" == "YES" ]]; then
  echo "Would have initialized local repo, added files and commited"
else
  echo "Initializing repo..."
  cd "${dest}"
  git init
  git add .
  git commit -m "chore(init): Adds project files from curriculum"
fi


echo -n "Would you like to create a repository on GitHub and push changes? [Y/n]: "
read create_repo
if [[ "${create_repo}" == "n" || "${create_repo}" == "N" ]]; then
  echo "Done!"
  exit 0
fi


git_config_email=$( git config --get user.email )
echo -n "GitHub email [${git_config_email}]: "
read gh_user
if [[ "${gh_user}" == "" ]]; then
  gh_user="${git_config_email}"
fi

echo -n "GitHub password: "
read -s gh_pass
echo ""

echo -n "GitHub org [Laboratoria]: "
read gh_org
if [[ "${gh_org}" == "" ]]; then
  gh_org="Laboratoria"
fi


if [[ "${noop}" == "YES" ]]; then
  echo "Would have tried to create repo on ${gh_org}/${repo_name}"
else
  echo "Creating repo as ${gh_user}..."
  result=$(
    curl -s \
      -u "${gh_user}:${gh_pass}" \
      -X POST \
      -H 'content-type: application/json' \
      -d "{\"name\":\"${repo_name}\",\"private\":true}" \
      "https://api.github.com/orgs/${gh_org}/repos"
  )

  html_url=$( node -e "console.log((${result}).html_url || '')" )
  if [[ "$?" != "0" || "${html_url}" == "" ]]; then
    echo "Error creating repo."
    exit 1
  fi

  echo "You can visit the newly created repo here:"
  echo "${html_url}"
fi


if [[ "${noop}" == "YES" ]]; then
  echo "Would have pushed changes to ${gh_org}/${repo_name}"
else
  git remote add upstream "git@github.com:${gh_org}/${repo_name}.git"
  git push -u upstream main
fi


echo "
Para continuar accede al directorio del proyecto del cohort:

cd $(pwd)

O visita el repo directamente en GitHub:

${html_url}

🚀🚀🚀"
