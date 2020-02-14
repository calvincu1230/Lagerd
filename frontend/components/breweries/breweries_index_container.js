import { connect } from "react-redux";
import { fetchBreweries } from "../../actions/brewery_actions";
import { fetchBeers } from "../../actions/beer_actions";
import BreweriesIndex from "./breweries_index";

const mSP = state => {
  return {
    breweries: Object.values(state.entities.breweries)
  };
};

const mDP = dispatch => {
  return {
    fetchBreweries: () => dispatch(fetchBreweries()),
    fetchBeers: () => dispatch(fetchBeers())
  };
};

export default connect(mSP, mDP)(BreweriesIndex);