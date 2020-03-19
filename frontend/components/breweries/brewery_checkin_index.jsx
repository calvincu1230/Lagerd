import React from "react";
import CheckinIndexItem from "../checkins/checkins_index_item";

class BreweryCheckinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brewery: {}
    }
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId)
      .then(breweryAction => {
        this.setState({ brewery: breweryAction.payload.brewery })
      }); // Why is brewery an action here? I don't really have time but I want to refactor ALOT of my site for better practices
  }

  render() {
    if (this.state.brewery.id === undefined) return null;

    let checkinLis;
    if (Object.values(this.state.brewery).length > 0) {
      const sortedCheckins = this.state.brewery.checkinIds.sort((a, b) => b - a);
      checkinLis = sortedCheckins.map(id => {
        const checkin = this.props.checkins[id];
        if (checkin === undefined) return null; // ensures post that was prev in brewery id arr is not rendered b4 it updates
        return (<CheckinIndexItem 
                    key={`${checkin.id}${checkin.body}`} 
                    checkin={checkin}
                    deleteCheckin={this.props.deleteCheckin} 
                    currentUserId={this.props.currentUserId}
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