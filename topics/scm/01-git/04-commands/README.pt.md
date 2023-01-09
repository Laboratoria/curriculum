---
type: read
duration: 5min
---

# Comandos comuns

A seguir, você encontrará uma lista dos comandos mais comuns ao trabalhar com
`Git` e `GitHub`.

- `init`: Este comando diz ao Git para começar a monitorar o diretório atual,
   criando um repositório. Em outras palavras, o Git vai começar a vigiar essa
   pasta. O comando para tal é:

  ```bash
  git init
  ```

 Ao executar essa linha, o Git vai criar uma pasta oculta chamada `.git` no
  _working directory_, o diretório raiz do projeto, local onde você digitou o
  comando.

- `add`: Com este comando, indicaremos quais arquivos queremos passar do nosso
  _working directory_ para _staging area_. Isto é, dizer quais arquivos estão
  **preparados** para a nova versão do projeto.

  Por exemplo, se quisermos adicionar o arquivo HTML **index.html** à nossa
  _staging area_, devemos executar a seguinte linha:

  ```bash
  git add index.html
  ```

  Se desejarmos que todos os arquivos do diretório atual sejam adicionados à
  _staging area_ \(definir que já estão preparados para a nova versão\),
  executamos a seguinte linha:

  ```bash
  git add .
  ```

- `commit`: Com `commit`, **confirmaremos** os arquivos que já definimos como
  preparados pelo comando anterior \(`add`\). A estrutura do comando é a
  seguinte:

  ```bash
  git commit -m 'Adicionar um comentário'
  ```

  O texto entre aspas \(''\) pode ser qualquer um. Eu recomendo que você
  escreva um resumo do que está sendo modificado nessa versão para melhor se
  organizar. Além disso, um bom comentário irá ajudá-la se for necessário
  voltar a uma determinada funcionalidade sem precisar ler todo o código, mas
  apenas guiando-se pelos comentários dos commits. Por exemplo, se a "
  **nova versão** _cria a estrutura do HTML_", um bom comentário seria:

  ```bash
  git commit -m 'Cria a estrutura do HTML'
  ```

- `status`: Com `status`, podemos saber o estado dos arquivos no nosso
  repositório local. Ou seja, o comando nos dirá se há algum arquivo modificado
  que não foi atualizado no repositório ou se há arquivos que ainda não foram
  enviados, e também nos informará se está em nosso _working directory_ ou
  _staging area_. Este comando será muito útil para determinar quais arquivos
  devemos declarar como "preparados" \(via `add`\) e, em seguida,
  "confirmá-los" para a nova versão \(através do comando `commit`\) que
  enviaremos ao repositório remoto. O comando para ver o estado do nosso
  repositório é:

  ```bash
  git status
  ```
