function respGenero() {
  document.getElementById("pergunta2").style.display = "block";
}

function respFerida() {
  document.getElementById("pergunta6").style.display = "block";
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

function respAbd1() {
  document.getElementById("pergunta7").style.display = "block";
}

function respUrin(){
  document.getElementById("pergunta8").style.display = "block";
}

function respDor(){
  document.getElementById("pergunta9").style.display = "block";
}

function respVer(){
  document.getElementById("pergunta4").style.display = "block";
}

function respCab(){
    document.getElementById("pergunta10").style.display = "block";
}

function respArd(){
  document.getElementById("pergunta11").style.display = "block";
}




function apagarMensagem() {
  document.getElementById("mensagem").innerHTML = "";
}

