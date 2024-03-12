# **MARCO 1:** Data e Design

Bem-vindo ao primeiro marco da sua aprendizagem
em JavaScript através de projetos. Nesta fase,
você começará construindo uma aplicação focada
na geração de dados através de inteligência artificial.

## Tarefas deste marco

- [Protótipo](#protótipo)
- [Criação do conjunto de dados](#criação-do-conjunto-de-dados)
- [Teste de prompting](#teste-de-prompting)

### Protótipo

Elabore o design da interface da página principal,
onde serão exibidos os elementos do seu conjunto
de dados.

É essencial que sua proposta visual não apenas
represente a essência
da sua solução ideal, mas também se ajuste
rigorosamente aos
princípios fundamentais do
design visual

### Criação do conjunto de dados

O objetivo é criar um conjunto de dados que atenda às
[especificações fornecidas](../README.md/#geração-dos-dados).

1. **Definir tema**: Em equipe, escolha um tema para o
conjunto de dados,
por exemplo, personagens históricos, e certifique-se
de que as informações sejam variadas
e interessantes para interações futuras.

2. **Estruturar dados**: No arquivo `src/data/dataset.js,`
ao gerar seus dados,
substitua o conteúdo com as informações geradas.
Certifique-se de que o arquivo
exporte um array com 24 objetos, cada um seguindo
a estrutura detalhada
no
prompt
Verifique se cada objeto contém um **id** (identificador único),
**name** (nome), **shortDescription** (descrição curta) e
**description** (descrição estendida), **imageUrl** (para a imagem),
**facts** (fatos), e,
opcionalmente, **extraInfo** (informação adicional).

3. **Adicionar imagens**: Use ferramentas baseadas em inteligência
artificial,
como o gerador de imagens do Bing, para criar imagens correspondentes
a cada
elemento do conjunto de dados ou simplesmente pesquise no Google e
obtenha suas URLs.

4. **Dados de exemplo**: Se não conseguir gerar os dados em um
período curto, no máximo três dias, você pode recorrer aos dados de
exemplo disponíveis no caminho `./src/data/dataset.js`
**É crucial não dedicar um sprint completo exclusivamente
a esta tarefa**.

5. **Capturas de tela**: Inclua capturas de tela do prompt utilizado
para a geração de dados no arquivo readme, cumprindo com o
requisito do projeto.

### Teste de prompting

Certifique-se de verificar os testes executando
`npm run test:oas-prompting` para
garantir que o arquivo de dados gerado atenda aos requisitos especificados.

![Preview oas prompting](https://github.com/Laboratoria/curriculum/assets/39414582/58f383ec-0b61-45de-b848-b3380b7a8d1e)

## Precisa de Ajuda?

Em caso de dúvidas ou perguntas durante a execução deste projeto,
não hesite em procurar ajuda. Você pode encontrar apoio através de:

- **Documentação do Projeto:** Certifique-se de revisar minuciosamente a
informação fornecida no [README](../README.md), prestando especial
atenção às instruções, sugestões e leituras adicionais.

- **Coaches:** Os coaches estão disponíveis para fornecer ajuda.
Se encontrar desafios que a documentação não aborda ou se precisar
de uma explicação mais detalhada, não hesite em solicitar uma
reunião de orientação
(OH) ou entrar em contato conosco através do Slack.

- **Slack:** Você sempre pode escrever no canal do projeto
[#project-dataverse-pt](https://claseslaboratoria.slack.com/archives/C06BA7468AU),
onde suas colegas e coaches da Laboratoria podem oferecer
apoio de forma assíncrona.

[👈Todos os marcos](../README.md#6-marcos)
