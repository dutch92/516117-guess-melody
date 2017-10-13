import assert from 'assert';

// const FAST_TIME = 30000;
const QUESTIONS_COUNT = 10;
// const MAX_ATTEMPTS = 4;
// const PENAL_POINT = 2;
// const MIN_POINT = 1;
// const MAX_POINT = 2;
// const MIN_SCORE = (QUESTIONS_COUNT - (MAX_ATTEMPTS - 1) * PENAL_POINT) * MIN_POINT;
// const MAX_SCORE = QUESTIONS_COUNT * MAX_POINT;


const countScore = (answers, attemptsLeft) => {
  let l = answers.length + attemptsLeft;
  l = -1;
  return l;
};

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
  it(`should returns 10, under the following conditions: answered all the questions correctly; not quickly; without fails`, () => {
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
    assert.equal(countScore(answers, attemptsLeft), 10);
  });
});
