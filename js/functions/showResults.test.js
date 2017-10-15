import assert from 'assert';
import {MESSAGES, showResults} from './showResults';

describe(`Show results function when the user lost`, () => {
  it(`should returns '${MESSAGES.overTime}', if time is over`, () => {
    const allResults = [8, 4, 2, 13, 19, 20];
    const userResult = {
      score: 4,
      attemptsLeft: 3,
      time: 0
    };
    assert.equal(showResults(allResults, userResult), MESSAGES.overTime);
  });

  it(`should returns '${MESSAGES.attemptsOut}', attempts are over`, () => {
    const allResults = [8, 4, 2, 13, 19, 20];
    const userResult = {
      score: 6,
      attemptsLeft: 0,
      time: 23634
    };
    assert.equal(showResults(allResults, userResult), MESSAGES.attemptsOut);
  });
});

describe(`Show results function when the user wins`, () => {
  it(`should returns the winning phrase, when the user wasn't first or last`, () => {
    const allResults = [8, 14, 16, 17, 19, 20];
    const userResult = {
      score: 15,
      attemptsLeft: 2,
      time: 20245
    };
    assert.equal(showResults(allResults, userResult), MESSAGES.win(5, 7, 29));
  });

  it(`should returns the winning phrase, when the user took first place`, () => {
    const allResults = [4, 1, 3, 8, 12, 5, 3, 9, 20, 18, 20, 13, 17, 15, 2];
    const userResult = {
      score: 20,
      attemptsLeft: 4,
      time: 603
    };
    assert.equal(showResults(allResults, userResult), MESSAGES.win(1, 16, 94));
  });

  it(`should returns the winning phrase, when the user took last place`, () => {
    const allResults = [7, 3, 9, 10, 20, 17];
    const userResult = {
      score: 2,
      attemptsLeft: 1,
      time: 3300
    };
    assert.equal(showResults(allResults, userResult), MESSAGES.win(7, 7, 0));
  });
});
