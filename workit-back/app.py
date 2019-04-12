import os

from db import db
from flask import Flask, request, redirect, Response
from flask_cors import cross_origin, CORS

from views.user import UserView
from views.routine import RoutineView
from views.move import MoveView
from models.user import UserModel
from models.routine import RoutineModel
from models.move import MoveModel



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///localdata.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['SESSION_TYPE'] = 'filesystem'


if __name__ == '__main__':
    CORS(app)

@app.route('/')
def hello_world():
    return "running!"

@app.route('/signup', methods=['POST'])
def user():
    return UserView.make_user()

@app.route('/signin', methods=['POST'])
def signin():
    return UserView.signin()


@app.route('/routine', methods=['POST'])
def routine():
    #if request.method == 'POST':
    return RoutineView.make_routine()
    # elif request.method == 'GET':
    #     return RelationsView.get_relations()

@app.route('/routines/<string:user_id>', methods=['GET'])
def routines_by_user_id(user_id):
    return RoutineView.get_routines(user_id)


@app.route('/move', methods=['POST'])
def move():
    #if request.method == 'POST':
    return MoveView.make_move()
    # elif request.method == 'GET':
    #     return RelationsView.get_relations()

@app.route('/moves/<string:routine_id>', methods=['GET'])
def moves_by_user_id(routine_id):
    return MoveView.get_moves(routine_id)


if __name__ == '__main__':
    db.init_app(app)
    @app.before_first_request
    def create_tables():
        db.create_all()
    app.run()



