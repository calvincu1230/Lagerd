import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";
import { displayStars } from "../../utils/checkin_api_util";

class CheckinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteCheckin(this.props.checkin.id)
      .then(() => this.props.history.push("/feed"));
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
  
    let checkinImage = checkin.imgUrl ? <img className="checkin-photo" src={checkin.imgUrl} /> : null;

    let deleteable;

    const noCheckinPicture = checkinImage ? "" : "no-picture";

    if ((Object.values(checkin)).length > 0) {
      deleteable = checkin.authorId === this.props.currentUserId ? <p className="orange-link checkin-show-delete" onClick={this.handleDelete}>Delete Check-in</p> : null;
    }
    return (
      <div className="checkin-show-container">
        <div className="checkin-show-main" id={noCheckinPicture}>
          <div className="inner-checkin-show">
            <div className="orange-link return"><Link to="/feed">Return back to Feed.</Link></div>
            <section className="checkin-show-info">
              <div className="checkin-show-top">
                <img className="checkin-user-pic" src={checkin.authorImgUrl} />
                <p className="checkin-author-name">{checkin.authorFName} {checkin.authorLName}</p>
              </div>

              <div className="checkin-show-mid">
                <div className="upper-mid">
                  <img className="checkin-show-pic" src={checkin.beerImgUrl} />
                  <div className="checkin-beer-info">
                    <p className="checkin-beer-name"><Link className="black-link" to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`}>{checkin.beerName}</Link></p>
                    <p className="checkin-brewery-name" ><Link className="black-link" to={`/breweries/${checkin.breweryId}`}>{checkin.breweryName}</Link></p>
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