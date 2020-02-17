import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchBrewery } from "../../actions/brewery_actions";
import BreweryShow from "./brewery_show";


const mSP = (state, ownProps) => {
  return {
    brewery: state.entities.breweries[ownProps.match.params.breweryId] || {}
  };
};

const mDP = dispatch => {
  return {
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId))
  };
};

export default withRouter(connect(mSP, mDP)(BreweryShow));