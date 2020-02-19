import React from "react";
import { Link } from "react-router-dom";

export default props => {

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
  const formatDate = date => {
    const months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };
    const daysOfWeek = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    };
    const obj = new Date(date);
    const month = months[obj.getMonth()];
    const day = obj.getDate();
    const year = obj.getFullYear();
    const dayOfWeek = daysOfWeek[obj.getDay()];
    return `${month} ${day}, ${year} (${dayOfWeek})`;
  };
  
  const checkin = props.checkin;
  const author = checkin.author;
  const beer = checkin.beer;
  const brewery = checkin.brewery;
  
  // const date = Date.parse(checkin.createdAt)
  // const dateStr = `${date.getDay} ${date.getMonth.slice(0,3)} ${date.getFullYear.slice(2)}`

  const checkinPhoto = checkin.imgUrl ? <img src={checkin.imgUrl} className="checkin-photo" /> : null;
  return (
    <div className="outer-checkin-item">

      <div className="upper-checkin-content">
        <img src={author.imgUrl} alt="User Photo" className="checkin-user-pic"/>
        <p className="checkin-text">
          <Link to={`/users/${author.id}`} className="orange-link">{author.firstName} {author.lastName[0]}.</Link> is drinking a 
          <Link to={`/breweries/${brewery.id}/beers/${beer.id}`} className="orange-link"> {beer.name}</Link> by 
          <Link to={`/breweries/${brewery.id}`} className="orange-link"> {brewery.name}</Link>
        </p>
        <img src={beer.imgUrl} alt="Beer Photo" className="checkin-beer-pic"/>
      </div>

      <div className="checkin-rating-body">
        {checkin.body}
        {parseFloat(checkin.rating)}
      </div>

      <div className="checkin-photo">
        {checkinPhoto}
      </div>

      <div className="checkin-info">
        <p className="date posted">
          {/* {dateStr} */}
        </p>

        <p className="checkin-show orange-link">
          <Link to={`/checkins/${checkin.id}`}>View Detailed Check-in</Link>
        </p>
      </div> 
    </div>
  );
}