#!/usr/bin/env sh

# usa este deploy script si estas desplegando tu static site a github pages o custom domain
# mas info: https://vitejs.dev/guide/static-deploy.html

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# si estas desplegando a https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
# tambien en vite.config.js agrega el propiedad "base" con el valor de tu <REPO> 
# https://vitejs.dev/guide/static-deploy.html#github-pages

cd -
