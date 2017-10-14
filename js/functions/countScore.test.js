import assert from 'assert';
import {countScore, QUESTIONS_COUNT, MAX_SCORE, MIN_POINT, MAX_POINT, PENAL_POINT} from './countScore';

describe(`Situation when the player answered less then ${QUESTIONS_COUNT} questions`, () => {
  it(`Should returns -1 if the player answered 3 questions with 1 fail`, () => {
    const answers = [
      {isCorrect: true, time: 7403},
      {isCorrect: false, time: 5230},
      {isCorrect: true, time: 6320}
    ];
    const attemptsLeft = 3;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });

  it(`Should returns -1 if the player didn't answer`, () => {
    const answers = [];
    const attemptsLeft = 4;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });

  it(`Should returns -1 if the player ran out of attempts before last question`, () => {
    const answers = [
      {isCorrect: true, time: 8450},
      {isCorrect: false, time: 3789},
      {isCorrect: true, time: 5673},
      {isCorrect: false, time: 8456},
      {isCorrect: true, time: 9453},
      {isCorrect: false, time: 10234},
      {isCorrect: true, time: 3482},
      {isCorrect: false, time: 9564}
    ];
    const attemptsLeft = 0;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });

  it(`Should returns -1 if the player fails 4 times in a row`, () => {
    const answers = [
      {isCorrect: false, time: 8454},
      {isCorrect: false, time: 9547},
      {isCorrect: false, time: 6464},
      {isCorrect: false, time: 5784}
    ];
    const attemptsLeft = 0;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });
});

describe(`Situation when the player answered all questions`, () => {
  it(`Should returns ${10 * MIN_POINT}, conditions: answered all the questions correctly; not quickly; without fails`, () => {
    const answers = [
      {isCorrect: true, time: 30333},
      {isCorrect: true, time: 30896},
      {isCorrect: true, time: 30500},
      {isCorrect: true, time: 38000},
      {isCorrect: true, time: 36000},
      {isCorrect: true, time: 31234},
      {isCorrect: true, time: 31000},
      {isCorrect: true, time: 31000},
      {isCorrect: true, time: 36546},
      {isCorrect: true, time: 32345}
    ];
    const attemptsLeft = 4;
    assert.equal(countScore(answers, attemptsLeft), 10 * MIN_POINT);
  });

  it(`Should returns ${7 * MIN_POINT - 3 * PENAL_POINT}, conditions: 7 correctly; 3 fails; all aren't quickly`, () => {
    const answers = [
      {isCorrect: true, time: 30333},
      {isCorrect: true, time: 30896},
      {isCorrect: false, time: 30500},
      {isCorrect: true, time: 38000},
      {isCorrect: true, time: 36000},
      {isCorrect: true, time: 31234},
      {isCorrect: false, time: 31000},
      {isCorrect: true, time: 31000},
      {isCorrect: true, time: 36546},
      {isCorrect: false, time: 32345}
    ];
    const attemptsLeft = 1;
    assert.equal(countScore(answers, attemptsLeft), 7 * MIN_POINT - 3 * PENAL_POINT);
  });

  it(`Should returns -1, when the user answered all questions with 4 fails & failed last question`, () => {
    const answers = [
      {isCorrect: true, time: 30333},
      {isCorrect: true, time: 20896},
      {isCorrect: false, time: 5500},
      {isCorrect: true, time: 18000},
      {isCorrect: false, time: 36000},
      {isCorrect: true, time: 31234},
      {isCorrect: false, time: 31000},
      {isCorrect: true, time: 7000},
      {isCorrect: true, time: 36546},
      {isCorrect: false, time: 8345}
    ];
    const attemptsLeft = 0;
    assert.equal(countScore(answers, attemptsLeft), -1);
  });

  it(`Should returns ${MAX_SCORE}, the user answered all questions quickly without fails`, () => {
    const answers = [
      {isCorrect: true, time: 3333},
      {isCorrect: true, time: 5896},
      {isCorrect: true, time: 5500},
      {isCorrect: true, time: 8000},
      {isCorrect: true, time: 6000},
      {isCorrect: true, time: 4234},
      {isCorrect: true, time: 5000},
      {isCorrect: true, time: 7000},
      {isCorrect: true, time: 6546},
      {isCorrect: true, time: 8345}
    ];
    const attemptsLeft = 1;
    assert.equal(countScore(answers, attemptsLeft), MAX_SCORE);
  });

  it(`Should returns ${3 * MAX_POINT + 5 * MIN_POINT - 2 * PENAL_POINT}, 3 quickly; 5 not quickly; 2 fails`, () => {
    const answers = [
      {isCorrect: true, time: 3333},
      {isCorrect: false, time: 5896},
      {isCorrect: true, time: 35500},
      {isCorrect: true, time: 8000},
      {isCorrect: true, time: 36000},
      {isCorrect: true, time: 4234},
      {isCorrect: true, time: 35000},
      {isCorrect: true, time: 37000},
      {isCorrect: true, time: 36546},
      {isCorrect: false, time: 8345}
    ];
    const attemptsLeft = 1;
    assert.equal(countScore(answers, attemptsLeft), 3 * MAX_POINT + 5 * MIN_POINT - 2 * PENAL_POINT);
  });
});
