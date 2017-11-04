const FAST_TIME = 30;
const QUESTIONS_COUNT = 10;
const MAX_ATTEMPTS = 4;
const PENAL_POINT = 2;
const MIN_POINT = 1;
const MAX_POINT = 2;
const MIN_SCORE = (QUESTIONS_COUNT - (MAX_ATTEMPTS - 1) * PENAL_POINT) * MIN_POINT;
const MAX_SCORE = QUESTIONS_COUNT * MAX_POINT;

const countScore = (answers, attemptsLeft) => {
  if (attemptsLeft < 1 || answers.length < QUESTIONS_COUNT) {
    return -1;
  }

  return answers.reduce((points, answer) => {
    if (answer.isCorrect) {
      if (answer.time < FAST_TIME) {
        return points + MAX_POINT;
      } else {
        return points + MIN_POINT;
      }
    } else {
      return points - PENAL_POINT;
    }
  }, 0);
};


export {countScore, QUESTIONS_COUNT, MIN_POINT, MAX_POINT, PENAL_POINT, MIN_SCORE, MAX_SCORE};
