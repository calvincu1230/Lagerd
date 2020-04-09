import React from "react";
import CheckinsIndexItem from "../checkins/checkins_index_item";

class UserCheckinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(checkinId) {
    this.props.deleteCheckin(checkinId)
      .then(() => this.props.fetchUser(this.state.user.id))
      .then(userAction => this.setState({ user: userAction.payload.user }))
  }

  componentDidUpdate(prevProps) {
    // checkins if route wildcard has changed to trigger update
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId)
      .then(userAction => this.setState({ user: userAction.payload.user }))
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
      .then((userAction) => this.setState({ 
        user: userAction.payload.user
      }));
  }

  render() {

    if (this.state.user.id === undefined) return null;
    debugger
    let checkinLis;
    const user = this.state.user;

    if (Object.values(this.state.user).length > 0) {
      const sortedCheckins = this.state.user.checkinIds.sort((a, b) => b - a);
      checkinLis = sortedCheckins.map(id => {

        const checkin = this.props.checkins[id];
        if (checkin === undefined) return null; // ensures post that was prev in user id arr is not rendered b4 it updates
        
        return (
          <CheckinsIndexItem 
            key={`${checkin.id}${checkin.body}`} 
            checkin={checkin}
            toasts={this.props.toasts}
            fetchCheckin={this.props.fetchCheckin}
            deleteCheckin={this.handleDelete} 
            currentUserId={this.props.currentUserId}
            deleteToast={this.props.deleteToast}
            createToast={this.props.createToast}
            createComment={this.props.createComment}
            deleteComment={this.props.deleteComment}
          />)
      });
    }

    const userName = user.id === this.props.currentUserId ? "Your " : user.firstName[0] + user.firstName.slice(1) +"'s";

    return (
      <div className="index-sub-feed">
        <div className="checkin-index-title">{userName} Recent Activity</div>
        <div className="index-body">
          <ul>{checkinLis}</ul>
        </div>
        {/* <button className="more-user-btn" onClick={this.props.fetchMoreCheckins}>Show More Checkins</button> */}
      </div>
    );
  }
}

export default UserCheckinIndex;