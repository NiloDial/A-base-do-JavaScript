//Arquivo de script
function tabuada() {
  var v = document.getElementById("num");
  var res = document.getElementById("res");
  var nv = "";

  var val = v.value;

  if (val == "") {
    window.alert("Preencha o campo Número");
  } else {
    var v1 = Number(v.value);

    for (var c = 1; c <= 10; c = c + 1) {
      var soma = c * v1;
      nv += `${v1}X${c}=${soma}` + "<br>";
      res.innerHTML = nv;
      //res.innerHTML += `${v1}X${c}=${soma}` + "<br>";
    }
  }
}