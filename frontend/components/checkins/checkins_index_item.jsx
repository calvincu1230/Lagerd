import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";
import { displayStars } from "../../utils/checkin_api_util";

export default (props) => {
  const checkin = props.checkin;

  const deleteable = checkin.authorId === props.currentUserId ? <p className="orange-link" onClick={() => {
    return props.deleteCheckin(checkin.id)
  }}>Delete Check-in</p> : null;

  const checkinPhoto = checkin.imgUrl ? (
    <div className="checkin-photo-container">
      <Link to={`/checkins/${checkin.id}`}><img className="star" same="checkin-photo" src={checkin.imgUrl}className="checkin-photo"/></Link>
    </div>
   ) : null;

  return (
    <div className="outer-checkin-item">
      <div className="beer-pic-container">
        {/* <Link to={`/users/${checkin.authorId}`}> */}
          <img src={checkin.authorImgUrl} alt="User Photo" className="checkin-user-pic"/>
        {/* </Link> */}
      </div>
      <div className="checkin-main">
        <div className="upper-checkin-content">
          <div className="upper-main">
            <p className="checkin-text">
              {/* <Link to={`/users/${checkin.authorId}`} className="orange-link">{checkin.authorFName} {checkin.authorLName[0]}.</Link> is drinking a
              <Link to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`} className="orange-link"> {checkin.beerName}</Link> by 
              <Link to={`/breweries/${checkin.breweryId}`} className="orange-link"> {checkin.breweryName}</Link> */}
              {checkin.authorFName} {checkin.authorLName[0]}. is drinking a
              <Link to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`} className="orange-link"> {checkin.beerName}</Link> by 
              <Link to={`/breweries/${checkin.breweryId}`} className="orange-link"> {checkin.breweryName}</Link>
            </p>
          </div>
        </div>

        <div className="checkin-rating-body">
          <div className="checkin-body">{checkin.body}</div>
          <div className="checkin-rating">
            {displayStars(checkin.rating)}
          </div>

        </div>
        {checkinPhoto}
        <div className="checkin-bottom">
          <div className="checkin-bottom-inner">
            <div className="checkin-info">
              <p className="date-posted">
                {formatDate(checkin.createdAt)}
              </p>

              <p className="checkin-show orange-link">
                <Link to={`/checkins/${checkin.id}`}>View Detailed Check-in</Link>
              </p>
              <div className="checkin-delete">
                {deleteable}
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className="beer-pic-container">
        <Link to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`}>
          <img src={checkin.beerImgUrl} alt="Beer Photo" className="checkin-beer-pic"/>
        </Link>
      </div>
      {/* <Link to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`}>
        <img src={checkin.beerImgUrl} alt="Beer Photo" className="checkin-beer-pic"/>
      </Link> */}
    </div>
  );
}