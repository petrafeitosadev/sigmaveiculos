// Função para validar o formulário
function validateClienteForm() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;

    if (!nome || !cpf || !email || !telefone || !endereco) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    return true;
}

// Função para adicionar o cliente à tabela
function addCliente(nome, cpf, email, telefone, endereco) {
    const table = document.getElementById('clienteTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${cpf}</td>
        <td>${email}</td>
        <td>${telefone}</td>
        <td>${endereco}</td>
        <td><button class="delete" onclick="deleteCliente(this)">Excluir</button></td>
    `;
}

// Função para excluir um cliente da tabela
function deleteCliente(button) {
    const row = button.closest('tr');
    row.remove();
}

// Função para lidar com o envio do formulário
document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateClienteForm()) {
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const endereco = document.getElementById('endereco').value;
        
        addCliente(nome, cpf, email, telefone, endereco);
        
        // Limpa o formulário
        document.getElementById('clienteForm').reset();

        // Redireciona para a tela principal (ajuste o caminho conforme necessário)
        window.location.href = 'Principal.html';
    }
});

// Função para voltar ao menu
function goBack() {
    window.history.back();
}
