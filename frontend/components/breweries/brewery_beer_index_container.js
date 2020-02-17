import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchBeers } from "../../actions/beer_actions";
import { fetchBrewery } from "../../actions/brewery_actions";
import BreweryBeerIndex from "./brewery_beer_index";

const mSP = (state, ownProps) => {
  return {
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    beers: state.entities.beers
  };
};

const mDP = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId))
  };
};

export default withRouter(connect(mSP, mDP)(BreweryBeerIndex));