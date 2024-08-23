// FUNÇÃO COM DOIS PARÂMETROS

// Função que soma dois números
function soma(n1 = 0, n2 = 0) {
  //Atribui "0" caso não seja passado um parâmetro
  return n1 + n2;
}

//Chamada da função, com o parâmetro (9 e 10), vai somar 9 + 10 = 19
console.log(soma(9, 10));
