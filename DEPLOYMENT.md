# Deployment

Descripción de los pasos a seguir para realizar el despliegue.

⚠️ Antes de hacer un tag de release, es imprescindible:

1. Ejecutar comando `npm run changelog` y actualizar release en Github
   (reemplazar nombres por users en Github).
2. Actualizar el número de versión en `package.json`.
3. Reconstruir el directorio `dist` (`rm -rf dist && npm run build:content`).
4. Agregar cambios (`git add package* dist/`)
5. Hacer commit de los cambios
   (`git commit -m "chore(release): Bumps version to vX.X.X and updates dist files"`).
6. Crear la etiqueta/tag de release
   (`git tag -a vX.X.X -m "vX.X.X - Release name"`).
7. Empujar cambios y tags a upstream (`git push upstream main --tags`).

Luego de eso, una vez pusheado el tag, github ejecuta las actions para realizar
los despliegues de release.

Hay dos tipos de releases, los releases a `staging` y los releases a `production`.

Para realizar un deploy a `staging`, el tag debe comenzar con `v` y contener el
substring `alpha` o `beta`.

En caso de no contener `alpha` ni `beta` y de comenzar con `v`, se asume que
es un release para `production`.

Para más información puedes revisar los archivos relacionados.

Archivos relacionados: [`.github/workflows`](../.github/workflows).
