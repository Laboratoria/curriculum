#! /usr/bin/env bash

#
# This script is used by maintaners in order to check outdated dependencies in
# projects containing a package.json file.
#

cwd=$( pwd )
projectsDir="${cwd}/projects"
tmpdir=$( mktemp -u )

mkdir "${tmpdir}"

for dir in $( ls "${projectsDir}" ); do
  projectDir="${projectsDir}/${dir}"
  if [ ! -d "${projectDir}" ]; then
    continue
  fi
  cd "${projectDir}"
  if [[ -f "${projectDir}/package.json" ]]; then
    echo "${dir}"
    cp -r "${projectDir}/." "${tmpdir}/${dir}"
    cd "${tmpdir}/${dir}"
    npm i &> /dev/null
    npm outdated --depth 0
    echo ""
  fi
  cd "${cwd}"
done

rm -rf "${tmpdir}"
