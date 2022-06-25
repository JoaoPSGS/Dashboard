
// ############### REGISTRAR USUARIO LOGIN ############## \\
var registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', function () {
    const email = document.getElementById('input_email_user');
    const password = document.getElementById('input_senha_user');
    const confirmePassword = document.getElementById('input_senha_user_m');

    if(email.value != '' && password.value != '' && confirmePassword.value != '') {
        if(password.value === confirmePassword.value) {
            firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                var user = userCredential.user;
                alert('Usuário criado com sucesso!');
                window.location.href = "../views/dashboard.html";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
        }
        else {
            alert('Senhas diferentes!');
        }
    }
    else {
        alert('Preencha todos os campos!');
    }
});

var voltarButton = document.getElementById('voltarButton');

function botaoVoltar(){

    window.location.href = "../index.html";

}