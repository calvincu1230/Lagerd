import UsersCheckinIndex from "./users_checkin_index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUser } from "../../actions/user_actions";
import { deleteCheckin, fetchCheckin } from "../../actions/checkin_actions";
import { fetchAllToasts, deleteToast, createToast } from "../../actions/toast_actions";
import { createComment, deleteComment } from "../../actions/comment_actions";

const mSP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    checkins: state.entities.checkins,
    toasts: state.entities.toasts,
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    fetchAllToasts: () => dispatch(fetchAllToasts()),
    deleteToast: toastId => dispatch(deleteToast(toastId)),
    createToast: toast => dispatch(createToast(toast)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
    // user/beers/breweries/checkins all updated with fetchUser
  };
};

export default withRouter(connect(mSP, mDP)(UsersCheckinIndex));