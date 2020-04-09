import React from "react";
import UserCheckinIndexContainer from "./users_checkin_index_container";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
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
      .then(userAction => this.setState({ user: userAction.payload.user }))
  }

  render() {
    if (this.state.user.id === undefined) return null;
    
    const user = this.state.user;

    const name = user.firstName[0] + user.firstName.slice(1) + " " + user.lastName[0] + user.lastName.slice(1)

    return (
      <div className="user-show-main">
        <section className="info-header">
          <div className="profile-img-wrap">
            <img className="profile-img" src={user.imgUrl}/>
          </div>

          <div className="user-info">
            <div className="user-name">
              <h1>{name}</h1>
            </div>

            <div className="user-name">
              <h2>{user.userName}</h2>
            </div>

            <div className="user-stats">
              <p className="user-stat">{user.totalCheckins} <span>TOTAL</span></p>
              <p className="user-stat">{user.uniqCheckins} <span>UNIQUE</span></p>
            </div>
          </div>
          
        </section>
        <UserCheckinIndexContainer user={this.props.user}/>
      </div>
    )
  }
}

export default UserShow;