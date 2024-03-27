# TypeScript

É uma linguagem de programação que potencializa o desenvolvimento
de software. Este superset do JavaScript aprimora projetos,
elevando a qualidade do código. Nesta introdução, forneceremos
uma base sólida para aproveitar ao máximo as capacidades do
TypeScript. Descubra o poder do TypeScript no desenvolvimento
web. Bem-vinda ao mundo do TypeScript!

## Conteúdo

- [Definição e propósito do TypeScript](#definição-e-propósito-do-typescript)
  + [Diferenças chave com o JavaScript](#diferenças-chave-com-o-javascript)

- [Instalação do TypeScript](#instalação-do-typescript)
  + [Como instalar o TypeScript globalmente usando npm](#como-instalar-o-typescript-globalmente-usando-npm)

- [Configuração do Projeto](#configuração-do-projeto)

- [Variáveis e tipos de dados](#variáveis-e-tipos-de-dados)
  + [Declaração de variáveis com let e const](#declaração-de-variáveis-com-let-e-const)
  + [Tipos básicos: **number**, **string**, **boolean**, **array**](#tipos-básicos-number-string-boolean-array)

- [Funções](#funções)
  + [Tipagem de parâmetros e retorno de funções](#tipagem-de-parâmetros-e-retorno-de-funções)
  + [Declaração e chamada de funções](#declaração-e-chamada-de-funções)

- [Interfaces](#interfaces)
  + [Definição de interfaces para estruturar objetos](#definição-de-interfaces-para-estruturar-objetos)
  + [Uso de interfaces em funções](#uso-de-interfaces-em-funções)

- [Tipos](#tipos)

- [Diferença entre tipos e interfaces](#diferença-entre-tipos-e-interfaces)

- [Boas práticas](#boas-práticas)

- [Próximos passos](#próximos-passos)

- [Conclusão](#conclusão)

## Definição e propósito do TypeScript

O TypeScript, desenvolvido pela Microsoft, aprimora o
desenvolvimento de software ao adicionar um sistema de
tipagem estática opcional ao JavaScript. Esse sistema,
chamado de "JavaScript com superpoderes", permite trabalhar
de maneira mais explícita com tipos de dados, detectando erros
em estágios iniciais e melhorando a qualidade do código. Mantendo
total compatibilidade com o JavaScript, o TypeScript contribui
com clareza estrutural, previne erros e destaca-se como uma
ferramenta essencial para projetos web, equilibrando
flexibilidade e confiabilidade. A tipagem de dados, essencial
para evitar erros, implica atribuir tipos específicos a
variáveis ou parâmetros, garantindo consistência nas operações.
Em um panorama de linguagens de programação, o TypeScript
destaca-se por sua capacidade de fortalecer a robustez do
código desde as primeiras etapas do desenvolvimento.

> [!NOTE]
> Em matemática, um superset é um conjunto que contém todos
> os elementos de outro conjunto. No caso do
> **TypeScript, é um superset do JavaScript**. Isso significa
> que tudo o que você pode fazer em JavaScript, também pode
> fazer em TypeScript.

### Diferenças chave com o JavaScript

As diferenças chave entre TypeScript e JavaScript concentram-se
principalmente no sistema de tipagem e em algumas características
adicionais introduzidas pelo TypeScript. A seguir, destacam-se
essas diferenças:

1. **Tipagem estática opcional**: Tipagem estática opcional para
detectar erros em estágios iniciais durante o desenvolvimento.

2. **Compatibilidade com JavaScript**: TypeScript é um superset
do JavaScript, permitindo a integração gradual em projetos existentes.

3. **Uso de classes e interfaces**: Permite a declaração de
classes e interfaces para uma programação mais orientada a objetos.

4. **Compilação para JavaScript**: Exige compilação para JavaScript
usando o compilador TypeScript (tsc) antes da execução.

5. **Adição de tipos de dados**: Introduz novos tipos de dados,
como enumerações e tipos condicionais.

6. **Desenvolvimento mais seguro**: Fornece um desenvolvimento
mais seguro com tipagem estática e características que melhoram
a qualidade do código.

7. **Extensão de arquivos**: Uma diferença importante é a extensão dos arquivos.
   + **JavaScript**: Os arquivos JavaScript geralmente têm a extensão .js.
   + **TypeScript**: Os arquivos TypeScript usam a extensão .ts.
8. **Deteção precoce de erros**: Uma diferença significativa é a
    detecção de erros durante o tempo de desenvolvimento
    (ou seja, enquanto você está programando), permitindo codificação mais rápida.
   + **JavaScript**: Você detecta os erros quando executa a aplicação.
   + **TypeScript**: Você detecta os erros durante a programação.

## Instalação do TypeScript

### Como instalar o TypeScript globalmente usando npm

Para este exemplo, primeiro, instale o TypeScript globalmente
em seu computador (lembre-se de que o TypeScript não é executado,
é transpilado) executando o seguinte código:

```bash
npm install -g typescript
```

Em seguida, crie um novo arquivo chamado **Hello.ts**, abra-o
em seu editor de código e escreva o seguinte código TypeScript:

```ts
function greet(person: string, date: Date) {
  console.log(`Hi ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
```

Posteriormente, no mesmo local onde você salvou
**Hello.ts**, execute o seguinte comando:

```bash
tsc -w Hello.ts
```

Como resultado, um novo arquivo chamado **Hello.js** deve ter
sido criado, e o código que ele contém é muito semelhante
(mas não igual) ao arquivo **Hello.ts**. A diferença é que
o arquivo **Hello.js** pode ser usado para execução.

## Configuração do Projeto

O arquivo `tsconfig.json` é usado para especificar a
configuração do compilador TypeScript (TSC). Algumas
das configurações comuns neste arquivo incluem a versão
do ECMAScript de destino, a localização dos arquivos de
origem e de saída, opções de compilação e outras configurações
relacionadas ao projeto TypeScript.

> [!TIP]
> [Exemplo básico de um arquivo](https://www.youtube.com/watch?v=DL2IBLWwfaU)
>
> [Documentação oficial](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Variáveis e tipos de dados

### Declaração de variáveis com **let** e **const**

Em TypeScript, a declaração de variáveis é feita
com as palavras-chave **let** e **const**, que
compartilham semelhanças com o JavaScript, mas com
a adição de tipagem estática opcional.

- Declaração com `let`:

  + Usado para declarar variáveis que podem ser reatribuídas.

```ts
let nome: string = "Exemplo";
```

- Declaração com `const`:

  + Usado para declarar variáveis com um valor
  constante que não pode ser reatribuído.

```ts
const idade: number = 25;
```

Essas declarações permitem especificar o tipo de dado que a
variável conterá, melhorando a clareza e prevenindo possíveis
erros durante o desenvolvimento.

### Tipos básicos: **number**, **string**, **boolean**, **array**

Em TypeScript, são usados tipos básicos para definir variáveis
com diferentes tipos de dados. Aqui estão exemplos de como usar
os tipos básicos:

- **number**

  + Representa valores numéricos, sejam inteiros ou decimais.

```ts
let idade: number = 32;
```

- **string**

  + Representa valores de texto.

```ts
let nome: string = "Ada Lovelace";
```

- **boolean**

  + Representa valores lógicos, ou seja, **true** ou **false**.

```ts
let ativo: boolean = false;
```

- **array**

  + Representa uma matriz de elementos do mesmo tipo. Você
  pode especificar o tipo dos elementos dentro da matriz.

```ts
let numeros: number[] = [1, 2, 3, 4, 5];
let palavras: string[] = ["um", "dois", "três"];
```

Esses tipos básicos fornecem um mecanismo robusto para definir
e trabalhar com diferentes tipos de dados em TypeScript,
contribuindo para a robustez e clareza do código.

> [!IMPORTANT]
> Documentação sobre [tipos de dados](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

| Tipo | Predicado |
|---|---|
|string| typeof s === "string"|
| number | typeof n === "number" |
| boolean | typeof b === "boolean" |
| undefined | typeof undefined === "undefined" |
| function | typeof f === "function" |
| array | Array.isArray(a) |

## Funções

### Tipagem de parâmetros e retorno de funções

Em TypeScript, a tipagem de parâmetros e o tipo de retorno das
funções são feitos para melhorar a clareza e a segurança do
código. Aqui está um exemplo de como aplicar a tipagem em
parâmetros e retorno de funções:

```ts
// Declaração de uma função com tipagem em parâmetros e tipo de retorno
function somar(a: number, b: number): number {
    return a + b;
}

// Chamada à função com argumentos do tipo correto
let resultado: number = somar(3, 5);

console.log(resultado);  // Saída: 8
```

Neste exemplo:

- A função **somar** espera dois parâmetros, ambos do tipo **number**.
- O tipo de retorno da função também é definido como **number**.

Ao chamar a função **somar**, é necessário fornecer
argumentos do tipo correto, e a variável **resultado**
é declarada com o tipo de retorno esperado. A tipagem
estática opcional no TypeScript permite detectar erros
durante a fase de desenvolvimento e fornece informações
úteis sobre os tipos de dados que a função espera e retorna.

> [!TIP]
> Se você tiver dúvidas sobre **funções**, **parâmetros**
ou **argumentos**, consulte
[esta informação](https://curriculum.laboratoria.la/es/topics/javascript/functions/classic)

### Declaração e chamada de funções

Em TypeScript, a declaração e chamada de funções seguem
um formato semelhante ao JavaScript, mas com a adição
de tipagem estática opcional. Aqui estão alguns exemplos
de como realizar a declaração e chamada de funções em TypeScript:

- Declaração de função

  + É possível especificar o tipo dos parâmetros e o tipo de retorno.

```ts
function saudar(nome: string): string {
    return `Olá, ${nome}!`;
}
```

- Chamada de função

  + Ao chamar a função, forneça argumentos do
  tipo esperado e manipule o valor de retorno.

```ts
let mensagem: string = saudar("Grace Murray Hopper");
console.log(mensagem);
```

## Interfaces

### Definição de interfaces para estruturar objetos

Em TypeScript, as interfaces são uma ferramenta fundamental
para definir a estrutura de objetos e garantir a consistência
na forma dos dados. Aqui está um exemplo de como definir uma
interface para estruturar objetos:

```ts
// Definição de uma interface para estruturar objetos
interface Pessoa {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
}

// Uso da interface para criar objetos que seguem sua estrutura
let usuaria: Pessoa = {
    nome: "Hedy Lamarr",
    idade: 32,
    email: "hedy@example.com"
};
```

Neste exemplo:

- A interface **Pessoa** define a estrutura de
um objeto que deve ter propriedades como **nome** e
**idade**, e opcionalmente pode ter a propriedade **email**.
ção de código mais legível, sustentável e seguro, ao
definir claramente a estrutura dos objetos em TypeScript.

### Uso de interfaces em funções

Em TypeScript, o uso de interfaces em funções fornece
uma maneira eficaz de especificar o tipo dos parâmetros
e o tipo de retorno que a função deve aceitar e devolver.
Observe o exemplo a seguir:

```ts
// Definição de uma interface para estruturar objetos
interface Ponto {
    x: number;
    y: number;
}

// Definição de uma interface para a função
interface CalculadoraDistancia {
    calcularDistancia(p1: Ponto, p2: Ponto): number;
}

// Implementação da interface em uma função
const calculadora: CalculadoraDistancia = {
    calcularDistancia(p1: Ponto, p2: Ponto): number {
        const distanciaX = p2.x - p1.x;
        const distanciaY = p2.y - p1.y;
        return Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
    }
};

// Uso da função
const pontoA: Ponto = { x: 1, y: 2 };
const pontoB: Ponto = { x: 4, y: 6 };

const distancia: number = calculadora.calcularDistancia(pontoA, pontoB);
console.log(`A distância entre os pontos é: ${distancia}`);
```

Neste exemplo:

- É definida uma interface **Ponto** para estruturar objetos
que representam coordenadas x e y.
- É definida a interface **CalculadoraDistancia** que especifica
uma função chamada **calcularDistancia** que recebe dois pontos
(**Ponto**) como parâmetros e retorna um número.
- A interface é implementada em um objeto **calculadora**, que
tem uma função **calcularDistancia**.
- São usados objetos que atendem à interface **Ponto** para
representar pontos.
- A função **calcularDistancia** é chamada usando o objeto
**calculadora** para obter a distância entre dois pontos.

Esse enfoque facilita a manutenção do código, fornecendo
uma estrutura clara e permitindo a verificação de tipos em funções específicas.

## Tipos

Em TypeScript, o **type** cria alias para tipos,
oferecendo nomes mais descritivos para combinações
ou tipos complexos. Conhecidos como **"Type Aliases"**
ou simplesmente **"Types"**, eles facilitam a legibilidade
e a clareza do código, sendo essenciais para definir novos
tipos de dados personalizados.

A forma básica de definir um tipo com **type** é a seguinte:

```ts
type MeuTipo = {
    propriedade1: string;
    propriedade2: number;
};
```

Neste exemplo, **MeuTipo** é um alias para um objeto
com duas propriedades: uma chamada **propriedade1**
que deve ser do tipo **string** e outra chamada
**propriedade2** que deve ser do tipo **number**.
Em seguida, você pode usar **MeuTipo** para declarar
variáveis, parâmetros de funções ou qualquer outro
lugar onde precise dessa estrutura de tipo.

Além de criar aliases para objetos, o **type**
também pode ser usado para definir outros tipos de
dados, como uniões, interseções e tipos condicionais.
Aqui estão alguns exemplos:

- **União de tipos**

```ts
type Resultado = string | number;

const variavel: Resultado = "Olá";
```

Neste caso, **Resultado** pode ser **string** ou **number**.

- **Interseção de tipos**

```ts
type A = { a: number };
type B = { b: string };

type AB = A & B;

const objeto: AB = { a: 1, b: "texto" };
```

**AB** é um tipo que tem todas as propriedades de **A** e **B**.

- **Tipo condicional**

```ts
type ENumero<T> = T extends number ? "Sim" : "Não";

const resultado1: ENumero<number> = "Sim";
const resultado2: ENumero<string> = "Não";
```

Neste caso, **ENumero** é um tipo condicional que
avalia se o tipo passado como parâmetro **(T)** é **number** ou não.

> [!IMPORTANT]
> O uso de **type** proporciona flexibilidade e clareza
> ao definir tipos em TypeScript, permitindo criar
> abstrações e estruturas mais complexas que podem ser
> reutilizadas em todo o código.

## Diferença entre tipos e interfaces

Tanto os tipos `type` quanto as interfaces
`interface` são usados para definir estruturas
de dados no código. Embora compartilhem semelhanças,
existem algumas diferenças chave entre ambas.

- **Extensibilidade**
  + **Interfaces**: As interfaces no TypeScript são abertas
  e podem ser estendidas posteriormente. Você pode declarar
  uma interface com um nome específico e, em seguida, estendê-la
  para adicionar mais propriedades ou ajustar as existentes.

  ```ts
  interface Pessoa {
      nome: string;
      idade: number;
  }

  interface Empregado extends Pessoa {
      cargo: string;
  }
  ```

  + **Tipos**: Os tipos (type) também permitem criar
  estruturas de dados, mas não são extensíveis diretamente.
  Não é possível declarar um tipo e depois adicionar mais
  propriedades em uma declaração separada.

  ```ts
  type Pessoa = {
    nome: string;
    idade: number;
  };

  // Erro: 'cargo' não existe no tipo 'Pessoa'
  type Empregado = Pessoa & { cargo: string };
  ```

- **Compatibilidade com uniões e interseções**
  + **Interfaces**: São úteis para criar uniões
  e extensões de interfaces usando **extends**

  ```ts
  interface A {
    a: number;
  }

  interface B {
    b: string;
  }

  type Uniao = A | B; // Pode ser A ou B
  type Intersecao = A & B; // Deve ser tanto A quanto B
  ```

  + **Tipos**: Também podem realizar uniões
  e extensões de tipos, mas a sintaxe é
  ligeiramente diferente.

  ```ts
  type A = {
    a: number;
  };

  type B = {
    b: string;
  };

  type Uniao = A | B;
  type Intersecao = A & B;
  ```

- **Herança**
  + **Interfaces**: Podem ser estendidas por meio de
  **extends** para criar novas interfaces que herdam
  propriedades de outras.

  ```ts
  interface Animal {
    nome: string;
  }

  interface Mamifero extends Animal {
    mamiferoProp: boolean;
  }
  ```

  + **Tipos**: Não suportam diretamente o conceito
  de herança, mas você pode usar interseções para
  combinar tipos existentes.

  ```ts
  type Animal = {
    nome: string;
  };

  type Mamifero = Animal & {
    mamiferoProp: boolean;
  };
  ```

- **Declarar múltiplas interfaces ou tipos**
  + **Interfaces**: Você pode declarar várias interfaces
  em um mesmo bloco de escopo sem a necessidade de
  usar interseções.

  ```ts
  interface A {
    a: number;
  }

  interface B {
    b: string;
  }
  ```

  + **Tipos**: Se você tentar declarar dois tipos com o
  mesmo nome em um mesmo bloco de escopo, ocorrerá
  um erro. É necessário usar interseções para combinar tipos.

  ```ts
  type A = {
    a: number;
  };

  // Erro: Redefinição do nome 'A'
  type A = {
    b: string;
  };
  ```

- **Expressividade**
  + **Interfaces**: São frequentemente usadas para
  expressar a forma de objetos e são recomendadas
  ao definir contratos para objetos.

  + **Tipos**: São mais versáteis e podem expressar
  formas de dados mais complexas, como uniões, interseções
  e tipos condicionais.

  Use interfaces quando estiver trabalhando principalmente
  com objetos e contratos claros. Use tipos quando precisar
  de recursos mais avançados e flexibilidade para trabalhar
  com diferentes formas de dados.

> [!IMPORTANT]
> Ambos os tipos e interfaces têm seus usos específicos
> em TypeScript. A escolha entre eles muitas vezes
> depende das necessidades específicas de um projeto.
> Em alguns casos, eles podem ser usados de forma
> intercambiável, mas é importante entender suas
> diferenças e escolher a abordagem que melhor atende
> aos requisitos do código.

## Boas práticas

Ao trabalhar com TypeScript, é essencial adotar boas
práticas para garantir um código claro, legível e eficiente.
Algumas dessas práticas incluem:

1. **Use Tipagem Forte**: Aproveite ao máximo a tipagem
estática do TypeScript para evitar erros comuns e melhorar
a confiabilidade do código.

2. **Nomes Descritivos**: Dê nomes descritivos às variáveis, funções, tipos
e interfaces para facilitar a compreensão do código por outros desenvolvedores.

3. **Evite "any"**: Minimize o uso do tipo "any", pois ele anula a vantagem da tipagem
estática. Prefira especificar tipos adequados sempre que possível.

4. **Configuração do tsconfig.json**: Ajuste as configurações do arquivo `tsconfig.json`
para atender às necessidades específicas do seu projeto.
Isso pode incluir a versão do
ECMAScript alvo, opções de compilação e outras configurações relevantes.

5. **Interfaces para Estruturar Objetos**: Use interfaces para definir a
estrutura de objetos e garantir consistência nas formas de dados.

6. **Type Aliases para Tipos Complexos**: Utilize type aliases para criar nomes
mais descritivos para tipos complexos, melhorando a legibilidade do código.

7. **Evite Tipos Implícitos**: Evite depender fortemente de tipos implícitos,
especialmente quando a legibilidade do código estiver em jogo.
Forneça tipagem explícita quando necessário.

8. **Testes Unitários**: Integre testes unitários em seu processo de
desenvolvimento para validar a corretude do código e facilitar futuras alterações.

9. **Mantenha o Código Limpo**: Siga princípios de design de código limpo,
mantendo funções curtas, evitando redundância e adotando uma abordagem modular.

10. **Integração com Ferramentas de Build e IDEs**: Tire proveito da
integração do TypeScript com ferramentas de build como o Webpack e IDEs
como o Visual Studio Code para melhorar a eficiência do desenvolvimento.

## Próximos passos

Ao explorar o TypeScript, há diversos tópicos avançados que podem aprimorar
ainda mais seu conhecimento e capacidade de desenvolvimento.
Alguns desses tópicos incluem:

- **Genéricos**: Explore o uso de genéricos para criar componentes flexíveis
e reutilizáveis que funcionam com diferentes tipos de dados.

- **Decorators**: Aprenda sobre decorators, uma característica poderosa
que permite modificar ou estender comportamentos de classes, métodos e propriedades.

- **Mixins**: Descubra como implementar mixins em TypeScript para
compartilhar funcionalidades entre classes de maneira eficiente.

- **Namespaces e Módulos**: Entenda como organizar seu código usando
namespaces e módulos para evitar poluição do escopo global e melhorar a modularidade.

- **Enums Avançados**: Explore recursos avançados de enums,
como enums heterogêneos e enums computados.

- **TypeScript no Front-end**: Aplique o TypeScript no desenvolvimento
front-end usando frameworks como Angular ou React.

Lembre-se de que o aprendizado contínuo e a prática são fundamentais
para aprofundar seu domínio do TypeScript. Considere aplicar esses
conceitos em projetos reais e participar de comunidades online para
trocar experiências e aprender com outros desenvolvedores.

## Conclusão

O TypeScript oferece uma abordagem poderosa para o desenvolvimento de
software, combinando a flexibilidade do JavaScript com tipagem estática opcional.
Ao adotar TypeScript, você fortalece a robustez do código, reduzindo erros e
melhorando a manutenibilidade. Desde a instalação e configuração inicial até
a aplicação de conceitos avançados, esta introdução proporcionou uma base
sólida para explorar o TypeScript de maneira eficaz.

Ao continuar sua jornada com TypeScript, experimente, teste, aprofunde-se
em tópicos específicos e, acima de tudo, divirta-se explorando as
possibilidades dessa linguagem de programação versátil.

**Bem-vinda ao mundo do TypeScript, onde seu código se eleva a novos
patamares de clareza, confiabilidade e eficiência!**
