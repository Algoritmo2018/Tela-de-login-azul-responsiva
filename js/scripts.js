var icone = document.getElementById("icone");
var senha= document.getElementById("senha");
function mostrarOcultarSenha(){
   
    if(senha.type== "password"){
        senha.type="text";
        document.getElementById("icone").className="fa-solid fa-eye";
    }
    else{
        senha.type="password";
        document.getElementById("icone").className="fa-solid fa-eye-slash";
    }

    
}
senha.addEventListener('input', function() {
    if(senha.value.trim() !== ''){
        icone.style.color="#70c3cf";
        icone.style.fontSize ="18px";
            }
            else{
                icone.style.color="#33647f";
                icone.style.fontSize ="0px";
            }

  });