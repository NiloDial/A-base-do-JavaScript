// FUNÇÃO DENTRO DE UMA VARIÁVEL

// Função número ao quadrado
var quadrado = function soma(n1 = 0) {
  //Atribui "0" caso não seja passado um parâmetro
  return n1 ** 2;
};

//Chamada da função, com o parâmetro (9), 9 ao quadrado = 81
console.log(quadrado(9));
