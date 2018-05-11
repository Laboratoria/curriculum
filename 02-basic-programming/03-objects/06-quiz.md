# 06 - Quiz

## Quiz 1

* Tipo: `quiz`
* Formato: `ritmo próprio`
* Duração: `15min`

### Objetivos

* Nesta seção, você terá a oportunidade de avaliar a si mesma para colocar seu conhecimento em teste. É uma oportunidade para você calibrar e validar que realmente está aprendendo. Sucesso!

### Perguntas

#### 1\) Qual das seguintes afirmações sobre Objetos **NÃO** está correta?

**Opções**

1. As _chaves_ dos objetos são equivalentes às suas propriedades
2. Podemos calcular seu comprimento com a propriedade `length`
3. Não é necessário colocar as _chaves_ entre aspas
4. Podemos incluir uma função como propriedade

2

#### 2\) Como podemos acessar os valores de um objeto? Você pode selecionar uma ou mais opções

**Opções**

1. Usando colchetes `[]`
2. Usando parênteses `()`
3. Usando dois pontos `:`
4. Usando ponto `.`

1,4

#### 3\) As propriedades geralmente \_\_\_\_\_\_\_\_\_\_\_\_\_ algo sobre o valor associado e os métodos geralmente \_\_\_\_\_\_\_\_\_\_\_\_\_ algo sobre o valor associado

**Opções**

1. nos mostram - conservam
2. conservam - nos mostram
3. nos dizem - fazem
4. fazem - nos dizem

3

#### 4\) `toUpperCase()` é \_\_\_\_\_\_\_\_\_\_\_\_\_ que faz a ação de _capitalizar_ o valor associado, enquanto `length` é \_\_\_\_\_\_\_\_\_\_\_\_\_ que nos informa o _tamanho_ do valor associado

**Opções**

1. um objeto - um array
2. um array - um objeto
3. uma propriedade - um método
4. um método - uma propriedade

4

#### 5\) No código a seguir

```javascript
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi']
};
```

Como eu acesso a propriedade `director`?

**Opções**

1. `movie{director}`
2. `director[0]`
3. `movie.director`
4. `return director`

3

#### 6\) Qual é o erro no código a seguir?

```javascript
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson' ],
  oscar: 1,
  other awards: 'best sound',
  tags: []
}
```

**Opções**

1. O número `1` deve estar entre aspas
2. Faltam as aspas para a propriedade `other awards`
3. A propriedade `tags` não pode estar vazia
4. Não há erro

2

#### 7\) Qual é o resultado do código a seguir?

```javascript
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi']
};

console.log(movie.stars[2]);
```

**Opções**

1. Michael J. Fox
2. Christopher Lloyd
3. Leia Thompson
4. indefinido

3

#### 8\) No código a seguir

```javascript
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi']
};
```

Como podemos acessar a lista de _chaves_ do objeto `movie`?

**Opções**

1. `movie:keys`
2. `movie.length`
3. `Object.keys(movie)`
4. `return keys(movie)`

3

#### 9\) Qual é o erro no código a seguir?

```javascript
function objectToArray(object) {

  var items = Object.keys(object);
  var newArray = [];

  for (var i = 0; i < items.length; i++) {
    newArray.pop([items[i], object[items[i]]]);
  }

  return newArray;
}

console.log(objectToArray({make: 'Ford', model: 'Mustang', year: 1964}));
// → [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
```

**Opções**

1. A variável `newArray`não pode estar vazia
2. A variável `i`deve começar em`1`
3. Deve ser usado em `push`vez de`pop`
4. Deve ser usado em `console.log`ao invés de`return`

3

