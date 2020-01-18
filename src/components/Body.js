import React from "react";

class Body extends React.Component {
  render() {
    return (
      <div className="">
        Insert map/chart/interactive thing here.
        {this.props.children}
      </div>
    );
  }
}

export default Body;
