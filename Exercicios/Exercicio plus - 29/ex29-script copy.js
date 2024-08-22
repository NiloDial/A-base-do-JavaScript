var num = [1, 8, 6, 4, 9];
/*
var soma = 0;
for (var c = 0; c < num.length; c++) {
  soma += num[c];
}
console.log("A soma dos elementos é:", soma);
*/
/*
const numeros = [2, 5, 7, 9, 10];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("A soma dos elementos é:", soma);
*/

num.sort(); //Cola os valores em ordem crescente

//Mostra o maior valor array
for (c = 0; c < num.length; c++) {
  //res.innerHTML += `O maior valor informado foi ${numeros[c]}.`;
  console.log(`O maior valor informado foi ${num[c]}.`);
}
