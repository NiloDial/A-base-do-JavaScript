# A Base do JavaScript
Projeto de estudos: aqui você encontrará a base do JavaScript, com os conceitos básicos para iniciantes, informações sobre essa linguagem de programação e alguns exercícios práticos.

# O QUE É JAVASCRIPT?

*JavaScript* é uma linguagem de programação muito popular na internet, basicamente qualquer site que você use hoje em dia muito provavelmente foi feito em JS. Se trata de uma linguagem de programação *client-side* isso significa que ela é executada no lado do cliente (um navegador do computador, por exemplo), mas não para por ai, o JS ficou tão poderoso com o passar do tempo que acabou indo para o lado do servidor também, atualmente é uma linguagem web muito poderosa, possibilitando construir um *front-end* e um *back-end* inteiro apenas usando ela.

Para chegar no resultado final que nos vemos nos sites que utilizamos no dia a dia o JS é complementado com outras ferramentas, as principais são o HTML, ferramenta responsável pelo conteúdo de uma página e CSS, ferramenta responsável pela estilização de uma página. Basicamente é com o HTML que inserimos conteúdo nas páginas, texto, imagens e etc, e para deixar tudo isso organizado e bonito, utilizamos o CSS, por fim, para dar vida a tudo isso o JS entra em ação.

# OS PRIMEIROS PASSOS

Para começar a estudar você vai precisar de algumas ferramentas, no caso do JS não são muitas, basicamente três, o Google Chrome, você precisa de um navegador. Um editor de código, recomendo o *VSCode*, da Microsoft e o *Node.js*, o Node é uma ferramenta que possibilita que você utilize o JS fora de uma navegador, no lado do servidor por exemplo, só para aprender o JS ele não é necessário, já que você pode digitar os seus primeiros comandos direto no console do navegador, porém, como vamos usar um editor de código externo para editar nossos códigos (VSCode), precisamos rodar o JS dentro dele, é ai que o Node entra em ação nesse caso.

Se você sabe o que é o *Github*, já tem um conhecimento sobre essa ferramenta, eu recomendo que você crie um repositório na plataforma e use o *CodeSpaces*, o *CodeSpaces* é um ambiente de desenvolvimento do GitHub na nuvem, que monta um ambiente de desenvolvimento completo para você usar no seu repositório, nesse caso tudo fica online e você não precisa baixar nem instalar nada, o Node já vem instalado automaticamente nesse ambiente, é só usar!

### BASE > EXERCÍCIO - 01

O primeiro exercício consiste em começar a usar as ferramentas web e o JS, vamos fazer isso criando um arquivo `.html`, ferramenta responsável pelo conteúdo de uma página, e nesse *HTML* vamos editar o titulo e a linguagem do nosso arquivo, dentro da Tag `<head>`, colocar um titulo(`<h1>`) e um texto(`<p>`) dentro da Tag `<body>` do *HTML*, isso significa que você esta colocando esses textos dentro do corpo do seu site. Colocamos também uma Tag `<style>` dentro do nosso *HTML* e fizermos nossas primeiras estilizações, usando a ferramenta CSS, modificamos a cor de fundo da página, a fonte e a cor da fonte. E para finalizar, criamos scripts simples usando o *JavaScript*, três scripts baseados na opção `*Window*` do navegador, criamos uma "janela" de alerta, confirmação e outra de coleta de informação. Para visualizar isso no navegador eu usei uma extensão do *VSCode*, o *LiveServer*, para rodar o projeto localmente na minha máquina.

(Confira o exercício no arquivo: ex01.html)

# COMENTÁRIOS

Os comentários servem para você comentar seu código, mas se você simplesmente escrever um texto no meio do seu código, ele vai se misturar e dar erro, é para isso que serve os símbolos `//` e o `/* */`*.* 

Com o `//`  você pode escrever um comentário em uma linha, já com o `/ * */` você pode escrever em mais de uma linha.

`//Comentário de exemplo`

`/*
Comentário de exemplo
usando duas linhas
*/`

Dessa forma você consegue deixar comentários pelo seu código sem que ele quebre.

`<!— Comentários dentro do HTML —>`

