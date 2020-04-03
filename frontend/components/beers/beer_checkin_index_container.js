import BeerCheckinIndex from "./beer_checkin_index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchBeer } from "../../actions/beer_actions";
import { deleteCheckin, fetchCheckin } from "../../actions/checkin_actions";
import { fetchAllToasts, deleteToast, createToast } from "../../actions/toast_actions";

const mSP = (state, ownProps) => {
  return {
    beer: state.entities.breweries[ownProps.match.params.beerId],
    checkins: state.entities.checkins,
    toasts: state.entities.toasts,
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchBeer: beerId => dispatch(fetchBeer(beerId)),
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    fetchAllToasts: () => dispatch(fetchAllToasts()),
    deleteToast: toastId => dispatch(deleteToast(toastId)),
    createToast: toast => dispatch(createToast(toast))
    // users/beers/breweries/checkins all updated with fetchBeer
  };
};

export default withRouter(connect(mSP, mDP)(BeerCheckinIndex));