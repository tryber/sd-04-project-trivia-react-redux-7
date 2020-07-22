import { getQuestions, getToken } from '../services/apis';

export const REQUEST_API_TOKEN = 'REQUEST_API_TOKEN';
export const REQUEST_API_QUESTIONS = 'REQUEST_API_QUESTIONS';
export const REQUEST_API_SUCCESS_TOKEN = 'REQUEST_API_SUCCESS_TOKEN';
export const REQUEST_API_SUCCESS_QUESTIONS = 'REQUEST_API_SUCCESS_QUESTIONS';
export const REQUEST_API_ERROR_TOKEN = 'REQUEST_API_ERROR_TOKEN';
export const REQUEST_API_ERROR_QUESTIONS = 'REQUEST_API_ERROR_QUESTIONS';
export const COUNTDOWN = 'COUNTDOWN';
export const PLAYER_INFO = 'PLAYER_INFO';
export const ADD_ASSERTIONS = 'ADD_ASSERTIONS';
export const CLIKED_BUTTON = 'CLICKED_BUTTON';
const crypto = require('crypto');

export const countdown = () => ({
  type: COUNTDOWN,
});

export const playerInfo = (email, name) => {
  const hash = crypto.createHash('md5').update(email).digest('hex');
  return {
    type: PLAYER_INFO,
    url: `http://www.gravatar.com/avatar/${hash}`,
    name,
  };
};

const requestApiToken = () => ({
  type: REQUEST_API_TOKEN,
});

const requestApiQuestions = () => ({
  type: REQUEST_API_QUESTIONS,
});

const requestApiSucccessToken = (token) => ({
  type: REQUEST_API_SUCCESS_TOKEN,
  token,
});

const requestApiSucccessQuestions = (questions) => ({
  type: REQUEST_API_SUCCESS_QUESTIONS,
  questions,
});

const requestApiErrorToken = (error) => ({
  type: REQUEST_API_ERROR_TOKEN,
  error,
});

const requestApiErrorQuestions = (error) => ({
  type: REQUEST_API_ERROR_QUESTIONS,
  error,
});

export function requestQuestions(token) {
  return (dispatch) => {
    // thunk
    dispatch(requestApiQuestions());

    return getQuestions(token).then(
      (data) => dispatch(requestApiSucccessQuestions(data.results)),
      (error) => dispatch(requestApiErrorQuestions(error)),
    );
  };
}

export function requestToken() {
  return (dispatch) => {
    dispatch(requestApiToken());
    return getToken().then(
      (data) => dispatch(requestApiSucccessToken(data.token)),
      (error) => dispatch(requestApiErrorToken(error)),
    );
  };
}

export const addAssertions = () => ({
  type: ADD_ASSERTIONS,
});

export const clickedButton = () => ({
  type: CLIKED_BUTTON,
});
