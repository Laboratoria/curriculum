# Ciclo de desenvolvimento de software

* Tipo: `leitura`
* Formato: `individual`
* Duração: `5min`

***

Se simplificarmos ao mínimo o processo de desenvolvimento de software, poderíamos estabelecer 3 etapas básicas: **desenvolvimento**, **empacotamento** e **implantação**.

## Desenvolvimento

Durante esta etapa criamos o produto que temos em mente (ou iteramos sobre ele). Para esse fim, é importante contar com ferramentas que permitam **reconhecer rapidamente um erro** e **identificar onde ele ocorre** para podermos corrigi-lo e que permitam obter um _feedback_ de nossas alterações tão rápido quanto possível.

Por exemplo, em nossa aplicação, configuramos o `webpack` para que:

1. Abra um navegador quando o código seja "compilado" pela primeira vez.
2. Atualize o conteúdo cada vez que realizamos uma alteração.

***

**NOTA**:

`webpack`

* Notifica quando o conteúdo está disponível (ao invés de pressionar F5 até que a página esteja disponível);
* Evita a etapa extra de atualizar manualmente o navegador para verificar a alteração;
* Modifica o `DOM` com as alterações sem sequer atualizar a página.

Estas pequenas economias de "tempo perdido" refletem em uma experiência de desenvolvimento (DX) muito mais dinâmica.

***

## Empacotamento

Durante a etapa de desenvolvimento, quando executamos nossa aplicação,  precisamos de muita informação e muitas delas são adicionadas exclusivamente com esses fins.

Mas quando queremos empacotar nossa aplicação para publicá-la ao mundo, precisamos que seja tão **pequena** quanto possível e que seja executada o mais **rápido** possível.

Neste cenário, dizemos que nossa aplicação deve estar **otimizada** para um ambiente de *produção*.

Estes processos de *empacotamento* (`bundling`) pode possuir uma infinidade de passos. Alguns que são comuns:

* Concatenar, *minimizar* e *enfeiar* ("uglify") todo o código de um mesmo tipo em um só arquivo;
* Otimizar imagens, áudio e vídeo;
* Criar *sprites* ou versões *retina* e *standard* das imagens de fundo;
* ... Uma infinidade de outras coisas.

## Implantação (`deployment`)

Mas nada de tudo que fizemos até aqui tem sentido se não pudermos mostrar o que fizemos ao mundo (ou pelo menos para as nossas amigas).

Uma vez que temos nosso *bundle*, temos que decidir onde publicá-lo. Existem *milhões de alternativas*, para *milhares de tecnologias*, **tanto pagas quanto gratuitas**.

Como nós só precisamos implantar recursos estáticos, usaremos as [Github Pages](https://pages.github.com/). Github Pages (`gh-pages`) permitem publicar conteúdo web associado a seus projetos.

***

Já temos a configuração para nosso processo de **desenvolvimento** no `webpack.config.js`. Nas demais leituras desta unidade, veremos como usar `webpack`, `npm-scripts` e `gh-pages` para **empacotar** e **implantar** nossa aplicação.
