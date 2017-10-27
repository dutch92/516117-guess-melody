import assert from 'assert';
import getTimer from './timer';

describe(`Function get timer`, () => {
  it(`should returns false if time is over`, () => {
    assert.equal(getTimer(0).tick(), false);
  });

  it(`should checks timer reduced time per second`, () => {
    const timer = getTimer(36);

    timer.tick();
    assert.equal(timer.value, 35);

    timer.tick();
    assert.equal(timer.value, 34);
  });
});
