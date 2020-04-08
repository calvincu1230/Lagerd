import React from "react";
import CommmentsIndexItem from "./comments_index_item";

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      checkin: this.props.checkin
    }
  }

  componentDidMount() {
    this.setState({ commentIds: this.props.commentIds })
  }

  static getDerivedStateFromProps(nextProps, prevState){
    // commentId vals are always unique
    const nextPropArr = nextProps.checkin.commentIds;
    const prevStateArr = prevState.checkin.commentIds;
    const bool = nextPropArr.length === prevStateArr.length && nextPropArr.every(function(value, index) { 
      return value === prevStateArr[index]
    }); // compares array of ids to check if update is needed

    if(!bool) {
      return { checkin: nextProps.checkin }; 
      // sets state to newly passed in checkin, forcing re-render
    } else return null;
  }
  
  // tested without and still works but want to leave it in case it is needed
  // componentDidUpdate(prevProps, prevState) {
  //   const prevPropArr = prevProps.checkin.commentIds;
  //   const prevStateArr = prevState.checkin.commentIds;
  //   const bool = prevPropArr.length === prevStateArr.length && prevPropArr.every(function(value, index) { 
  //     return value === prevStateArr[index]
  //   });
  //   if (!bool) {
  //     //Perform some operation here
  //     this.setState({ checkin: this.props.checkin });
  //   }
  // }

  render() {
    const commentIds = this.state.checkin.commentIds;
    
    if (commentIds.length === 0) {
      return null;
    }

    const comments = this.props.comments;

    const commentList = commentIds.map(id => {
      const comment = comments[id];
      if (!comment) return;

      return (
        <CommmentsIndexItem 
          key={`${comment.id}${comment.body}`}
          comment={comment} 
          currentUserId={this.props.currentUserId}
          updateComment={this.props.updateComment}
          deleteComment={this.props.deleteComment}
        />
      )
    })

    return (
      <ul className="comments-list">
        {commentList}
      </ul>
    );
  }
}

export default CommentsIndex;