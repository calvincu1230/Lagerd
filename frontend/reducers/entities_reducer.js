import usersReducer from "./users_reducer";
import { combineReducers } from "redux";
import beersReducer from "./beers_reducer";
import breweriesReducer from "./breweries_reducer";
import checkinsReducer from "./checkins_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    beers: beersReducer,
    breweries: breweriesReducer,
    checkins: checkinsReducer
});

export default entitiesReducer;