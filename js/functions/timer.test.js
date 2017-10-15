import assert from 'assert';
import {TIMEOUT_MESSAGE, getTimer} from './timer';

describe(`Function get timer`, () => {
  it(`should returns message that time is over`, () => {
    assert.equal(getTimer(0).tick(), TIMEOUT_MESSAGE);
  });

  it(`should checks timer reduced time per second`, () => {
    assert.equal(getTimer(36).tick().value, 35);
    assert.equal(getTimer(235).tick().value, 234);
  });
});
