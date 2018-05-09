# 04 - Arrays and Objects

## Combinando matrizes com objetos

* Tipo: `leitura`
* Formato: `ritmo próprio`
* Duração: `60min`

### Objetivos de Aprendizagem

* Entender, por meio de um exemplo, como combinar as duas estruturas de dados aprendidas nesta unidade: `arrays`e`objects`

O texto abaixo é amplamente baseado, com alguns ajustes, em 4 de [JavaScript para crianças](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf) , Nick Morgan, 2015.

### Combinando _arrays_ com _objects_

Já vimos o caso de ter um `array`como valor de uma propriedade **dentro de** um `object`\(por exemplo, um`array` do elenco de um `object`movie\), mas outra combinação bem comum para agrupar dados é ter um `array`de `objects` .Vejamos um exemplo:

Imagine que temos dados de 3 estudantes da Laboratoria e queremos estruturá-los em nosso programa. Para cada aluna, temos certos dados: seu nome, seus pontos, os cursos que ela completou e se a aluna deixou ou continua com o programa.

Uma maneira de estruturar esses dados seria criar um `object`para cada aluna, cada um com suas informações e, em seguida, um `array`que contenha todos os três `objects`.

Vamos ver:

```text
var michelle = {
  name: 'Michelle',
  points: 2000,
  isActive: true,
  courses: ['Intro JS', 'JS avanzado', 'JS master']
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
  courses: ['Intro JS', 'JS avanzado']
};

var students = [michelle, alexandra, andrea];
```

Observe que para cada propriedade `objects`usamos um tipo diferente de dados:

* O nome é um `string`
* Os pontos são um `number`
* Para descobrir se ele está estudando ou saiu do programa, escolhemos um `boolean`, onde `true`quer dizer que ela está ativa \(ou seja, estudando\)
* Os cursos que completou são um `array`.

Que legal quando vemos tudo o que aprendemos aplicado em um único bloco de código, certo? :\) A melhor parte é que com essa estrutura podemos acessar os dados de maneira simples.

Em seguida, Michelle diz-lhe como a usar `funções`, `estruturas de repetição`e `estruturas condicionais`para imprimir no console:

1. Os nomes de todos os alunos ativos
2. O total de pontos da turma
3. Os nomes dos alunos que fizeram o curso **"JS avanzado"**

![v&#xED;deo](https://camo.githubusercontent.com/e3cf96045f2698c816b3c9be29b1eaf80d402406/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f4d3476584a363249496c492f302e6a7067)

