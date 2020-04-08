import CheckinsIndex from "./checkins_index";
import { connect } from "react-redux";
import { fetchAllCheckins, deleteCheckin, fetchCheckin } from "../../actions/checkin_actions";
import { fetchAllToasts, createToast, deleteToast } from "../../actions/toast_actions";
import { createComment, deleteComment } from "../../actions/comment_actions";

const mSP = state => {
  return {
    checkins: state.entities.checkins,
    toasts: state.entities.toasts,
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    fetchAllToasts: () => dispatch(fetchAllToasts()),
    deleteToast: toastId => dispatch(deleteToast(toastId)),
    createToast: toast => dispatch(createToast(toast)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
  };
};

export default connect(mSP, mDP)(CheckinsIndex);