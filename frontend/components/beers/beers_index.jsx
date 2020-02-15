import React from "react";
import BeerIndexItem from "./beer_index_item";

class BeersIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1
    };

    // this.fetchMoreBeers= this.fetchMoreBeers.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchBeers();
    // this.fetchMoreBeers();
    this.props.fetchBreweries();
  }

  // fetchMoreBeers() {
  //   this.setState = ({ currentPage: this.state.currentPage += 1 });
  //   this.props.fetchBeers(this.state.currentPage);
  //   // added kaminari gem to not have to load all beers at once
  // }

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
        {/* <button className="more-beer-btn" onClick={this.fetchMoreBeers}>Show More Beers</button> */}
      </div>
    );
  }
}

export default BeersIndex;