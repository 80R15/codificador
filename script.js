const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
}



function encriptar(stringEcriptada){
    let matrizCodigo = [["i", "1"], ["z", "2"], ["e", "3"], ["s", "5"], ["t", "7"], ["b", "8"], ["g", "9"], ["o", "0"]];
    stringEcriptada = stringEcriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEcriptada.includes(matrizCodigo[i][0])){
            stringEcriptada = stringEcriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEcriptada;
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
     
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["i", "1"], ["z", "2"], ["e", "3"], ["s", "5"], ["t", "7"], ["b", "8"], ["g", "9"], ["o", "0"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    return stringDesencriptada;
}


