import React from "react";
import CheckinsIndexItem from "../checkins/checkins_index_item";

class BreweryCheckinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brewery: {}
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(checkinId) {
    debugger
    this.props.deleteCheckin(checkinId)
      .then(() => this.props.fetchBrewery(this.state.brewery.id))
      .then(breweryAction => this.setState({ brewery: breweryAction.payload.brewery }))
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId)
      .then(breweryAction => {
        this.setState({ brewery: breweryAction.payload.brewery })
      });
  }

  render() {
    if (this.state.brewery.id === undefined) return null;

    let checkinLis;
    if (Object.values(this.state.brewery).length > 0) {
      const sortedCheckins = this.state.brewery.checkinIds.sort((a, b) => b - a);
      checkinLis = sortedCheckins.map(id => {
        const checkin = this.props.checkins[id];
        if (checkin === undefined) return null; // ensures post that was prev in brewery id arr is not rendered b4 it updates
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
          />)
      });
    }
    return (
      <div className="index-sub-feed">
        <div className="checkin-index-title">Recent Global Activity</div>
        <div className="index-body">
          <ul>{checkinLis}</ul>
        </div>
        {/* <button className="more-beer-btn" onClick={this.fetchMoreBeers}>Show More Beers</button> */}
      </div>
    );
  }
}

export default BreweryCheckinIndex;