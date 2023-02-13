from flask import Flask, render_template, request
import json
import random

app = Flask(__name__)
winners = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/spin', methods=['POST'])
def spin():
    data = json.loads(request.data)
    spin_options = data["values"]
    spin_result = random.choice(spin_options)
    winners.append(spin_result)
    app.logger.info(f"Spin result: {spin_result}. Winners so far: {winners}")
    return spin_result

if __name__ == '__main__':
    app.run()
