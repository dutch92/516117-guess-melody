import settings from './settings.js';

export default {
  time: settings.GAME_TIME,
  level: 0,
  score: 0,
  fails: 0,
  answers: [],
  reset() {
    this.time = settings.GAME_TIME;
    this.level = 0;
    this.score = 0;
    this.fails = 0;
    this.answers = [];
  }
};
