// Função para validar o formulário de veículo
function validateVeiculoForm() {
    const chassi = document.getElementById('chassi').value.trim();
    const placa = document.getElementById('placa').value.trim();
    const marca = document.getElementById('marca').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const anoFabricacao = document.getElementById('anoFabricacao').value.trim();
    const anoModelo = document.getElementById('anoModelo').value.trim();
    const cor = document.getElementById('cor').value.trim();
    const valor = document.getElementById('valor').value.trim();

    // Verificar se os campos obrigatórios estão preenchidos
    if (!chassi || !placa || !marca || !modelo || !anoFabricacao || !anoModelo || !cor || !valor) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Adicionar veículo à tabela
    addVeiculoToTable(chassi, placa, marca, modelo);
    return true;
}

// Função para adicionar veículo à tabela
function addVeiculoToTable(chassi, placa, marca, modelo) {
    const tableBody = document.getElementById('veiculoTable').getElementsByTagName('tbody')[0];
    
    // Criar uma nova linha
    const newRow = tableBody.insertRow();

    // Criar células para os dados
    newRow.insertCell(0).textContent = chassi;
    newRow.insertCell(1).textContent = placa;
    newRow.insertCell(2).textContent = marca;
    newRow.insertCell(3).textContent = modelo;

    // Criar a célula de ações
    const actionsCell = newRow.insertCell(4);
    actionsCell.innerHTML = `
        <button onclick="editVeiculo(this)">Editar</button>
        <button onclick="deleteVeiculo(this)">Excluir</button>
    `;
}

// Função para editar veículo
function editVeiculo(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    document.getElementById('chassi').value = cells[0].textContent;
    document.getElementById('placa').value = cells[1].textContent;
    document.getElementById('marca').value = cells[2].textContent;
    document.getElementById('modelo').value = cells[3].textContent;

    // Alterar o botão de submit para "Atualizar"
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.textContent = 'Atualizar Veículo';
}

// Função para excluir veículo
function deleteVeiculo(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Função para voltar para o menu
function goBack() {
    window.location.href = "Principal.html"; // Aqui você pode definir o link para a página inicial do menu
}
