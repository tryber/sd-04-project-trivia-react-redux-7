import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameHeader from '../components/GameHeader';
import GameQuestion from '../components/GameQuestion';
import { Link } from 'react-router-dom';

class Game extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <GameHeader />
        {isLoading ? 'Loading' : <GameQuestion />}
        <Link to="/feedback">
          <button type="button">
            Feedback
          </button></Link>

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
