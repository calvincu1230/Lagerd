import sessionReducer from "./session_reducer";
import usersReducer from "./users_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
    users: usersReducer,
    session: sessionReducer
});

export default entitiesReducer;