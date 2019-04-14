// testing keren's commits

import axios from 'axios';

const api = "http://127.0.0.1:5000/";

// Action Types

export const CHANGE_USERNAME = 'workit/CHANGE_USERNAME';
export const HANDLE_LOGIN = 'workit/HANDLE_LOGIN';
export const HANDLE_LOGIN_SUCCESS = 'workit/HANDLE_LOGIN_SUCCESS';
export const HANDLE_LOGIN_FAILURE = 'workit/HANDLE_LOGIN_FAILURE';


export const LOAD_ROUTINES= 'workit/LOAD_ROUTINES';
export const LOAD_ROUTINES_SUCCESS= 'workit/LOAD_ROUTINES_SUCCESS';
export const LOAD_ROUTINES_FAILURE= 'workit/LOAD_ROUTINES_FAILURE';

export const LOAD_MOVES= 'workit/LOAD_MOVES';
export const LOAD_MOVES_SUCCESS= 'workit/LOAD_MOVES_SUCCESS';
export const LOAD_MOVES_FAILURE= 'workit/LOAD_MOVES_FAILURE';

const INITIAL_STATE = {
                username: "",
                user_id: 0,
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
            }

// Reducers

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case CHANGE_USERNAME:
            return{
                ...state,
                username: action.payload
            };
        case HANDLE_LOGIN:
            return{
                ...state
            };
        case HANDLE_LOGIN_SUCCESS:
            if (action.payload) {
                console.log(action.payload)
                return {
                    ...state,
                    user_id: action.payload
                }
            }
            return {
                ...state,
                error_message: "Login data not fetched!"
            }
        case HANDLE_LOGIN_FAILURE:
            return {
                ...state,
                error_message: "Error loading user's login data",
            };
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
            };
        default:
            return {
                ...state
            }
    }
}

//Action Creators

export const change_username = (username) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_USERNAME,
            payload: username
        })
}}

export const handle_login = (username) => {
    const url = api + "signin";
    return (dispatch) => {
        dispatch({
            type: HANDLE_LOGIN
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
        payload: response.data.response
    });
}

export const handle_login_failure = (dispatch, response) => {
    dispatch({
        type: HANDLE_LOGIN_FAILURE,
    })
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


