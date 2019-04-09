from db import db
from models.common import CommonModel
from util.jsonencode import JsonEncodedDict

class MoveModel(db.Model, CommonModel):
    __tablename__ = 'move'

    routine_id = db.Column(db.Integer, db.ForeignKey('routine.id'))
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255))
    start_time = db.Column(db.String(255))
    end_time = db.Column(db.String(255))
    total_time = db.Column(db.String(255))
    order = db.Column(db.Integer)
    video_url = db.Column(db.String(500))




    def __init__(self, routine_id, name, start_time, end_time, total_time, order, video_url):
        self.routine_id =  routine_id
        self.name = name
        self.start_time = start_time
        self.end_time = end_time
        self.total_time = total_time
        self.order = order
        self.video_url = video_url


    def json(self):
        return {
            "id": self.id,
            "routine_id": self.routine_id, 
            "name": self.name, 
            "start_time": self.start_time, 
            "end_time": self.end_time,
            "total_time": self.total_time,
            "order": self.order,
            "video_url": self.video_url
        }


    @classmethod
    def find_by_routine_id(cls, routine_id):
        return cls.query.filter_by(routine_id = routine_id).all()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id = id).first()



