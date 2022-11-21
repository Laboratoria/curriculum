#!/usr/bin/env sh

# usa este deploy script si estas desplegando tu static site a github pages o custom domain
# mas info: https://vitejs.dev/guide/static-deploy.html
# https://vitejs.dev/guide/static-deploy.html#github-pages

# use este script de implantação se estiver implantando seu site estático nas páginas
# do github ou domínio personalizado
# mais info: https://vitejs.dev/guide/static-deploy.html
# https://vitejs.dev/guide/static-deploy.html#github-pages

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# si estas desplegando a un dominio personalizado
# se você estiver implantando em um domínio personalizado
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# si estas desplegando a https://<USERNAME>.github.io
# se você estiver implantando em https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# si estas desplegando a https://<USERNAME>.github.io/<REPO>
# en vite.config.js agrega el propiedad "base" con el valor de tu <REPO> 
# se você estiver implantando em https://<USERNAME>.github.io/<REPO>
# em vite.config.js adicione a propriedade "base" com o valor do seu <REPO> 
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
