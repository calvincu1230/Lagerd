import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_BREWERY } from "../actions/brewery_actions";
import { merge } from "lodash";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        case RECEIVE_BREWERY:
            return merge({}, state, action.payload.users);
        default:
            return state;
    };
};

export default usersReducer;