//Arquivo com os scripts, separado do HTML para uma organização melhor

function carregar() {
  //Variáveis que pega o id da div "msg" e "imagem"
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");

  //Variável que pega automaticamente a hora do dia, com base no sistema
  var data = new Date();
  var hora = data.getHours();

  //.innerHTML que escreve uma mensagem "em cima" do texto da div com id-msg, e adiciona a variavél "hora"
  msg.innerHTML = `Agora são <strong>${hora}<strong/> horas.`;

  //Condição alinhada, que determina os 3 blocos de horarios do dia, manhã, tarde e noite
  if (hora >= 0 && hora < 12) {
    //Horário da manhã
    img.src = "./assets/MANHA.png";
    document.body.style.background = "#E4BC9B";
    document.getElementById("box").style.background = "#E7A976";
  } else if (hora >= 12 && hora <= 18) {
    //Horário da tarde
    img.src = "./assets/TARDE.png";
    document.body.style.background = "#F8D684";
    document.getElementById("box").style.background = "#DAB354";
  } else {
    //Horário da noite
    img.src = "./assets/NOITE.png";
    document.body.style.background = "#172C32";
    document.getElementById("box").style.background = "#0A1B20";
  }
}
