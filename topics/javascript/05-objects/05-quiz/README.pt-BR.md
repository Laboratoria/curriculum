---
type: quiz
duration: 15min
---

# Quiz 1

## Objetivos

- Nesta seção, você terá a oportunidade de avaliar a si mesma para colocar seu
  conhecimento à prova. É uma oportunidade para você se testar e verificar que
  realmente está aprendendo. Sucesso!

***

## Perguntas

### 1\) Qual das seguintes afirmações sobre objetos **NÃO** está correta?

#### Opções

1. As chaves dos objetos são equivalentes às suas propriedades
2. Podemos calcular seu comprimento com a propriedade `length`
3. Não é necessário colocar as chaves entre aspas
4. Podemos incluir uma função como propriedade

<solution style="display:none;">2</solution>

### 2\) Como podemos acessar os valores de um objeto? Você pode selecionar uma ou mais opções

#### Opções

1. Usando colchetes `[]`
2. Usando parênteses `()`
3. Usando dois pontos `:`
4. Usando ponto `.`

1,<solution style="display:none;">4</solution>

### 3\) As propriedades geralmente \_\_\_\_\_\_\_\_\_\_\_\_\_ algo sobre o valor associado e os métodos geralmente \_\_\_\_\_\_\_\_\_\_\_\_\_ algo sobre o valor associado

#### Opções

1. nos mostram - conservam
2. conservam - nos mostram
3. nos dizem - fazem
4. fazem - nos dizem

<solution style="display:none;">3</solution>

### 4\) `toUpperCase()` é \_\_\_\_\_\_\_\_\_\_\_\_\_ que faz a ação de transformar em _maiúsculas_ o valor associado, enquanto `length` é \_\_\_\_\_\_\_\_\_\_\_\_\_ que nos informa o _comprimento_ do valor associado

#### Opções

1. um objeto - um _array_
2. um _array_ - um objeto
3. uma propriedade - um método
4. um método - uma propriedade

<solution style="display:none;">4</solution>

### 5\) Confira o código a seguir

```javascript
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi']
};
```

Como eu acesso a propriedade `director`?

#### Opções

1. `movie{director}`
2. `director[0]`
3. `movie.director`
4. `return director`

<solution style="display:none;">3</solution>

### 6\) Qual é o erro no código abaixo?

```javascript
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  oscar: 1,
  other awards: 'best sound',
  tags: []
};
```

#### Opções

1. O número `1` deve estar entre aspas
2. Faltam as aspas para a propriedade `other awards`
3. A propriedade `tags` não pode estar vazia
4. Não há erro

<solution style="display:none;">2</solution>

### 7\) Qual é o resultado do código seguinte?

```javascript
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};

console.log(movie.stars[2]);
```

#### Opções

1. Michael J. Fox
2. Christopher Lloyd
3. Lea Thompson
4. indefinido

<solution style="display:none;">3</solution>

### 8\) No código a seguir

```javascript
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};
```

como podemos acessar a lista de chaves do objeto `movie`?

#### Opções

1. `movie:keys`
2. `movie.length`
3. `Object.keys(movie)`
4. `return keys(movie)`

<solution style="display:none;">3</solution>

### 9\) Qual é o erro no código a seguir?

```javascript
const objectToArray = (object) => {
  const items = Object.keys(object);
  const newArray = [];

  for (let i = 0; i < items.length; i += 1) {
    newArray.pop([items[i], object[items[i]]]);
  }

  return newArray;
};

console.log(objectToArray({make: 'Ford', model: 'Mustang', year: 1964}));
// → [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
```

#### Opções

1. A variável `newArray` não pode estar vazia
2. A variável `i` deve começar em `1`
3. Deve ser usado em `push` vez de `pop`
4. Deve ser usado em `console.log` ao invés de `return`

<solution style="display:none;">3</solution>
