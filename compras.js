// Função para validar o formulário de compras
function validateCompraForm() {
    // Obtenha os valores dos campos
    const fornecedor = document.getElementById("fornecedor").value;
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const precoUnitario = document.getElementById("precoUnitario").value;
    const dataCompra = document.getElementById("dataCompra").value;

    // Verifique se todos os campos foram preenchidos
    if (fornecedor === "" || produto === "" || quantidade === "" || precoUnitario === "" || dataCompra === "") {
        alert("Todos os campos devem ser preenchidos!");
        return false;
    }

    // Validação de preço unitário e quantidade (devem ser números positivos)
    if (isNaN(precoUnitario) || precoUnitario <= 0) {
        alert("Por favor, insira um preço unitário válido!");
        return false;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida!");
        return false;
    }

    // Se passou por todas as validações, o formulário pode ser enviado
    alert("Compra registrada com sucesso!");
    return true;
}

// Função para voltar para o menu
function goBack() {
    window.location.href = 'Principal.html';  // Redireciona para a página do menu
}

// Função para adicionar uma nova compra à tabela
function addCompraToTable(fornecedor, produto, quantidade, precoUnitario, dataCompra) {
    const table = document.getElementById("compraTable").getElementsByTagName('tbody')[0];

    // Crie uma nova linha
    const newRow = table.insertRow(table.rows.length);

    // Crie as células para cada coluna
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    // Preencha as células com os valores
    cell1.textContent = fornecedor;
    cell2.textContent = produto;
    cell3.textContent = quantidade;
    cell4.textContent = "R$ " + precoUnitario.toFixed(2);  // Formatação de valor
    cell5.textContent = dataCompra;
    cell6.innerHTML = '<button onclick="editCompra(this)">Editar</button> <button onclick="deleteCompra(this)">Excluir</button>';
}

// Função para editar uma compra
function editCompra(button) {
    const row = button.parentNode.parentNode;
    const fornecedor = row.cells[0].textContent;
    const produto = row.cells[1].textContent;
    const quantidade = row.cells[2].textContent;
    const precoUnitario = row.cells[3].textContent.replace("R$ ", "").replace(",", ".");
    const dataCompra = row.cells[4].textContent;

    // Preencha os campos do formulário com os valores da linha
    document.getElementById("fornecedor").value = fornecedor;
    document.getElementById("produto").value = produto;
    document.getElementById("quantidade").value = quantidade;
    document.getElementById("precoUnitario").value = precoUnitario;
    document.getElementById("dataCompra").value = dataCompra;

    // Remover a compra para editar depois (vai precisar de lógica extra)
    row.remove();
}

// Função para excluir uma compra
function deleteCompra(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

// Função para simular o cadastro de uma compra ao submeter o formulário
document.getElementById("compraForm").onsubmit = function(event) {
    event.preventDefault();

    // Pegue os valores dos campos do formulário
    const fornecedor = document.getElementById("fornecedor").value;
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const precoUnitario = parseFloat(document.getElementById("precoUnitario").value);
    const dataCompra = document.getElementById("dataCompra").value;

    // Adicione a compra à tabela
    addCompraToTable(fornecedor, produto, quantidade, precoUnitario, dataCompra);

    // Limpe o formulário após a submissão
    document.getElementById("compraForm").reset();
};
