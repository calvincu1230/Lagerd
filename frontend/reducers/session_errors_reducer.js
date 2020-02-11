import { RECIEVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            debugger
            return state;
    };
};

export default sessionErrorsReducer;