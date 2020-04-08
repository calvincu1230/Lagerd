import React from "react";
import { Link } from "react-router-dom";
import { displayStars } from "../../utils/checkin_api_util";

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brewery: {}
    }
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId)
      .then(breweryAction => this.setState({ brewery: breweryAction.payload.brewery }));
  };

  render() {
    if (this.state.brewery.id === undefined) return null;

    const brewery = this.props.brewery;
    const avgRating = brewery.avgRating > 0 ? (
      <p className="mid-show-item brewery-mid-show-item">{displayStars(brewery.avgRating)} ({brewery.avgRating})</p>
    ) :  (<p className="mid-show-item brewery-mid-show-item">No Ratings Yet!</p>);
    return (
      <div className="index-feed beer-show-main">
        <div className="show-top">
          <img className="show-img" src={brewery.imgUrl}/>
          <div className="beer-info">
            <div className="show-info show-item">
              <h3 className="show-item show-title">{brewery.name}</h3>
              <p className="show-style show-item">{brewery.location}</p>
            </div>
          </div>
          <div className="show-stat-box">
            <div className="left-side">
              <div className="stat top-left">
                <h4 className="stat-title">TOTAL {/*(<span className="orange-link info-hover">?</span>)*/}</h4>
                <p className="stat-stat">{brewery.totalCheckins}</p> {/* REAL INFO EVENTUALLY */}
              </div>
              <div className="stat bottom-left">
                <h4 className="stat-title">MONTLY {/*(<span className="orange-link info-hover">?</span>)*/}</h4>
                <p className="stat-stat">{brewery.monthlyCheckins}</p>
              </div>
            </div>
            <div className="right-side">
              <div className="stat top-right">
                <h4 className="stat-title">UNIQUE {/*(<span className="orange-link info-hover">?</span>)*/}</h4>
                <p className="stat-stat">{brewery.uniqueUsers}</p>
              </div>
              <div className="stat bottom-right">
                <h4 className="stat-title">YOU</h4>
                <p className="stat-stat">
                  {/* <Link to={`/users/${this.props.currentUserId}`}> */}
                  {brewery.currentUserCheckins} {/*(<span className="orange-link info-hover">?</span>)*/}
                    {/* </Link> */}
                    </p>
              </div>
            </div>
          </div>
        </div>

        <div className="show-mid brewery-show-mid">
          {avgRating}
          <p className="brewery-mid-show-item mid-border">{this.props.brewery.totalCheckins} Ratings</p>
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