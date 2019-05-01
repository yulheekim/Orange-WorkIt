import axios from 'axios';

const api = "https://cors-anywhere.herokuapp.com/https://orange-workit.herokuapp.com/";

//Action Types
export const CHANGE_USERNAME= 'workit/CHANGE_USERNAME';

export const HANDLE_REGISTER= 'workit/HANDLE_REGISTER';
export const HANDLE_REGISTER_SUCCESS= 'workit/HANDLE_REGISTER_SUCCESS';
export const HANDLE_REGISTER_FAILURE= 'workit/HANDLE_REGISTER_FAILURE';

export const HANDLE_LOGIN= 'workit/HANDLE_LOGIN';
export const HANDLE_LOGIN_SUCCESS= 'workit/HANDLE_LOGIN_SUCCESS';
export const HANDLE_LOGIN_FAILURE= 'workit/HANDLE_LOGIN_FAILURE';

export const LOAD_ROUTINES= 'workit/LOAD_ROUTINES';
export const LOAD_ROUTINES_SUCCESS= 'workit/LOAD_ROUTINES_SUCCESS';
export const LOAD_ROUTINES_FAILURE= 'workit/LOAD_ROUTINES_FAILURE';

export const LOAD_MOVES= 'workit/LOAD_MOVES';
export const LOAD_MOVES_SUCCESS= 'workit/LOAD_MOVES_SUCCESS';
export const LOAD_MOVES_FAILURE= 'workit/LOAD_MOVES_FAILURE';
export const INCREMENT_MOVE_INDEX= 'workit/INCREMENT_MOVE_INDEX';
export const DECREMENT_MOVE_INDEX= 'workit/DECREMENT_MOVE_INDEX';
export const ZERO_MOVE_INDEX= 'workit/ZERO_MOVE_INDEX';
export const TOGGLE_MOVE_OR_BREAK= 'workit/TOGGLE_MOVE_OR_BREAK';
export const SET_GO_HOME='workit/SET_GO_HOME';
export const TOGGLE_FINISH_ROUTINE= 'workit/TOGGLE_FINISH_ROUTINE';
export const SET_MOVE_INDEX= 'workit/SET_MOVE_INDEX';

export const SEND_MOVE= 'workit/SEND_MOVE';
export const SEND_MOVE_SUCCESS= 'workit/SEND_MOVE_SUCCESS';
export const SEND_MOVE_FAILURE= 'workit/SEND_MOVE_FAILURE';

export const SEND_ROUTINE= 'workit/SEND_ROUTINE';
export const SEND_ROUTINE_SUCCESS= 'workit/SEND_ROUTINE_SUCCESS';
export const SEND_ROUTINE_FAILURE= 'workit/SEND_ROUTINE_FAILURE';


const INITIAL_STATE = {
                username: "",
                user_id: 0,
                loggedin: false,
                loading: false,
                routine_id: 0,
                loading_moves: false,
                error_message: "",
                move_index: 0,
                move_or_break: true, // true = working out. false = break.
                go_home: false,
                routine_is_finished: false, // if the current routine finishes
                routine_sent: false,
            }

