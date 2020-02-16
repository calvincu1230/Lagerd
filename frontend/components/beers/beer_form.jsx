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
    this.props.action(this.state);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    let brewerySelects;
    if (Object.values(this.props.breweries) > 0) {
      brewerySelects = this.props.breweries.map(brewery => {
        if (this.state.brewery_id === brewery.id) {
          return <option value={brewery.id} key={{[brewery.id]: brewery}}>{brewery.name}</option>
        }
        return <option value={brewery.id} key={{[brewery.id]: brewery}}>{brewery.name}</option>
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
    return (
      <div className="beer-form-outer">
        <form className="beer-form" onSubmit={this.handleSubmit}>
          <label>BEER NAME
            <input type="text" value={this.state.name} onChange={this.handleChange("name")}/>
          </label>
          <label>BREWERY NAME
            <select onChange={this.handleChange("brewery_id")} value={this.state.value}>
              <option value="" key="select">Choose A Brewery</option>
              {brewerySelects}
            </select>
          </label>
            Style
            <select onChange={this.handleChange("style")} value={this.state.style}>
              <option value="" key="select">Choose A Style</option>
              {beerStyles}
            </select>
          <label>ABV
            <input type="text" value={this.state.abv} onChange={this.handleChange("abv")}/>
          </label>
          <label>IBU
            <input type="text" value={this.state.ibu} onChange={this.handleChange("ibu")}/>
          </label>
          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default BeerForm;