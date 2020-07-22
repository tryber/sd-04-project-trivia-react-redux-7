import { COUNTDOWN, CLICKED_BUTTON } from '../actions';

const INITIAL_STATE = {
  time: 30,
  setIntervalId: '',
  isAnswerClicked: false,
};

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTDOWN:
      return {
        ...state,
        time: state.time - 1,
      };
    case CLICKED_BUTTON:
      return {
        ...state,
        isAnswerClicked: true,
      };
    default:
      return state;
  }
};

export default timeReducer;
