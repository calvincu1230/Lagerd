import React from "react";
import BreweriesIndexItem from "./breweries_index_item";

class BreweriesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    const breweryLis = this.props.breweries.map(brewery => {
      return ( <BreweriesIndexItem brewery={brewery} key={brewery.id} /> )
    });
    return (
      <div className="brewery-index-feed">
        <div className="breweries-index-title">Breweries</div>
        <div className="brewery-index-body">
          <ul>{breweryLis}</ul>
        </div>
      </div>
    );
  };
};

export default BreweriesIndex;