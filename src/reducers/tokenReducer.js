import { REQUEST_API_TOKEN, REQUEST_API_SUCCESS_TOKEN, REQUEST_API_ERROR_TOKEN } from '../actions';

const INICIAL_STATE = {
  dataToken: '',
  isLoading: false,
  errorToken: '',
};

const tokenReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API_TOKEN:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCCESS_TOKEN:
      return {
        ...state,
        dataToken: action.token,
        isLoading: false,
      };
    case REQUEST_API_ERROR_TOKEN:
      return {
        ...state,
        errorToken: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default tokenReducer;
