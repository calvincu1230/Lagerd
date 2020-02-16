import React from "react";
import { STYLES } from "../../utils/beer_api_util";

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = this.props.beer;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.ibu === "") {
      this.setState({ ibu: "No" })
    }
    this.props.action(this.state).then(() => this.props.history.push("/feed"));
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    let brewerySelects;
    if (this.props.breweries) {
      brewerySelects = this.props.breweries.map(brewery => {
        if (this.state.brewery_id === brewery.id) {
          return <option value={brewery.id} key={brewery.name}>{brewery.name}</option>
        }
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
      <div className="beer-form-section beer-form-outer">
        <h3 className="beer-form-title">{this.props.formType}</h3>
        <form className="beer-form" onSubmit={this.handleSubmit}>
          <div className="beer-name-line">
            <p>BEER NAME</p>
            <input type="text" value={this.state.name} onChange={this.handleChange("name")}/>
          </div>

          <div className="beer-form-section beer-brewery-line">
            <p>BREWERY NAME</p>
            <select onChange={this.handleChange("brewery_id")} value={this.state.brewery_id}>
              {defaultSelect}
              {brewerySelects}
            </select>
          </div>

          <div className="beer-form-section beer-info-line">
            <p>ABV</p>
            <input className="beer-form-item" type="text" value={this.state.abv} onChange={this.handleChange("abv")}/>

            <p>IBU</p>
            <input className="beer-form-item" type="text" value={this.state.ibu} onChange={this.handleChange("ibu")}/>

            <p>Style</p>
            <select className="" onChange={this.handleChange("style")} value={this.state.style}>
              <option value="" key="select">Choose A Style</option>
              {beerStyles}
            </select>
          </div>

          <button className="beer-form-btn">{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default BeerForm;