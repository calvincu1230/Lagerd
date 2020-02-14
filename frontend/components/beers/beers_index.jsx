import React from "react";
import BeerIndexItem from "./beer_index_item";

class BeersIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchBeers();
    this.props.fetchBreweries();
  }

  render() {
    const beerLis = this.props.beers.map(beer => { /* ADD FUNC TO CHECKIN BEER HERE LATER  */
      return <BeerIndexItem beer={beer} key={beer.name} /> 
    });

    return (
      <div className="index-feed">
        <div className="index-title">Beers</div>
        <div className="index-body">
          <ul>{beerLis}</ul>
        </div>
      </div>
    );
  }
}

export default BeersIndex;