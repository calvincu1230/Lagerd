import CheckinsIndex from "./checkins_index";
import { connect } from "react-redux";
import { fetchAllCheckins, deleteCheckin } from "../../actions/checkin_actions";
import { fetchBeers } from "../../actions/beer_actions";

const mSP = state => {
  return {
    checkins: Object.values(state.entities.checkins),
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    fetchBeers: () => dispatch(fetchBeers())
  };
};

export default connect(mSP, mDP)(CheckinsIndex);