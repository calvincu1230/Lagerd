import React from "react";
import BreweriesIndexItem from "./breweries_index_item";

class BreweriesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    const breweryLis = this.props.breweries.map(brewery => {
      return ( <BreweriesIndexItem brewery={brewery} key={brewery.name} /> )
    });
    return (
      <div className="index-feed">
        <div className="index-title">Breweries</div>
        <div className="index-body">
          <ul>{breweryLis}</ul>
        </div>
      </div>
    );
  };
};

export default BreweriesIndex;