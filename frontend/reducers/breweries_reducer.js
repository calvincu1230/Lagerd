import { RECEIVE_BREWERY, RECEIVE_BREWERIES } from "../actions/brewery_actions";
import { merge } from "lodash";

const breweriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BREWERIES:
      return merge({}, state, action.breweries)
    case RECEIVE_BREWERY:
      return merge({}, state, { [action.brewery.id]: action.brewery });
    default:
      return state;
  };
};

export default breweriesReducer;