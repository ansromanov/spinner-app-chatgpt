from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/spin', methods=['POST'])
def spin():
    spin_options = []
    value1 = request.form.get('value1')
    value2 = request.form.get('value2')
    value3 = request.form.get('value3')
    if value1:
        spin_options.append(value1)
    if value2:
        spin_options.append(value2)
    if value3:
        spin_options.append(value3)
    spin_result = random.choice(spin_options)
    return spin_result

if __name__ == '__main__':
    app.run()
