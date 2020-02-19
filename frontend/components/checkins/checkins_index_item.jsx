import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";

export default (props) => {

  // {
  //   "body": "This. Tastes. Good. To Me",
  //   "rating": 4,
  //   "createdAt": "2020-02-18T21:14:22.673Z",
  //   "beerId": 2,
  //   "author": {
  //   "id": 1,
  //   "firstName": "tommy",
  //   "lastName": "duek"
  //   },
  //   "beer": {
  //   "id": 2,
  //   "name": "Double Dry Hopped Double Mosaic Dream"
  //   },
  //   "brewery": {
  //   "id": 1,
  //   "name": "Other Half Brewing Co.",
  //   "location": "Brooklyn, NY United States"
  //   }
  // }
  
  const checkin = props.checkin;
  const author = checkin.author;
  const beer = checkin.beer;
  const brewery = checkin.brewery;

  const deleteable = author.id === props.currentUserId ? <p className="orange-link" onClick={() => props.deleteCheckin(checkin.id)}>Delete Check-in</p> : null;
  const checkinPhoto = checkin.imgUrl ? <img src={checkin.imgUrl} className="checkin-photo" /> : null;
  debugger
  return (
    <div className="outer-checkin-item">
      <Link to={`/users/${author.id}`}>
        <img src={author.imgUrl} alt="User Photo" className="checkin-user-pic"/>
      </Link>
      <div className="checkin-main">
        <div className="upper-checkin-content">
          <p className="checkin-text">
            <Link to={`/users/${author.id}`} className="orange-link">{author.firstName} {author.lastName[0]}.</Link> is drinking a 
            <Link to={`/breweries/${brewery.id}/beers/${beer.id}`} className="orange-link"> {beer.name}</Link> by 
            <Link to={`/breweries/${brewery.id}`} className="orange-link"> {brewery.name}</Link>
          </p>
          <Link to={`/breweries/${brewery.id}/beers/${beer.id}`}>
            <img src={beer.imgUrl} alt="Beer Photo" className="checkin-beer-pic"/>
          </Link>
        </div>

        <div className="checkin-rating-body">
          <div className="checkin-body">{checkin.body}</div>
          <div className="checkin-rating">Rating: {parseFloat(checkin.rating)}</div>

          <div className="checkin-photo">
            {checkinPhoto}
          </div>
        </div>
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
      {/* <Link to={`/breweries/${brewery.id}/beers/${beer.id}`}>
        <img src={beer.imgUrl} alt="Beer Photo" className="checkin-beer-pic"/>
      </Link> */}
    </div>
  );
}