import React from "react";
import { STYLES } from "../../utils/beer_api_util";

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.beer;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.description === "") {
      this.setState({ description: "None" })
    }
    this.props.action(this.state).then(() => this.props.history.push("/beers"));
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    const errors = this.props.errors;
    const showErrors = Boolean(errors) && errors.length > 0 ? "show-errors" : "";
    const currentErrors = errors.map(error => {
        return <li key={error} className="errors-li">{error}</li>
    });

    let brewerySelects; // adds varied amount of breweries as options and sets default one
    if (this.props.breweries) {
      brewerySelects = this.props.breweries.map(brewery => {
        // if (this.state.brewery_id === brewery.id) {
        //   return <option value={brewery.id} key={brewery.name}>{brewery.name}</option>
        // }
        return <option value={brewery.id} key={brewery.name}>{brewery.name}</option>
      });
    }

    const beerStyles = STYLES.map(style => {
      if (this.state.style === style) {
        return <option value={style} key={style}>{style}</option>
      }
      return <option value={style} key={style}>{style}</option>
    });
    // current will prefill data except brewery if coming from a the related beer page
    // maybe make separate forms rather than a shared one so its less confusing
    const defaultSelect = this.props.formType === "Add New Beer" ? (<option value="" key="select">Choose A Brewery</option>) : "";
    return (
      <div className="beer-form-outer">
        <div>
          <h3 className="beer-form-title">{this.props.formType}</h3>
          <h4 className="beer-form-sub">Didn't find what you were looking for? Use this form to add a new beer.</h4>
        </div>
        <ul className={`errors-list ${showErrors}`}>{currentErrors}</ul>
        <form className="beer-form" onSubmit={this.handleSubmit}>
          <div className="beer-name-line">
            <p className="beer-form-category">BEER NAME</p>
            <input className="beer-form-select-effect beer-form-item beer-name" type="text" value={this.state.name} onChange={this.handleChange("name")}/>
          </div>

          <div className="beer-form-section beer-brewery-line">
            <p className="beer-form-category">BREWERY NAME</p>
            <select onChange={this.handleChange("brewery_id")} value={this.state.brewery_id} className="beer-form-item">
              {defaultSelect}
              {brewerySelects}
            </select>
          </div>

          <div className="beer-form-section beer-info-line">
            <div className="beer-form-abv">
              <p className="beer-form-category">ABV</p>
              <input className="beer-form-item beer-form-select-effect" type="number" value={this.state.abv} onChange={this.handleChange("abv")}/>
            </div>

            <div className="beer-form-ibu">
              <p className="beer-form-category">IBU</p>
              <input className="beer-form-item beer-form-select-effect" type="number" value={this.state.ibu} onChange={this.handleChange("ibu")}/>
            </div>

            <div className="beer-form-style">
              <p className="beer-form-category">STYLE</p>
              <select className="" onChange={this.handleChange("style")} value={this.state.style} className="beer-form-item">
                <option value="" key="select">Choose A Style</option>
                {beerStyles}
              </select>
            </div>

          </div>

          <div className="beer-form-section">
            <p className="beer-form-category">DESCRIPTION</p>
            <textarea value={this.state.description} maxLength="750" className="beer-form-item beer-form-select-effect" onChange={this.handleChange("description")}/>
          </div>

          <button className="beer-form-btn">{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default BeerForm;