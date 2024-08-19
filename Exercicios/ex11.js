//Condição alinhada

var idade = 67;

if (idade < 16) {
  console.log(`Sua idade é ${idade}, você ainda não vota.`);
} else if (idade < 18 || idade > 65) {
  console.log(`Sua idade é ${idade}, seu é opcional.`);
} else {
  console.log(`Sua idade é ${idade}, seu voto é obrigatório.`);
}
