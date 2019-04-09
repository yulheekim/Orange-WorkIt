import axios from 'axios';

const api = "http://127.0.0.1:5000/";

//Action Types
export const LOAD_MOVES= 'workit/LOAD_MOVES';
export const LOAD_MOVES_SUCCESS= 'workit/LOAD_MOVES_SUCCESS';
export const LOAD_MOVES_FAILURE= 'workit/LOAD_MOVES_FAILURE';

const INITIAL_STATE = {
                loading: true,
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
                routines: [{
                        id: 1,
                        name: "abs",
                    },
                    {
                        id: 2,
                        name: "back"
                    }
                ],
                error_message: "",
            }

//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
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
            };
        default:
            return {
                ...state
            }
    }
}

//Action Creators
export const load_moves = (user_id) => {
    const url = api + `moves/${user_id}`;
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
