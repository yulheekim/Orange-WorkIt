from models.routine import RoutineModel
from models.user import UserModel


class RoutineController():
    @classmethod
    def make_routine(cls, user_id, name):
        # if not UserModel.find_by_id(user_id):
        #     return "User with that id does not exist", 400, None
        try:
            new_routine = RoutineModel(user_id, name)
            new_routine.save_to_db()
        except:
            # cls.logger.exception("Error in creating new user")
            return "Internal Server Error.", 500, None
        return "", 201, None

    @classmethod
    def get_routines(cls, user_id):

        try:
            routines = RoutineModel.find_by_user_id(user_id)
            if routines == []:
                return "No routines found for the given user id", 400, None
            return "", 200, routines
        except:
            return "Error retrieving routines for user id",500, None
