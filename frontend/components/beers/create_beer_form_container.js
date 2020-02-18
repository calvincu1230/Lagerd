import { connect } from "react-redux";
import { createBeer } from "../../actions/beer_actions";
import { fetchBreweries } from "../../actions/brewery_actions";
import { clearErrors } from "../../actions/session_actions";
import BeerForm from "./beer_form";

const mSP = (state, ownProps) => {
  return {
    beer: {
      name: "",
      brewery_id: "",
      style: "",
      abv: "",
      ibu: "",
      description: "",
      imgUrl: ""
    },
    formType: "Add New Beer",
    breweries: Object.values(state.entities.breweries) || [],
    errors: state.errors.beer
  };
};

const mDP = dispatch => {
  return {
    action: (formData, beer) => dispatch(createBeer(formData, beer)),
    fetchBreweries: () => dispatch(fetchBreweries()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSP, mDP)(BeerForm);