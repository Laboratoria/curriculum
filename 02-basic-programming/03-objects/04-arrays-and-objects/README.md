# 04 - Arrays and Objects

## Combinando matrizes com objetos

* Tipo: `leitura`
* Formato: `individual`
* Duração: `60 min`

***

### Objetivos de Aprendizagem

* Entender, por meio de um exemplo, como combinar as duas estruturas de dados estudadas nesta unidade: `array` e `object`

O texto abaixo é amplamente baseado, com alguns ajustes, em 4 de [JavaScript for Kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf) , Nick Morgan, 2015.

### Combinando _arrays_ com _objects_

Já vimos o caso de ter um `array`como valor de uma propriedade **dentro de** um `object` \(por exemplo, um `array` do elenco de um `object` _movie_\), mas outra combinação bem comum para agrupar dados é ter um `array` de `objects`. Vejamos um exemplo:

Imagine que temos dados de 3 estudantes da Laboratoria e queremos estruturá-los em nosso programa. Para cada aluna, temos os dados: seu nome, sua pontuação, os cursos que ela completou e se a aluna deixou ou continua com o programa.

Uma maneira de estruturar esses dados seria criar um `object` para cada aluna, cada um com suas informações e, em seguida, um `array` que contenha todos os três `objects`.

Vamos ver:

```javascript
var michelle = {
  name: 'Michelle',
  points: 2000,
  isActive: true,
  courses: ['Intro JS', 'JS avançado', 'JS master']
};

var alexandra = {
  name: 'Alexandra',
  points: 4100,
  isActive: true,
  courses: ['Intro JS', 'Intro UX', 'UX master']
};

var andrea = {
  name: 'Andrea',
  points: 800,
  isActive: false,
  courses: ['Intro JS', 'JS avançado']
};

var students = [michelle, alexandra, andrea];
```

Observe que, para cada propriedade dos `objects`, usamos um tipo diferente de dados:

* O nome é um `string`
* Os pontos são um `number`
* Para descobrir se ela está estudando ou saiu do programa, escolhemos um `boolean`, onde `true` quer dizer que ela está ativa \(ou seja, estudando\)
* Os cursos que completou estão em um `array`.

Que legal quando vemos tudo o que aprendemos aplicado em um único bloco de código, né? :\) A melhor parte é que, com essa estrutura, podemos acessar os dados de maneira simples.

Em seguida, Michelle dirá como usar _funções_, _estruturas de repetição_ e _estruturas condicionais_ para imprimir no console:

1. Os nomes de todos as alunas ativas
2. O total de pontos da turma
3. Os nomes das alunas que fizeram o curso **"JS avançado"**

[![V&#xED;deo sobre arrays com objects](https://img.youtube.com/vi/M4vXJ62IIlI/0.jpg)](https://www.youtube.com/watch?v=M4vXJ62IIlI)

