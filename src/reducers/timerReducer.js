import { COUNTDOWN, CLICKED_BUTTON, NEXT_QUESTION } from '../actions';

const INITIAL_STATE = {
  time: 30,
  setIntervalId: '',
  isAnswerClicked: false,
  correctBorder: { border: '' },
  incorrectBorder: { border: '' },
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
        correctBorder: { border: '3px solid rgb(6, 240, 15)' },
        incorrectBorder: { border: '3px solid rgb(255, 0, 0)' },
      };
    case NEXT_QUESTION:
      return {
        ...state,
        isAnswerClicked: false,
        time: 30,
        correctBorder: { border: '' },
        incorrectBorder: { border: '' },
      };
    default:
      return state;
  }
};

export default timeReducer;
