import React, { Component } from "react";

import FilmDisplay from "./FilmDisplay";
import Identifier from "./Identifier";
import VoteEtoiles from "./VoteEtoile";
let Films = [
  {
    nom: "La grande aventure des mojicons ",
    etoiles: 0,
    urlimg:
      ""
  },
  {
    nom: "La princesse des glace ",
    etoiles: 0,
    urlimg:
      ""
  },
  {
    nom: "Ozzy ",
    etoiles: 0,
    urlimg:
      ""
  },
   
];

class App extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      films: Films,
      isIdentifDisplay: true,
      isFilmsDisplayed: false,
      etoileVote: 0
    };
  }

 
  onLoginPressed = value => {
    this.setState({
      isFilmsDisplayed: !this.state.isFilmssDisplayed,
      isIdentifDisplay: !this.state. isIdentifDisplay
    });
  };

  toggleDisplayFilms = () => {
    this.state.isFilmsDisplayed ||
      this.setState({
        isIdentifDisplay: false,
        isFilmsDisplayed: true
      });
  };

  toggleDisplayAdd = () => {
    this.state.isAddDisplayed ||
      this.setState({
        isIdentifDisplay: true,
        isFilmsDisplayed: false
      });
  };

  

  render() {
   

   
    return (
      <div className="App">
      <div className="navbar">
      {this.state. isIdentifDisplay&& (
          <Identifier  />
        )}
       
        <div>
          <VoteEtoiles
            rating={this.state.etoilesRecherche}
            onChangeRating={newRating =>
              this.setState({
                etoileVote: newRating
              })
            }
          />
        </div>
      </div>
      <div className="main-section">
        {this.state.isFilmsDisplayed &&
          this.state.films.map((e, i) => {
            return (
              
              <FilmDisplay
                filmItem={e}
                index={i}
                toggleDisplayEditFilm={this.toggleDisplayEdit}
                indexOfElementToEdit={value =>
                  this.onChangeIndexElementToModify(value)
                }
              />
            );
          })}
      
      </div>

      {this.state.isFilmsDisplayed && (
        <div className="film-container">
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <span className="addFilm" onClick={this.toggleDisplayAdd}>
            +
          </span>
        </div>
      )}
    </div>
       );
  }
}

export default App;
