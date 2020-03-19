import React from "react";
import BeerIndexItem from "../beers/beer_index_item";

class BreweryBeerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brewery: {},
      // beers: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.breweryId;
    this.props.fetchBrewery(id).then((breweryAction) => { 
      this.setState({ brewery: breweryAction.payload.brewery })
    });
    // this.props.fetchBreweryBeers(id).then(beers => {
    //   this.setState({ beers })
    // });
  }

  render() {
    if (Object.keys(this.props.beers).length === 0) return null;
    let beerLis;
    if (Object.values(this.state.brewery).length > 0) {
      beerLis = this.state.brewery.beerIds.map(id => {
        const beer = this.props.beers[id];
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