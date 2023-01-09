---
type: quiz
duration: 15min
---

# Quiz 2

## Objetivos

- Faça um segundo teste para garantir que terminaremos a unidade com uma
  compreensão completa dos conceitos.

***

## Perguntas

### 1\) Para que os objetos são úteis?

#### Opções

1. Para deixar de usar _arrays_ e variáveis
2. Para poder usar repositórios em `Git`
3. Para armazenar diferentes peças de informação sobre você
4. Para salvar minhas informações na nuvem e depois compartilhá-las

<solution style="display:none;">3</solution>

### 2\) Qual das seguintes afirmações sobre Objetos é correta? Você pode selecionar uma ou mais opções

#### Opções

1. As propriedades devem sempre ser colocadas entre aspas
2. Nós não devemos incluir um _array_ como propriedade
3. Podemos incluir uma função como propriedade
4. As chaves dos objetos são equivalentes às suas propriedades

<solution style="display:none;">3,4</solution>

### 3\) Podemos acessar os valores de um objeto usando colchetes `[]`ou usando ponto`.`

#### Opções

1. Verdadeiro
2. Falso

<solution style="display:none;">1</solution>

### 4\) Os métodos são \_\_\_\_\_\_\_\_\_\_\_\_\_ que contêm \_\_\_\_\_\_\_\_\_\_\_\_\_

#### Opções

1. propriedades - funções
2. funções - propriedades
3. elementos - objetos
4. objetos - elementos

<solution style="display:none;">1</solution>

### 5\) Qual é o resultado do código a seguir?

```javascript
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};

console.log(movie.tags[1]);
```

#### Opções

1. Adventure
2. Comedy
3. Sci-Fi
4. undefined

<solution style="display:none;">2</solution>

### 6\) Qual é o erro no código a seguir?

```javascript
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox'; 'Christopher Lloyd'; 'Lea Thompson'],
  oscar: 1,
  'other awards': 'best sound',
  tags: [],
};
```

#### Opções

1. A propriedade `tags` não pode estar vazia
2. As aspas `' '` da propriedade `other awards` estão sobrando
3. Na propriedade `stars`, devemos usar vírgulas \(`,`\) em vez de pontos e
   vírgulas \(`;`\)
4. Não há erro

<solution style="display:none;">3</solution>
