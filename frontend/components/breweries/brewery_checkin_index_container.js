import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { fetchCheckin } from "../../actions/beer_actions";
import { fetchBrewery } from "../../actions/brewery_actions";
import BreweryCheckinIndex from "./brewery_checkin_index";
import { deleteCheckin } from "../../actions/checkin_actions";

const mSP = (state, ownProps) => {
  return {
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    beers: state.entities.beers
    // currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId))
    // maybe do fetch checkins but jbuilder prob got me on this onekl
  };
};

export default withRouter(connect(mSP, mDP)(BreweryCheckinIndex));