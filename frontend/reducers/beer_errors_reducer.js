import { RECEIVE_BEER_ERRORS } from "../actions/beer_actions";
import { CLEAR_ERRORS } from "../actions/session_actions";

const beerErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BEER_ERRORS:
      return action.errors;
    case CLEAR_ERRORS: 
      return [];
    default:
      return state;
  };
};

export default beerErrorsReducer;