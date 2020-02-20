import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";

export default (props) => {

  const checkin = props.checkin;
  const author = checkin.author;
  const beer = checkin.beer;
  const brewery = checkin.brewery ? checkin.brewery : props.brewery;  
  
  const displayStars = rating => { 
    let num = 0;
    const starsArr = [];
    while (num < 5) {
      if ((rating > num) && (rating >= (num + 1))) {
        starsArr.push(<img key={num} className="cap" src={fullCap} />)
      } else if (rating === num + .25) {
        starsArr.push(<img key={num} className="cap" src={quarterCap} />)
      } else if (rating === num + .50) {
        starsArr.push(<img key={num} className="cap" src={halfCap} />)
      } else if (rating === num + .75) {
        starstarsArr.push(<img key={num} className="cap" src={threeQuartersCap} />)
      } else {
        starsArr.push(<img key={num} className="cap" src={emptyCap} />)
      }
      num += 1;
    }

    return starsArr;
  } 

  const deleteable = author.id === props.currentUserId ? <p className="orange-link" onClick={() => {
    debugger
    return props.deleteCheckin(checkin.id)
  }}>Delete Check-in</p> : null;
  const checkinPhoto = checkin.imgUrl ? (
    <div className="checkin-photo-container">
      <Link to={`/checkins/${checkin.id}`}><img className="star" same="checkin-photo" src={checkin.imgUrl}className="checkin-photo"/></Link>
    </div>
   ) : null;
  
  return (
    <div className="outer-checkin-item">
      <Link to={`/users/${author.id}`}>
        <img src={author.imgUrl} alt="User Photo" className="checkin-user-pic"/>
      </Link>
      <div className="checkin-main">
        <div className="upper-checkin-content">
          <div className="upper-main">
            <p className="checkin-text">
              <Link to={`/users/${author.id}`} className="orange-link">{author.firstName} {author.lastName[0]}.</Link> is drinking a 
              <Link to={`/breweries/${brewery.id}/beers/${beer.id}`} className="orange-link"> {beer.name}</Link> by 
              <Link to={`/breweries/${brewery.id}`} className="orange-link"> {brewery.name}</Link>
            </p>
          </div>
          <div className="beer-pic-container">
            <Link to={`/breweries/${brewery.id}/beers/${beer.id}`}>
              <img src={beer.imgUrl} alt="Beer Photo" className="checkin-beer-pic"/>
            </Link>
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
      {/* <Link to={`/breweries/${brewery.id}/beers/${beer.id}`}>
        <img src={beer.imgUrl} alt="Beer Photo" className="checkin-beer-pic"/>
      </Link> */}
    </div>
  );
}