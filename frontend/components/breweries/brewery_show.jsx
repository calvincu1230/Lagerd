import React from "react";
import { Link } from "react-router-dom";

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
              <p className="show-style show-item">{this.props.brewery.style}</p>
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
                <h4 className="stat-title"><Link to={`/users/${this.props.currentUserId}`}>YOU</Link></h4>
                <p className="stat-stat">0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="show-mid">
          <p className="mid-show-item">Avg Rating</p>
          <p className="mid-show-item mid-border">Total Review Count</p>
          <p className="mid-show-item mid-border">Total Beers</p>
        </div>
      </div>
    );
  }
}

export default BreweryShow;