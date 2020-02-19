import { RECEIVE_CHECKIN_ERRORS } from "../actions/checkin_actions";
import { CLEAR_ERRORS } from "../actions/session_actions";

const checkinErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHECKIN_ERRORS:
      return action.errors;
    case CLEAR_ERRORS: 
      return [];
    default:
      return state;
  };
};

export default checkinErrorsReducer;