import React from "react";
import CheckinsIndexItem from "./checkins_index_item";

class CheckinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCheckins();
  }

  render() {

    if (Object.keys(this.props.checkins).length === 0) {
      return null;
    }

    const checkinIdOrder = Object.keys(this.props.checkins).reverse();
    const checkinLis = checkinIdOrder.map(id => {
      const checkin = this.props.checkins[id];

      return (<CheckinsIndexItem 
                key={`${checkin.id}${checkin.body}`} 
                checkin={checkin} 
                deleteCheckin={this.props.deleteCheckin} 
                currentUserId={this.props.currentUserId}
                />)
    });
    
    return (
      <div className="index-feed">
        <div className="checkin-index-title">Recent Global Activity</div>
        <div className="index-body">
          <ul>{checkinLis}</ul>
        </div>
      </div>
    );
  }
}

export default CheckinsIndex;