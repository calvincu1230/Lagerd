import React from "react";
import { Link } from "react-router-dom";
import { displayStars } from "../../utils/checkin_api_util";

export default props => {

  const avgRating = props.beer.avgRating > 0 ? (
    <li className="beer-item-rating beer-index-subitem">{displayStars(props.beer.avgRating)} ({props.beer.avgRating})</li>
  ) :  (<li className="beer-item-rating beer-index-subitem">No Ratings Yet!</li>);
  return (
    <>
    <div className="index-item-beer">
      <img src={props.beer.imgUrl} className="index-img"/>
      <div className="index-item-main">

        <div className="index-info">
          <h4 className="index-item-title index-subitem">
            <a 
              className="orange-link"
              href={`/#/breweries/${props.beer.breweryId}/beers/${props.beer.id}`}>
              {props.beer.name}
            </a>

          </h4>
          <p className="beer-item-style index-subitem">{props.beer.style}</p>
          
          <p className="beer-item-description index-subitem">{props.beer.description}</p>
        </div>

        <ul className="beer-item-stats">
          <li className="beer-item-abv beer-index-subitem">{props.beer.abv}% ABV</li>
          <li className="beer-item-ibu beer-index-subitem">{props.beer.ibu} IBU</li>
          {avgRating}
          <li className="beer-item-checkins  beer-index-subitem">{props.beer.totalCheckins} Ratings</li>
        </ul>
        
      </div>
    </div>
    <div className="index-item-underline"></div>
    </>
  );
};