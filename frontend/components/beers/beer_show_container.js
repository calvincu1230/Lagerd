import { connect } from "react-redux";
import { fetchBeer } from "../../actions/beer_actions";
import BeerShow from "./beer_show";
import { fetchBrewery } from "../../actions/brewery_actions";

const mSP = (state, ownProps) => {
  // debugger
  return {
    beer: state.entities.beers[ownProps.match.params.beerId] || {}
  };
};

const mDP = dispatch => {
  return {
    fetchBeer: beerId => dispatch(fetchBeer(beerId)),
    fetchBrewery: breweryId => {
      debugger
      return dispatch(fetchBrewery(breweryId))
    }
  };
};

export default connect(mSP, mDP)(BeerShow);