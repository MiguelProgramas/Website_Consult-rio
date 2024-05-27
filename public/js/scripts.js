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

function conclusao() {

  let resposta = document.getElementsByName("cabeca");

  if (resposta[0].checked == true) {
    alert("Você possui AIDS.");
  }
  else if (resposta[1].checked == true) {
    alert("Você não possui AIDS.")
  }
  else {
    var message = '<h4 style="color:red;">Você precisa selecionar uma última opção antes de prosseguir!</h4>';
    document.getElementById("mensagem").innerHTML = message;

    return false;
  }
  return true;
}

function final() {
  let resposta2 = document.getElementsByName("dorAbdominal");
  let resposta3 = document.getElementsByName("vontadeUrin");
  let resposta4 = document.getElementsByName("dorUrin");
  let resposta5 = document.getElementsByName("dorCabeca");
  let resposta7 = document.getElementsByName("sangUrin");
  let resposta9 = document.getElementsByName("tipoFeri");

  if (resposta9[2].checked == true || resposta9[0].checked == true) {
    alert("O seu hipotético diagnóstico é: Danovanose");
  }

  else if (resposta7[0].checked == true) {
    alert("O seu hipotético diagnóstico é: Cancro Mole");
  }

  else if (resposta5[1].checked == true) {
    alert("O seu hipotético diagnóstico é: HPV");
  }

  else if (resposta4[0].checked == true) {
    alert("O seu hipotético diagnóstico é: Tricomeníase");
  }

  else if (resposta3[0].checked == true) {
    alert("O seu hipotético diagnóstico é: Gonorréia");
  }

  else if (resposta2[0].checked == true) {
    alert("O seu hipotético diagnóstico é: Clamídia");
  }

}
