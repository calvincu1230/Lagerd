import React from "react";
import { Link } from "react-router-dom";
import { displayStars } from "../../utils/checkin_api_util";

export default props => {
  return (
    <>
    <div className="index-item">
      <div className="left-items">

      <img src={props.brewery.imgUrl} className="index-img"/>
      <div className="index-info">

        <h4 className="index-item-title index-subitem">
          <Link 
            to={`/breweries/${props.brewery.id}`} 
            className="orange-link">{props.brewery.name}
          </Link>
        </h4>
        <p className="index-item-location index-subitem">{props.brewery.location}</p>
      
      </div>
      </div>
      <div className="right-items">
        <div className="right-items-top">
          <p className="index-subitem beer-count">{props.brewery.beerCount} Beers</p>
          <div className="checkin-count-container">
            <p className="index-subitem checkin-count">{props.brewery.totalCheckins} Ratings</p>
          </div>
        </div>
        <div>
          <p className="index-subitem">{displayStars(props.brewery.avgRating)} ({props.brewery.avgRating})</p>
        </div>
      </div>
    </div>
    <div className="index-item-underline"></div>
    </>
  );
};