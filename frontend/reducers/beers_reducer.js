import { RECEIVE_BEER, RECEIVE_BEERS } from "../actions/beer_actions";
import { RECEIVE_BREWERY } from "../actions/brewery_actions";
import { merge } from "lodash";

const beersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BEERS:
      return merge({}, state, action.beers);
    case RECEIVE_BEER:
      return merge({}, state, { [action.payload.beer.id]: action.payload.beer });
    case RECEIVE_BREWERY:
      return merge({}, state, action.payload.beers);
    default:
      return state;
  };
};

export default beersReducer;