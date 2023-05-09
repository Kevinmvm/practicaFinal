from flask import Flask, jsonify
import requests

app = Flask(__name__)

# API: https://date.nager.at/api/v3/publicholidays/2023/ES
@app.route('/festivos')
def festivos():
    url = 'https://date.nager.at/api/v3/publicholidays/2023/ES'
    response = requests.get(url)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(port=5000)