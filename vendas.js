// Função para validar o formulário de vendas
function validateVendaForm() {
    // Obtenha os valores dos campos
    const veiculo = document.getElementById("veiculo").value;
    const cliente = document.getElementById("cliente").value;
    const dataVenda = document.getElementById("dataVenda").value;
    const valorVenda = document.getElementById("valorVenda").value;

    // Verifique se todos os campos foram preenchidos
    if (veiculo === "" || cliente === "" || dataVenda === "" || valorVenda === "") {
        alert("Todos os campos devem ser preenchidos!");
        return false;
    }

    // Validação de valor (deve ser um número positivo)
    if (isNaN(valorVenda) || valorVenda <= 0) {
        alert("Por favor, insira um valor válido para a venda!");
        return false;
    }

    // Se passou por todas as validações, o formulário pode ser enviado
    alert("Venda registrada com sucesso!");
    return true;
}

// Função para voltar para o menu
function goBack() {
    window.location.href = 'Principal.html';  // Redireciona para a página do menu
}

// Função para adicionar uma nova venda à tabela
function addVendaToTable(veiculo, cliente, dataVenda, valorVenda) {
    const table = document.getElementById("vendaTable").getElementsByTagName('tbody')[0];

    // Crie uma nova linha
    const newRow = table.insertRow(table.rows.length);

    // Crie as células para cada coluna
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    // Preencha as células com os valores
    cell1.textContent = veiculo;
    cell2.textContent = cliente;
    cell3.textContent = dataVenda;
    cell4.textContent = "R$ " + valorVenda.toFixed(2);  // Formatação de valor
    cell5.innerHTML = '<button onclick="editVenda(this)">Editar</button> <button onclick="deleteVenda(this)">Excluir</button>';
}

// Função para editar uma venda
function editVenda(button) {
    const row = button.parentNode.parentNode;
    const veiculo = row.cells[0].textContent;
    const cliente = row.cells[1].textContent;
    const dataVenda = row.cells[2].textContent;
    const valorVenda = row.cells[3].textContent.replace("R$ ", "").replace(",", ".");

    // Preencha os campos do formulário com os valores da linha
    document.getElementById("veiculo").value = veiculo;
    document.getElementById("cliente").value = cliente;
    document.getElementById("dataVenda").value = dataVenda;
    document.getElementById("valorVenda").value = valorVenda;

    // Remover a venda para editar depois (vai precisar de lógica extra)
    row.remove();
}

// Função para excluir uma venda
function deleteVenda(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

// Função para simular o cadastro de uma venda ao submeter o formulário
document.getElementById("vendaForm").onsubmit = function(event) {
    event.preventDefault();

    // Pegue os valores dos campos do formulário
    const veiculo = document.getElementById("veiculo").value;
    const cliente = document.getElementById("cliente").value;
    const dataVenda = document.getElementById("dataVenda").value;
    const valorVenda = parseFloat(document.getElementById("valorVenda").value);

    // Adicione a venda à tabela
    addVendaToTable(veiculo, cliente, dataVenda, valorVenda);

    // Limpe o formulário após a submissão
    document.getElementById("vendaForm").reset();
};
