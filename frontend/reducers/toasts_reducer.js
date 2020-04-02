import { RECEIVE_CHECKIN } from "../actions/checkin_actions";
import { RECEIVE_TOAST, REMOVE_TOAST } from "../actions/toast_actions";
import { merge } from "lodash";

const toastsReducer = (state = {}, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_CHECKIN:
      return action.payload.toasts;
    case RECEIVE_TOAST:
      return merge({}, state, { [action.toast.id]: action.toast });
    case REMOVE_TOAST:
      delete newState[action.toast.id];
      return newState;
    default:
      return state;
  };
};

export default toastsReducer;