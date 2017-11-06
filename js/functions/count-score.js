import config from '../game-config';

export default (answers, attemptsLeft) => {
  if (attemptsLeft < 1 || answers.length < config.LEVELS_COUNT) {
    return -1;
  }

  return answers.reduce((points, answer) => {
    if (answer.isCorrect) {
      if (answer.time < config.FAST_TIME) {
        return points + config.MAX_POINT;
      } else {
        return points + config.MIN_POINT;
      }
    } else {
      return points - config.PENAL_POINT;
    }
  }, 0);
};
