import { 
  RECEIVE_ALL_CHECKINS,
  RECEIVE_CHECKIN,
  REMOVE_CHECKIN
 } from "../actions/checkin_actions";
import { RECEIVE_BREWERY } from "../actions/brewery_actions";
import { merge } from "lodash";
import { RECEIVE_BEER } from "../actions/beer_actions";

const checkinsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_CHECKINS:
      return action.checkins;
    case RECEIVE_BEER:
      return action.payload.checkins || state;
    case RECEIVE_CHECKIN:
      return merge({}, state, { [action.payload.checkin.id]: action.checkin });
    case RECEIVE_BREWERY:
      return action.payload.checkins;
    case REMOVE_CHECKIN:
      delete nextState[action.checkinId.id];
      return nextState;
    default:
      return state;
  }
};

export default checkinsReducer;