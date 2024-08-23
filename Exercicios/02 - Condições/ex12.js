//CONDIÇÃO ALINHADA

//Pegar informações do sistema de hora e data, usando: new Date()

var agora = new Date();
var hora = agora.getHours();

//var hora = 20;

console.log(`Agora são ${hora} horas.`);

if (hora < 5) {
  console.log(`Boa madrugada!`);
} else if (hora < 12) {
  console.log(`Bom dia!`);
} else if (hora < 18) {
  console.log(`Boa tarde!`);
} else {
  console.log(`Boa noite!`);
}

/*
if (hora < 12) {
  console.log(`Bom dia!`);
} else if (hora < 18) {
  console.log(`Boa tarde!`);
} else {
  console.log(`Boa noite!`);
}
*/
