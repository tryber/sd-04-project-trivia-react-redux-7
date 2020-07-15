import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <label>
          E-mail:
          <input
            type='email'
            data-testid='input-gravatar-email'
            name='email'
            placeholder='email'
            // onChange={}
          />
        </label>
        <label>
          Nome:
          <input
            type='text'
            data-testid='input-player-name'
            name='name'
            placeholder='nome'
            // onChange={}
          />
        </label>
        <button data-testid='btn-play' >Jogar!</button>
      </div>
    )
  }
}

export default Login
