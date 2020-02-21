[Lagerd Homepage](https://lagerd.herokuapp.com/ "Lagerd's Homepage")

# Lagerd

Lagerd is an app that is based on the website untapped.  Lagerd is beer tracking social website that encourages user interaction  and 'collection' of new untried beers.  It allow a user to see what other users think of beers through a global checkin feed.  

## Technologies

#### Frontend
  * React
  * Redux
  * JavaScript

#### Backend
  * Ruby
  * Rails
  * PostgreSQL

## Features
  1. A user must be 21 years of age or older in order to create an account. 
  ![alt text](https://lagerd-dev.s3.us-east-2.amazonaws.com/login_age_verif.png "User Age Verification")
  
```ruby
  validate :birth_date, if: :over_21
  
  def over_21
      # based on todays date, compares with date instance of given birthday
      today = Date.today
      date = Date.parse(self.birth_date)
      age = (today.year - date.year)
      age -= 1 if [date.day, date.month, today.year].join('/').to_date > Date.today
          # checks if specific date birthdate has passed
      if age >= 21
          true
      else
          # adds error that will be rendered with errors.full_messages
          self.errors.add(:_, "Must be 21 or older to make an account.")
      end
  end
 ```
 
 2. For all Beers and Breweries across the site, their ratings are averaged based on all of the checkins they have recieved and are assigned a rating out of 5 based on that average. Active Record average of ratings is retured 
 ![alt text](https://lagerd-dev.s3.us-east-2.amazonaws.com/ratings_avg.png "Rating Averages")
 
```javascript
export const displayStars = rating => { 
  let num = 0;
  const starsArr = [];
  while (num < 5) {
    if ((rating > num) && (rating >= (num + 1))) {
      starsArr.push(<img key={num} className="cap" src={fullCap} />)
    } else if (rating <= num + .25 && rating > num) {
      starsArr.push(<img key={num} className="cap" src={quarterCap} />)
    } else if (rating <= num + .50  && rating > num) {
      starsArr.push(<img key={num} className="cap" src={halfCap} />)
    } else if (rating <= num + .75 && rating > num) {
      starsArr.push(<img key={num} className="cap" src={threeQuartersCap} />)
    } else {
      starsArr.push(<img key={num} className="cap" src={emptyCap} />)
    }
    num += 1;
  }

  return starsArr;
} 
```

 
## Future Features
  * Checkins can be "toasted" or commented on.
  * A User can search for a beer or a brewery by name.
  * Users can earn badges from meeting certain checkin criteria.
  * Users can have friendships with other users, giving them access to a feed of just checkins of their friends.
  * Users can "Check in" at a venue based on the geo-tagged location.
