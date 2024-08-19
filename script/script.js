var botaoencriptar = document.querySelector(".btn-criptografar");
var botaodesencriptar = document.querySelector(".btn-descriptografar");
var lupa = document.querySelector(".conteinerlupa");
var conteiner = document.querySelector(".conteinerparagrafo");
var resultado = document.querySelector(".textoresultado");

botaoencriptar.onclick = encriptar;
botaodesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var areatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(areatexto);
}

function desencriptar() {
    ocultarAdelante();
    var areatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(areatexto);
}

function recuperarTexto() {
    var areatexto = document.querySelector(".areatexto").value;
    return areatexto;
}

function ocultarAdelante() {
    lupa.classList.add("ocultar");
    conteiner.classList.add("ocultar");
}

function encriptarTexto(mensagem) {
    var textoFinal = "";

    for (var i = 0; i < mensagem.length; i++) {
        if (mensagem[i] == "a") {
            textoFinal += "ai";
        } else if (mensagem[i] == "e") {
            textoFinal += "enter";
        } else if (mensagem[i] == "i") {
            textoFinal += "imes";
        } else if (mensagem[i] == "o") {
            textoFinal += "ober";
        } else if (mensagem[i] == "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += mensagem[i];
        }
    }

    return textoFinal;
}

function desencriptarTexto(mensagem) {
    var textoFinal = "";

    for (var i = 0; i < mensagem.length; i++) {
        if (mensagem[i] == "a") {
            textoFinal += "a";
            i += 1;
        } else if (mensagem[i] == "e") {
            textoFinal += "e";
            i += 4;
        } else if (mensagem[i] == "i") {
            textoFinal += "i";
            i += 3;
        } else if (mensagem[i] == "o") {
            textoFinal += "o";
            i += 3;
        } else if (mensagem[i] == "u") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += mensagem[i];
        }
    }

    return textoFinal;
}


const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoresultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("hola"); 
});