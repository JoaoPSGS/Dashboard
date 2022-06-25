
// ############### LOGOUT ############## \\
let logoutButton = document.getElementById('logoutButton');

 function botaoSair() {
    firebase.auth().signOut()
    .then(() => {
        alert("Usuário deslogado!");
        window.location.href = "./index.html";
    })
    .catch((error) => {
        console.log(error);
    });
};