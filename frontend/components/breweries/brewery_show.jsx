import React from "react";

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId);
  };

  render() {
    return (
      <div className="brewery-show-main">
        {/* {this.props.brewery.name} */}
      </div>
    );
  }
}

export default BreweryShow;