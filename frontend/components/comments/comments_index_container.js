import { connect } from "react-redux";
import CommentsIndex from "./comments_index";
import { updateComment, deleteComment } from "../../actions/comment_actions";

const mSP = (state, ownProps) => {
  return {
    comments: state.entities.comments,
    checkin: state.entities.checkins[ownProps.checkinId],
    currentUserId: state.session.currentUserId
  };
};

const mDP = (dispatch, ownProps) => {
  return {
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => ownProps.deleteComment(commentId)
  };
};

export default connect(mSP, mDP)(CommentsIndex);