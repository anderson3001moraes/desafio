//variavel
function validarNumero() {
    let numero = Number(document.getElementById("id_numero").value);
    let resultado = document.getElementById("resultado");

    if (numero == 1 ) {
        resultado.innerHTML= '<span class="resultado">*</span>';
    } else if ( numero == 2 ) {
        resultado.innerHTML = '<span class="resultado">&nbsp *<br>**<span>';
    } else if ( numero == 3) {
        resultado.innerHTML = '<span class="resultado">&nbsp &nbsp *<br>&nbsp **<br>***</span>';
    } else if (numero == 4) {
        resultado.innerHTML = '<span class="resultado">&nbsp &nbsp &nbsp *<br>&nbsp &nbsp **<br>&nbsp ***<br>****</span>';
    } else if (numero == 5) {
        resultado.innerHTML = '<span class="resultado">&nbsp &nbsp &nbsp &nbsp *<br>&nbsp &nbsp &nbsp **<br>&nbsp &nbsp ***<br>&nbsp ****<br>*****</span>';
    } else if (numero == 6) {
        resultado.innerHTML = '<span class="resultado">&nbsp &nbsp &nbsp &nbsp &nbsp *<br>&nbsp &nbsp &nbsp &nbsp **<br>&nbsp &nbsp &nbsp ***<br>&nbsp &nbsp ****<br>&nbsp *****<br>******</span>';
    } else{
        resultado.innerHTML = '<span class="resultado">valor invalido!! tente novamente</span>';
    }
}