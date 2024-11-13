// Função para abrir um módulo específico
function openModule(module) {
    // Exibe uma mensagem com o nome do módulo (primeira letra maiúscula)
    alert(`Abrindo o módulo de ${module.charAt(0).toUpperCase() + module.slice(1)}`);
    
    // A navegação pode ser feita com window.location.href
    switch(module) {
        case 'veiculos':
            window.location.href = 'veiculos.html';  // Redireciona para a página de veículos
            break;
        case 'vendas':
            window.location.href = 'vendas.html';  // Redireciona para a página de vendas
            break;
        case 'compras':
            window.location.href = 'compras.html';  // Redireciona para a página de clientes
            break;
        case 'pedidos':
            window.location.href = 'pedidos.html';  // Redireciona para a página de clientes
            break;
        case 'clientes':
            window.location.href = 'clientes.html';  // Redireciona para a página de clientes
            break;
        case 'vendedores':
            window.location.href = 'vendedores.html';  // Redireciona para a página de pedidos
            break;
        case 'montadoras':
            window.location.href = 'montadoras.html';  // Redireciona para a página de montadoras
            break;
        default:
            alert('Módulo não encontrado');
            break;
    }
}

// Função para confirmar a saída do usuário
function confirmExit() {
    const confirmacao = confirm("Tem certeza de que deseja sair?");
    if (confirmacao) {
        alert("Saindo do sistema...");
        window.location.href = 'Login.html';  // Redireciona para a tela de login
    }
}
