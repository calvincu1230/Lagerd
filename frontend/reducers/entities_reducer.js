import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import beersReducer from "./beers_reducer";
import breweriesReducer from "./breweries_reducer";
import checkinsReducer from "./checkins_reducer";
import commentsReducer from "./comments_reducer";
import toastsReducer from "./toasts_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    beers: beersReducer,
    breweries: breweriesReducer,
    checkins: checkinsReducer,
    comments: commentsReducer,
    toasts: toastsReducer
});

export default entitiesReducer;