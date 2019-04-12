from db import db
from models.common import CommonModel
from util.jsonencode import JsonEncodedDict

class RoutineModel(db.Model, CommonModel):
    __tablename__ = 'routine'

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255))


    def __init__(self, user_id, name):
        self.user_id =  user_id
        self.name = name

    def json(self):
        return {
            "id": self.id,
            "name": self.name
        }


    @classmethod
    def find_by_user_id(cls, user_id):
        return cls.query.filter_by(user_id = user_id).all()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id = id).first()



