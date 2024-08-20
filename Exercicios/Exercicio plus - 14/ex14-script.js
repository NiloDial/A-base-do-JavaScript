function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  var hora = 1;

  msg.innerHTML = `Agora são <strong>${hora}<strong/> horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "./assets/MANHA.png";
    document.body.style.background = "#E4BC9B";
    document.getElementById("box").style.background = "#E7A976";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "./assets/TARDE.png";
    document.body.style.background = "#F8D684";
    document.getElementById("box").style.background = "#DAB354";
  } else {
    img.src = "./assets/NOITE.png";
    document.body.style.background = "#172C32";
    document.getElementById("box").style.background = "#0A1B20";
  }
}
