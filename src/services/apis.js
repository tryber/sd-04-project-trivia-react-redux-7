// const crypto = require('crypto');
// const hash = crypto.createHash('md5').update(email).digest('hex');

// const hash = crypto.createHash('md5').update(data).digest('hex');
// console.log(hash);
// www.gravatar.com/avatar/HASH-GERADA
// export const getAvatar = (email) => {
// fetch('www.gravatar.com/avatar/hash');
// https://opentdb.com/api_token.php?command=request
export const getToken = () => {
  return fetch('https://opentdb.com/api_token.php?command=request').then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
};
// response.json().then((data) => (response.ok ? promises.resolve(data) : promises.reject(data))),

// https://opentdb.com/api.php?amount=${quantidade-de-perguntas-retornadas}&token=${seu-token-aqui}
export const getQuestions = (token) => {
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
};
