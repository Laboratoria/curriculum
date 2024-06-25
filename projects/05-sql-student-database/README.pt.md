# Student Database

## Índice

* [1. Considerações gerais](#1-Considerações-gerais)
* [2. Preâmbulo](#2-Preâmbulo)
* [3. Resumo do projeto](#3-Resumo-do-projeto)
* [4. Configuração do Ambiente de Desenvolvimento](#4-Configuração-do-Ambiente-de-Desenvolvimento)
* [5. Entregáveis](#5-Entregáveis)
* [6. Considerações para pedir seu Project Feedback](#6-considerações-para-pedir-seu-Project-Feedback)
* [7. Objetivos de aprendizagem](#7-Objetivos de aprendizagem)

---

## 1. Considerações gerais

* Este projeto deve ser realizado de forma **individual**.
* O tempo estimado para completar o projeto é de 2 a 5 Sprints.
* Foque em aprender e não apenas em "completar" os tutoriais ou exercícios.

## 2. Preâmbulo

![Workshop](https://images.unsplash.com/photo-1426927308491-6380b6a9936f)

_Crédito: Foto de [Barn Images](https://unsplash.com/@barnimages)_
_no [Unsplash](https://unsplash.com/photos/assorted-handheld-tools-in-tool-rack-t5YUoHW6zRo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)_

Os comandos DDL (Data Definition Language) em SQL são fundamentais para a criação,
modificação e exclusão de objetos de banco de dados. Esses comandos permitem
definir a estrutura e características das tabelas, índices, views e outros
elementos essenciais no design de um banco de dados.

## 3. Resumo do projeto

Neste projeto, você seguirá dois tutoriais do freeCodeCamp para aprender
os comandos DDL (Data Definition Language) em SQL.

### [Learn SQL by Building a Student Database: Part 1](https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-1)

No primeiro tutorial, você aprenderá a construir e gerenciar um banco de dados de
estudantes utilizando SQL e PostgreSQL. Começará configurando o ambiente
necessário, que inclui a instalação do PostgreSQL e o uso de máquinas
virtuais. Através de comandos SQL, você será guiado na criação de tabelas com
chaves primárias e estrangeiras, inserção e consulta de dados, e
atualização e exclusão de registros. Além disso, explorará o uso de
scripts Bash para automatizar tarefas e gerenciar permissões de arquivos.

Clique [aqui para iniciar o primeiro tutorial](https://gitpod.io/new/?autostart=true#CODEROAD_TUTORIAL_URL=https%3A%2F%2Fraw.githubusercontent.com%2FLaboratoria%2Flearn-sql-by-building-a-student-database-part-1%2Fmain%2Ftutorial.json,CODEROAD_DISABLE_RUN_ON_SAVE=true/https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-1).

### [Learn SQL by Building a Student Database: Part 2](https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-2)

No segundo tutorial, você se aprofundará na administração e análise
de bancos de dados de estudantes usando SQL e PostgreSQL. Aprenderá a
realizar consultas avançadas utilizando JOIN para combinar dados de múltiplas
tabelas e a utilizar funções de agrupamento (GROUP BY) e ordenação
(ORDER BY). Também serão abordadas as funções agregadas para sumarizar
dados e a modificação de estruturas de tabelas existentes com ALTER TABLE.
Esta parte inclui a criação de backups e restauração
de bancos de dados, e o uso de scripts Bash para uma gestão mais
eficiente e segura do seu ambiente.

Clique [aqui para iniciar o segundo tutorial](https://gitpod.io/new/?autostart=true#CODEROAD_TUTORIAL_URL=https%3A%2F%2Fraw.githubusercontent.com%2FLaboratoria%2Flearn-sql-by-building-a-student-database-part-2%2Fmain%2Ftutorial.json,CODEROAD_DISABLE_RUN_ON_SAVE=true/https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-2)

## 4. Configuração do Ambiente de Desenvolvimento

Os tutoriais utilizam [Gitpod](https://gitpod.io/). Com o Gitpod, os
desenvolvedores podem iniciar instantaneamente um ambiente de desenvolvimento
completo com todas as ferramentas e dependências necessárias para
trabalhar em seu projeto, eliminando a necessidade de configurar
manualmente o ambiente em suas próprias máquinas.

A seguir, você encontra o passo a passo para trabalhar com o Gitpod.
No entanto, você pode ver este [vídeo](https://youtu.be/legfwHxU_cI)
que preparamos.

### Passo 1. Crie uma conta no Gitpod usando o Github

Para criar uma conta no Gitpod utilizando o GitHub, siga estes passos:

1. Acesse o site do Gitpod em [gitpod.io](https://www.gitpod.io/).
2. Clique no botão "Login" no canto superior direito da página.
3. Selecione a opção "Continue with GitHub".
4. Você será redirecionado para a página de autorização do GitHub. Se não tiver feito
   login no GitHub, será solicitado que o faça.
5. Após fazer login no GitHub, será solicitado que você autorize o Gitpod
   a acessar sua conta do GitHub. Revise as permissões e clique em
   "Authorize Gitpod" (Autorizar Gitpod).
6. Complete as informações solicitadas para finalizar o registro.
7. Pronto! Agora você tem uma conta no Gitpod vinculada à sua conta do GitHub.

### Passo 2. Crie um workspace para os tutoriais

1. No [Gitpod](https://gitpod.io/workspaces), clique no botão "New Workspace".
2. Na opção "Select a repository", insira a URL do repositório do tutorial:
   - Tutorial 1: [https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-1](https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-1)
   - Tutorial 2: [https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-2](https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-2)
3. Verifique se nos demais campos estão selecionadas as opções "VSCode 1.90.2"
   e "Standard".
4. Clique em "Continue".
5. O Gitpod abrirá o VSCode com o novo workspace e começará a configurar
   o ambiente automaticamente.

### Passo 3. Inicie o tutorial

1. No VSCode aberto pelo Gitpod, abra o menu hambúrguer (três linhas
   horizontais no canto superior esquerdo).
2. Vá ao menu "View".
3. Clique na opção "Command Palette".
4. Digite "CodeRoad: Start" e selecione entre as opções para executá-lo.
5. Um novo painel com o tutorial será aberto.

### Passo 4. Retomar um tutorial de onde você parou da última vez

1. Faça login no [Gitpod](https://gitpod.io/workspaces) e liste os workspaces.
2. No workspace do tutorial que você deseja retomar, clique no menu de três pontos.
3. Selecione a opção "Open".
4. O Gitpod abrirá o VSCode com o novo workspace e começará a configurar
   o ambiente automaticamente.
5. Inicie o tutorial novamente seguindo o Passo 3.

## 5. Entregáveis

TODO por Sebastian

## 6. Considerações para pedir seu Project Feedback

Antes de agendar seu Project Feedback com seu coach, certifique-se de:

* [ ] Completar os 2 tutoriais propostos
* [ ] Ter um fork com um ambiente de Gitpod completo

## 7. Objetivos de aprendizagem

> ℹ️ Esta seção será gerada automaticamente no idioma pertinente, a partir
> dos objetivos de aprendizagem declarados no [`project.yml`](./project.yml),
> ao criar o repositório do projeto para uma coorte em particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Aqui você pode ver uma [lista de todos os objetivos de aprendizagem](../../learning-objectives/data.yml)
> que contempla nosso currículo.

