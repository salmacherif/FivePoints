import React from "react";
import Etoiles from "./Etoiles";
const FilmDisplay = props => {
  var divStyle = {
    height: "80%",
    backgroundImage: `url(${props.filmItem.urlimg})`,
    backgroundSize: "cover",
    overflow: "hidden",
    border: "1px solid black"
  };

  return (
    <div className="film-container">
      <div style={divStyle} />
      <div className="film-item">
        <h1> {props.filmItem.nom}</h1>
      </div>
      <div className="film-item">
        <h1>
          {" "}
          <Etoiles rating={props.filmItem.etoiles} />{" "}
        </h1>
      </div>
    </div>
  );
};

export default FilmDisplay;
