//VARIÁVEIS COMPOSTAS

var num = [1, 5, 3]; //Ordem dentro dos colchetes: 0 - 1 - 2

// Repetição "for" especifica para variáveis compostas
for (var res in num) {
  // "in" = dentro/em
  console.log(`Posição ${res}, elemento ${num[res]}`);
}
