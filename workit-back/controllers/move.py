from models.move import MoveModel
from models.routine import RoutineModel
from models.user import UserModel


class MoveController():
    @classmethod
    def make_move(cls, user_id, first, last, death_year, is_deceased, gender, relation, notes, is_step, is_adopted, birth_date, lives_in, nickname):
        # if not UserModel.find_by_id(user_id):
        #     return "User with that id does not exist", 400, None
        rln = relation[0]
        related_to = relation[1]
        relation_out = "uncle" #placeholder. have to do computation for relationship
        try:
            new_move = MoveModel(user_id, first, last, death_year, is_deceased, gender, relation_out, notes, is_step, is_adopted, birth_date, lives_in, nickname)
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
            return "", 200, relations
        except:
            return "Error retrieving moves for routine id",500, None
