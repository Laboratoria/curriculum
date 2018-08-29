# Desafios

- Tipo: `exercício`
- Formato: `individual`
- Duração: `20h`

## Objetivos

- A seguir apresentamos os desafios que você deve completar para testar seus conhecimentos. Lembre-se que com estes exercícios você deve utilizar manipulação do DOM e eventos com jQuery.

***

### 1. F O O D M A P

Crie um web-app que por meio de um *input* seja possível filtrar os restaurantes que estejam próximos a você. *(Você deve decidir a estrutura que terão seus dados. Você pode criar uma lista de restaurantes com um *array* ou um objeto, de forma individual. O projeto é totalmente livre)*.

#### Fluxo da aplicação.

Tela *splash* com duração de 2 a 5 segundos que redireciona para a página principal.

![Splash](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/splash.jpg?raw=true)

Na página principal são apresentados todos os restaurantes "perto de você" junto com o *input* para filtrar sua seleção *(os critérios de filtro são decisão sua; pode ser por tipo de comida, preço, ordem alfabética, etc.)*.

![Tela principal](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/2.jpg?raw=true)

Uma vez feita a seleção do filtro devem ser exibidos unicamente os restaurantes que atendam à condição.

![Tela filtrada](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/3.jpg?raw=true)

Ao selecionar algum dos restaurantes, será exibida a informação dele por meio de um modal.

![modal imagen](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/5.jpg?raw=true)

Uma vez fechado o modal, deve retornar à tela principal.

![última tela](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/6.jpg?raw=true)

### 2. L Y F T

Desenvolva um web-app que reproduza o sítio de **Lyft**. Neste desafio você deverá cumprir os passos necessários para que seu usuário possa se registrar.

#### Fluxo da aplicação.

Tela *splash* com duração de 2 a 5 segundos que redireciona à pagina inicial. A página inicial conta com dois botões. Neste momento seguiremos o fluxo de **SING UP**.

![início](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ff67ceb625957cd36d4c16ba6e0408c727bd0682/04-social-network/02-jquery/08-code-challenges/lyft/splash.png)

Na tela seguinte teremos um formulário no qual nosso usuário poderá escolher o país e deverá digitar o número de telefone. O botão **NEXT** deve estar desabilitado até que se ingresse um número de 10 dígitos. 

![registro](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/lyft/ingreso-numero.jpg?raw=true)

Uma vez digitado o número do telefone, será habilitado o botão e ao dar um *click* deve enviar um alerta com um código gerado aleatoriamente (LAB-000) e redirecionar para a página a seguir.

![codigo](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/lyft/generacion-codigo.jpg?raw=true)

Nesta página deve ser digitado o código informado anteriormente e uma vez digitado será habilitado o botão que redireciona nosso usuário à pagina na qual digitará seus dados. *(Pode ter a opção de enviar outro código)*.

![verificacion](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/lyft/verificacion-numero.jpg?raw=true)

Para informar seus dados precisamos de um formulário que peça o nome, sobrenome e e-mail. Deverá também ter um *checkbox* para que se aceitem os termos e condições do serviço.

![datos](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ff67ceb625957cd36d4c16ba6e0408c727bd0682/04-social-network/02-jquery/08-code-challenges/lyft/ingreso-datos.png)

Uma vez realizado o anterior, só deverá se exibida uma página ao usuário que indique que tenha concluído o registro com sucesso.

![final](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ff67ceb625957cd36d4c16ba6e0408c727bd0682/04-social-network/02-jquery/08-code-challenges/lyft/final.png)

**NOTA:** Todas as nossas páginas devem ter uma maneira de voltar para a página anterior
