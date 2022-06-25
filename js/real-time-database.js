
// ############### REGISTROS FALE CONOSCO ############## \\
function faleConosco() {
    var txtNome = document.getElementById('txtNome').value;
    var txtEmail = document.getElementById('txtEmail').value;
    var txtComentario = document.getElementById('txtComentario').value;

    var data = {
        nome: txtNome,
        email: txtEmail,
        comentario: txtComentario
    }

    firebase.firestore().collection("users").doc(txtEmail).set(data)
        .then(() => {
            alert('Contato registrado com sucesso!');
            window.location.href = "./dashboard.html";
        });
}


// ############### REGISTROS CADASTRO ############## \\
function registerUser(){

    var input_nome = document.getElementById('input_nome').value;
    var input_idade = document.getElementById('input_idade').value;
    var input_genero = document.getElementById('input_genero').value;
    var input_empresa = document.getElementById('input_empresa').value;
    var input_salario = document.getElementById('input_salario').value;
    var input_tempo_exp = document.getElementById('input_tempo_exp').value;
    var input_email = document.getElementById('input_email').value;
    var input_senha = document.getElementById('input_senha').value;
    

    var data = {
        nome: input_nome,
        idade: input_idade,
        genero: input_genero,
        empresa: input_empresa,
        salario: input_salario,
        tempo: input_tempo_exp,
        email: input_email,
        senha: input_senha
    }

    firebase.firestore().collection("registros").doc(input_email).set(data)
        .then(() => {
            alert('Contato registrado com sucesso!');
            window.location.href = "./dashboard.html";
        });



}