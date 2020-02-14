import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <li className="index-item">
      <div>
        <img src={props.beer.imgUrl} className="index-img"/>
        <h4 className="index-item-title">
          <Link 
            to={`/beers/${props.beer.id}`} 
            className="orange-link">{props.beer.name}
          </Link>
        </h4>
        <p className="beer-item-style index-subitem">{props.beer.style}</p>
        <p className="beer-item-abv index-subitem">{props.beer.abv}%</p>
      </div>
      <div className="index-item-underline"></div>
    </li>
  );
};