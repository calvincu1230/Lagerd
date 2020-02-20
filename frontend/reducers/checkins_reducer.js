import { 
  RECEIVE_ALL_CHECKINS,
  RECEIVE_CHECKIN,
  REMOVE_CHECKIN
 } from "../actions/checkin_actions";

const checkinsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_CHECKINS:
      return action.checkins;
    case RECEIVE_CHECKIN:
      return Object.assign({}, state, { [action.checkin.id]: action.checkin });
    case REMOVE_CHECKIN:
      debugger
      delete nextState[action.checkinId.id];
      return nextState;
    default:
      return state;
  }
};

export default checkinsReducer;