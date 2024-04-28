function pergunta2() {
  document.getElementById("pergunta2").style.display = "block";
}

function pergunta3() {
  document.getElementById("pergunta3").style.display = "block";
}

function pergunta4() {
  document.getElementById("pergunta4").style.display = "block";
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

function apagarMensagem() {
  document.getElementById("mensagem").innerHTML = "";
}