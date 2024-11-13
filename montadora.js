function validateMontadoraForm() {
    var nome = document.getElementById("nome").value;
    var cnpj = document.getElementById("cnpj").value;
    var endereco = document.getElementById("endereco").value;
    var telefone = document.getElementById("telefone").value;

    // Validação simples
    if (nome === "" || cnpj === "" || endereco === "" || telefone === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
    }

    // Validação do CNPJ (padrão simplificado)
    var cnpjPattern = /^[0-9]{14}$/;
    if (!cnpjPattern.test(cnpj)) {
        alert("CNPJ inválido! Digite apenas números com 14 dígitos.");
        return false;
    }

    // Se a validação passar, podemos enviar o formulário
    alert("Montadora cadastrada com sucesso!");
    return true;
}

function goBack() {
    window.location.href = "Principal.html";  
}
