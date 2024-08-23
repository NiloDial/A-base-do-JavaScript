// FUNÇÃO COM PARÂMETRO

// Função que verifica se o número é par ou ímpar
function parimp(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

//Chamada da função, com o parâmetro (9), vai verificar se 9 é par ou ímpar
console.log(parimp(9));
