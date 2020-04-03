import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";
import { displayStars } from "../../utils/checkin_api_util";

export default class CheckinsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toasted: false,
      toastIds: this.props.checkin.toastIds,
      currentUserToastId: null
    };

    this.handleToast = this.handleToast.bind(this);
    this.checkToasted = this.checkToasted.bind(this);
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
      toasted,
      currentUserToastId,
      toastIds: checkin.toastIds
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
          checkin_id: this.props.checkin.id
        };

        this.props.createToast(toastData)
          .then((toastAction) => this.props.fetchCheckin(toastAction.toast.checkinId))
          .then((checkinAction) => checkToasted(checkinAction.payload.checkin));
    }
  }

  handleToastArr(toastIds) {
    const toasts = toastIds.slice(0,8);
    if (this.state.toasted && !toasts.includes(this.state.currentUserToastId)) { 
      toasts.unshift(this.props.currentUserToastId); 
    }

    return toasts;
  }

  componentDidMount() {
    this.checkToasted(this.props.checkin);
  }

  render() {
    const checkin = this.props.checkin;
    const fName = checkin.authorFName[0].toUpperCase() + checkin.authorFName.slice(1).toLowerCase();

    const deleteable = checkin.authorId === this.props.currentUserId ? <p className="orange-link" onClick={() => {
      return this.props.deleteCheckin(checkin.id)
    }}>Delete Check-in</p> : null;
  
    const checkinPhoto = checkin.imgUrl ? (
      <div className="checkin-photo-container">
        <Link to={`/checkins/${checkin.id}`}><img className="star" same="checkin-photo" src={checkin.imgUrl}className="checkin-photo"/></Link>
      </div>
     ) : null;

    let toastImgs;
    if (this.state.toastIds.length > 0) {
      toastImgs = checkin.toastIds.slice(0,8).map(id => {
        const toast = this.props.toasts[id];
        if (toast === undefined) return;
        return (
          <img className="toast-item" src={toast.imgUrl} alt={`Toast Img ${id}`} key={`${id}${checkin.id}`}/>
        )
      });
    }
    const toasts = this.handleToastArr(this.state.toastIds);

    const toastsSection = toasts.length === 0 ? null : (
      <section className="toasts">
        <div className="toast-count">
          <p className="toast-item">{this.state.toastIds.length}</p>
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
        <button className="checkin-button">Comment</button>
        <button className={`checkin-button ${buttonClass}`} onClick={this.handleToast}>Toast</button>
      </section>
    )
  
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
                {/* <Link to={`/users/${checkin.authorId}`} className="orange-link">{fName} {checkin.authorLName[0].toUpperCase()}.</Link> is drinking a
                <Link to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`} className="orange-link"> {checkin.beerName}</Link> by 
                <Link to={`/breweries/${checkin.breweryId}`} className="orange-link"> {checkin.breweryName}</Link> */}
                {fName} {checkin.authorLName[0].toUpperCase()}. is drinking a
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
          {buttons}
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
            {toastsSection}
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
}