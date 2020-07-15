import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <p>E-mail:</p>
        <input
          type="email"
          data-testid="input-gravatar-email"
          name="email"
          placeholder="email"
          // onChange={}
        />
        <p>Nome:</p>
        <input
          type="text"
          data-testid="input-player-name"
          name="name"
          placeholder="nome"
          // onChange={}
        />
        <button data-testid="btn-play">Jogar!</button>
      </div>
    );
  }
}

export default Login;
