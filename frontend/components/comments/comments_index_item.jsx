import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {},
      editing: false,
      body: this.props.comment.body
    }

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEditClick() {
    if (this.state.editing) {
      this.setState({ editing: false });
    } else {
      this.setState({ editing: true });
    }
  }

  handleUpdate() {
    this.handleEditClick();
    this.props.updateComment({ id: this.props.comment.id, body: this.state.body });
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  componentDidMount() {
    this.setState({ comment: this.props.comment });
  }

  render() {
    const comment = this.state.comment;
    if (comment.body === undefined) return null;

    const editable = comment.authorId !== this.props.currentUserId ? null : (
      <>
        <p className="orange-link item" onClick={this.handleEditClick}>Edit</p>
        <p className="orange-link item" onClick={() => this.props.deleteComment(comment.id)}>Delete</p>
      </>
    )

    const commentBody = this.state.editing ? (
      <form className="edit-comment" onSubmit={this.handleUpdate}>

        <textarea 
          className="edit-comment-ta" 
          onChange={this.handleChange} 
          value={this.state.body} 
          maxLength="140"
          spellCheck="true"
          required
        />

        <div className="comment-bot">
          <p className="orange-link item" onClick={this.handleUpdate}>Update</p>
          <p className="orange-link item" onClick={this.handleEditClick}>Cancel</p>
        </div>
      </form>
    ) : (
      <div className="comment-main">
        <p className="item comment-body">
          <Link to={`/users/${comment.authorId}`} className="author orange-link item">
              {`${comment.authorFName} ${comment.authorLName[0].toUpperCase()}:`}
          </Link>
          {"  " + comment.body}
        </p>
        <div className="comment-bot">
          <p className="date item">{formatDate(comment.createdAt)}</p>
          {editable}
        </div>
      </div>
    );

    return (
      <div className="comment-item">
        <div className="comment-top">
          <div className="photo-wrap">
            <img className="comment-photo item" src={`${comment.imgUrl}`} alt={`author ${comment.authorId} photo`}/>
          </div>
          {commentBody}
        </div>
      </div>
    )
  }
}

export default CommentsIndexItem;