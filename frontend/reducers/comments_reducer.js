import { RECEIVE_CHECKIN } from "../actions/checkin_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { merge } from "lodash";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_CHECKIN:
      return merge({}, action.payload.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      const newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  };
};

export default commentsReducer;