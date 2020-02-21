import React from "react";
import { Link } from "react-router-dom";
import { displayStars } from "../../utils/checkin_api_util";

class BeerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
    this.props.fetchBrewery(this.props.match.params.breweryId);
  }

  render() {
    
    const avgRating = this.props.beer.avgRating > 0 ? (
      <p className="mid-show-item mid-border">{displayStars(this.props.beer.avgRating)} ({this.props.beer.avgRating})</p>
    ) :  (<p className="mid-show-item mid-border">No Ratings Yet!</p>);
    return (
     
     <div className="index-feed beer-show-main">
        <div className="show-top">
          <img className="show-img" src={this.props.beer.imgUrl}/>
          <div className="beer-info">
            <div className="show-info show-item">
              <h3 className="show-item show-title">{this.props.beer.name}</h3>
              <p className="beer-show-brewery show-item"><Link to={`/breweries/${this.props.brewery.id}`} className="orange-link">{this.props.brewery.name}</Link></p>
              <p className="show-style show-item">{this.props.beer.style}</p>
            </div>
          </div>

          <div className="show-stat-box">

            <div className="left-side">
              <div className="stat top-left">
                <h4 className="stat-title">TOTAL</h4>
                <p className="stat-stat">3,432</p> {/* REAL INFO EVENTUALLY */}
              </div>
              <div className="stat bottom-left">
                <h4 className="stat-title">MONTLY</h4>
                <p className="stat-stat">234</p>
              </div>
            </div>

            <div className="right-side">
              <div className="stat top-right">
                <h4 className="stat-title">UNIQUE</h4>
                <p className="stat-stat">1,233</p>
              </div>
              <div className="stat bottom-right">
                <h4 className="stat-title">YOU</h4>
                <p className="stat-stat">
                  {/* <Link className="orange-link" to={`/users/${this.props.currentUserId}`}> */}
                    0
                    {/* </Link> */}
                    </p>
              </div>
            </div>
          </div>
        </div>

        <div className="show-mid">
          <p className="mid-show-item">{this.props.beer.abv}% ABV</p>
          <p className="mid-show-item mid-border">{this.props.beer.ibu} IBU</p>
          {avgRating}
          <p className="mid-show-item">{this.props.beer.totalCheckins} Checkins</p>
        </div>

          <div className="show-bottom">
            <p className="show-description">{this.props.beer.description}</p>
            <div className="show-btns">
              <Link to={`/breweries/${this.props.brewery.id}/beers/${this.props.beer.id}/edit`}>
                <div className="btn-background">
                  <p className="edit-btn show-btn"></p>
                </div>
              </Link>
              <button 
                  onClick={() => this.props.openCheckinModal('checkin')} 
                  className="btn-background checkin-btn">
                  &#10004;
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default BeerShow;