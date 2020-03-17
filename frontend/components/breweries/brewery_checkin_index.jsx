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
      checkinLis = this.state.brewery.checkinIds.map(id => {
        const checkin = this.props.checkins[id];
        // const author = this.props.users[checkin.authorId];
        return (<CheckinIndexItem 
                    key={`${checkin.id}${checkin.body}`} 
                    checkin={checkin}
                    author={this.props.users[checkin.authorId]}
                    beer={this.props.beers[checkin.beerId]} 
                    deleteCheckin={this.props.deleteCheckin} 
                    brewery={this.state.brewery}
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