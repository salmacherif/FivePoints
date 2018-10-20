import React from "react";

class Identifier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  onChangeLogin = value => {
    this.setState({
      login: value
    });
  };

 

  onChangePassword = value => {
    this.setState({
      password: value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="add-film-container">
        <h1> Identifier </h1>
        <div className="add-film-item">
          <label> login </label>
          <input onChange={e => this.onChangeLogin(e.target.value)} />
        </div>

        <div className="add-film-item">
          <label> Mot de passe </label>
          <input onChange={e => this.onChangePassword(e.target.value)} />
        </div>

        <button onClick={() => this.props.onLoginPressed({ ...this.state })}>
          Identifier
        </button>
      </div>
    );
  }
}

export default Identifier;
