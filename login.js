// Função para mostrar/ocultar a senha
function togglePassword() {
    const senhaField = document.getElementById("senha_login");
    const senhaType = senhaField.type === "password" ? "text" : "password";
    senhaField.type = senhaType;
    document.querySelector(".toggle-password").classList.toggle("fa-eye-slash");
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email_login").value;
    const senha = document.getElementById("senha_login").value;

    // Validação de e-mail e senha
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Simulando login com e-mail e senha pré-definidos
    const validEmail = "jakelineq123@gmail.com";
    const validPassword = "jake123";

    if (email === validEmail && senha === validPassword) {
        window.location.href = "Principal.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
});
