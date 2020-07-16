import {
  REQUEST_API,
  REQUEST_API_SUCCESS_AVATAR,
  REQUEST_API_SUCCESS_QUESTIONS,
  REQUEST_API_ERROR,
} from '../actions';

const INICIAL_STATE = {
  dataAvatar: {},
  dataQuestions: {},
  isLoading: false,
  error: '',
};

const requestsReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCCESS_AVATAR:
      return {
        ...state,
        dataAvatar: action.avatar ? action.avatar.url : 'aaaaaa',
        isLoading: false,
      };
    case REQUEST_API_SUCCESS_QUESTIONS:
      return {
        ...state,
        dataQuestions: action.questions,
        isLoading: false,
      };
    case REQUEST_API_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default requestsReducer;
