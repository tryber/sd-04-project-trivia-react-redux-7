import {
  REQUEST_API_QUESTIONS,
  REQUEST_API_SUCCESS_QUESTIONS,
  REQUEST_API_ERROR_QUESTIONS,
  CHANGE_QUESTION_INDEX,
  RESET_STATE_TO_RESTART,
} from '../actions';

const INICIAL_STATE = {
  dataQuestions: [],
  isLoading: true,
  errorQuestions: '',
  questionIndex: 0,
};

const questionsReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API_QUESTIONS:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCCESS_QUESTIONS:
      return {
        ...state,
        dataQuestions: action.questions,
        isLoading: false,
      };
    case REQUEST_API_ERROR_QUESTIONS:
      return {
        ...state,
        errorQuestions: action.error,
        isLoading: false,
      };
    case CHANGE_QUESTION_INDEX:
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      };
    case RESET_STATE_TO_RESTART:
      return {
        ...INICIAL_STATE,
      };
    default:
      return state;
  }
};

export default questionsReducer;