`/* Comentários dentro do CSS */`

Também é possível deixar comentários no seu HTML e CSS como nos exemplos a cima. 

# VARIÁVEIS

As variáveis basicamente são informações que você deixa armazenada, para conseguir solicitar depois, exemplo, se você montar uma variável: `Var vaga = carro`, significa que quando você solicitar a `vaga`(identificador) ela vai retornar a informação armazenada que no casso é "carro".

### CONVERSÃO DE TIPOS:

STRING -> NÚMERO

Para converter uma `string` para um `number` precisamos fazer uma conversão. Podemos usar numa variável o método `Number()`, dessa forma o *JS* vai identificar automaticamente se é um número inteiro ou real, porém também conseguimos definir isso manualmente, com `NumberInt()`, para números inteiros e `NumberFloat()`, para números reais.

### CONVERSÃO DE TIPOS:

NÚMERO -> STRING

Para converter um `number` para uma `string` é muito semelhante, podemos usar numa variável o método `String()` ou `.toString()`.

### FORMATANDO STRING

Existem formas de formatar uma `string`, muitas vezes utilizamos o valor de uma variável dentro de uma `string`, e nesses casos podemos formatar a `string` para o resultado final ser apresentado na tela na forma que a gente definir, como por exemplo:

`var j = "JavaScript"`

`"Estou aprendendo j"` | Não faz interpolação, resultado: Estou aprendendo j
`"Estou aprendendo " + j` | Usa concatenação, resultado: Estou aprendendo JavaScript
`Estou aprendendo ${j}` | Usa template string, resultado: Estou aprendendo JavaScrip

`.length` | Quantos caracteres a string tem
`.toUpperCase()` | Deixa tudo em Maiúsculo
`.toLowerCase()`	| Deixa tudo em Minúsculo

`.toFixed(2)` | Arredondar valor, exemplo 10.5, ficaria 10.50
`.toFixed(2).replace('.', ',')` | Além de arredondar o número, troca o ponto por vírgula, exemplo 10,50
`.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})`	| Para formatar em valor de moeda

### BASE > EXERCÍCIO - 02

No exercícios dois criamos uma variável que recebia o `window.prompt` para coletar o nome do usuário e depois usamos o `window.alert` para escrever uma mensagem de boas vindas junto com o nome que coletamos no `prompt`, fizemos isso com a formatação de `string`, usando concatenação de `string`.

(Confira o exercício no arquivo: ex02.html)

### BASE > EXERCÍCIO - 03

Já no exercício três coletamos dois números e fizemos a soma deles, mas o detalhe desse exercício é que utilizamos o parâmetro `Number.parceInt` para transformar a `string` em um `number` inteiro.

(Confira o exercício no arquivo: ex03.html)

### BASE > EXERCÍCIO - 04

No exercícios quatro continuamos usando a formatação de `string`, coletamos o nome de uma pessoa e informamos quantas letras tem, deixamos o nome com todas as letras em maiúsculo e também em minúsculo.

(Confira o exercício no arquivo: ex04.html)

# OPERADORES

Os operadores aritméticos são:

`+` | Somar

`-` | Subtrair

`*` | Multiplicar

`/` | Dividir

`%` | Resto da divisão

`**` | Ao quadrado

Ordem de precedência - Aritméticos

`()`

`**`

`* // %`

`- +`

Operadores relacionais

`>`  | Maior

`<` | Menor

`=` | Maior ou igual

`<=`	| Menor ou igual

`==`	| Igual

`!=`	| Diferente

`===` | Idêntico

Operadores Lógicos

`!` | Negação

`&&`	| Conjunção "e..."

`||`	| Disjunção "ou..."

Ordem de precedência - Geral

1. Aritméticos
2. Relacionais
3. Lógicos

# DOM

O DOM (Document Object Model) é basicamente a estrutura que roda no navegador para a construção e edição de elementos dentro de um site, é ele que editamos para construir nosso site do jeito que desejamos.

É possível selecionar arquivos com os seletores:

Marca - `getElementsByTagName()`

ID - `getElementById()`

Nome - `getElementsByName()`

Classe - `getElementsByClassName()`