// Reducers

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case SET_MOVE_INDEX:
            // console.log("wwwwwwww");
            // console.log(action.payload);
            return {
                ...state,
                move_index: action.payload
            }
        case TOGGLE_FINISH_ROUTINE:
            console.log("case toggle finish routine")
            return {
                ...state,
                move_index: 0,
                move_or_break: true,
                routine_is_finished: !action.payload
            }
        case TOGGLE_MOVE_OR_BREAK:
            console.log("case toggle move or break")
            return {
                ...state,
                move_or_break: !action.payload
            }
        case SET_GO_HOME:
            return {
                ...state,
                go_home: action.payload
            }
        case INCREMENT_MOVE_INDEX:
                console.log("red")
                return {
                    ...state,
                    move_index: action.payload + 1
            }
        case DECREMENT_MOVE_INDEX:
                console.log("decrementing")
                return {
                    ...state,
                    move_index: action.payload - 1
            }
        case ZERO_MOVE_INDEX:
                console.log("zeroing")
                return {
                    ...state,
                    move_index: 0
            }
        case CHANGE_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case HANDLE_REGISTER:
            return {
                ...state,
                registered: false
            }
        case HANDLE_REGISTER_SUCCESS:
            if(action.payload){
                console.log("register succeded!")
                return {
                    ...state,
                    error_message: "",
                    registered: true
                }
            } else {
                return {
                    ...state,
                }
            }

        case HANDLE_REGISTER_FAILURE:
            return {
                ...state,
                error_message: "Something went wrong while registering.",
            }
        case HANDLE_LOGIN:
            return {
                ...state,
                loggedin: false
            }
        case HANDLE_LOGIN_SUCCESS:
            if(action.payload){
                return {
                    ...state,
                    error_message: "",
                    username: "",
                    user_id: action.payload,
                    loggedin: true
                }
            } else {
                return {
                    ...state,
                }
            }

        case HANDLE_LOGIN_FAILURE:
            return {
                ...state,
                error_message: "Something went wrong while logging in.",
            }
        case LOAD_ROUTINES:
            console.log("loading routines...")
            return {
                ...state,
                loading: true,
            };
        case LOAD_ROUTINES_SUCCESS:
            if (action.payload) {
                console.log("successfully loaded routines")
                return {
                    ...state,
                    routines: action.payload,
                    loading: false
                };
            }
            return {
                ...state,
                error_message: ""
            }
        case LOAD_ROUTINES_FAILURE:
            return {
                ...state,
                error_message: "Error in loading routines",
            };

        case LOAD_MOVES:
            return {
                ...state,
                loading_moves: true,
                routine_id: action.payload,
            };
        case LOAD_MOVES_SUCCESS:
            if (action.payload) {
                return {
                    ...state,
                    moves: action.payload,
                    loading_moves: false,
                };
            }
            return {
                ...state,
                error_message: ""
            };
        case LOAD_MOVES_FAILURE:
            return {
                ...state,
                loading_moves: true,
                error_message: "Error in loading moves",

            };
        case SEND_MOVE:
            return {
                ...state,
            };
        case SEND_MOVE_SUCCESS:
            return {
                ...state,
            };
        case SEND_MOVE_FAILURE:
            return {
                ...state,
                error_message: "Error in sending move",
            };
        case SEND_ROUTINE:
            return {
                ...state,
                routine_sent: false,
            };
        case SEND_ROUTINE_SUCCESS:
            return {
                ...state,
                routine_sent: true,
            };
        case SEND_ROUTINE_FAILURE:
            return {
                ...state,
                error_message: "Error in sending routine",
            };
        default:
            return {
                ...state
            }
    }
}

//Action Creators
export const set_move_index = (move_index) => {
    return (dispatch) => {
        dispatch({
            type: SET_MOVE_INDEX,
            payload: move_index
        })
    }
}
export const toggle_finish_routine = (routine_is_finished) => {
    console.log("inside finish routine")
    return (dispatch) => {
        dispatch({
            type: TOGGLE_FINISH_ROUTINE,
            payload: routine_is_finished
        })
    }
}
export const toggle_move_or_break = (move_or_break) => {
    console.log("inside toggle status")
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MOVE_OR_BREAK,
            payload: move_or_break
        })
    }
}

export const set_go_home = (go_home) => {
    return (dispatch) => {
        dispatch({
            type: SET_GO_HOME,
            payload: go_home
        })
    }
}

export const increment_move_index = (move_idx) => {
    console.log("inside action")
    return (dispatch) => {
        dispatch({
            type: INCREMENT_MOVE_INDEX,
            payload: move_idx
        })
    }
}

export const decrement_move_index = (move_idx) => {
    console.log("decrementing action!")
    return (dispatch) => {
        dispatch({
            type: DECREMENT_MOVE_INDEX,
            payload: move_idx
        })
    }
}

