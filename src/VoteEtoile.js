import React, { Component } from "react";
import Etoiles from "./Etoiles";

class VoteEtoiles extends Component {
  render() {
    return (
      <div className="stars">
        <Etoiles
          onClickEtoile={i => this.props.onChangeRating(i)}
        />
      </div>
    );
  }
}

export default VoteEtoiles;
