# Entorno: Git + GitHub

* Tipo: `taller`
* Formato: `guiado`
* Duración: `15min`

## Objetivos del workshop

* Que todas tengan git y node instalado
* Que todas tengan cuenta activa y configurada en GitHub
* Que todas tengan acceso a los repos necesarios para el curso

***

Durante esta sesión nos aseguraremos de que todxs tengan las herramientas
necesarias para hacer el curso, `git` en particular, acceso al repo, su propio
fork, ...

Durante el workshop lxs instructorxs estarán disponibles para ayudar a resolver
problemas de instalación y resolver dudas con respecto a configuraciones y
workflow.

## Usuario de GitHub + llave SSH

Como desarrolladora, tu perfil de GitHub es probablemente la pieza más
importante de ru CV. Pero no sólo eso, `git` + GitHub son herramientas
fundamentales. Para poder trabajar de forma óptima, se recomienda usar llaves
SSH para autenticar con GitHub. Si no lo has hecho todavía, este es el momento
de generar una llave SSH y añadirla a tu cuenta de GitHub. En estos links puedes
encontrar la documentación oficial de GitHub sobre cómo generar una llave SSH y
cómo añadirla a tu cuenta:

* [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
* [Adding a new SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

## Fork y copia local

Cada alumna debe seguir los siguientes pasos en su computadora:

```sh
# Clona tu fork a tu computadora
git clone git@github.com:Laboratoria/<cohort-id>.git

# Entra en la carpeta del repo recién clonado
cd <cohort-id>

# Crea una rama con el nombre `<github-username>-game-oop`
git checkout -b <github-username>-game-oop

# regresamos a master...
git checkout master

# Crea una rama con el nombre `<github-username>-game-fp`
git checkout -b <github-username>-game-fp

# Lista ramas en tu copia local del repo
git branch

# Lista "todas" las ramas, incluyendo remotos
git branch -a
```

## Configuración de remotos

Git nos permite manajar varios _remotos_ (remotes) o repos remotos con los que
trabajar. Por defecto, cuando clonamos un repo, el repo remoto desde el cual
estamos clonando queda configurado como remoto `origin`. Esto significa que una
vez clonado el repo podremos hacer operaciones como `pull` o `push` contra este
repo remoto (llamado `origin`).

De hecho, podemos usar el comando `git remote` para administrar los remotos de
cualquier repo que tengas clonado localmente. Por ejemplo:

```sh
# Lista remotos (sólo nombres)
git remote

# Lista remotos (verbose)
git remote -v

# Añade remoto alojado en cuenta de Laboratoria con el nombre "upstream"
git remote add upstream git@github.com:Laboratoria/<cohort-id>.git

# Lista remotos (verbose)
git remote -v

# Borramos remoto (esto no afecta al remoto en sí, es solo la referencia local)
git remote rm upstream

# Lista remotos (sólo nombres)
git remote
```

En el ejemplo anterior añadimos un remoto con el nombre _upstream_ apuntando al
repo de tu cohort alojado en la cuenta de Laboratoria. Recomendamos a las
alumnas que configuren un remoto similar para así poder "jalar" cambios del repo
de tu cohort a tu copia local.
