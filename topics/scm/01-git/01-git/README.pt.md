---
type: read
duration: 5min
---

# O que é o Git?

O texto a seguir é baseado em grande parte, com alguns ajustes, nas seguintes
referências:

- [Pro Git book](https://git-scm.com/book/en/v2)
- [Getting Started with Git - Arun Sood](https://github.com/wdi-sf-september-2014/notes/tree/master/git_intro)

***

`Git` é um _Sistema de Controle de Versões_.

**O que é um Sistema de Controle de Versões**?

Um _Sistema de Controle de Versões_ \(VCS em inglês\) é um sistema que registra
as alterações de um, dois ou mais arquivos o tempo todo para, caso necessário,
recuperarmos uma versão facilmente. Por exemplo, se você alguma vez elaborou
um projeto para uma tarefa qualquer, já fez algo como ilustrado na imagem
abaixo?

![Versionamento](https://user-images.githubusercontent.com/39506102/56902962-bca09500-6a71-11e9-84f9-e332b3c63a87.png)

Graças ao VCS, podemos fazer com que isso não ocorra, pois ele permite:

- Reverter arquivos para um estado anterior.
- Reverter o projeto inteiro para um estado anterior.
- Comparar as alterações realizadas ao longo do projeto.
- Ver quem introduziu uma mudança ou atualizou o arquivo, e quando.
- E o mais importante: assegurar que os arquivos não se percam.

De agora em diante, o `Git` vai nos ajudar a salvar e identificar todas as
mudanças que faremos durante o desenvolvimento de um projeto, seja de um ou
mais arquivos.

Cada vez que confirmar uma mudança, ou salvar o estado de seu projeto no `Git`,
ele basicamente tira uma foto do estado de todos os seus arquivos naquele
momento, e salva uma referência a essa foto. Para ser eficiente, se os arquivos
não foram modificados, o `Git` não armazena o arquivo novamente, apenas um link
para o arquivo idêntico que já estava armazenado.

Tanto a coleção de arquivos como suas versões completas serão salvas em um
`repositório`.

Em suma, o `Git` pensa em seus arquivos como um fluxo de "imagens". Assim, a
cada mudança que realizamos, ele tirará uma foto no instante em que lhe
indicarmos e tudo isso será armazenado em um `repositório local`.

**Vamos conhecer agora algumas palavras-chave que você certamente irá ouvir
quando trabalhar com Git.**

- **Repositório local**: Quando falamos repositório local, fazemos referência
  aos arquivos e suas versões localizados em nosso equipamento. Aqui,
  encontraremos duas partes muito importantes:
  * Working directory: é o nosso diretório de trabalho
  * Staging area: área intermediária, de preparação, na qual alterações
    são adicionadas para formar uma nova versão do projeto

- **Repositório remoto**: o `Git` nos permite sincronizar nosso repositório
  local com um repositório remoto que pode estar na "nuvem"
