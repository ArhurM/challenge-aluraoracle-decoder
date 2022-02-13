var msg = document.querySelector("#msg");
var msgInput = document.querySelector("#input-texto");
msgInput.focus();
var errorMessage = document.querySelector("#error-message");


var btnCriptografar = document.querySelector("#btn-cripto");
var btnDescriptografar = document.querySelector("#btn-descripto");
var btnCopiar = document.querySelector("#btn-copy");
var btnLimpar = document.querySelector("#btn-limpar");


function validarMensagem(expressao, traducao) {
    if (!/^[a-z]*$/.test(msgInput.value)) {
        alert('O texto não deve conter: numeros, acentuação, caracteres especiais ou letras maiúsculas!');
        msgInput.value = '';
        return
    }

    msg.value = msgInput.value.replace(expressao, chave => traducao[chave]);
    if (msg.value == msgInput.value) {
        alert("A mensagem não pode ser descriptografada, insira uma mensagem criptografada!");
        msg.value = "";
    }
    msgInput.value = '';
}

function validarCriptografia() {
    if (!msgInput.value == "") {
        validarMensagem(/[aeiou]/g, { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' });
    } else {
        alert("Favor, inserir texto no campo abaixo!");
        msgInput.focus();
    }
}

function validarDescriptografar() {
    if (!msgInput.value == "") {
        validarMensagem(/ai|enter|imes|ober|ufat/g, { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' });
    } else {
        alert("Favor, inserir texto no campo abaixo!");
        msgInput.focus();
    }
}

function copiar() {
    if (!msg.value == "") {
        navigator.clipboard.writeText(msg.value);
        alert("Copiado!");
        msg.value = "";
    } else {
        alert("Antes de copiar deve ser criptografado algo!");
    }
}

function limpar() {
    //agora aqui vê primeiro se não é vazio
    if (msg.value != '') {
        msg.value = '';
        msg.focus();
    } else {
        alert("Precisa ter algo, para poder ser limpo");
    }
}


//Criptografar
btnCriptografar.addEventListener('click', (e) => {
        e.preventDefault();
        validarCriptografia();
    })
    //Descriptografar
btnDescriptografar.addEventListener('click', (e) => {
        e.preventDefault();
        validarDescriptografar();
    })
    //Copiar
btnCopiar.addEventListener('click', function(e) {
        e.preventDefault();
        copiar();
    })
    //Limpar
btnLimpar.addEventListener('click', (e) => {
    e.preventDefault();
    limpar();
})