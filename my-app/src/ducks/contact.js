
//Action Types
export const TOGGLE_MODAL= 'personal_website/TOGGLE_MODAL';

const INITIAL_STATE = {
    show_which: 0,
};

//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type){
        case TOGGLE_MODAL:
            return {
                ...state,
                show_which: action.payload,
            };
        default:
            return {
                ...state
            }
    }
}

//Action Creators
export const toggle_modal = (id) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MODAL,
            payload: id
        })
    };
}