Seletor - `querySelector() - querySelectorAll()`

### BASE > EXERCÍCIO - 05

No exercício cinco começamos a manipular a DOM, criamos uma `div` com um texto dentro, usando o JS fizemos interações com base no mouse, se o usuário clicar na `div`, aparece "Você clicou", se ele tira o mouse da `div` aparece "Está fora" e se colocar o mouse na `div` aparece "Está dentro". Resumindo utilizamos o JS para substituir o texto de dentro da `div` com base em interações do usuário.

(Confira o exercício no arquivo: ex05.html)

### BASE > EXERCÍCIO - 06

Já no exercício seis fizemos uma aplicação de soma bem simples, que basicamente soma um número com outro. Coletamos os dois números no `input` e apresentamos o resultado logo a baixo.

(Confira o exercício no arquivo: ex06.html)

# CONDIÇÕES

Condição basicamente é quando você abre uma "bifurcação" no código, invés dele seguir de uma forma linear, com a condição abrimos opções de "caminhos" que o código pode seguir, exemplo, se o usuário digitar o número de telefone corretamente siga o fluxo, se ele digitar um número invalido aparece uma janela de erro falando para ele tentar novamente com um número valido. Nesse exemplo criamos uma condição com dois caminhos possíveis.

Vale lembrar que também é possível criar condições simples, onde só abre uma ramificação no código. Você também pode fazer uma condição "alinhada", basicamente nela colocamos mais de duas condições, na prática, você vai colocar outro `if` dentro do `else`, você pode fazer isso quantas vezes precisar, formando assim a sua condição alinhada. Também existe a condição múltipla, que conseguimos fazer usando a expressão `switch`, o `switch` usa valores fixos, ele pega o resultado da expressão e procura o valor da mesma dentro dos switches, se não achar um valor verdadeiro ela roda um comando definido como padrão, que podemos configurar.

`if`	| se..

`else` | se não...

### CONDIÇÕES > EXERCÍCIO - 07

No exercício sete usamos apenas código JS, fizemos um exemplo de condição simples, onde digitamos uma velocidade e o código verifica se estamos dentro do limite ou acima do limite de velocidade e somos multados por acesso de velocidade.

(Confira o exercício no arquivo: ex07.js)

### CONDIÇÕES > EXERCÍCIO - 08

O exercício oito segue o mesmo modelo do exercício anterior, porém nele usamos a condição composta, entregando duas possibilidades de resposta dependendo da velocidade inserida no código.

(Confira o exercício no arquivo: ex08.js)

### CONDIÇÕES > EXERCÍCIO - 09

Para continuar o treino com HTML, fizemos novamente o uso de condição composta, mas rodando dentro de uma página, com o usuário podendo digitar a velocidade num `input`.

(Confira o exercício no arquivo: ex09.html)

### CONDIÇÕES > EXERCÍCIO - 10

Usamos o mesmo modelo do exercícios anterior, mas nesse caso o código verifica se você é brasileiro ou estrangeiro, basicamente nesse caso usamos `string`, nos outros foi `number` .

(Confira o exercício no arquivo: ex10.html)

### CONDIÇÕES > EXERCÍCIO - 11

Seguindo as possibilidades de condições, aqui usamos a condição alinhada, onde basicamente podemos criar mais de duas condições, nesse exemplo usamos três, com um código simples que mostra se você pode ou não votar baseado na sua idade.

(Confira o exercício no arquivo: ex11.js)

### CONDIÇÕES > EXERCÍCIO - 12

Mais um exemplo de condição alinhada, nesse código usamos 4 condições, o código apresenta uma mensagem diferente de acordo com a hora do dia, ele puxa a hora automaticamente do sistema.

(Confira o exercício no arquivo: ex12.js)

### CONDIÇÕES > EXERCÍCIO - 13

Exemplo de condição múltipla, essa opção de condição é feita com o `Switch`, serve para casos específicos, principalmente quando existem muitas opções de resultado, como no exemplo do exercício, vale lembrar que também poderíamos usar a condição alinhada para fazer esse exercício, nesse exercício o código puxa o dia da semana no sistema e fala qual dia é.

