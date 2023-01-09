---
type: read
duration: 1h
---

# Formulários

## Objetivos de Aprendizagem

Nesta leitura aprenderemos:

- O que são formulários no `HTML`
- Os principais elementos de um formulário
- Os atributos dos elementos de um formulário

## Vejamos o que são os formulários

Os formulários são uma forma simples de solicitar informação ao usuário que está
em uma página web, permitindo que o usuário insira informação. Os formulários
são um dos pontos principais de interação do usuário com o site.

## Guia de conceitos chave

Vamos resivar a documentação do MDN sobre
[formulários](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/form),
também vamos ver a guia do MDN para aprender mais detalhes sobre
[os forms](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Forms).

Agora que conhecemos os elementos para criar um formulário, vamos criar um.
Mãos a obra!!👩🏽‍💻

1. Crie um arquivo com o nome `index.html` e adicione a tag `form` para começar
   o seu formulário.

2. Depois adicione um `input` onde o usuário irá inserir o seu email, este campo
   deve ser obrigatório.
   > Lembre de colocar o tipo do `input` e os atributos necessário (não se
   > esqueça de usar o atributo `required` para deixar o `input` obrigatório)

   ```html
   <form>
     <input
       type="email"
       id="email-example"
       placeholder="Email"
       name="email-example"
       required
     />
   </form>
   ```

3. Também adicione a tag `label` para associar o `input` criado.

   ```html
   <form>
     <label for="email-example">Email</label>
     <input
       type="email"
       id="email-example"
       placeholder="Email"
       name="email-example"
       required
     />
   </form>
   ```

4. Agora dentro do form adicione um `input` de senha.

   ```html
   <form>
     <label for="password-example">Password</label>
     <input
       type="password"
       id="password-example"
       placeholder="Password"
       name="password-example"
       required
     />
   </form>
   ```

5. Agora, crie um `select` para que o usuário possa escolher um valor da lista.

   ```html
   <select name="select-example">
     <option value="value1">First option</option>
     <option value="value2" selected>Second option</option>
     <option value="value3">Third option</option>
   </select>
   ```

6. Também adicione um `radiobutton`, no qual o usuário poderá escolher apenas uma
   das opções.

   ```html
   <label>
     <input type="radio" name="gender" value="female"> Woman
   </label>
   <label>
     <input type="radio" name="gender" value="male"> Man
   </label>
   <label>
     <input type="radio" name="gender" value="other"> Other
   </label>
   ```

7. E adicione um `checkbox` para cria os termos e condições.

   ```html
   <label>
     <input type="checkbox" name="conditions" value="accept-conditions" checked />
     I agree to terms and conditions
   </label>
   ```

8. Por último crie o botão de enviar.

   ```html
   <button type="submit">Send</button>
   ```

O resultado deste HTML deve ser esse:

![Exemplo do formulário](https://user-images.githubusercontent.com/11894994/57497763-691f1a00-72af-11e9-879a-0b9ac62795ce.png)

Agora está em suas mãos colocar o estilo que quiser no `css`.

Para aprender a trabalhar com `forms` e `JavaScript` leia a documentação do
capítulo 18 do [Eloquent JavaScript](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/18-formularios-e-campos-de-formularios.md),
de Marijn Haverbeke, 2014.
