import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <>
    <div className="index-item-beer">
      {/* <div className="left-items"></div> */}
      <img src={props.beer.imgUrl} className="index-img"/>
      <div className="index-item-main">
        <div className="index-info">
          <h4 className="index-item-title index-subitem">
            {/* <Link 
              to={`breweries/${props.beer.brewery_id}/beers/${props.beer.id}`} 
              className="orange-link">{props.beer.name}
            </Link> */}
            <a 
              className="orange-link"
              href={`/#/breweries/${props.beer.brewery_id}/beers/${props.beer.id}`}>
              {props.beer.name}
            </a>
          </h4>
          <p className="beer-item-style index-subitem">{props.beer.style}</p>
          
          <p className="beer-item-description index-subitem">{props.beer.description}</p>
        </div>
        <ul className="beer-item-stats">
          <li className="beer-item-abv beer-index-subitem">{props.beer.abv}%</li>
          <li className="beer-item-ibu beer-index-subitem">{props.beer.ibu} IBU</li>
          <li className="beer-item-rating beer-index-subitem">Average Rating</li>
          <li className="beer-item-checkins  beer-index-subitem">Total Checkins</li>
        </ul>
      </div>
    </div>
    <div className="index-item-underline"></div>
    </>
  );
};