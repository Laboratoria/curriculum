---
type: quiz
duration: 15min
---

# Quiz #2

## Objetivos

- Nesta seção você terá a oportunidade de avaliar-se para colocar seus
  conhecimentos à prova. É uma oportunidade para que verifique e valide que
  realmente está aprendendo. Sucesso!

***

## Perguntas

### 1) "Técnica de projeto que consegue que um único sítio se adapte perfeitamente a todos os dispositivos". Esta é uma definição que corresponde a

#### Opções

1. Grid system
2. Media queries
3. Viewport
4. Web Design Responsivo

<solution style="display:none;">4</solution>

### 2) Na imagem a seguir, se dissermos que a seção de títulos (Artigos, Ferramentas, etc) é uma única `row`, a classe para usar em uma grid de 12 colunas para cada coluna será `.col-`

![Exemplo da
*grid*](https://user-images.githubusercontent.com/11894994/57672459-94c33c80-75ee-11e9-9d0e-9fc11258bb3b.jpg)

#### Opções

1. 2
2. 3
3. 4
4. 6
5. 12

<solution style="display:none;">1</solution>

### 3) Uma técnica que utiliza a regra `@media` para incluir blocos CSS que serão executados se as condições dadas forem verdadeiras. Esta é a definição de

#### Opções

1. Grid system
2. Media queries
3. Viewport
4. Web Design Responsivo

<solution style="display:none;">2</solution>

### 4) Qual regra de CSS permite verificar as características de um dispositivo para aplicar um determinado estilo?

#### Opções

1. .row
2. .col
3. @media
4. `<meta name="viewport" content="width=device-width;initial-scale=1.0" />`

<solution style="display:none;">3</solution>

### 5) No código a seguir, qual é a media feature?

```css
@media screen and (max-width: 480px) {
  body {
    background-color: #eee;
  }
}
```

#### Opções

1. @media
2. screen
3. max-width: 480px
4. and

<solution style="display:none;">3</solution>

### 6) No código a seguir, qual é o media type?

```css
@media screen and (max-width: 480px) {
  body {
    background-color: #eee;
  }
}
```

#### Opções

1. @media
2. screen
3. max-width: 480px
4. and

<solution style="display:none;">2</solution>

### 7) No código a seguir, qual é o operador lógico?

```css
@media screen and (max-width: 480px) {
  body {
    background-color: #eee;
  }
}
```

#### Opções

1. @media
2. screen
3. max-width: 480px
4. and

<solution style="display:none;">4</solution>

### 8) Quando desenvolvemos um sítio responsivo, mas encontramos o caso do dispositivo móvel à esquerda, o que devemos adicionar para que apareça como o dispositivo móvel da direita?

![Missing
viewport](https://camo.githubusercontent.com/11e38991707aa776ed0768f201de894123959f5f/68747470733a2f2f646576656c6f706572732e676f6f676c652e636f6d2f7365617263682f6d6f62696c652d73697465732f696d67732f6d6f62696c652d73656f2f76696577706f72742e706e67)

#### Opções

1. Falta indicar a meta tag viewport no head
2. Falta a meta tag charset UTF8 no head
3. Falta adicionar o script no footer
4. Falta fazer o sítio web

<solution style="display:none;">1</solution>

### 9) Se for necessário adaptar estilos para dispositivos com tamanhos maiores ou iguais a um iPhone 6 (width: 375px), qual seria a media feature a ser utilizada?

#### Opções

1. max-width: 375px
2. min-width: 375px
3. max-height: 375px
4. min-height: 375px

<solution style="display:none;">2</solution>

### 10) Se desejarmos aplicar estilos a dispositivos com tamanhos menores ou iguais a um Galaxy S5 com resolução de 1080px e Device Pixel Ratio (DPR) de 3.0, qual seria a media query a ser utilizada?

> **Observação:** Os pixels que usamos no CSS não são sempre a resolução do
> dispositivo. Isso acontece porque os que usamos em CSS são Device Independent
> Pixels (DIP), que como diz seu nome, são independentes do hardware. Para
> calcular o DIP de um dispositivo, usamos a seguinte fórmula:
> DIP = Resolução / DPR
> Conhecendo esta fórmula, é suficiente para resolver esta questão?

#### Opções

1. @media screen and (min-width: 1080px) { ... }
2. @media screen and (max-width: 1080px) { ... }
3. @media screen and (min-width: 360px) { ... }
4. @media screen and (max-width: 360px) { ... }

<solution style="display:none;">4</solution>
