from flask import request
from flask.views import MethodView
from controllers.move import MoveController

import json

class MoveView(MethodView):

    @classmethod
    def make_move(cls):
        data = json.loads(request.data.decode('utf-8'))
        req_params = ['user_id', 'first', 'last', 'notes', 'is_step', 'is_adopted', 'birth_date', 'lives_in', 'nickname']
        for param in req_params:
            if param not in data:
                return json.dumps({"response": "ill-formed request"}), 400

        if not (isinstance(data['user_id'], int) and isinstance(data['first'], str) and isinstance(data['last'], str) and isinstance(data['notes'], str) and isinstance(data['is_step'], bool) and isinstance(data['is_adopted'], bool) and isinstance(data['lives_in'], str) and isinstance(data['nickname'], str)):
            return json.dumps({"response": "ill-formed request"}), 400
        
        error_message, status, response = MoveController.make_move(data['user_id'], data['gender'], data['relation'], data['notes'])
        if error_message:
            return json.dumps({"response": error_message}), status

        return json.dumps({"response": "success!"}), 201

##Bug Here
    @classmethod
    def get_moves(cls, user_id):
        error_message, status, response = MoveController.get_moves(user_id)
        if error_message:
            return json.dumps({"response": error_message}), status
        return json.dumps({"response": list(map(lambda x: x.json() if x else None, response))}), status #reponse




if __name__ == "__main__":
    unittest.main()