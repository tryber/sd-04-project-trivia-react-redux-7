import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GameHeader extends Component {
  render() {
    const { name, score, avatarUrl } = this.props;
    console.log(name, score, avatarUrl);
    return (
      <div className="game-header">
        {avatarUrl}
        <img src={avatarUrl} alt="/" data-testid="header-profile-picture" />
        <div className="game-header-name" data-testid="header-player-name">
          {`Player Name: ${name}`}
        </div>
        <div className="game-header-score" data-testid="header-score">
          {`Score: ${score}`}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.gravatarReducer.name,
  avatarUrl: state.gravatarReducer.avatarUrl,
});

GameHeader.defaultProps = {
  score: 0,
};
export default connect(mapStateToProps)(GameHeader);

GameHeader.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
  avatarUrl: PropTypes.string.isRequired,
};