(Confira o exercício no arquivo: ex13.js)

### CONDIÇÕES > EXERCÍCIO - 14

Criamos um site que puxa do sistema a hora do dia e apresenta uma página personalizada de acordo com o horário, uma versão para a manhã, tarde e noite. Nesse exercício juntamos todos os conhecimentos até agora, também organizamos o projeto em arquivos diferentes, nesse caso, não esta tudo dentro do HTML.

(Confira o exercício no arquivo: ex14-script.js)

### CONDIÇÕES > EXERCÍCIO - 15

Foi desenvolvido um verificador de idade, que analisa a idade e o sexo do usuário e apresenta uma imagem de acordo com a idade e sexo, exemplo, o usuário colocou o ano de nascimento como 2020 e sexo masculino, o sistema vai mostrar uma criança do sexo masculino. Nesse exercício também rodamos tudo em uma página, com os arquivos HTML, CSS e JS separados, como no exercício 14.

(Confira o exercício no arquivo: ex15-script.js)

# ESTRUTURA DE CONTROLE

Vale lembrar que programar é sair do ponto A e chegar no ponto B, uma ação de cada fez, para ir de um ponto para o outro usamos as estruturas de controle, a mais simples de todas é a sequência, onde vamos do ponto A até o B executando varias ações sequencialmente. Mas nem todo código vai rodar de forma linear, como já vimos nas "condições", e agora entramos nas repetições.

# REPETIÇÕES

Repetição começa com um teste, parecido com a condição, porém ela retorna valores verdadeiro e falso, e invés de continuar o código como acontece nas condições, a repetição faz um looping e retorna para o início, exemplo, o teste retornou `true`(verdadeiro) então a repetição é executada novamente e repete enquanto o resultado for `true`, a repetição só vai parar quando retornar `false`(falso), quando isso acontecer a looping é finalizado e o fluxo segue.

Para rodar a repetição podemos usar o `while()` que faz o teste lógico e depois executa o bloco.
Podemos usar também o `do{}while()`, nesse caso ele executa o código e depois faz o teste lógico, para descobrir se o valor é verdadeiro ou falso.

E também usamos bastante o `for(){}` que é uma estrutura de repetição com uma variável de controle, basicamente funciona da mesma forma que o `while`.

### REPETIÇÕES > EXERCÍCIO - 16

Exercício simples de repetição usando `while`, um looping que inicia com o valor 1 e vai até o valor 6. Basicamente ele usa a lógica de verificar se o 1 é menor ou igual a 6, se for menor ele adiciona mais 1, somando 2, e faz isso até chegar no 6. 

(Confira o exercício no arquivo: ex16.js)

### REPETIÇÕES > EXERCÍCIO - 17

Já no exercício seguinte usamos o `dowhile` que funciona praticamente da mesma forma, mas com um detalhe importante, ele faz a lógica de verificar se o valor inicial é menor ou igual a 6, só depois que o bloco já foi executado, então ele executa o bloco e depois verifica os valores.

(Confira o exercício no arquivo: ex17.js)

### REPETIÇÕES > EXERCÍCIO - 18

A repetição `for` é bastante utilizada pele sua simplicidade, basicamente ela funciona da mesma forma que o `while`.

(Confira o exercício no arquivo: ex18.js)

### REPETIÇÕES > EXERCÍCIO PLUS - 19

No exercício plus dezenove usamos os conceitos de repetição para fazer uma solução completa de contagem de números, usando o HTML, CSS e JS. Podemos colocar um número de início e outro de fim e em qual "passo" a contagem vai ser feita, de um em um, de dois em dois e por ai vai. O sistema valida se o usuário preencheu todos os `input` e se o usuário colocou no `input` passo com valor 0, se foi esse o casso, ele apresenta uma mensagem de erro e adiciona passo 1, para a contagem ser feita de um em um.

(Confira o exercício no arquivo: ex19-script.js)

### REPETIÇÕES > EXERCÍCIO PLUS - 20

O exercício plus vinte é uma geradora de tabuada, também é uma solução completa com HTML, CSS e JS. Ela pega o número do  `input` e monta a tabuada do 1 ao 10 usando o número digitado. O script valida se o usuário preencheu o `input`.

