import axios from 'axios';

const api = "http://127.0.0.1:5000/";

//Action Types
export const LOAD_ROUTINES= 'workit/LOAD_ROUTINES';
export const LOAD_ROUTINES_SUCCESS= 'workit/LOAD_ROUTINES_SUCCESS';
export const LOAD_ROUTINES_FAILURE= 'workit/LOAD_ROUTINES_FAILURE';

export const LOAD_MOVES= 'workit/LOAD_MOVES';
export const LOAD_MOVES_SUCCESS= 'workit/LOAD_MOVES_SUCCESS';
export const LOAD_MOVES_FAILURE= 'workit/LOAD_MOVES_FAILURE';
export const INCREMENT_MOVE_INDEX= 'workit/INCREMENT_MOVE_INDEX';

const INITIAL_STATE = {
                loading: true,
                routines: [{
                    id: 1,
                    name: "abs",
                },
                {
                    id: 2,
                    name: "back"
                }],
                moves: [{
                    end_time: "131",
                    start_time: "91",
                    name: "spiderman plank",
                    total_time: "45",
                    video_url: "https://youtu.be/UBnfm4s7CRA?list=PL48bwuiYkDmf3UAZjxBWCKvVGGIUi2xuj"
                },
                {
                    end_time: "91",
                    start_time: "51",
                    name: "plank squat",
                    total_time: "45",
                    video_url: "https://youtu.be/Th97oQ4eF9U?list=PL48bwuiYkDmf3UAZjxBWCKvVGGIUi2xuj"
                },
                {
                    end_time: "1",
                    start_time: "41",
                    name: "crunches",
                    total_time: "45",
                    video_url: "https://youtu.be/Th97oQ4eF9U?list=PL48bwuiYkDmf3UAZjxBWCKvVGGIUi2xuj"
                }],
                error_message: "",
                move_index: 0,
            }

//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case INCREMENT_MOVE_INDEX:
                console.log("red")
                return {
                    ...state,
                    move_index: action.payload + 1
            }
        case LOAD_ROUTINES:
            return {
                ...state,
                loading: true,
            };
        case LOAD_ROUTINES_SUCCESS:
            if (action.payload) {
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
                error_message: "Error in loading moves",
            };
        
        case LOAD_MOVES:
            return {
                ...state,
                loading: true,
            };
        case LOAD_MOVES_SUCCESS:
            if (action.payload) {
                return {
                    ...state,
                    moves: action.payload,
                    loading: false
                };
            }
            return {
                ...state,
                error_message: ""
            }
        case LOAD_MOVES_FAILURE:
            return {
                ...state,
                error_message: "Error in loading moves",
            }
        default:
            return {
                ...state
            }
    }
}

//Action Creators
export const increment_move_index = (move_idx) => {
    console.log("inside action")
    return (dispatch) => {
        dispatch({
            type: INCREMENT_MOVE_INDEX,
            payload: move_idx
        })
    }
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
    const url = api + `moves/${routine_id}`;
    return (dispatch) => {
        dispatch({
            type: LOAD_MOVES
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
