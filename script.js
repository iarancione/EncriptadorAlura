const textArea = document.querySelector (".text-area");
const message = document.querySelector(".message-area");

function buttonEncrypt () {
    const encryptedText = encrypt (textArea.value);
    message.value = encryptedText;
    textArea.value=" ";
    message.style.backgroundImage="none";
}

function buttonDecrypt () {
    const encryptedText = decrypt (textArea.value);
    message.value = encryptedText;
    textArea.value=" ";
    message.style.backgroundImage="none";
}


function encrypt (stringEncrypted){
    let arrayCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase();

    for (let i = 0; i < arrayCode.length; i++){
        if (stringEncrypted.includes(arrayCode[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll (arrayCode[i][0],arrayCode[i][1]);
        }
    }
    return stringEncrypted;
}

function decrypt (stringDecrypted){
    let arrayCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase();

    for (let i = 0; i < arrayCode.length; i++){
        if (stringDecrypted.includes(arrayCode[i][1])) {
            stringDecrypted = stringDecrypted.replaceAll (arrayCode[i][1],arrayCode[i][0]);
        }
    }
    return stringDecrypted;
}

document.querySelector(".button-copy").addEventListener('click',()=>{
    alert("¡Mensaje copiado!");
})

var buttonCopy = document.querySelector(".button-copy");
buttonCopy.onclick = copy

function copy () {
    var content = message
    content.select();
    document.execCommand ("copy");
} 