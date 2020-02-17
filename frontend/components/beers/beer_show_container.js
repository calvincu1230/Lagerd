import { connect } from "react-redux";
import { fetchBeer } from "../../actions/beer_actions";
import BeerShow from "./beer_show";
import { fetchBrewery } from "../../actions/brewery_actions";

const mSP = (state, ownProps) => {
  return {
    beer: state.entities.beers[ownProps.match.params.beerId] || {},
    brewery: state.entities.breweries[ownProps.match.params.breweryId] || {},
    currentUserId: state.session.currentUserId
  };
};

const mDP = dispatch => {
  return {
    fetchBeer: beerId => dispatch(fetchBeer(beerId)),
    fetchBrewery: breweryId => {
      return dispatch(fetchBrewery(breweryId))
    }
  };
};

export default connect(mSP, mDP)(BeerShow);