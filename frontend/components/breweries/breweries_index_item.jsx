import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <li className="brewery-item">
      <div>
        <h4 className="brewery-item-title">
          <Link 
            to={`/breweries/${props.brewery.id}`} 
            className="orange-link">{props.brewery.name}
          </Link>
        </h4>
        <p className="brewery-item-location">{props.brewery.location}</p>
      </div>
      <div className="brewery-item-underline"></div>
    </li>
  );
};