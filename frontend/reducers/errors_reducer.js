import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import beerErrorsReducer from "./beer_errors_reducer";
import checkinErrorsReducer from "./checkin_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";

const errorsReducer = combineReducers({
    session:  sessionErrorsReducer,
    beer: beerErrorsReducer,
    checkin: checkinErrorsReducer,
    comment: commentErrorsReducer
});

export default errorsReducer;