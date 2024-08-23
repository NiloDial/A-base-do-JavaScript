// Arquivo de scripts, separado do HTML para uma melhor organização

function verificar() {
  // Variável para coletar o ano do sistema
  var data = new Date();
  var ano = data.getFullYear();

  //Variáveis para ter acesso a div com id "res" e "txtano"
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  //Variável para coletar apenas o valor digitado pelo user no input "txtano"
  var fres = fano.value;

  /*
  Condição para apresentar uma janela de erro caso o valor digitado pelo user seja maior que o ano atual
  ou tentar enviar o input sem valor
  */
  if (fres.length == 0 || fres > ano) {
    window.alert("ERRO");
  } else {
    // Variável para coletar a opção assinalada pelo user, sexo masculino ou feminino
    var fsex = document.getElementsByName("radsex");
    // Variável para chegar na idade final do user, pega o ano atual do sistema e subtrai pelo ano de nascimento do user
    var idade = ano - Number(fano.value);
    // Variável par armazenar o gênero que o user escolheu
    var genero = "";
    // Variável que adiciona um elemnto img no HTML com um id "foto"
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    // Condição em linha que mostra as variações de fotos de acordo com a idade, no sexo masculino
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 10) {
        //criança
        img.setAttribute("src", "./assets/crianca-h.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./assets/jovem-h.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "./assets/adulto-h.png");
      } else {
        //idoso
        img.setAttribute("src", "./assets/idoso-h.png");
      }

      // Condição em linha que mostra as variações de fotos de acordo com a idade, no sexo feminino
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 10) {
        //criança
        img.setAttribute("src", "./assets/crianca-m.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./assets/jovem-m.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "./assets/adulto-m.png");
      } else {
        //idoso
        img.setAttribute("src", "./assets/idoso-m.png");
      }
    }

    //.innerHTML que "reescreve" o texto da div com id "res"
    res.innerHTML = `Idade ${idade}, gênero ${genero}`;
    //.appendChild adiciona a img na div de id "res" junto com o texto
    res.appendChild(img);
  }
}
