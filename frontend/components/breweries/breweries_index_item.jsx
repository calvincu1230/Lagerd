import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <li className="index-item">
      <div>
        <h4 className="index-item-title">
          <Link 
            to={`/breweries/${props.brewery.id}`} 
            className="orange-link">{props.brewery.name}
          </Link>
        </h4>
        <p className="index-item-location index-subitem">{props.brewery.location}</p>
        <p>{props.brewery.beerCount}</p>
      </div>
      <div className="index-item-underline"></div>
    </li>
  );
};