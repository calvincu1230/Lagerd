import { RECEIVE_BREWERY, RECEIVE_BREWERIES } from "../actions/brewery_actions";
import { RECEIVE_BEER } from "../actions/beer_actions";
import { merge } from "lodash";

const breweriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BREWERIES:
      return merge({}, state, action.breweries)
    case RECEIVE_BEER:
      return merge({}, state, { [action.payload.brewery.id]: action.payload.brewery });
    case RECEIVE_BREWERY:
      return merge({}, state, { [action.payload.brewery.id]: action.payload.brewery });
    default:
      return state;
  };
};

export default breweriesReducer;