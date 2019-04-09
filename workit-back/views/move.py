from flask import request
from flask.views import MethodView
from controllers.move import MoveController

import json

class MoveView(MethodView):

    @classmethod
    def make_move(cls):
        data = json.loads(request.data.decode('utf-8'))
        req_params = ['routine_id', 'name', 'start_time', 'end_time', 'total_time', 'order', 'video_url']
        for param in req_params:
            if param not in data:
                return json.dumps({"response": "ill-formed request"}), 400

        if not (isinstance(data['routine_id'], int) and isinstance(data['name'], str) and isinstance(data['start_time'], str) and isinstance(data['end_time'], str) and isinstance(data['total_time'], str) and isinstance(data['order'], int) and isinstance(data['video_url'], str)):
            return json.dumps({"response": "ill-formed request"}), 400
        
        error_message, status, response = MoveController.make_move(data['routine_id'], data['name'], data['start_time'], data['end_time'], data['total_time'], data['order'], data['video_url'])
        if error_message:
            return json.dumps({"response": error_message}), status

        return json.dumps({"response": "success!"}), 201

##Bug Here
    @classmethod
    def get_moves(cls, routine_id):
        error_message, status, response = MoveController.get_moves(routine_id)
        if error_message:
            return json.dumps({"response": error_message}), status
        return json.dumps({"response": list(map(lambda x: x.json() if x else None, response))}), status #reponse




if __name__ == "__main__":
    unittest.main()