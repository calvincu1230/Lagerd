import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";
import { displayStars } from "../../utils/checkin_api_util";

class CheckinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkin: null,
      toasted: false,
      currentUserToastId: null
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.checkToasted = this.checkToasted.bind(this);
    this.handleToast = this.handleToast.bind(this);
  }

  checkToasted(checkin) {
    let currentUserToastId = null;
    let toasted = false;

    checkin.toastIds.forEach(id => {
      const toast = this.props.toasts[id];
      if (toast === undefined) return;
      if (toast.userId === this.props.currentUserId) {
        toasted = true;
        currentUserToastId = toast.id;
      }
    });

    this.setState({
      checkin,
      toasted,
      currentUserToastId
    }); // if toasted, save toast id for later deletion ability
  }

  handleToast(e) {
    e.preventDefault();
    const checkToasted = this.checkToasted;
    if (this.state.toasted) {
      this.props.deleteToast(this.state.currentUserToastId)
        .then((toastAction) => this.props.fetchCheckin(toastAction.toast.checkinId))
        .then((checkinAction) => checkToasted(checkinAction.payload.checkin));
      } else {
        const toastData = {
          user_id: this.props.currentUserId,
          checkin_id: this.state.checkin.id
        };

        this.props.createToast(toastData)
          .then((toastAction) => this.props.fetchCheckin(toastAction.toast.checkinId))
          .then((checkinAction) => checkToasted(checkinAction.payload.checkin));
    }
  }

  handleDelete() {
    this.props.deleteCheckin(this.state.checkin.id)
      .then(() => this.props.history.push("/feed"));
  }

  componentDidMount() {
    this.props.fetchCheckin(this.props.match.params.checkinId)
      .then(checkinAction => this.checkToasted(checkinAction.payload.checkin));
  }

  render() {
    if (!this.state.checkin) {
      return <div />
    }

    let checkin = this.state.checkin;
    debugger
    let checkinImage = checkin.imgUrl ? <img className="checkin-photo" src={checkin.imgUrl} /> : null;

    let deleteable;

    const noCheckinPicture = checkinImage ? "" : "no-picture";

    if ((Object.values(checkin)).length > 0) {
      deleteable = checkin.authorId === this.props.currentUserId ? <p className="orange-link checkin-show-delete" onClick={this.handleDelete}>Delete Check-in</p> : null;
    }

    const toastImgs = checkin.toastIds.length > 0 ? (
      checkin.toastIds.slice(0,7).map(id => {
        const toast = this.props.toasts[id];
        if (toast === undefined) return;
        return (
          <img 
            className="toast-item toast-show" 
            src={toast.imgUrl} 
            alt={`Toast Img ${id}`} 
            key={`${id}${checkin.id}${Date.now() / (Math.random() * 300)}`}
          />
        )
      })
    ) : (
      <p className="no-toasts">Be the first to give a Toast!</p>
    )

    const buttonClass = this.state.toasted ? "toasted" : "";

    const toastsSection = (
      <section className="toasts-show">
        <button className={`checkin-show-button ${buttonClass}`} onClick={this.handleToast}>
          <span className="btn-icon"><i className="fas fa-beer toast-item"></i></span>
          <p>Toast</p>
        </button>
        <div className="toast-count-show">
          <p className="toast-item">{checkin.toastIds.length}</p>
        </div>
        <div className="toast-imgs">
          {toastImgs}
        </div>
      </section>
    );

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
                <div className="checkin-body-show">{checkin.body}</div>
                <div className="checkin-rating show-rating" >
                  {displayStars(checkin.rating)}
                </div>
              </div>

              <div className="checkin-show-bottom">
                <p className="checkin-show-date">{formatDate(checkin.createdAt)}</p>
                {deleteable}
              </div>
              <div className="checkin-show-photo">
                {checkinImage}
              </div>
            </section>
          </div>

          <div className="checkin-show-socials">
            {toastsSection}
            {/* {commentsSection} */}
          </div>
        </div>
      </div>
    )
  }
}

export default CheckinShow;