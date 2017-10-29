import Observer from '../Observer';
import getTimer from '../../functions/timer';

export default class TimerModel extends Observer {
  constructor(time) {
    super();

    this.initSec = time;
    this.timer = getTimer(time);
  }

  tick() {
    if (this.timer.value <= 0) {
      this.fire(`done`);
    }

    this.timer.tick();

    this.fire(`change`);
  }

  reset() {
    this.timer = getTimer(this.initSec);
    this.fire(`change`);
  }
}
