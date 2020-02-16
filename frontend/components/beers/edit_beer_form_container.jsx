import React from "react";
import { connect } from "react-redux";
import { updateBeer, fetchBeer } from "../../actions/beer_actions";
import { fetchBreweries } from "../../actions/brewery_actions";
import BeerForm from "./beer_form";

class EditBeerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  render() {
    const { action, formType, beer, fetchBeer, fetchBreweries, breweries, STYLES } = this.props;
    if (!beer) return null;
    return (
      <BeerForm 
        action={action} 
        formType={formType} 
        beer={beer} 
        fetchBreweries={fetchBreweries}
        fetchBeer={fetchBeer}
        breweries={breweries}
        STYLES={STYLES}
      />
    );
  }
}


const mSP = (state, ownProps) => {
  return {
    beer: state.entities.beers[ownProps.match.params.beerId] || {},
    formType: "Update Beer",
    breweries: Object.values(state.entities.breweries) || []
  };
};

const mDP = dispatch => {
  return {
    action: beer => dispatch(updateBeer(beer)),
    fetchBeer: beerId => dispatch(fetchBeer(beerId)),
    fetchBreweries: () => dispatch(fetchBreweries())
  };
};

export default connect(mSP, mDP)(EditBeerForm);