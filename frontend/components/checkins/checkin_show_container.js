import { connect } from "react-redux";
import { fetchCheckin, deleteCheckin } from "../../actions/checkin_actions"
import CheckinShow from "./checkin_show";

const mSP = (state, ownProps) => {
  return {
    checkin: state.entities.checkins[ownProps.match.params.checkinId],
    currentUserId: state.session.currentUserId,
  };
};

const mDP = dispatch => {
  return {
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId))
  };
};

export default connect(mSP, mDP)(CheckinShow);