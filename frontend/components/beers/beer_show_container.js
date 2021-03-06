import { connect } from "react-redux";
import { fetchBeer } from "../../actions/beer_actions";
import BeerShow from "./beer_show";
import { openCheckinModal } from "../../actions/checkin_modal_actions";
import { withRouter } from "react-router-dom";

const mSP = (state, ownProps) => {
  return {
    beer: state.entities.beers[ownProps.match.params.beerId],
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    currentUserId: state.session.currentUserId,
    checkins: state.entities.checkins,
    ui: state.ui.modal
  };
};

const mDP = dispatch => {
  return {
    fetchBeer: beerId => dispatch(fetchBeer(beerId)),
    openCheckinModal: modal => dispatch(openCheckinModal(modal))
  };
};

export default withRouter(connect(mSP, mDP)(BeerShow));