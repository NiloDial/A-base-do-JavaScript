// FUNÇÕES

function fatorial(n1) {
  var fat = 1;
  for (var c = n1; c > 1; c--) {
    fat *= c;
  }
  return fat;
}

console.log(fatorial(5));
