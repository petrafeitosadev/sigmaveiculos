import datetime
import email
from flask import Flask, app, redirect, render_template, request

# Classes principais do sistema (main)
class Cliente:
    def __init__(self, cpf, nome, endereco, telefone_residencial, celular, renda):
        self.cpf = cpf
        self.nome = nome
        self.endereco = endereco  # Exemplo: "Bairro X, Cidade Y, Estado Z"
        self.telefone_residencial = telefone_residencial
        self.celular = celular
        self.renda = renda

    def __repr__(self):
        return f'Cliente: {self.nome}, CPF: {self.cpf}'

class Vendedor:
    def __init__(self, codigo, usuario):
        self.codigo = codigo
        self.usuario = usuario

    def __repr__(self):
        return f'Vendedor: {self.usuario}, Código: {self.codigo}'

class Veiculo:
    def __init__(self, chassi, placa, marca, modelo, ano_fabricacao, ano_modelo, cor, valor):
        self.chassi = chassi
        self.placa = placa
        self.marca = marca
        self.modelo = modelo
        self.ano_fabricacao = ano_fabricacao
        self.ano_modelo = ano_modelo
        self.cor = cor
        self.valor = valor

    def __repr__(self):
        return f'Veículo: {self.marca} {self.modelo}, Placa: {self.placa}, Valor: {self.valor}'

class Montadora:
    def __init__(self, cnpj, razao_social, marca, contato, telefone_comercial, celular):
        self.cnpj = cnpj
        self.razao_social = razao_social
        self.marca = marca
        self.contato = contato
        self.telefone_comercial = telefone_comercial
        self.celular = celular

    def __repr__(self):
        return f'Montadora: {self.razao_social}, Marca: {self.marca}'

class OperacaoCompra:
    def __init__(self, numero, data, cliente, vendedor, veiculo, valor):
        self.numero = numero
        self.data = data
        self.cliente = cliente
        self.vendedor = vendedor
        self.veiculo = veiculo
        self.valor = valor

    def __repr__(self):
        return f'Compra Nº {self.numero} - Cliente: {self.cliente.nome}, Veículo: {self.veiculo.marca} {self.veiculo.modelo}'

class OperacaoVenda:
    def __init__(self, numero, data, cliente, vendedor, veiculo, valor_entrada, valor_financiado, valor_total):
        self.numero = numero
        self.data = data
        self.cliente = cliente
        self.vendedor = vendedor
        self.veiculo = veiculo
        self.valor_entrada = valor_entrada
        self.valor_financiado = valor_financiado
        self.valor_total = valor_total

    def __repr__(self):
        return f'Venda Nº {self.numero} - Cliente: {self.cliente.nome}, Veículo: {self.veiculo.marca} {self.veiculo.modelo}'

class Pedido:
    def __init__(self, numero, data, cliente, vendedor, montadora, modelo, ano, cor, acessorios, valor):
        self.numero = numero
        self.data = data
        self.cliente = cliente
        self.vendedor = vendedor
        self.montadora = montadora
        self.modelo = modelo
        self.ano = ano
        self.cor = cor
        self.acessorios = acessorios
        self.valor = valor

    def __repr__(self):
        return f'Pedido Nº {self.numero} - Cliente: {self.cliente.nome}, Modelo: {self.modelo}, Montadora: {self.montadora.marca}'


# Base de dados simulada (listas em python mas segue a ideia de vetores)
clientes = []
vendedores = []
veiculos = []
operacoes_compra = []
operacoes_venda = []
pedidos = []
montadoras = []


# Funções para adicionar dados aaaaa (as listas/ vetores revcebem os dados simulando uma dbs)
def adicionar_cliente():
    cpf = input("CPF do cliente: ")
    nome = input("Nome do cliente: ")
    endereco = input("Endereço (Bairro, Cidade, Estado): ")
    telefone_residencial = input("Telefone residencial: ")
    celular = input("Celular: ")
    renda = float(input("Renda: "))
    cliente = Cliente(cpf, nome, endereco, telefone_residencial, celular, renda)
    clientes.append(cliente)
    print("Cliente adicionado com sucesso!\n")


def adicionar_vendedor():
    codigo = input("Código do vendedor: ")
    usuario = input("Usuário do vendedor: ")
    vendedor = Vendedor(codigo, usuario)
    vendedores.append(vendedor)
    print("Vendedor adicionado com sucesso!\n")


def adicionar_veiculo():
    chassi = input("Número do chassi: ")
    placa = input("Placa: ")
    marca = input("Marca: ")
    modelo = input("Modelo: ")
    ano_fabricacao = int(input("Ano de fabricação: "))
    ano_modelo = int(input("Ano do modelo: "))
    cor = input("Cor: ")
    valor = float(input("Valor: "))
    veiculo = Veiculo(chassi, placa, marca, modelo, ano_fabricacao, ano_modelo, cor, valor)
    veiculos.append(veiculo)
    print("Veículo adicionado com sucesso!\n")


