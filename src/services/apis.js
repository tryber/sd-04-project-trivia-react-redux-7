// const data = 'ronanf.sk@gmail.com';
const crypto = require('crypto');

// const hash = crypto.createHash('md5').update(data).digest('hex');
// console.log(hash);
// www.gravatar.com/avatar/HASH-GERADA
export const getAvatar = (email) => {
  console.log(email);
  const hash = crypto.createHash('md5').update(email).digest('hex');
  console.log(hash);
  return fetch(`https://www.gravatar.com/avatar/${hash}`)
    .then((response) => {
      console.log(response.json());
      return response;
    })
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((error) => console.log(error));
};
// https://opentdb.com/api.php?amount=${quantidade-de-perguntas-retornadas}&token=${seu-token-aqui}
export const getQuestions = (token) => {
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
};
