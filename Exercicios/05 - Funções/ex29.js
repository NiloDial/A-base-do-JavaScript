// FUNÇÕES - RECURSIVIDADE

// Função que faz o fatorial do número
function fatorial(n1) {
  if (n1 == 1) {
    return 1;
  } else {
    return n1 * fatorial(n1 - 1); // A função chama ela mesma
  }
}

//Chamada da função, com o parâmetro (5), fatorial de 5 = 120
console.log(fatorial(5));
