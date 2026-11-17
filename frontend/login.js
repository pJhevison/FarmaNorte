
const formulario = document.getElementById("form-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email.trim() === "" || senha.trim() === "") {
        alert("Preencha todos os campos.");
        return;
    }

    alert("Formulário validado com sucesso!");
});
