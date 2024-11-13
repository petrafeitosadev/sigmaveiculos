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

    return render_template('login.html')

# Página de sucesso
@app.route('/sucesso')
def sucesso():
    return render_template('sucesso.html')

# Página de erro
@app.route('/erro')
def erro():
    return render_template('erro.html')

if __name__ == '_main_':
    app.run(debug=True)