import settings from '../data/settings.js';
import questions from '../data/questions.js';
import render from '../render.js';
import getArtistScreen from '../screens/artist/main.js';
import getGenreScreen from '../screens/genre/main.js';
import getResultScreen from '../screens/result/main.js';

const renderQuestionType = (state) => {
  const question = questions[state.level];

  if (question.type === `artist`) {
    render(getArtistScreen(state));
  } else if (question.type === `genre`) {
    render(getGenreScreen(state));
  }
};

const checkState = (state) => {
  if (state.time === 0 || state.fails === settings.MAX_ATTEMPTS || state.level === settings.QUESTIONS_COUNT) {
    render(getResultScreen(state));
  } else {
    renderQuestionType(state);
  }
};

const checkAnswer = (state, answer) => {
  let isCorrect = false;
  const question = questions[state.level];
  if (question.type === `artist` && question.correctAnswer === answer) {
    isCorrect = true;
  }
  if (question.type === `genre` && answer.every((o) => question.correctAnswer.includes(o))) {
    isCorrect = true;
  }
  if (!isCorrect) {
    state.fails++;
  }

  state.answers.push({
    isCorrect,
    time: 30000
  });
  state.level++;
};

export {checkState, checkAnswer};
