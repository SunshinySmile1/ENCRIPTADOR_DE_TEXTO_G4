/*const btnEncrypt = document.getElementById("btnEncrypt");
const btnDesencrypt = document.getElementById("btnDesencrypt");

let enterTextarea = document.getElementById("enterTextarea");
let textResult = document.getElementById("textareaResult");

let encryptMessage = "";
let desencryptMessage = "";

function hideElements(){
    let show = document.getElementById("show");
    let textResult = document.getElementById("textResult");

    if(enterTextarea === " "){
        show.style.display = "block";
        textResult.style.display = "none";
    }
    
    if(enterTextarea !== " "){
        show.style.display = "none";
        textResult.style.display = "block";

    }   
}

const accentsRemove = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

function textEncrypt(){

    hideElements();
    
    desencryptMessage = desencryptMessage.trim();
    desencryptMessage = desencryptMessage.toLowerCase();

    encryptMessage = enterTextarea.replace(/e/igm, "enter");
    encryptMessage = encryptMessage.replace(/i/igm, "imes");
    encryptMessage = encryptMessage.replace(/a/igm, "ai");
    encryptMessage = encryptMessage.replace(/o/igm, "ober");
    encryptMessage = encryptMessage.replace(/u/igm, "ufat");
    
    
    textResult.value = encryptMessage;
}

function textDesencrtypt(){
    hideElements();
    encryptMessage = accentsRemove(enterTextarea);
    encryptMessage = encryptMessage.trim();
    encryptMessage = encryptMessage.toLowerCase();
    
    desencryptMessage = encryptMessage.replace(/enter/igm, "e");
    desencryptMessage = desencryptMessage.replace(/imes/igm, "i");
    desencryptMessage = desencryptMessage.replace(/ai/igm, "a");
    desencryptMessage = desencryptMessage.replace(/ober/igm, "o");
    desencryptMessage = desencryptMessage.replace(/ufat/igm, "u");

    textResult.value = desencryptMessage;
}

hideElements();*/

function encryptText(){
    var textareaEnter = document.getElementById("enterTextarea").value.toLowerCase();
    var encryptMessage = textareaEnter.replace(/e/igm,"enter");
    encryptMessage = encryptMessage.replace(/o/igm,"ober");
    encryptMessage = encryptMessage.replace(/i/igm,"imes");
    encryptMessage = encryptMessage.replace(/a/igm,"ai");
    encryptMessage = encryptMessage.replace(/u/igm,"ufat");

    document.getElementById("imgMunheco").style.display = "none";
    document.getElementById("warningText").style.display = "none";
    document.getElementById("textareaResult").style.display = "show";
    document.getElementById("textareaResult").innerHTML = encryptMessage;
    document.getElementById("copyButton").style.display = "inherit";
    document.getElementById("textareaResult").style.display = "inherit";
}

function desencryptText(){
    var textareaEnter = document.getElementById("enterTextarea").value.toLowerCase();
    var desencryptMessage = textareaEnter.replace(/enter/igm,"e");
    desencryptMessage = desencryptMessage.replace(/ober/igm,"o");
    desencryptMessage = desencryptMessage.replace(/imes/igm,"i");
    desencryptMessage = desencryptMessage.replace(/ai/igm,"a");
    desencryptMessage = desencryptMessage.replace(/ufat/igm,"u");

    document.getElementById("imgMunheco").style.display = "none";
    document.getElementById("warningText").style.display = "none";
    document.getElementById("textareaResult").innerHTML = desencryptMessage;
    document.getElementById("copyButton").style.display = "inherit";
    document.getElementById("textareaResult").style.display = "inherit";
}

function copyText(){
    textareaResult.select();
    document.execCommand("copy")
    alert("Has copiado el texto");
}
