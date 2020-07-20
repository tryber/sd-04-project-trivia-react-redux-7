import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameHeader from '../components/GameHeader';
import GameQuestion from '../components/GameQuestion';

class Game extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <GameHeader />
        {isLoading ? 'Loading' : <GameQuestion />}

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.tokenReducer.isLoading,
});

export default connect(mapStateToProps)(Game);

Game.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
