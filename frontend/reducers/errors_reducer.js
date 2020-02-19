import sessionErrorsReducer from "./session_errors_reducer";
import { combineReducers } from "redux";
import beerErrorsReducer from "./beer_errors_reducer";
import checkinErrorsReducer from "./checkin_errors_reducer";

const errorsReducer = combineReducers({
    session:  sessionErrorsReducer,
    beer: beerErrorsReducer,
    checkin: checkinErrorsReducer
});

export default errorsReducer;