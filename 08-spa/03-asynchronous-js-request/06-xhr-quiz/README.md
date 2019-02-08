# Quiz

- Tipo: `quiz`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos

- Nesta seção você terá a oportunidade de se auto-avaliar para que teste seus conhecimentos. É uma oportunidade para ajustes e validação do seu aprendizado. Sucesso!

***

## Perguntas

### 1) Para que usamos o método `GET`?

#### Opções

1. Para confirmar que é possível estabelecer comunicação com o servidor.
2. Para recuperar dados.
3. Para manipulação de erros.
4. Para enviar dados.

<solution style="display:none;">2</solution>

### 2) Para que usamos o método `POST`?

#### Opções

1. Para confirmar que é possível estabelecer comunicação com o servidor.
2. Para recuperar dados.
3. Para a manipulação de erros.
4. Para enviar dados.

<solution style="display:none;">4</solution>

### 3) XHR é a abreviação de:

#### Opções

1. XMLHttpRequest.
2. Asynchronous JavaScript And XML.
3. AJAX.
4. Response Hipertext Xml.

<solution style="display:none;">1</solution>

### 4) Vá ao Google, abra suas `developer tools` e execute o seguinte no console:

```javascript
const req = new XMLHttpRequest();
req.open('GET', 'https://www.google.com/');
```

O que acontece?

#### Opções

1. A página de início do Google se abre no navegador.
2. Uma requisição assíncrona é enviada a `https://www.google.com`
3. Nada acontece.
4. Acontece um erro.

<solution style="display:none;">3</solution>

<!--

Explicação:

O método .open() do XHR não envia de fato a requisição! Ele configura o estado e dá ao objeto a informação que será necessária quando o request de fato acontece. Um pouco chato... então vamos enviar de fato a requisição.

-->

### 5) O método `.open ()` de um objeto XHR pode ter vários argumentos. Mas os mais importantes são:

#### Opções

1. `.open ()` não tem argumentos.
2. Nome da função e parâmetro.
3. método HTTP e URL.
4. URL e JSON.

<solution style="display:none;">3</solution>

### 6) Qual propriedade devemos estabelecer para a manipulação de uma resposta com sucesso?

#### Opções

1. asyncRequestObject.onsucces.
2. asyncRequestObject.onload.
3. asyncRequestObject.handleSuccess.
4. asyncRequestObject.oncorrect.

<solution style="display:none;">2</solution>

### 7) Qual a propriedade devemos estabelecer para a manipulação de erros?

#### Opções

1. asyncRequestObject.handleError.
2. asyncRequestObject.onincorrect.
3. asyncRequestObject.onerror.
4. asyncRequestObject.errorReponse.

<solution style="display:none;">3</solution>

### 8) Quando nossa resposta é um JSON, devemos convertê-la para um objeto JavaScript e isso é feito com:

#### Opções

1. JSON.parse();
2. Object.json();
3. JSON.object();
4. parser.JSON();

<solution style="display:none;">1</solution>