(Confira o exercício no arquivo: ex20-script.js)

# VARIÁVEIS COMPOSTAS

Com as variáveis compostas conseguimos armazenar mais de uma informação dentro da mesma variável, diferente da variável simples, para organizar isso usamos: `var x = [0, 1, 2...]`, resumindo, variável composta é uma variável com mais de um elemento e cada elemento tem um valor e sua chave de identificação. Cada elemento adicionado na variável é adicionado no index da variável, que nada mais é que um "espaço" dentro do `[ ]`, cada elemento dentro do index é numerado, a contagem sempre começa do 0, por exemplo:

`var num = [12, 7, 9];`

A identificação de cada elemento dentro dos colchetes seria 0, 1 e 2. 

É o mesmo que 0 = 12; 1 = 7; 2 = 9;

### VARIÁVEIS > EXERCÍCIO - 21

Criamos uma variável composta e fizemos alguns `console.log` para mostrar os elementos dentro da variável, mostrar quantos elementos tem dentro da variável, mostrar qual é o elemento que esta no index 1 e buscar se um valor está dentro da variável.

(Confira o exercício no arquivo: ex21.js)

### VARIÁVEIS > EXERCÍCIO - 22

Pegamos um variável composta e usamos uma repetição `for` padrão para mostrar um `console.log` em cada elemento da variável automaticamente.

(Confira o exercício no arquivo: ex22.js)

### VARIÁVEIS > EXERCÍCIO - 23

Fizemos o mesmo exemplo do exercício vinte dois, mas usando o `for in` que é otimizado para funcionar em variáveis compostas.

(Confira o exercício no arquivo: ex23.js)

### VARIÁVEIS  > EXERCÍCIO PLUS - 24

No exercício plus vinte e quatro usamos os conceitos de repetição e variáveis compostas para fazer uma solução completa de análise de números, usando o HTML, CSS e JS. O usuário pode adicionar quantos números quiser, desde que sejam números entre 1 e 100, a cada número adicionado enviamos ele para o `select` dentro do HTML, depois podemos finalizar e o `script` faz a análise desses números, mostra a quantidade de elementos, mostra o maior e menor valor adicionado, soma todos os valores adicionados e faz uma média dos valores.

(Confira o exercício no arquivo: ex24-script.js)

# FUNÇÕES

Funções basicamente são ações dentro do seu código que são executadas sempre que são solicitadas ou com a decorrência de algum evento que acione a função. A função pode receber parâmetros e retornar um resultado.

### FUNÇÕES > EXERCÍCIO - 25

Fizemos uma função com parâmetro, que verifica se o número é par ou ímpar.

(Confira o exercício no arquivo: ex25.js)

### FUNÇÕES > EXERCÍCIO - 26

Fizemos uma função com parâmetro, que soma dois números.

(Confira o exercício no arquivo: ex26.js)

### FUNÇÕES > EXERCÍCIO - 27

Fizemos uma função com parâmetro dentro de uma variável, que leva um número ao quadrado.

(Confira o exercício no arquivo: ex27.js)

### FUNÇÕES > EXERCÍCIO - 28

Fizemos uma função com parâmetro, que faz o fatorial de um número.

(Confira o exercício no arquivo: ex28.js)

### FUNÇÕES > EXERCÍCIO - 29

Para finalizar, fizemos uma função recursiva com parâmetro, a função recursiva é uma função que chama ela mesma. Esse função também faz o fatorial de um número.

(Confira o exercício no arquivo: ex29.js)

# OBJETOS

O objeto é parecido com a variável composta, mas usamos chaves `{ }`, diferente dos `array` que o index é sempre numerado, começando do 0, no objeto podemos dar um nome para cada "espaço" do index, exemplo:

`var pessoa = {nome: "Lucas", idade: 20, sexo "M"}`

### OBJETOS > EXERCÍCIO - 30

Criamos um objeto "amigo" e nele adicionamos um nome, sexo, peso e uma função, tudo dentro do mesmo objeto.

(Confira o exercício no arquivo: ex29.js)
