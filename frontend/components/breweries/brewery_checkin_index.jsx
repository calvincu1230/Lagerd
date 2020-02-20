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
    this.props.fetchBrewery(this.props.match.params.breweryId).then((brewery) => { 
      this.setState({ brewery })
    });
  }

  render() {

    let checkinLis;
    if (Object.values(this.state.brewery).length > 0) {
      checkinLis = Object.values(this.props.brewery.checkins).map(checkin => {
        return <CheckinIndexItem 
                    key={`${checkin.id}${checkin.body}`} 
                    checkin={checkin} 
                    beer={checkin.beer} 
                    deleteCheckin={this.props.deleteCheckin} 
                    brewery={this.state.brewery}
                    currentUserId={this.props.currentUserId}
                />
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