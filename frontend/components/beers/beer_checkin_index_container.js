import BeerCheckinIndex from "./beer_checkin_index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchBeer } from "../../actions/beer_actions";
import { deleteCheckin } from "../../actions/checkin_actions";

const mSP = (state, ownProps) => {
  return {
    beer: state.entities.breweries[ownProps.match.params.beerId],
    checkins: state.entities.checkins,
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchBeer: beerId => dispatch(fetchBeer(beerId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId))
    // users/beers/breweries/checkins all updated with fetchBeer
  };
};

export default withRouter(connect(mSP, mDP)(BeerCheckinIndex));