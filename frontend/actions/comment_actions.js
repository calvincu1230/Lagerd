import * as CommentAPI from "../utils/comment_api_util";

export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

const receieveCommentErrors = errors => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

export const createComment = comment => dispatch => {
  return CommentAPI.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)), errors => {
      return dispatch(receieveCommentErrors(errors))
    });
};

export const updateComment = comment => dispatch => {
  return CommentAPI.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)), errors => {
      return dispatch(receieveCommentErrors(errors))
    });
};

export const deleteComment = commentId => dispatch => {
  return CommentAPI.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment.id)), errors => {
      return dispatch(receieveCommentErrors(errors))
    });
};