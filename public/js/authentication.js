
// ############### AUTENTICAÇÃO LOGIN ############## \\
function botao_login () {
    var email = document.getElementById('user');
    var password = document.getElementById('senha');

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        alert("Login efetuado");
        window.location.href = "./views/dashboard.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("Código de erro", errorCode);
        alert(errorMessage);
    });
};



