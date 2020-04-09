import { connect } from "react-redux"
import { fetchUser } from "../../actions/user_actions"
import UserShow from "./user_show"


const mSP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mSP, mDP)(UserShow);