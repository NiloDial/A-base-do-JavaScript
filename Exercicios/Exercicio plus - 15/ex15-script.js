function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  var fres = fano.value;

  if (fres.length == 0 || fres > ano) {
    window.alert("ERRO");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

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

    res.innerHTML = `Idade ${idade}, gênero ${genero}`;
    res.appendChild(img);
  }
}
