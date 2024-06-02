function respGenero1() {
  document.getElementById("pergunta3").style.display = "block";
}

function respGenero2() {
  document.getElementById("pergunta2").style.display = "block";
}

function respAbd() {
  document.getElementById("pergunta3").style.display = "block";
}

function respUrin() {
  document.getElementById("pergunta4").style.display = "block";
}

function respDorUrin() {
  document.getElementById("pergunta5").style.display = "block";
}

function respCab() {
  document.getElementById("pergunta6").style.display = "block";
}

function respArd() {
  document.getElementById("pergunta7").style.display = "block";
}

function respSan() {
  document.getElementById("pergunta8").style.display = "block";
}

function respFerida1() {
  document.getElementById("pergunta9").style.display = "block";
}

function respFerida2() {
  document.getElementById("finalizacao").style.display = "block";
}

function respTipoFeri() {
  document.getElementById("finalizacao").style.display = "block";
}

function final() {
  let resposta2 = document.getElementsByName("dorAbdominal");
  let resposta3 = document.getElementsByName("vontadeUrin");
  let resposta4 = document.getElementsByName("dorUrin");
  let resposta5 = document.getElementsByName("dorCabeca");
  let resposta7 = document.getElementsByName("sangUrin");
  let resposta9 = document.getElementsByName("tipoFeri");

  let diagnosticos = { };

  if (resposta9[2].checked == true) {
    diagnosticos.Danovanose = 3;
  }

  else if (resposta9[0].checked == true) {
    diagnosticos.Danovanose = 1;
  }

  else if (resposta7[0].checked == true) {
    diagnosticos.CancroMole = 1;
  }

  else if (resposta5[1].checked == true) {
    diagnosticos.HPV = 1;
  }

  else if (resposta4[0].checked == true) {
    diagnosticos.Tricomeníase = 3;
  }

  else if (resposta3[0].checked == true) {
    diagnosticos.Gonorréia = 3;
  }


  else if (resposta2[0].checked == true) {
    diagnosticos.Clamídia = 3;
  }

  let resposta = Object.keys(diagnosticos).reduce((prev, curr) => diagnosticos[prev] > diagnosticos[curr] ? prev : curr);
  alert(`O seu hipotético diagnóstico é: ${resposta}!`);
}
