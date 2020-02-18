import React from "react";
import BeerIndexItem from "../beers/beer_index_item";

class BreweryBeerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brewery: {}
    }
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId).then((brewery) => { 
      this.setState({ brewery })
    });
    this.props.fetchBeers();
  }

  render() {
    let beerLis;
    if (Object.values(this.state.brewery).length > 0) {
      beerLis = Object.values(this.props.brewery.beers).map(beer => {
        return <BeerIndexItem beer={beer} key={beer.id} />
      });
    }
    return (
      <div className="index-sub-feed">
        <div className="index-title">Beer List</div>
        <div className="index-body">
          <ul>{beerLis}</ul>
        </div>
        {/* <button className="more-beer-btn" onClick={this.fetchMoreBeers}>Show More Beers</button> */}
      </div>
    );
  }
}

export default BreweryBeerIndex;