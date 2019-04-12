from flask import request
from flask.views import MethodView
from controllers.routine import RoutineController

import json
from datetime import datetime

class RoutineView(MethodView):

    @classmethod
    def make_routine(cls):
        data = json.loads(request.data.decode('utf-8'))
        req_params = ["user_id", "name"]
        for param in req_params:
            if param not in data:
                return json.dumps({"response": "ill-formed request"}), 400

        if not (isinstance(data["user_id"], int) and isinstance(data["name"], str)):
            return json.dumps({"response": "ill-formed request"}), 400
        
        error_message, status, response = RoutineController.make_routine(data['user_id'], data['name'])
        if error_message:
            return json.dumps({"response": error_message}), status

        return json.dumps({"response": "success!"}), 201

##Bug Here
    @classmethod
    def get_routines(cls, user_id):
        error_message, status, response = RoutineController.get_routines(user_id)
        if error_message:
            return json.dumps({"response": error_message}), status
        return json.dumps({"response": list(map(lambda x: x.json() if x else None, response))}), status #reponse




if __name__ == "__main__":
    unittest.main()