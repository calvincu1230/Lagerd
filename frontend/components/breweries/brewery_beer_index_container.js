import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { fetchBreweryBeers } from "../../actions/beer_actions";
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
    // fetchBeers: () => dispatch(fetchBeers()), // MAY BE ABLE TO REDO THIS CUZ JBUILDER
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
    // fetchBreweryBeers: breweryId => dispatch(fetchBreweryBeers(breweryId))
  };
};

export default withRouter(connect(mSP, mDP)(BreweryBeerIndex));