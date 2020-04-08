import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date_util";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {},
      editing: false
    }
  }

  handleEditClick(e) {
    e.preventDefault();
    if (this.state.editing) {
      this.setState({ editing: false });
    } else {
      this.setState({ editing: true });
    }
  }

  componentDidMount() {
    this.setState({ comment: this.props.comment });
  }

  render() {
    const comment = this.state.comment;
    if (comment.body === undefined) return null;

    const editable = comment.authorId !== this.props.currentUserId ? null : (
      <>
        <p className="orange-link item" onClick={this.handleUpdate}>Edit</p>
        <p className="orange-link item" onClick={() => this.props.deleteComment(comment.id)}>Delete</p>
      </>
    )

    return (
      <div className="comment-item">
        <div className="comment-top">
          <img className="comment-photo item" src={`${comment.imgUrl}`} alt={`author ${comment.authorId} photo`}/>
          <p className="item comment-body">
            <Link to={`/users/${comment.authorId}`} className="author orange-link item">
                {`${comment.authorFName} ${comment.authorLName[0].toUpperCase()}:`}
            </Link>
            {" " + comment.body}
          </p>
        </div>

        <div className="comment-bot">
          <p className="date item">{formatDate(comment.createdAt)}</p>
          {editable}
        </div>
      </div>
    )
  }
}

export default CommentsIndexItem;