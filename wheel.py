from flask import Flask, render_template, request
import random
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/spin', methods=['POST'])
def spin():
    spin_values = json.loads(request.data)['values']
    spin_result = random.choice(spin_values)
    return spin_result

if __name__ == '__main__':
    app.run()
