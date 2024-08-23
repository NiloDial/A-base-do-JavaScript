// FUNÇÕES

// Função que faz o fatorial do número
function fatorial(n1) {
  var fat = 1;
  for (var c = n1; c > 1; c--) {
    fat *= c;
  }
  return fat;
}

//Chamada da função, com o parâmetro (5), fatorial de 5 = 120
console.log(fatorial(5));
