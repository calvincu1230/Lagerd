import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";
import { displayStars } from "../../utils/checkin_api_util";

class CheckinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchCheckin(this.props.match.params.checkinId)
      .then(checkin => this.setState({ checkin }))
  }

  render() {
    if (!this.state.checkin) {
      return <div />
  }

    let checkin = this.props.checkin;
    let author = checkin.author || {};
    let beer = checkin.beer || {};
    let brewery = checkin.brewery || {};
  
    let checkinImage = this.props.checkin.imgUrl ? <img className="checkin-photo" src={this.props.checkin.imgUrl} /> : null;

    let deleteable;

    const noCheckinPicture = checkinImage ? "" : "no-picture"

    if (Boolean(Object.values(this.props.checkin)) > 0) {
      deleteable = author.id === this.props.currentUserId ? <p className="orange-link checkin-show-delete" onClick={() => {
        return props.deleteCheckin(checkin.id)
      }}>Delete Check-in</p> : null;
    }
    return (
      <div className="checkin-show-container">
        <div className="checkin-show-main" id={noCheckinPicture}>
          <div className="inner-checkin-show">
            <section className="checkin-show-info">
              <div className="checkin-show-top">
                <img className="checkin-user-pic" src={author.imgUrl} />
                <p className="checkin-author-name">{author.firstName} {author.lastName}</p>
              </div>

              <div className="checkin-show-mid">
                <div className="upper-mid">
                  <img className="checkin-show-pic" src={beer.imgUrl} />
                  <div className="checkin-beer-info">
                    <p className="checkin-beer-name"><Link className="black-link" to={`/breweries/${brewery.id}/beers/${beer.id}`}>{beer.name}</Link></p>
                    <p className="checkin-brewery-name" ><Link className="black-link" to={`/breweries/${brewery.id}`}>{brewery.name}</Link></p>
                  </div>
                </div>

                <div className="checkin-rating show-rating" >
                  {displayStars(checkin.rating)}
                </div>
              </div>

              <div className="checkin-show-bottom">
                <p className="checkin-show-date">{formatDate(checkin.createdAt)}</p>
                {deleteable}
              </div>
              {/* Comments and Toasts will go down here */}
              <div className="checkin-show-photo">
                {checkinImage}
              </div>
            </section>
          </div>

        </div>
      </div>
    )
  }
}

export default CheckinShow;