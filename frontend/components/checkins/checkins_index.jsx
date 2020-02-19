import React from "react";
import CheckinsIndexItem from "./checkins_index_item";

class CheckinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCheckins();
    this.props.fetchBeers();
  }

  render() {

    const checkinLis = this.props.checkins.map(checkin => {
      return <CheckinsIndexItem key={`${checkin.id}${checkin.body}`} checkin={checkin} deleteCheckin={this.props.deleteCheckin} />
    });
    
    return (
      <div className="index-feed">
        <div className="index-title">Recent Global Activity</div>
        <div className="index-body">
          <ul>{checkinLis}</ul>
        </div>
      </div>
    );
  }
}

export default CheckinsIndex;