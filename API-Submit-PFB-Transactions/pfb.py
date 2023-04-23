import json
from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def send_request(data):
    url = "http://127.0.0.1:26659/submit_pfb"

    payload = json.dumps(data)
    headers = {
        'Content-Type': 'text/plain'
    }
    print("before send_request", url, headers, payload)
    response = requests.request("POST", url, headers=headers, data=payload)
    print("after send_request", response.json())
    return response.json()


@app.route('/submit_pfb', methods=['POST'])
def submit_pfb():
    data = request.json
    response = send_request(data)
    print("submit_pfb", response)
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
