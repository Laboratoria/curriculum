#! /usr/bin/env bash

projects=(
  '01-cipher'
  '02-data-lovers'
  '03-social-network'
  '04-burger-queen'
  '04-md-links'
  '04-social-network-frameworks'
  '05-bq-node'
  '05-tic-tac-toe-rn'
)


while [[ $# -gt 0 ]]; do
  key="$1"

  case $key in
    -n|--noop)
      NOOP=YES
      shift # past argument
      ;;
    *)
      # POSITIONAL+=("$1") # save it in an array for later
      shift # past argument
      ;;
  esac
done


cwd=$( pwd )
tmpdir=$( mktemp -u )
hash=$( git rev-parse --short HEAD )


mkdir "${tmpdir}"


for project in ${projects[@]}; do
  key=${project:3}
  echo "=> Processing ${project} (${key})..."

  rm -rf "${tmpdir}/${key}"
  git clone "git@github.com:Laboratoria/${key}.git" "${tmpdir}/${key}" --quiet
  cd "${tmpdir}/${key}"

  cp -r "${cwd}/projects/${project}/." "${tmpdir}/${key}"

  # # https://stackoverflow.com/questions/3878624/how-do-i-programmatically-determine-if-there-are-uncommitted-changes
  git diff-index --quiet HEAD --
  if [[ "$?" == 0 ]]; then
    echo "Alread up to date. OK"
    continue
  fi

  echo "Changes found!"

  if [[ "${NOOP}" == "YES" ]]; then
    echo "Would have sent PR with changes..."
    git status
  else
    echo "Creating pull request..."
    git checkout -b "curriculum-update-${hash}"
    git add .
    git commit -m "chore(house-keeping): Updates files with latests version from curriculum repo"
    git push origin "curriculum-update-${hash}"
  fi
done


rm -rf "${tmpdir}"
