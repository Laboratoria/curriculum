#! /usr/bin/env bash

parser='./node_modules/curriculum-parser/index.js'

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

topics=(
  'babel'
  'browser'
  'css'
  'functional'
  'html'
  'javascript'
  'paradigms'
  'react'
  'redux'
  'scm'
  'shell'
)

topicsPt=(
  'browser'
  'css'
  'html'
  'javascript'
  'scm'
  'shell'
)

repo=$( node -e "console.log(require('./package.json').repository)" )
version=$( node -e "console.log(require('./package.json').version)" )
rubricVersion="2.3.x"

hasFailures=0

if [[ "$1" == "--validate" ]]; then
  validate=1
else
  validate=0
fi


buildProjects() {
  echo "Building projects..."
  for project in ${projects[@]}; do
    echo "projects/${project}"
    if [[ "$validate" == "0" ]]; then
      dest="build/projects/${project}.json"
    else
      dest="/dev/null"
    fi
    ${parser} project projects/${project} \
      --repo ${repo} \
      --version ${version} \
      --rubric ${rubricVersion} \
      --track js \
      --locale es-ES \
      > "${dest}"

    if [[ "$?" != "0" ]]; then
      hasFailures=1
      echo "Failed"
    else
      echo "OK"
    fi
  done
}


buildTopics() {
  echo "Building topics..."
  for topic in ${topics[@]}; do
    echo "topics/${topic}"
    if [[ "$validate" == "0" ]]; then
      dest="build/topics/${topic}.json"
    else
      dest="/dev/null"
    fi
    ${parser} topic topics/${topic} \
      --repo ${repo} \
      --version ${version} \
      --track js \
      --locale es-ES \
      > "${dest}"

    if [[ "$?" != "0" ]]; then
      hasFailures=1
      echo "Failed"
    else
      echo "OK"
    fi
  done
}


buildTopicsPt() {
  echo "Building topics (portuguese)..."
  for topic in ${topicsPt[@]}; do
    echo "topics/${topic}"
    if [[ "$validate" == "0" ]]; then
      dest="build/topics/${topic}-pt.json"
    else
      dest="/dev/null"
    fi
    ${parser} topic topics/${topic} \
      --repo ${repo} \
      --version ${version} \
      --track js \
      --locale pt-BR \
      --suffix pt \
      > "${dest}"

    if [[ "$?" != "0" ]]; then
      hasFailures=1
      echo "Failed"
    else
      echo "OK"
    fi
  done
}


if [[ "$validate" == "0" ]]; then
  rm -rf build/*
  mkdir -p build/projects
  mkdir -p build/topics
else
  echo "Dry run... (validation only)"
fi

buildProjects
buildTopics
buildTopicsPt

exit "$hasFailures"
