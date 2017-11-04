import config from '../gameConfig';

export const loadQuestions = (path = config.SERVER_URL) => {
  return fetch(`${path}/questions`).then((res) => {
    return res.json();
  });
};

export const loadResults = (path = config.SERVER_URL, name = config.USER_NAME) => {
  return fetch(`${path}/stats/${name}`).then((res) => {
    if (res.status === 200) {
      return res.json();
    }

    return new Promise((ok) => ok([]));
  });
};

export const sendResult = (data, path = config.SERVER_URL, name = config.USER_NAME) => {
  const req = {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': `application/json`
    },
    method: `POST`
  };

  return fetch(`${path}/stats/${name}`, req);
};
