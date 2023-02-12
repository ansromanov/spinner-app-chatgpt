from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/spin', methods=['POST'])
def spin():
    spin_options = ['200', '300', '400', '500', 'BANKRUPT', 'LOSE A TURN']
    spin_result = random.choice(spin_options)
    return spin_result

if __name__ == '__main__':
    app.run()