export const zero_move_index = () => {
    console.log("zeroing action!")
    return (dispatch) => {
        dispatch({
            type: ZERO_MOVE_INDEX,
        })
    }
}

export const change_username = (new_username) => {

    return (dispatch) => {
        dispatch({
            type: CHANGE_USERNAME,
            payload: new_username
        })
    }
}

export const handle_register = (username) => {
    const url = api + `signup`;
    return (dispatch) => {
        dispatch({
            type: HANDLE_REGISTER,
        });
        axios.post(url, {
            "username": username,
        })
          .then((response) => handle_register_success(dispatch, response))
          .catch((error) => handle_register_failure(dispatch, error))
    }
}
export const handle_register_success = (dispatch, response) => {
    dispatch({
        type: HANDLE_REGISTER_SUCCESS,
        payload: response.data.response,
    });
}

export const handle_register_failure = (dispatch, error) => {
    dispatch({
        type: HANDLE_REGISTER_FAILURE,
    });
}

export const handle_login = (username) => {
    const url = api + `signin`;
    return (dispatch) => {
        dispatch({
            type: HANDLE_LOGIN,
        });
        axios.post(url, {
            "username": username,
        })
          .then((response) => handle_login_success(dispatch, response))
          .catch((error) => handle_login_failure(dispatch, error))
    }
}
export const handle_login_success = (dispatch, response) => {
    dispatch({
        type: HANDLE_LOGIN_SUCCESS,
        payload: response.data.response,
    });
}

export const handle_login_failure = (dispatch, error) => {
    dispatch({
        type: HANDLE_LOGIN_FAILURE,
    });
}

export const load_routines = (user_id) => {
    const url = api + `routines/${user_id}`;
    return (dispatch) => {
        dispatch({
            type: LOAD_ROUTINES
        });
        axios.get(url)
          .then((response) => load_routines_success(dispatch, response))
          .catch((error) => load_routines_failure(dispatch, error))
    }
}
export const load_routines_success = (dispatch, response) => {
    dispatch({
        type: LOAD_ROUTINES_SUCCESS,
        payload: response.data.response
    });
}
export const load_routines_failure = (dispatch, response) => {
    dispatch({
        type: LOAD_ROUTINES_FAILURE,
    })
}

export const load_moves = (routine_id) => {
    //console.log("already load moves");
    const url = api + `moves/${routine_id}`;
    return (dispatch) => {
        dispatch({
            type: LOAD_MOVES,
            payload: routine_id,
        });
        axios.get(url)
          .then((response) => load_moves_success(dispatch, response))
          .catch((error) => load_moves_failure(dispatch, error))
    }
}
export const load_moves_success = (dispatch, response) => {
    dispatch({
        type: LOAD_MOVES_SUCCESS,
        payload: response.data.response
    });
}
export const load_moves_failure = (dispatch, response) => {
    dispatch({
        type: LOAD_MOVES_FAILURE,
    })
}

export const send_move = (move) => {
    const url = api + 'move';
    return (dispatch) => {
        dispatch({
            type: SEND_MOVE
        });
        axios.post(url, move)
          .then((response) => send_move_success(dispatch, response))
          .catch((error) => send_move_failure(dispatch, error))
    }
}
export const send_move_success = (dispatch, response) => {
    dispatch({
        type: SEND_MOVE_SUCCESS,
        payload: response.data.response
    });
}
export const send_move_failure = (dispatch, response) => {
    dispatch({
        type: SEND_MOVE_FAILURE,
    })
}

export const send_routine = (routine) => {
    const url = api + 'routine';
    return (dispatch) => {
        dispatch({
            type: SEND_ROUTINE
        });
        axios.post(url, routine)
          .then((response) => send_routine_success(dispatch, response))
          .catch((error) => send_routine_failure(dispatch, error))
    }
}
export const send_routine_success = (dispatch, response) => {
    dispatch({
        type: SEND_ROUTINE_SUCCESS,
        payload: response.data.response
    });
}
export const send_routine_failure = (dispatch, response) => {
    dispatch({
        type: SEND_ROUTINE_FAILURE,
    })
}