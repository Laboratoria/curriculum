#! /usr/bin/env bash

deps=(node npm curl)

for dep in "${deps[@]}"; do
  command -v "$dep" >/dev/null 2>&1 \
  || { echo >&2 "I require ${dep} but it's not installed. Aborting."; exit 1; }
done


# Deploy script should only run on Node v12 build!
if [[ "$TRAVIS_NODE_VERSION" != "12" ]]; then
  echo "Not Node.js v12. Ignoring..."
  exit 0;
fi


production="https://api.laboratoria.la"
staging="https://laboratoria-la-staging.firebaseapp.com"
version=$( node -e "console.log(require('./package.json').version)" )
prereleaseType=$( node -e "console.log(('${TRAVIS_TAG}'.split('-')[1] || '').split('.')[0])" )
email=$LABORATORIA_API_EMAIL
pass=$LABORATORIA_API_PASS
apiBaseUrl=""


echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
echo "TRAVIS_TAG: ${TRAVIS_TAG}"
echo "version: ${version}"
if [[ ! -z "$prereleaseType" ]]; then
  echo "prereleaseType: $prereleaseType"
fi
echo ""


if [[ -z "$version" ]]; then
  echo "Could not read version from package.json!"
  exit 1;
fi


if [[ "$TRAVIS_TAG" == v* ]]; then
  echo "Release tag detected!!"
  if [[ "v$version" != "$TRAVIS_TAG" ]]; then
    echo "Version in package.json (v${version}) does not match tag (${TRAVIS_TAG})"
    exit 1
  fi
  if [[ "$prereleaseType" == "" ]]; then
    apiBaseUrl="$production"
  else
    apiBaseUrl="$staging"
  fi
elif [[ ! -z "$LABORATORIA_API_URL" ]]; then
  apiBaseUrl="$LABORATORIA_API_URL"
else
  echo "Not a release tag. Ignoring..."
  exit 0
fi


if [[ -z "$email" ]] || [[ -z "$pass" ]]; then
  echo "Missing API credentials!"
  exit 1;
fi


echo "Publishing version ${version} to: ${apiBaseUrl}..."
echo ""


# Run build to generate projects and topics JSON files
npm run build
if [[ "$?" != "0" ]]; then
  echo "Build script failed!"
  exit "$?"
fi


# Get auth token from API
echo "Getting auth token from laboratoria API..."
result=$(
  curl -s \
    -X POST \
    -H 'content-type: application/json' \
    -d "{\"email\":\"${email}\",\"password\":\"${pass}\"}" \
    "${apiBaseUrl}/auth"
)

statusCode=$( node -e "console.log((${result}).statusCode || 200)" )
token=$( node -e "console.log((${result}).token || '')" )

if [[ "$?" != "0" ]] || [[ "$statusCode" != "200" ]] || [[ -z "$token" ]]; then
  echo "Could not get auth token from ${apiBaseUrl}!"
  exit 1;
fi


hasFailures=0


# Push projects to API
for file in `ls build/projects`; do
  key=${file:3:-5}
  echo "Publishing project ${key}..."
  statusCode=$(
    curl -s \
      -X POST \
      -H 'content-type: application/json' \
      -H "authorization: Bearer ${token}" \
      --data-binary "@build/projects/${file}" \
      -o /dev/null \
      -w "%{http_code}" \
      "${apiBaseUrl}/projects"
  )

  if [[ "$?" != "0" ]]; then
    hasFailures=1
    echo "Failed running curl command"
  elif [[ "$statusCode" != "200" || "$statusCode" != "201" ]]; then
    hasFailures=1
    echo "Failed (HTTP Status: ${statusCode})"
  else
    echo "OK"
  fi
done


# Push topics to API
for file in `ls build/topics`; do
  key=${file:0:-5}
  echo "Publishing topic ${key}..."
  statusCode=$(
    curl -s \
      -X POST \
      -H 'content-type: application/json' \
      -H "authorization: Bearer ${token}" \
      --data-binary "@build/topics/${file}" \
      -o /dev/null \
      -w "%{http_code}" \
      "${apiBaseUrl}/topics"
  )

  if [[ "$?" != "0" ]]; then
    hasFailures=1
    echo "Failed running curl command"
  elif [[ "$statusCode" != "200" || "$statusCode" != "201" ]]; then
    hasFailures=1
    echo "Failed (HTTP Status: ${statusCode})"
  else
    echo "OK"
  fi
done


exit "$hasFailures"
