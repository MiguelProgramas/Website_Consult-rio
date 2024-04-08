function qualGeneroUser(){
getValue = document.getElementById("genero").value;
if(getValue == "homem"){
document.getElementById("temFeridaHomem").style.display = "block";
document.getElementById("temFeridaMulher").style.display = "none";
document.getElementById("qualGenero").style.display = "none";
}
if(getValue == "mulher"){
document.getElementById("temFeridaHomem").style.display = "none";
document.getElementById("temFeridaMulher").style.display = "block";
document.getElementById("qualGenero").style.display = "none";
}
if(getValue == "qualGenero"){
document.getElementById("temFeridaHomem").style.display = "none";
document.getElementById("temFeridaMulher").style.display = "none";
document.getElementById("qualGenero").style.display = "none";
}
} 

function temFerida(){
  getValue = document.getElementById("temFeridaM").value;
  if(getValue == "temFeridaNão"){
  document.getElementById("temPus").style.display = "block";
  document.getElementById("estaBem").style.display = "none";
  }
  if(getValue == "temFeridaSim"){
  document.getElementById("temPus").style.display = "none";
  document.getElementById("estaBem").style.display = "block";
  }
  if(getValue == "temFerM"){
    document.getElementById("temPus").style.display = "none";
    document.getElementById("estaBem").style.display = "none";
    }
  } 

  function temFeridaH(){
    getValue = document.getElementById("temFerida").value;
    if(getValue == "temFeridaNão"){
    document.getElementById("imunidadeBaixa").style.display = "block";
    document.getElementById("estaBem").style.display = "none";
    }
    if(getValue == "temFeridaSim"){
    document.getElementById("imunidadeBaixa").style.display = "none";
    document.getElementById("estaBem").style.display = "block";
    }
    if(getValue == "temFerH"){
      document.getElementById("imunidadeBaixa").style.display = "none";
      document.getElementById("estaBem").style.display = "none";
      }
    } 

    function temImunidadeBaixa(){
      getValue = document.getElementById("temFerida").value;
      if(getValue == "temImunidadeSim"){
      document.getElementById("aids").style.display = "block";
      document.getElementById("estaBem").style.display = "none";
      }
      if(getValue == "temImunidadeNão"){
      document.getElementById("aids").style.display = "none";
      document.getElementById("estaBem").style.display = "block";
      }
      if(getValue == "temImunidade"){
        document.getElementById("aids").style.display = "none";
        document.getElementById("estaBem").style.display = "none";
        }
      } 