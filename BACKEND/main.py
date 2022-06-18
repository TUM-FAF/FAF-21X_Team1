from urllib import response
from flask import Flask
from flask import Flask, Response
from flask import jsonify, request
import json

app = Flask(__name__)

users = []

question = 'How are you ?'

class User:
    def __init__(self, name):
        self.name = name
        self.points = 0
        # users.append(self)

# class Hunt:
#     def __init__(self, voucher):
#         self.voucher = voucher
#         self.participants = []

def reset():
    global users

    users = []

# body: name
# response: questions
@app.route('/qr/<string:name>', methods=['POST'])
def qr(name):
    if request.method == 'POST':
        user = User(name)
        users.append(user)

        return jsonify({"question": question})

# query: username
# body: answer (answer from the user to a single question)
# response: points (points accumulated)
@app.route('/check/<string:name>', methods=['GET'])
def check(name):
    answer = request.json['answer']
    

# query: username
# response: object (message: win/lost, voucher)
@app.route('/result/<string:name>', methods=['GET'])
def result():
    pass

# @app.route('/insurance', methods = ['GET'])
# def type_of_insurance():
#     if request.method == 'GET':
#         return jsonify({'result': 'good'})

if __name__ == '__main__':
     app.run()