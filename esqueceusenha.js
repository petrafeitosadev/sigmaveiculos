document.getElementById("esqueceuSenhaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const telefone = document.getElementById("telefone_esqueceu").value;

    // Validação simples de telefone
    if (telefone === "" || telefone.length !== 11) {
        alert("Por favor, preencha corretamente o número de telefone com 11 dígitos!");
        return;
    }

    // Simulação de verificação de telefone no sistema
    const validTelefone = "92995080225"; // Número fictício para validação

    if (telefone === validTelefone) {
        alert("Um código de redefinição foi enviado para o seu número de telefone.");
        window.location.href = "Login.html";  // Redireciona para a tela de login
    } else {
        alert("Número de telefone não encontrado. Por favor, verifique o número informado.");
    }
});
