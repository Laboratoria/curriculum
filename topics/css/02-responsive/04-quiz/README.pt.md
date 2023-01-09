---
type: quiz
duration: 15min
---

# Quiz #1

## Objetivos

- Nesta seção você terá a oportunidade de avaliar-se e colocar seus
  conhecimentos à prova. É uma oportunidade para que verifique se realmente está
  aprendendo. Sucesso!

***

## Perguntas

### 1) O que é Web Design Responsivo?

#### Opções

1. Técnica de projeto que permite que um único sítio web se adapte perfeitamente
   a todos os dispositivos
2. Técnica de projeto em que se faz diferentes sítios para múltiplos
   dispositivos
3. Técnica de projeto em que se faz estilos somente para um dispositivo,
   normalmente para desktop

<solution style="display:none;">1</solution>

### 2) Os componentes de uma grid são

#### Opções

1. Columns
2. Cals
3. Setters
4. Gutters
5. Row

<solution style="display:none;">1,4,5</solution>

### 3) O que são as Media Queries?

#### Opções

1. Uma técnica que utiliza a regra *@media* para incluir um novo HTML, que será
   executado em nosso JS
2. Uma técnica que utiliza a regra *@media* para incluir blocos CSS que serão
   executados se as condições dadas forem verdadeiras
3. Uma técnica que utiliza a regra *@media* para incluir blocos CSS que serão
   executados se as condições dadas forem falsas
4. Uma técnica que utiliza a regra *@media* para incluir blocos JS que serão
   executados se as condições dadas forem verdadeiras

<solution style="display:none;">2</solution>

### 4) As regras *@media* são um tipo especial de regra CSS que permitem indicar

#### Opções

1. Múltiplas combinações de *queries*
2. Características que, se verdadeiras, aplicarão os estilos informados na regra
3. O meio em que se aplicam os estilos, incluindo o nome desse meio depois de
   *@media*
4. Nenhuma das anteriores

<solution style="display:none;">2,3</solution>

### 5) Os _____________ correspondem à condição que o dispositivo deve satisfazer e que deve ser verdadeira para que se aplique o código contido em nossa media query

#### Opções

1. Media Queries
2. Media Type
3. Media Feature
4. Operadores Lógicos

<solution style="display:none;">3</solution>

### 6) As Media Queries são formadas por

#### Opções

1. Media Features
2. Media Query
3. Media Type
4. Media Operators
5. Operadores Lógicos
6. Operadores Query

<solution style="display:none;">1,3,5</solution>

### 7) Para que serve o viewport?

#### Opções

1. Para definir a largura e altura utilizadas pelo navegador
2. Para definir a largura e escala utilizadas pelo navegador
3. Para definir a largura, altura e escala utilizadas pelo navegador
4. Para definir a quantidade de *media queries* a ser utilizada
5. Para definir a quantidade de arquivos css a ser utilizada

<solution style="display:none;">3</solution>

### 8) Os ___________ corresponden aos diferentes dispositivos onde se pode visualizar nosso sítio web

#### Opções

1. Media Features
2. Media Query
3. Media Type
4. Media Operators
5. Operadores Lógicos
6. Operadores Query

<solution style="display:none;">3</solution>

### 9) Dado o código a seguir, o que acontecerá?

```css
@media screen and (max-width: 700px){
  p {
    color: blue;
    font-size: 15px;
  }
}
```

#### Opções

1. Os estilos do parágrafo serão executados quando a tela do dispositivo móvel
   tiver 700px ou mais
2. Os estilos do parágrafo serão executados quando a tela do dispositivo móvel
   tiver 700ox ou menos
3. Os estilos do parágrafo serão executados quando a tela do laptop tiver 700px
   ou mais
4. Os estilos do parágrafo serão executados quando a tela do laptop tiver 700px
   ou menos

<solution style="display:none;">4</solution>

### 10) Dado o código a seguir, o que acontecerá?

```css
@media (min-width: 650px), tv and (orientation: landscape){
  img {
    max-width: 80%;
  }
}
```

#### Opções

1. Os estilos da imagem serão executados quando **(min-width: 650px)** for
   verdadeiro
2. Os estilos da imagem serão executados quando qualquer uma das medias seja
   verdadeiras
3. Os estilos da imagem serão executados quando **tv and (orientation:
   landscape)** for verdadeiro
4. Os estilos da imagem serão executados quando **(min-width: 650px), tv and
   (orientation: landscape)** for verdadeiro
5. Nada acontece

<solution style="display:none;">4</solution>
