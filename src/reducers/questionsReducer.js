import {
  REQUEST_API,
  REQUEST_API_SUCCESS_QUESTIONS,
  REQUEST_API_ERROR_QUESTIONS,
} from '../actions';

const INICIAL_STATE = {
  dataQuestions: [],
  isLoading: false,
  errorQuestions: '',
};

const questionsReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
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
    default:
      return state;
  }
};

export default questionsReducer;
