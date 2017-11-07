const LEVELS_COUNT = 10;
const MAX_ATTEMPTS = 4;
const MIN_POINT = 1;
const MAX_POINT = 2;
const PENAL_POINT = 2;

const GameConfig = {
  FAST_TIME: 30,
  GAME_TIME: 300,
  WARNING_TIME: 30,
  LEVELS_COUNT,
  MAX_ATTEMPTS,
  PENAL_POINT,
  MIN_POINT,
  MAX_POINT,
  MAX_SCORE: LEVELS_COUNT * MAX_POINT,
  MIN_SCORE: (LEVELS_COUNT - (MAX_ATTEMPTS - 1) * PENAL_POINT) * MIN_POINT,
  SERVER_URL: `https://es.dump.academy/guess-melody`,
  USER_NAME: `516117`,
  CIRCLE_RADIUS: 370
};

export default GameConfig;
