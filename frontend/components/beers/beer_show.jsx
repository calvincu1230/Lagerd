import React from "react";
import { Link } from "react-router-dom";

class BeerShow extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = { brewery: {} }
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
    debugger
    if (this.props.beer !== {}) {
      this.setState(this.props.fetchBrewery(this.props.beer.brewery_id));
    }
  }

  render() {
    // debugger
    return (
      <div className="index-feed beer-show-main">
        <div className="show-top">
          <p className="show-img"><img src={this.props.beer.imgUrl}/></p>
          <div className="show-info">
            <h3>{this.props.beer.name}</h3>
            <p className="beer-show-brewery"><Link to={`/breweries/${this.state.brewery.id}`} className="orange-link">{this.state.brewery.name}</Link></p>
            <p className="show-style">{this.props.beer.style}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerShow;