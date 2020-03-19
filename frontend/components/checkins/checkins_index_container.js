import CheckinsIndex from "./checkins_index";
import { connect } from "react-redux";
import { fetchAllCheckins, deleteCheckin } from "../../actions/checkin_actions";

const mSP = state => {
  return {
    checkins: state.entities.checkins,
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId))
  };
};

export default connect(mSP, mDP)(CheckinsIndex);