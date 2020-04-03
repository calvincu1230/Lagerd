import React from "react";
import CheckinsIndexItem from "../checkins/checkins_index_item";

class BeerCheckinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId)
      .then((beerAction) => this.setState({ beer: beerAction.payload.beer }));
  }

  render() {
    if (this.state.beer.id === undefined) return null;

    let checkinLis;
    if (Object.values(this.state.beer).length > 0) {
      const sortedCheckins = this.state.beer.checkinIds.sort((a, b) => b - a);
      checkinLis = sortedCheckins.map(id => {
        const checkin = this.props.checkins[id];
        if (checkin === undefined) return null; // ensures post that was prev in beer id arr is not rendered b4 it updates
        return (
          <CheckinsIndexItem 
            key={`${checkin.id}${checkin.body}`} 
            checkin={checkin}
            toasts={this.props.toasts}
            fetchCheckin={this.props.fetchCheckin}
            deleteCheckin={this.props.deleteCheckin} 
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

export default BeerCheckinIndex;