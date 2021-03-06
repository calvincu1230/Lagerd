import { connect } from "react-redux";
import { fetchCheckin, deleteCheckin } from "../../actions/checkin_actions"
import CheckinShow from "./checkin_show";
import { deleteToast, createToast } from "../../actions/toast_actions";
import { deleteComment, createComment } from "../../actions/comment_actions";

const mSP = (state, ownProps) => {
  return {
    checkin: state.entities.checkins[ownProps.match.params.checkinId] || {},
    currentUserId: state.session.currentUserId,
    toasts: state.entities.toasts
  };
};

const mDP = dispatch => {
  return {
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    deleteToast: toastId => dispatch(deleteToast(toastId)),
    createToast: toast => dispatch(createToast(toast)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(mSP, mDP)(CheckinShow);