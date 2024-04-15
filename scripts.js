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
  document.getElementById("dorCabeca").style.display = "block";
  document.getElementById("tipoFerida").style.display = "none";
  }
  if(getValue == "temFeridaSim"){
  document.getElementById("dorCabeca").style.display = "none";
  document.getElementById("tipoFerida").style.display = "block";
  }
  if(getValue == "temFerM"){
    document.getElementById("dorCabeca").style.display = "none";
    document.getElementById("tipoFerida").style.display = "none";
    }
  } 

  function temFeridaH(){
    getValue = document.getElementById("temFerida").value;
    if(getValue == "temFeridaNão"){
    document.getElementById("dorCabeca").style.display = "block";
    document.getElementById("tipoFerida").style.display = "none";
    }
    if(getValue == "temFeridaSim"){
    document.getElementById("dorCabeca").style.display = "none";
    document.getElementById("tipoFerida").style.display = "block";
    }
    if(getValue == "temFerH"){
      document.getElementById("dorCabeca").style.display = "none";
      document.getElementById("tipoFerida").style.display = "none";
      }
    } 

    function dorDeCabeca(){
      getValue = document.getElementById("dorCabecaa").value;
      if(getValue == "doido"){
      document.getElementById("aids").style.display = "block";
      document.getElementById("naids").style.display = "none";
      }
      if(getValue == "cuda"){
      document.getElementById("aids").style.display = "none";
      document.getElementById("naids").style.display = "block";
      }
      if(getValue == "cabe"){
        document.getElementById("aids").style.display = "none";
        document.getElementById("naids").style.display = "none";
        }
      } 