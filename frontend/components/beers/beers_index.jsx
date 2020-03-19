import React from "react";
import BeerIndexItem from "./beer_index_item";

class BeersIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentPage: 1
    // };
  }
  
  componentDidMount() {
    this.props.fetchBeers();
    // this.props.fetchMoreBeers();
  }

  // fetchMoreBeers() {
    // this.props.fetchBeers(this.state.currentPage);
    // this.setState = ({ currentPage: this.state.currentPage += 1 });
  //   // added kaminari gem to not have to load all beers at once
  // }

  render() {
    const beerLis = Object.values(this.props.beers).map(beer => { /* ADD FUNC TO CHECKIN BEER HERE LATER  */
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