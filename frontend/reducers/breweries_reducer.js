import { RECEIVE_BREWERY, RECEIVE_BREWERIES } from "../actions/brewery_actions";
// import { merge }

const breweriesReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BREWERIES:
      return action.breweries
    case RECEIVE_BREWERY:
      return Object.assign({}, state, { [action.brewery.id]: action.brewery });
    default:
      return state;
  };
};

export default breweriesReducer;