from flask import Flask, render_template, request, redirect, url_for
import redesigma


app = Flask(__name__)

# Página de login
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        senha = request.form.get('senha')
        # Aqui você faria a lógica de verificação do login
        if email == 'teste@example.com' and senha == '123456':
            return redirect(url_for('sucesso'))
        else:
            return redirect(url_for('erro'))

    return render_template('Principal.html')

@app.route('/login', methods=['GET', 'POST'])
def principal():
    if request.method == 'POST':
        principal = request.form.get('enttrar')

        if principal == True:
            return redirect('Principal.html')
        
@app.route('/Principal', methods= ['POST', 'GET'])
def principalroute():
    if request.method == 'POST':
        veiculos1 = request.form.get('veiculos')
        vendas1 = request.form.get('vendas')
        compras1 = request.form.get('compras')
        pedidos1 = request.form.get('pedidos')
        
