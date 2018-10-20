import React, { Component } from "react";

class Etoiles extends Component {
  render() {
    let etoileS = this.props.onClickEtoile
      ? this.props.onClickEtoile
      : () => {};

    return (
      <span>
        {Array.from(
          { length: 5 },
          (el, i) =>
            i < this.props.rating ? (
              <span
                key={i}
                onClick={() => {
                  etoileS(i + 1);
                }}
              >
                ★
              </span>
            ) : (
              <span
                key={i}
                onClick={() => {
                  etoileS(i + 1);
                }}
              >
                ☆
              </span>
            )
        )}
      </span>
    );
  }
}

export default Etoiles;
