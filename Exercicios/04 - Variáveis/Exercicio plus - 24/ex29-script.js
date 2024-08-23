//Arquivo de script

var n1 = document.getElementById("num");
var base = document.getElementById("basein");
var res = document.getElementById("res");
var numeros = [];

function adicionar() {
  res.innerHTML = "";
  if (n1.value.length == 0) {
    //Verifica a quantidade de caracteres enviados no input foi 0
    window.alert("Envie um número");
  } else {
    var n = Number(n1.value);

    if (n < 1 || n > 100) {
      //Verifica se o número esta entre 1 e 100
      window.alert("Valor inválido");
    } else {
      if (numeros.indexOf(n) >= 0) {
        window.alert(`Valor ${n} já foi inserido`);
      } else {
        //Adiciona o número dentro do select
        var item = document.createElement("option");
        item.text = `Valor ${n} adicionado`;
        base.appendChild(item);

        numeros.push(n);
      }
    }
  }
  n1.value = ""; //Limpa o input(n1) automaticamente
  n1.focus(); //Permanece com o "teclado" dentro do input(n1), mesmo que um valor ja tenha sido digitado
}

function finalizar() {
  numeros.sort(); //Cola os valores em ordem crescente

  //Mostra a quantidade de elementos no array
  //res.innerHTML += `Ao todo, temos ${numeros.length} números cadastrados.`;
  var r1 = `Ao todo, temos ${numeros.length} números cadastrados.`;

  //Mostra o maior valor array
  for (c = 0; c < numeros.length; c++) {
    //res.innerHTML += `O maior valor informado foi ${numeros[c]}.`;
    var r2 = `O maior valor informado foi ${numeros[c]}.`;
  }

  //Mostra o menor valor array
  //res.innerHTML += `O menor valor informado foi ${numeros[0]}.`;
  var r3 = `O menor valor informado foi ${numeros[0]}.`;

  //Mostra a soma de todos os valores do array
  var soma = 0;
  for (var c = 0; c < numeros.length; c++) {
    soma += numeros[c];
    //res.innerHTML += `A soma dos valores é ${soma}.`;
    var r4 = `A soma dos valores é ${soma}.`;
  }

  //Mostra a média dos valores do array
  var soma = 0;
  for (var c = 0; c < numeros.length; c++) {
    soma += numeros[c];
    //res.innerHTML += `A média é ${soma / numeros.length}.`;
    var r5 = `A média é ${soma / numeros.length}.`;
  }
  res.innerHTML =
    r1 + "<br>" + r2 + "<br>" + r3 + "<br>" + r4 + "<br>" + r5 + "<br>";
}
