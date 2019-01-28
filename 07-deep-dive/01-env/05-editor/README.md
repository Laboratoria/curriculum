# Editor de texto

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

> Definir os estilos de código nos ajudará muito como equipe para trabalhar com padrões. Poderíamos ter estilos de código muito genéricos como por exemplo:
> Usar tabs para as indentações de todos os arquivos ou muito específico como usar 4 colunas de indentação somente para os arquivos HTML, mas aplicá-los manualmente será uma dor de cabeça constante porque precisaremos revisar constantemente que estilos devemos aplicar a cada arquivo e manter informada a equipe para apliquem esses estilos nos seus respectivos IDE's.
>
> Mas calma! Para isso existe o EditorConfig para ajudarmos a automatizar e centralizar os estilos de código. Utilizá-lo é simples como instalar um _plugin_ em nosso IDE e adicionar no nosso projeto um arquivo `.editorconfig` com todos os estilos que precisemos.
>
> Fonte: [O que é .editorconfig e como utilizá-lo](https://showmethecode.com.br/2017/03/29/editor-config/)

Exemplo de `.editorconfig`:

```text
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## leitura complementar

[O que é .editorconfig e como utilizá-lo](https://showmethecode.com.br/2017/03/29/editor-config/).
