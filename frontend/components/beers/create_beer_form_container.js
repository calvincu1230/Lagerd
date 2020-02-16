import { connect } from "react-redux";
import { createBeer } from "../../actions/beer_actions";
import { fetchBreweries } from "../../actions/brewery_actions";
import BeerForm from "./beer_form";

const mSP = state => {
  debugger
  return {
    beer: {
      name: "",
      brewery_id: "",
      style: "",
      abv: "",
      ibu: ""
    },
    formType: "Add New Beer",
    breweries: Object.values(state.entities.breweries) || []
  };
};

const mDP = dispatch => {
  return {
    action: beer => dispatch(createBeer(beer)),
    fetchBreweries: () => dispatch(fetchBreweries())
  };
};

export default connect(mSP, mDP)(BeerForm);