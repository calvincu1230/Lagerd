import BreweryCheckinIndex from "./brewery_checkin_index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchBrewery } from "../../actions/brewery_actions";
import { fetchCheckin, deleteCheckin } from "../../actions/checkin_actions";
import { fetchAllToasts, deleteToast, createToast } from "../../actions/toast_actions";

const mSP = (state, ownProps) => {
  return {
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    checkins: state.entities.checkins,
    toasts: state.entities.toasts,
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    fetchAllToasts: () => dispatch(fetchAllToasts()),
    deleteToast: toastId => dispatch(deleteToast(toastId)),
    createToast: toast => dispatch(createToast(toast))
    // users/beers/breweries/checkins all updated with fetchBrewery
  };
};

export default withRouter(connect(mSP, mDP)(BreweryCheckinIndex));