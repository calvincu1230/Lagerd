import { connect } from "react-redux";
import { fetchBeers } from "../../actions/beer_actions";
import { fetchBreweries } from "../../actions/brewery_actions";
import BeersIndex from "./beers_index";


const mSP = (state, ownProps) => {
  return {
    beers: state.entities.beers
  };
};

const mDP = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    fetchBreweries: () => dispatch(fetchBreweries())
  };
};

export default connect(mSP, mDP)(BeersIndex);