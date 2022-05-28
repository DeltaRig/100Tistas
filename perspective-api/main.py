import os,json, time

from flask import Flask, jsonify, request
from app.util.util import detect

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def checkToxicity():
    try:
        lista = []
        comment = request.get_json()
        comment = comment['txt']
        detect(comment, lista)
    except Exception as e:
        print(e)
        return "Erro"
    return {"response": lista}


def main():
    app.run(host='0.0.0.0')

if __name__ == '__main__':
    main()
