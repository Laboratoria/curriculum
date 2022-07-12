# Configuração

- Tipo: `leitura`
- Formato: `individual`
- Duração: `5min`

***

Com o Git já instalado em nosso computador, vamos agora personalizar o ambiente
do Git.

> Lembre-se de que se você quiser executar comandos Git e estiver no Mac OS X ou
> Linux, deverá executá-los na linha de comandos. Porém, se seu sistema
> operacional é Windows, utilizará o Git Bash para executar os mesmos comandos
> de Git.

A primeira coisa a fazer é definir nosso nome de usuário \(_username_\) e e-mail
que o Git utilizará para gravar as alterações de código \(o que veremos mais
adiante: _commits_\). Podemos configurar esses dados através do comando `git
config`, o qual nos permite visualizar e configurar variáveis que controlam a
aparência e funcionamento do Git. Por exemplo, se executo o comando `git config
--list` em meu terminal, obtenho o seguinte resultado:

```text
user.name = michellesegv
user.email = michelle@laboratoria.la
```

\(Esses são os dados que eu já havia configurado\)

Agora, vamos definir o nosso ambiente de `Git`:

- Para definir seu **username** \(nome de usuário\), substitua `seu-username` na
  seguinte linha e depois pressione a tecla "enter":

  ```bash
  git config --global user.name seu-username
  ```

- Para definir seu **e-mail**, escreva o comando abaixo, pressionando "enter" em
  seguida:

  ```bash
  git config --global user.email seuemail@gmail.com
  ```

Os dados das linhas acima devem ser os mesmos que você usou ao criar a sua conta
no `GitHub`, pois eles ficarão gravados nos `commits` que você fizer no `Git` e
farão parte do histórico do projeto que está armazenado no `GitHub`.

[![Configurando
git](https://img.youtube.com/vi/fB5auBqxLtM/0.jpg)](https://www.youtube.com/watch?v=fB5auBqxLtM)
