import { RECEIVE_BEER, RECEIVE_BEERS } from "../actions/beer_actions";
import { merge } from "lodash";

const beersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BEERS:
      return merge({}, state, action.beers);
    case RECEIVE_BEER:
      return merge({}, state, { [action.beer.id]: action.beer })
    default:
      return state;
  };
};

export default beersReducer;