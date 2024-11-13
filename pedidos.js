// Função para validar o formulário antes de enviar
function validatePedidoForm() {
    const cliente = document.getElementById('cliente').value;
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const precoUnitario = document.getElementById('precoUnitario').value;
    const dataPedido = document.getElementById('dataPedido').value;

    if (!cliente || !produto || !quantidade || !precoUnitario || !dataPedido) {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }
    return true;
}

// Função para cadastrar um novo pedido e atualizar a tabela
function addPedido(cliente, produto, quantidade, precoUnitario, dataPedido) {
    const table = document.getElementById('pedidoTable').getElementsByTagName('tbody')[0];
    
    const newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = `
        <td>${cliente}</td>
        <td>${produto}</td>
        <td>${quantidade}</td>
        <td>R$ ${parseFloat(precoUnitario).toFixed(2)}</td>
        <td>${new Date(dataPedido).toLocaleDateString()}</td>
        <td><button class="delete" onclick="deletePedido(this)">Excluir</button></td>
    `;
}

// Função para excluir um pedido da tabela
function deletePedido(button) {
    const row = button.closest('tr');
    row.remove();
}

// Função para lidar com o envio do formulário
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    if (validatePedidoForm()) {
        // Coleta os dados do formulário
        const cliente = document.getElementById('cliente').value;
        const produto = document.getElementById('produto').value;
        const quantidade = document.getElementById('quantidade').value;
        const precoUnitario = document.getElementById('precoUnitario').value;
        const dataPedido = document.getElementById('dataPedido').value;
        
        // Adiciona o novo pedido na tabela
        addPedido(cliente, produto, quantidade, precoUnitario, dataPedido);
        
        // Limpa o formulário
        document.getElementById('pedidoForm').reset();
        
        // Redireciona para a página principal (ajuste o caminho conforme necessário)
        window.location.href = 'Principal.html';  
    }
});

// Função para voltar ao menu (aqui você pode definir a navegação de volta)
function goBack() {
    window.history.back();
}
