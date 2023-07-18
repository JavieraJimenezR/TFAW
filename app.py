from flask import Flask, render_template, request, redirect, url_for, session, jsonify

app = Flask(__name__)

#Rutas de la app
@app.route('/')
def inicio():
    return render_template('inicio.html')

@app.route('/agregar-donacion', methods=['GET', 'POST'])
def agregar_donacion():
    if request.method == 'POST':
        return 'Agregando donacion'
    else:
        return render_template('agregar-donacion.html')

@app.route('/agregar-pedido', methods=['GET', 'POST'])
def agregar_pedido():
    if request.method == 'POST':
        return 'Agregando pedido'
    else:
        return render_template('agregar-pedido.html')

@app.route('/ver-donaciones', methods=['GET'])
def ver_donaciones():
    return render_template('ver-donaciones.html')

@app.route('/ver-pedidos', methods=['GET'])
def ver_pedidos():
    return render_template('ver-pedidos.html')
