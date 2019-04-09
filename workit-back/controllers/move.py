from models.move import MoveModel
from models.routine import RoutineModel
from models.user import UserModel


class MoveController():
    @classmethod
    def make_move(cls, routine_id, name, start_time, end_time, total_time, order, video_url):
        # if not UserModel.find_by_id(user_id):
        #     return "User with that id does not exist", 400, None
        try:
            new_move = MoveModel(routine_id, name, start_time, end_time, total_time, order, video_url)
            new_move.save_to_db()
        except:
            # cls.logger.exception("Error in creating new user")
            return "Internal Server Error.", 500, None
        return "", 201, None

    @classmethod
    def get_moves(cls, routine_id):

        try:
            moves = MoveModel.find_by_routine_id(routine_id)
            if moves == []:
                return "No moves found for the given routine id", 400, None
            return "", 200, moves
        except:
            return "Error retrieving moves for routine id",500, None
