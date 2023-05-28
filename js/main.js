const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const botonDesencriptar =document.querySelector(".btn-desencriptar")
const botonEncriptar =document.querySelector(".btn-encriptar")
let contenido = document.querySelector("#textoDesencriptado");
const btnBorrar =document.querySelector(".btn-limpiar")

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    //textArea.value = "";
   // mensaje.style.backgroundImage = "none";
}
botonEncriptar.addEventListener("click", btnEncriptar)
function encriptar(stringEncriptada){
    let matrizCodigo = [ ["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
        return stringEncriptada
}
botonDesencriptar.addEventListener("click",btnDesencriptar)
function btnDesencriptar(){
    const textoEncriptado = desEncriptar(textArea.value)
    mensaje.value = textoEncriptado
    //textArea.value = "";
   // mensaje.style.backgroundImage = "none";
}

function desEncriptar(stringDesencriptada){
    let matrizCodigo = [ ["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
        return stringDesencriptada
}



btnBorrar.addEventListener("click", borrarTexto)
function borrarTexto() {
    borrar = document.getElementById("textoEncriptado").value =""
    borrar = document.getElementById("textoEncriptado").value = "";
    document.location.reload();


}