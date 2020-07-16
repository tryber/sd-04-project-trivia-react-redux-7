import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestToken, requestQuestions, playerInfo } from '../actions';
import GoToSettingsBtn from '../components/GoToSettingsBtn';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', name: '', isDisabled: true };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.HabilitButton = this.HabilitButton.bind(this);
    this.renderInputEmail = this.renderInputEmail.bind(this);
    this.renderInputName = this.renderInputName.bind(this);
  }

  onChangeEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
    this.HabilitButton();
  }

  onChangeNome(event) {
    const { value } = event.target;
    this.setState({ name: value });
    this.HabilitButton();
  }

  HabilitButton() {
    const { name, email } = this.state;
    this.setState({ isDisabled: email === '' && name === '' });
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
    const { email, name, isDisabled } = this.state;
    const { submitInfo } = this.props;
    return (
      <div>
        <GoToSettingsBtn />
        {this.renderInputEmail(email)}
        {this.renderInputName(name)}
        <button
          onClick={() => submitInfo(email, name)}
          type="button"
          data-testid="btn-play"
          disabled={isDisabled}
        >
          Jogar!
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(requestToken()),
  getQuestions: (data) => dispatch(requestQuestions(data)),
  submitInfo: (email, name) => dispatch(playerInfo(email, name)),
});

const mapStateToProps = (state) => ({
  url: state.gravatarReducer.avatarUrl,
});

Login.propTypes = {
  submitInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
