function validarSenhaForca(){
    //variaveis
    let senha = document.getElementById("senha").value;
    let forca = document.getElementById("forca_senha");
    let caractere = document.getElementById("caractere");

    
    if ( senha.length >= 6 && senha.match(/[@#$%&;*]/) ){
        forca.innerHTML = "<span class='forca_hiperForte'> hiper forte </span>";
        caractere.innerHTML = "<span class='caractere'>A sua Senha Tem mais de 6 </span>";


    }else if ( senha.length > 6  ){
        forca.innerHTML = "<span class='forca_forte'> forte </span>";
        caractere.innerHTML = "<span class='caractere'>A sua Senha Tem mais de 6</span>";

    }else if ( senha.length == 6  ){
        forca.innerHTML = "<span class='forca_forte'> forte </span>";
        caractere.innerHTML = "<span class='caractere'> A sua Senha Tem 6</span>";

    } else if ( senha.length == 5  ) {
        forca.innerHTML = "<span class='forca_media'> media </span>"; 
        caractere.innerHTML = "<span class='caractere'> A sua Senha Tem 5    , Falta 1 Caractere</span>";

    } else if ( senha.length == 4  ) {
        forca.innerHTML = "<span class='forca_media'> media </span>"; 
        caractere.innerHTML = "<span class='caractere'> A sua Senha Tem 4    , Falta 2 Caractere</span>";
    } else if ( senha.length == 3  ) {
        forca.innerHTML = "<span class='forca_fraca'> fraca </span>"; 
        caractere.innerHTML = "<span class='caractere'> A sua Senha Tem 3    , Falta 3 Caractere</span>";

    } else if ( senha.length == 2  ) {
        forca.innerHTML = "<span class='forca_fraca'> fraca </span>"; 
        caractere.innerHTML = "<span class='caractere'> A sua Senha Tem 2    , Falta 4 Caractere</span>";

    } else if ( senha.length == 1  ) {
        forca.innerHTML = "<span class='forca_fraca'> fraca </span>"; 
        caractere.innerHTML = "<span class='caractere'> A sua Senha Tem 1    , Falta 5 Caractere</span>";

    } else if ( senha.length == 0 ) {
        forca.innerHTML = "<span class='sem_valor'></span>";
        caractere.innerHTML = "<span class='sem_valor'></span>";
    }
}