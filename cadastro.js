// Função para formatar o CPF conforme o usuário digita
function formatCPF(cpfField) {
    cpfField.value = cpfField.value
        .replace(/\D/g, "")                     // Remove tudo que não é dígito
        .replace(/(\d{3})(\d)/, "$1.$2")        // Coloca o primeiro ponto
        .replace(/(\d{3})(\d)/, "$1.$2")        // Coloca o segundo ponto
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca o hífen
}

// Função para mostrar/ocultar a senha
function togglePasswordCadastro() {
    const senhaField = document.getElementById("senha_cad");
    const toggleIcon = document.querySelector(".toggle-password");

    if (senhaField.type === "password") {
        senhaField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        senhaField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

// Função de validação do CPF
function validateCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
}

// Validação do e-mail (formato básico)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Evento de submissão do formulário de cadastro
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome_cad").value;
    const email = document.getElementById("email_cad").value;
    const cpf = document.getElementById("cpf_cad").value;
    const senha = document.getElementById("senha_cad").value;

    // Validação dos campos
    if (nome === "" || email === "" || cpf === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Validação do formato de e-mail
    if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    // Validação do formato do CPF
    if (!validateCPF(cpf)) {
        alert("Por favor, insira um CPF válido! (Formato esperado: 000.000.000-00)");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "Login.html";  // Redireciona para a tela de login
});

// Evento para formatar o CPF conforme o usuário digita
document.getElementById("cpf_cad").addEventListener("input", function() {
    formatCPF(this);
});
