function verificar() {
  var n1 = document.getElementById("ninicio");
  var n2 = document.getElementById("nfim");
  var n3 = document.getElementById("npasso");
  var resp = document.getElementById("resposta");
  var nv = "";

  var v1 = n1.value;
  var v2 = n2.value;
  var v3 = n3.value;

  console.log(v1, v2, v3);

  if (v1 == "" || v2 == "" || v3 == "") {
    resp.innerHTML = "ERRO, preencha todos os campos";
  } else if (v3 == 0) {
    window.alert("Passo invalido, considerando passo 1");
    var v1 = Number(n1.value);
    var v2 = Number(n2.value);
    v3 = 1;

    for (var c = v1; c <= v2; c = c + v3) {
      nv += c + "👉🏻";
      resp.innerHTML = `Contando: ${nv}🏁`;
      console.log(c);
    }
  } else {
    var v1 = Number(n1.value);
    var v2 = Number(n2.value);
    var v3 = Number(n3.value);

    if (v1 < v2) {
      for (var c = v1; c <= v2; c = c + v3) {
        nv += c + "👉🏻";
        resp.innerHTML = `Contando: ${nv}🏁`;
        console.log(c);
      }
    } else {
      for (var c = v1; c >= v2; c = c - v3) {
        nv += c + "👉🏻";
        resp.innerHTML = `Contando: ${nv}🏁`;
        console.log(c);
      }
    }
  }
}
