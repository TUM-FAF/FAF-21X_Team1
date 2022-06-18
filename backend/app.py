from urllib import response
from flask import Flask
from flask import Flask, Response
from flask import jsonify, request
import json
import random

app = Flask(__name__)

users = []

f = open('questions.json')
questions = json.load(f)
f.close()

POINTS_THRESHOLD = 12

class User:
    def __init__(self, name):
        self.name = name
        self.points = 0     

def reset():
    global users

    users = []

# body: name
# response: questions
@app.route('/qr/<int:qr_id>/<string:name>', methods=['POST'])
def qr(qr_id, name):
    global users

    user = User(name)
    users.append(user)

    question = questions[qr_id - 1]['question']

    return jsonify({"question": question})


# body: answer (answer from the user to a single question)
# response: points (points accumulated)
@app.route('/check/<int:qr_id>/<string:name>', methods=['POST'])
def check(qr_id, name):
    answers = questions[qr_id - 1]['answers']
    user_answer = json.loads(request.data)['answer']
    points = 0

    if user_answer in [answer['variant'] for answer in answers]:
        points = [answer['score'] for answer in answers if answer['variant'] == user_answer][0]
    
    user = [u for u in users if u.name == name][0]
    user.points = points

    return jsonify({'answer': user_answer, 'points': points})

if __name__ == '__main__':
     app.run()