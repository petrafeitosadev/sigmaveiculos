function validateVendedorForm() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var salario = document.getElementById("salario").value;

    // Validação simples
    if (nome === "" || cpf === "" || email === "" || telefone === "" || salario === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
    }

    // Exemplo de formatação de CPF (só para exemplo, você pode ajustar conforme necessário)
    var cpfPattern = /^[0-9]{11}$/;
    if (!cpfPattern.test(cpf)) {
        alert("CPF inválido! Digite apenas números com 11 dígitos.");
        return false;
    }

    // Se a validação passar, podemos enviar o formulário
    alert("Vendedor cadastrado com sucesso!");
    return true;
}

function goBack() {
    window.location.href = "Principal.html";  // Substitua pela URL da sua tela principal
}
