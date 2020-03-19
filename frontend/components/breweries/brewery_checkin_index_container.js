import BreweryCheckinIndex from "./brewery_checkin_index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { fetchCheckin } from "../../actions/beer_actions";
import { fetchBrewery } from "../../actions/brewery_actions";
import { deleteCheckin } from "../../actions/checkin_actions";

const mSP = (state, ownProps) => {
  return {
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    checkins: state.entities.checkins,
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId))
    // users/beers/breweries/checkins all updated with fetchBrewery
  };
};

export default withRouter(connect(mSP, mDP)(BreweryCheckinIndex));