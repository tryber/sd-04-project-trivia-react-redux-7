import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { playerInfo, requestToken } from '../actions';
import GoToSettingsBtn from '../components/GoToSettingsBtn';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', name: '' };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.renderInputEmail = this.renderInputEmail.bind(this);
    this.renderInputName = this.renderInputName.bind(this);
    this.onClickRequest = this.onClickRequest.bind(this);
  }

  onChangeEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
  }

  onChangeNome(event) {
    const { value } = event.target;
    this.setState({ name: value });
  }

  onClickRequest() {
    const { email, name } = this.state;
    const { submitInfo, getToken } = this.props;
    submitInfo(email, name);
    getToken();
  }

  renderInputEmail(email) {
    return (
      <label htmlFor={email}>
        E-mail:
        <input
          type="email"
          data-testid="input-gravatar-email"
          name="email"
          placeholder="email"
          onChange={this.onChangeEmail}
          value={email}
        />
      </label>
    );
  }

  renderInputName(name) {
    return (
      <label htmlFor={name}>
        Nome:
        <input
          type="text"
          data-testid="input-player-name"
          name="name"
          placeholder="nome"
          onChange={this.onChangeNome}
          value={name}
        />
      </label>
    );
  }

  render() {
    const { email, name } = this.state;
    const isDisabled = email === '' || name === '';
    // /\ linha 62 para corrigir o bug no disabled e passar no teste
    return (
      <div>
        <GoToSettingsBtn />
        {this.renderInputEmail(email)}
        {this.renderInputName(name)}

        <Link to="/game">
          <button
            onClick={() => this.onClickRequest()}
            type="button"
            data-testid="btn-play"
            disabled={isDisabled}
          >
            Jogar!
        </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitInfo: (email, name) => dispatch(playerInfo(email, name)),
  getToken: () => dispatch(requestToken()),
});

Login.propTypes = {
  submitInfo: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
