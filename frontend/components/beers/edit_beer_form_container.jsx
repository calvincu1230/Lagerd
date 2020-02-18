import React from "react";
import { connect } from "react-redux";
import { updateBeer, fetchBeer } from "../../actions/beer_actions";
import { fetchBreweries } from "../../actions/brewery_actions";
import { clearErrors } from "../../actions/session_actions";
import BeerForm from "./beer_form";

class EditBeerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId)
      .then(beer => this.setState({ beer })
    );
    this.props.fetchBreweries();
  }

  render() {
    const { action, clearErrors, formType, errors, beer, fetchBeer, fetchBreweries, breweries, STYLES, history } = this.props;
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
        history={history}
        errors={errors}
        clearErrors={clearErrors}
      />
    );
  }
}


const mSP = (state, ownProps) => {
  return {
    beer: state.entities.beers[ownProps.match.params.beerId],
    formType: "Update Beer",
    breweries: Object.values(state.entities.breweries),
    errors: state.errors.beer
  };
};

const mDP = dispatch => {
  return {
    action: (formData) => dispatch(updateBeer(formData)),
    fetchBeer: beerId => dispatch(fetchBeer(beerId)),
    fetchBreweries: () => dispatch(fetchBreweries()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSP, mDP)(EditBeerForm);