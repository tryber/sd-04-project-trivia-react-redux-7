import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAvatar } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', name: '', isDisabled: true };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.HabilitButton = this.HabilitButton.bind(this);
  }

  componentDidMount() {
    const { getAvatar } = this.props;
    getAvatar('ronanf.sk@gmail.com');
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
    this.setState({ isDisabled: email === '' && name === '' ? true : false });
  }

  render() {
    const { email, name, isDisabled } = this.state;
    return (
      <div>
        <label>
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
        <label>
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
        <button data-testid="btn-play" disabled={isDisabled}>
          {' '}
          Jogar!
        </button>
        <img src={this.props.url} alt="aaaaaa" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAvatar: (email) => dispatch(requestAvatar(email)),
});

const mapStateToProps = (state) => ({
  url: state.dataAvatar,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
