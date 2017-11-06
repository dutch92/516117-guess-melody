import assert from 'assert';
import {countScore, QUESTIONS_COUNT, MAX_SCORE, MIN_POINT, MAX_POINT, PENAL_POINT} from './count-score';

describe(`Situation when the player answered less then ${QUESTIONS_COUNT} questions`, () => {
  it(`Should return -1 if the player answered 3 questions with 1 fail`, () => {
    const answers = [
      {isCorrect: true, time: 7},
      {isCorrect: false, time: 5},
      {isCorrect: true, time: 6}
    ];
    const attemptsLeft = 3;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });

  it(`Should return -1 if the player didn't answer`, () => {
    const answers = [];
    const attemptsLeft = 4;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });

  it(`Should return -1 if the player ran out of attempts before last question`, () => {
    const answers = [
      {isCorrect: true, time: 8},
      {isCorrect: false, time: 3},
      {isCorrect: true, time: 5},
      {isCorrect: false, time: 8},
      {isCorrect: true, time: 9},
      {isCorrect: false, time: 10},
      {isCorrect: true, time: 3},
      {isCorrect: false, time: 9}
    ];
    const attemptsLeft = 0;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });

  it(`Should return -1 if the player fails 4 times in a row`, () => {
    const answers = [
      {isCorrect: false, time: 8},
      {isCorrect: false, time: 9},
      {isCorrect: false, time: 6},
      {isCorrect: false, time: 5}
    ];
    const attemptsLeft = 0;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });
});

describe(`Situation when the player answered all questions`, () => {
  it(`Should return ${10 * MIN_POINT}, conditions: answered all the questions correctly; not quickly; without fails`, () => {
    const answers = [
      {isCorrect: true, time: 31},
      {isCorrect: true, time: 32},
      {isCorrect: true, time: 33},
      {isCorrect: true, time: 38},
      {isCorrect: true, time: 36},
      {isCorrect: true, time: 31},
      {isCorrect: true, time: 31},
      {isCorrect: true, time: 31},
      {isCorrect: true, time: 36},
      {isCorrect: true, time: 32}
    ];
    const attemptsLeft = 4;
    assert.equal(countScore(answers, attemptsLeft), 10 * MIN_POINT);
  });

  it(`Should return ${7 * MIN_POINT - 3 * PENAL_POINT}, conditions: 7 correctly; 3 fails; all aren't quickly`, () => {
    const answers = [
      {isCorrect: true, time: 31},
      {isCorrect: true, time: 32},
      {isCorrect: false, time: 33},
      {isCorrect: true, time: 38},
      {isCorrect: true, time: 36},
      {isCorrect: true, time: 31},
      {isCorrect: false, time: 31},
      {isCorrect: true, time: 31},
      {isCorrect: true, time: 36},
      {isCorrect: false, time: 32}
    ];
    const attemptsLeft = 1;
    assert.equal(countScore(answers, attemptsLeft), 7 * MIN_POINT - 3 * PENAL_POINT);
  });

  it(`Should return -1, when the user answered all questions with 4 fails & failed last question`, () => {
    const answers = [
      {isCorrect: true, time: 31},
      {isCorrect: true, time: 20},
      {isCorrect: false, time: 5},
      {isCorrect: true, time: 18},
      {isCorrect: false, time: 36},
      {isCorrect: true, time: 31},
      {isCorrect: false, time: 31},
      {isCorrect: true, time: 7},
      {isCorrect: true, time: 36},
      {isCorrect: false, time: 8}
    ];
    const attemptsLeft = 0;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });

  it(`Should return ${MAX_SCORE}, the user answered all questions quickly without fails`, () => {
    const answers = [
      {isCorrect: true, time: 3},
      {isCorrect: true, time: 5},
      {isCorrect: true, time: 5},
      {isCorrect: true, time: 8},
      {isCorrect: true, time: 6},
      {isCorrect: true, time: 4},
      {isCorrect: true, time: 5},
      {isCorrect: true, time: 7},
      {isCorrect: true, time: 6},
      {isCorrect: true, time: 8}
    ];
    const attemptsLeft = 1;
    assert.equal(countScore(answers, attemptsLeft), MAX_SCORE);
  });

  it(`Should return ${3 * MAX_POINT + 5 * MIN_POINT - 2 * PENAL_POINT}, 3 quickly; 5 not quickly; 2 fails`, () => {
    const answers = [
      {isCorrect: true, time: 3},
      {isCorrect: false, time: 5},
      {isCorrect: true, time: 35},
      {isCorrect: true, time: 8},
      {isCorrect: true, time: 36},
      {isCorrect: true, time: 4},
      {isCorrect: true, time: 35},
      {isCorrect: true, time: 37},
      {isCorrect: true, time: 36},
      {isCorrect: false, time: 8}
    ];
    const attemptsLeft = 1;
    assert.equal(countScore(answers, attemptsLeft), 3 * MAX_POINT + 5 * MIN_POINT - 2 * PENAL_POINT);
  });
});
