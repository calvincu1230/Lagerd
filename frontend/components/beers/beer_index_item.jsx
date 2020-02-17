import React from "react";
import { Link } from "react-router-dom";

export default props => {
  debugger
  return (
    <>
    <div className="index-item-beer">
      {/* <div className="left-items"></div> */}
      <img src={props.beer.imgUrl} className="index-img"/>
      <div className="index-info">
        <h4 className="index-item-title index-subitem">
          <Link 
            to={`breweries/${props.beer.brewery_id}/beers/${props.beer.id}`} 
            className="orange-link">{props.beer.name}
          </Link>
        </h4>
        <p className="beer-item-style index-subitem">{props.beer.style}</p>
        <p className="beer-item-abv index-subitem">{props.beer.abv}%</p>

      </div>
    </div>
    <div className="index-item-underline"></div>
    </>
  );
};