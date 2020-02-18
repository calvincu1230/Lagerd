import React from "react";
import { Link } from "react-router-dom";
import BreweryBeerIndexContainer from "./brewery_beer_index_container";

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId);
  };

  render() {
    return (
      <div className="index-feed beer-show-main">
        <div className="show-top">
          <img className="show-img" src={this.props.brewery.imgUrl}/>
          <div className="beer-info">
            <div className="show-info show-item">
              <h3 className="show-item show-title">{this.props.brewery.name}</h3>
              <p className="show-style show-item">{this.props.brewery.location}</p>
            </div>
          </div>
          <div className="show-stat-box">
            <div className="left-side">
              <div className="stat top-left">
                <h4 className="stat-title">TOTAL {/*(<span className="orange-link info-hover">?</span>)*/}</h4>
                <p className="stat-stat">3,432</p> {/* REAL INFO EVENTUALLY */}
              </div>
              <div className="stat bottom-left">
                <h4 className="stat-title">MONTLY {/*(<span className="orange-link info-hover">?</span>)*/}</h4>
                <p className="stat-stat">234</p>
              </div>
            </div>
            <div className="right-side">
              <div className="stat top-right">
                <h4 className="stat-title">UNIQUE {/*(<span className="orange-link info-hover">?</span>)*/}</h4>
                <p className="stat-stat">1,233</p>
              </div>
              <div className="stat bottom-right">
                <h4 className="stat-title">YOU</h4>
                <p className="stat-stat orange-link"><Link to={`/users/${this.props.currentUserId}`}>0 {/*(<span className="orange-link info-hover">?</span>)*/}</Link></p>
              </div>
            </div>
          </div>
        </div>

{/* // test commit */}
        <div className="show-mid brwewery-show-mid">
          <p className="mid-show-item brewery-mid-show-item">Avg Rating</p>
          <p className="brewery-mid-show-item mid-border">Total Review Count</p>
          <p className="brewery-mid-show-item mid-border">
            <Link 
            to={`/breweries/${this.props.brewery.id}/beers`} 
            className="orange-link">{this.props.brewery.beerCount} Beers
            </Link></p>
        </div>

        <div className="show-bottom">
            <p className="show-description">{this.props.brewery.description}</p>
        </div>
      </div>
    );
  }
}

export default BreweryShow;