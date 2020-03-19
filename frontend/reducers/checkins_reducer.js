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
      return merge({}, state, action.checkins);
    case RECEIVE_BEER:
      return merge({}, state, action.payload.checkins);
    case RECEIVE_CHECKIN:
      return merge({}, state, { [action.checkin.id]: action.checkin });
    case RECEIVE_BREWERY:
      return merge({}, state, action.payload.checkins);
    case REMOVE_CHECKIN:
      delete nextState[action.checkinId.id];
      return nextState;
    default:
      return state;
  }
};

export default checkinsReducer;