def realizar_operacao_compra():
    numero = input("Número da operação de compra: ")
    data = datetime.date.today()
    cliente = selecionar_cliente()
    vendedor = selecionar_vendedor()
    veiculo = selecionar_veiculo()
    valor = float(input("Valor da compra: "))
    operacao = OperacaoCompra(numero, data, cliente, vendedor, veiculo, valor)
    operacoes_compra.append(operacao)
    print("Operação de compra realizada com sucesso!\n")


def realizar_operacao_venda():
    numero = input("Número da operação de venda: ")
    data = datetime.date.today()
    cliente = selecionar_cliente()
    vendedor = selecionar_vendedor()
    veiculo = selecionar_veiculo()
    valor_entrada = float(input("Valor de entrada: "))
    valor_financiado = float(input("Valor financiado: "))
    valor_total = valor_entrada + valor_financiado
    operacao = OperacaoVenda(numero, data, cliente, vendedor, veiculo, valor_entrada, valor_financiado, valor_total)
    operacoes_venda.append(operacao)
    print("Operação de venda realizada com sucesso!\n")


def realizar_pedido():
    numero = input("Número do pedido: ")
    data = datetime.date.today()
    cliente = selecionar_cliente()
    vendedor = selecionar_vendedor()
    montadora = selecionar_montadora()
    modelo = input("Modelo do veículo: ")
    ano = int(input("Ano do veículo: "))
    cor = input("Cor do veículo: ")
    acessorios = input("Acessórios: ")
    valor = float(input("Valor: "))
    pedido = Pedido(numero, data, cliente, vendedor, montadora, modelo, ano, cor, acessorios, valor)
    pedidos.append(pedido)
    print("Pedido realizado com sucesso!\n")


# Funções auxiliares (sistema menu(fiz assim pq n tem front ok))
def selecionar_cliente():
    print("Selecione o cliente:")
    for idx, cliente in enumerate(clientes):
        print(f"{idx + 1} - {cliente.nome}")
    opcao = int(input("Opção: "))
    return clientes[opcao - 1]


def selecionar_vendedor():
    print("Selecione o vendedor:")
    for idx, vendedor in enumerate(vendedores):
        print(f"{idx + 1} - {vendedor.usuario}")
    opcao = int(input("Opção: "))
    return vendedores[opcao - 1]


def selecionar_veiculo():
    print("Selecione o veículo:")
    for idx, veiculo in enumerate(veiculos):
        print(f"{idx + 1} - {veiculo.marca} {veiculo.modelo}, Placa: {veiculo.placa}")
    opcao = int(input("Opção: "))
    return veiculos[opcao - 1]


def selecionar_montadora():
    print("Selecione a montadora:")
    for idx, montadora in enumerate(montadoras):
        print(f"{idx + 1} - {montadora.razao_social}")
    opcao = int(input("Opção: "))
    return montadoras[opcao - 1]


# Função de exibição dos dados
def exibir_clientes_ordenados():
    for cliente in sorted(clientes, key=lambda x: x.nome):
        print(cliente)


def exibir_veiculos_ordenados():
    for veiculo in sorted(veiculos, key=lambda x: (x.marca, x.modelo)):
        print(veiculo)

@app.route('/AcessoUsuario', methods=['POST'])
def acessoUsuario():
    email = request.form.get('email_login')
    senha = request.form.get('senha_login')

    print(f"seu email é: {email}")
    print(f"sua senha é: {senha}")


    return redirect('/Login')


# Menu principal(n tem front ainda aa)
def menu():
    while True:
        print("1 - Adicionar Cliente")
        print("2 - Adicionar Vendedor")
        print("3 - Adicionar Veíulo")
        print("4 - Realizar Operação de Compra")
        print("5 - Realizar Operação de Venda")
        print("6 - Realizar Pedido")
        print("7 - Exibir Clientes (Ordem Alfabética)")
        print("8 - Exibir Veículos (Marca e Modelo)")
        print("0 - Sair")
        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            adicionar_cliente()
        elif opcao == "2":
            adicionar_vendedor()
        elif opcao == "3":
            adicionar_veiculo()
        elif opcao == "4":
            realizar_operacao_compra()
        elif opcao == "5":
            realizar_operacao_venda()
        elif opcao == "6":
            realizar_pedido()
        elif opcao == "7":
            exibir_clientes_ordenados()
        elif opcao == "8":
            exibir_veiculos_ordenados()
        elif opcao == "0":
            print("Saindo...")
            break
        else:
            print("Opção inválida. Tente novamente.\n")

# Iniciar o menu chamando a finção menu
menu()


#começo em login, de login faço a routte pra cadastro, esqueci a senha e  principal, principal para as demais



