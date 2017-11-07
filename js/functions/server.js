import config from '../game-config';

export const loadQuestions = () => {
  return fetch(`${config.SERVER_URL}/questions`).then((res) => res.json());
};

export const loadResults = () => {
  return fetch(`${config.SERVER_URL}/stats/${config.USER_NAME}`).then((res) => {
    if (res.status === 200) {
      return res.json();
    }

    return new Promise((ok) => ok([]));
  });
};

export const sendResult = (data) => {
  const req = {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': `application/json`
    },
    method: `POST`
  };

  return fetch(`${config.SERVER_URL}/stats/${config.USER_NAME}`, req);
};
