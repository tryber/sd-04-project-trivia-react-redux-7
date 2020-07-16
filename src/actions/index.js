import { getAvatar, getQuestions } from '../services/apis';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS_AVATAR = 'REQUEST_API_SUCCESS_AVATAR';
export const REQUEST_API_SUCCESS_QUESTIONS = 'REQUEST_API_SUCCESS_QUESTIONS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

const requestApi = () => ({
  type: REQUEST_API,
});

const requestApiSucccessAvatar = (avatar) => {
  console.log(avatar);
  return {
    type: REQUEST_API_SUCCESS_AVATAR,
    avatar, // data: data
  };
};
const requestApiSucccessQuestions = (questions) => ({
  type: REQUEST_API_SUCCESS_QUESTIONS,
  questions, // data: data
});

const requestApiError = (error) => ({
  type: REQUEST_API_ERROR,
  error,
});
// dispatch(handleInput(event.target.value))
// export const handleInput = (algo) => ({
//   type: 'ALGUMA_COISA',
//   algo,
// })

export function requestAvatar(email) {
  return (dispatch) => {
    // thunk
    dispatch(requestApi());

    return getAvatar(email).then((data) => {
      console.log(data);
      return dispatch(requestApiSucccessAvatar(data));
    });
  };
}

export function requestQuestions(token) {
  return (dispatch) => {
    // thunk
    dispatch(requestApi());

    return getQuestions(token).then(
      (data) => dispatch(requestApiSucccessQuestions(data)),
      (error) => dispatch(requestApiError(error)),
    );
  };
}
