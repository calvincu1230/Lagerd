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
  
    let checkinImage = checkin.imgUrl ? <img className="checkin-photo" src={checkin.imgUrl} /> : null;

    let deleteable;

    const noCheckinPicture = checkinImage ? "" : "no-picture";

    if ((Object.values(checkin)).length > 0) {
      deleteable = checkin.authorId === this.props.currentUserId ? <p className="orange-link checkin-show-delete" onClick={this.handleDelete}>Delete Check-in</p> : null;
    }

    let toastImgs;
    if (checkin.toastIds.length > 0) {
      toastImgs = checkin.toastIds.slice(0,10).map(id => {
        const toast = this.props.toasts[id];
        if (toast === undefined) return;
        return (
          <img className="toast-item" src={toast.imgUrl} alt={`Toast Img ${id}`} key={`${id}${checkin.id}${Date.now() / (Math.random() * 300)}`}/>
        )
      });
    }

    const toasts = checkin.toastIds;

    const toastsSection = toasts.length === 0 ? null : (
      <section className="toasts">
        <div className="toast-count">
          <p className="toast-item">{checkin.toastIds.length}</p>
          <i className="fas fa-beer toast-item"></i>
        </div>
        <div className="toast-imgs">
          {toastImgs}
        </div>
      </section>
    );

    const buttonClass = this.state.toasted ? "toasted" : "";

    const buttons = (
      <section className="checkin-buttons">
        <button className="checkin-button comment-btn"><span className="btn-icon"><i className="far fa-comment"></i></span>Comment</button>
        <button className={`checkin-button ${buttonClass}`} onClick={this.handleToast}><span className="btn-icon"><i className="fas fa-beer"></i></span>Toast</button>
      </section>
    )
    
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
                {buttons}
                {toastsSection}
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