import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";
import { displayStars } from "../../utils/checkin_api_util";
import CommentsIndexContainer from "../comments/comments_index_container";

export default class CheckinsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toasted: false,
      toastIds: this.props.checkin.toastIds,
      commentIds: this.props.checkin.commentIds,
      currentUserToastId: null,
      commenting: false,
      comment: ""
    };

    this.handleToast = this.handleToast.bind(this);
    this.checkToasted = this.checkToasted.bind(this);
    this.handleCommentClick = this.handleCommentClick.bind(this);
    this.handleCommentClick = this.handleCommentClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      toastIds: checkin.toastIds,
      commentIds: checkin.commentIds || []
    }); // if toasted, save toast id for later deletion ability
  }

  handleCommentClick(e) {
    e.preventDefault();
    if (this.state.commenting) {
      this.setState({ commenting: false });
    } else {
      this.props.fetchCheckin(this.props.checkin.id)
        .then(checkinAction => {
          this.setState({
            commenting: true,
            commentIds: checkinAction.payload.checkin.commentIds
        });
      });
    }
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    const checkinId = this.props.checkin.id
    const commentData = {
      body: this.state.comment,
      checkin_id: checkinId,
      author_id: this.props.currentUserId
    };

    this.props.createComment(commentData)
      .then(commentAction => this.props.fetchCheckin(commentAction.comment.checkinId))
      .then(checkinAction => this.setState({
          comment: "",
          commentIds: checkinAction.payload.checkin.commentIds
        }));
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
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

  handleDelete(commentId) {
    this.props.deleteComment(commentId)
      .then(commentAction => this.props.fetchCheckin(commentAction.comment.checkinId))
      .then(checkinAction => this.setState({ commentIds: checkinAction.payload.checkin.commentIds }));
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
        <Link to={`/checkins/${checkin.id}`}>
          <img className="star" 
            same="checkin-photo" 
            src={checkin.imgUrl}
            className="checkin-photo"
          />
        </Link>
      </div>
     ) : null;

    const toasts = this.state.toastIds;
    let toastImgs;

    if (toasts.length > 0) {
      toastImgs = toasts.slice(0,10).map(id => {
        const toast = this.props.toasts[id];
        if (toast === undefined) return;
        return (
          <Link to={`/users/${toast.userId}`} key={`${id}${checkin.id}${Date.now() / (Math.random() * 3000)}`}>
            <img 
              className="toast-item toast-index" 
              src={toast.imgUrl}
            />
          </Link>
        )
      });
    }

    const toastsSection = toasts.length === 0 ? null : (
      <section className="toasts-index">
        <div className="toast-count">
          <p className="toast-item">{toasts.length}</p>
          <i className="fas fa-beer toast-item"></i>
        </div>
        <div className="toast-imgs">
          {toastImgs}
        </div>
      </section>
    );

    const buttonClass = this.state.toasted ? "toasted" : "";
    const commentText = this.state.commenting ? "Hide Comments" : "Show Comments";

    const buttons = (
      <section className="checkin-buttons">

        <button className="checkin-button comment-btn" onClick={this.handleCommentClick}>
          <span className="btn-icon">
            <i className="far fa-comment"></i>
          </span>{commentText}
        </button>

        <button className={`checkin-button ${buttonClass}`} onClick={this.handleToast}>
          <span className="btn-icon">
            <i className="fas fa-beer"></i>
          </span>Toast
        </button>
      </section>
    );

    const commentForm = !this.state.commenting ? null : (
      <form className="new-comment" onSubmit={this.handleCommentSubmit}>

        <textarea 
          className="comment-ta" 
          onChange={this.handleChange} 
          value={this.state.comment} 
          maxLength="140"
          spellCheck="true"
          placeholder="Leave a Comment.."
          required
        />
        <div className="post-btn-wrap">
          <button className="checkin-button post-btn">Post</button>
        </div>

      </form>
    );

    const commentsSection = !this.state.commenting ? null : (
      <CommentsIndexContainer 
        checkin={checkin} 
        deleteComment={this.handleDelete}
      />
    );
    
    const commentsClass = commentsSection ? "comment-index" : "";
  
    return (
      <div className="outer-checkin-item">
        <div className="beer-pic-container">
          <Link to={`/users/${checkin.authorId}`}>
            <img src={checkin.authorImgUrl} className="checkin-user-pic"/>
          </Link>
        </div>
        <div className="checkin-main">
          <div className="upper-checkin-content">
            <div className="upper-main">
              <p className="checkin-text">
                <Link to={`/users/${checkin.authorId}`} className="orange-link">{fName} {checkin.authorLName[0].toUpperCase()}.</Link> is drinking a
                <Link to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`} className="orange-link"> {checkin.beerName}</Link> by 
                <Link to={`/breweries/${checkin.breweryId}`} className="orange-link"> {checkin.breweryName}</Link>
              </p>
            </div>
          </div>
  
          <div className="checkin-rating-body">
            <div className="checkin-body-index">{checkin.body}</div>
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
            <section className={commentsClass}>
              {commentsSection}
              {commentForm}
            </section>
          </div>
        </div>
  
        <div className="beer-pic-container">
          <Link to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`}>
            <img src={checkin.beerImgUrl} className="checkin-beer-pic"/>
          </Link>
        </div>
      </div>
    );
  }
}