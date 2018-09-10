# Third party APIs

- Tipo: `leitura`
- Formato: `individual`
- Duração: `20min`

***

## Objetivos de Aprendizagem

- Entender a diferença entre as APIs do navegador e as APIs de terceiros.
- Conhecer as vantagens de utilizar APIs de terceiros.

## Lembremos o que é uma Web API

Já vimos muitas vezes que o acrônimo de API significa Application Programming Interface (Interface de Programação de Aplicações) e que podemos encontrá-las em diferentes lugares como o navegador, no computador, na web e outros. Também vimos que elas nos dão interoperabilidade entre diversos sistemas. Nesta unidade focaremos não na comunicação com um único dispositivo, mas sim entre milhares e milhões deles. Como? Por meio da internet, com **Web APIs**. Ajuste as legendas ou o tradutor automático e veja este vídeo:

[![Web APIs](https://img.youtube.com/vi/_49_6pjTXiQ/0.jpg)](https://youtu.be/_49_6pjTXiQ)

## APIs de terceiros

> As APIs de terceiros são APIs fornecidas por terceiros (duh). Esses terceiros são geralmente companhias (como Google, Facebook e outras) que permitem acessar suas funcionalidades por meio de linguagem de programação (no nosso caso, JavaScript) e usá-las em nossa aplicação web.

Este é um trecho traduzido de um [artigo da MDN sobre Third Party APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs).

## Prós e contras do uso de APIs de Terceiros

> ### Prós do uso de APIs de terceiros
>
> - **Rapidez.** Poder integrar em questão de segundos mapas, imagens ou serviços de autenticação em nossas aplicações e concentrar esforços nas regras de negócio.
> - **Robustez.** A maioria de APIs e serviços mais populares estão tão bem testadas que podemos garantir que a resposta virá corretamente na maioria dos casos.
> - **Imagem.** Quando os usuários costumam usar um bom serviço, acabam reconhecendo isso. Associar a nossa imagem a de uma empresa grande como Google, Facebook ou Twitter pode nos ajudar a contarmos com a boa percepção que os usuários têm desses gigantes.
> - **Manutenção.** De forma geral, as grandes empresas não deixarão que seus produtos se deteriorem, o que faz com que os serviços acessados por meio das APIs estejam em constante melhora, que na maior parte dos casos é totalmente transparente para a programadora que as utiliza.
> - **Inovação.** É lógico pensar que empresas líderes como Microsoft, eBay ou Amazon não se satisfazem em manter suas aplicações funcionando bem, mas tratam de melhorá-las constantemente, o que fará com que os usuários de suas APIs se vejam beneficiados com todas a melhorias que vão sendo produzidas.
>
> ### Contras do uso de APIs de terceiros
>
> - **Condições variáveis.** Ao nos associarmos a uma empresa por um contrato tão frágil como é uma licença de uso de uma API, normalmente estamos expostos à vontade de outra parte, o que pode levar à interrupção do serviço, obsolescência de métodos implementados ou perda da gratuidade do serviço, como acaba de ocorrer com Google Maps.
> - **Disponibilidade.** Como se não fosse suficiente nos preocuparmos em manter o funcionamento de nosso próprio servidor e aplicações, quedas de serviços externos, como as ocorridas este ano com a Amazon, podem deixar seus serviços inutilizados. Você pode imaginar ter uma loja virtual que funciona perfeitamente, mas admitindo apenas pagamento por PayPal e este não funciona?
> - **Imagem.** Anteriormente apontamos isso como uma vantagem, já que podemos nos favorecer do prestígio de uma boa marca ao trabalhar com ela, mas o que acontece quando a reputação de nossos parceiros vai à lama? Infelizmente é muito difícil separar por completo a imagem de um e outro e seremos prejudicados por erros alheios.
> - **Falta de inovação.** Quando os serviços de terceiros que usamos são atualizados constantemente geralmente não há queixas, mas pode acontecer o contrário também: que fiquem estagnados, nosso aplicativo avance mais rápido e sua API possa não atender mais às nossas demandas. Em situações como esta, surge a difícil decisão de mudar de provedor de serviços ou implementá-los por conta própria, com consequente custo adicional.
> - **Privacidade.** As leis são muito diferentes em cada país. Algumas como a LOPD espanhola, que é mais restritiva que as equivalentes em outros países, podem nos impedir legalmente de delegar certos dados ou serviços para seu processamento por terceiros.

Esse prós e contras são parte de um [post de GenbetaDev](https://www.genbetadev.com/programacion-en-la-nube/pros-y-contras-del-uso-de-apis-de-terceros). Nós focaremos nas coisas positivas neste momento e tiraremos proveito de tudo o que nos oferecem as APIs de terceiros para fazermos apps incríveis.
