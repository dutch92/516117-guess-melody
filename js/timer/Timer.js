import TimerView from './TimerView';
import getTimer from '../functions/timer';

export default class Timer {
  constructor(seconds) {
    this.view = new TimerView();
    this.timer = getTimer(seconds);
  }

  start() {
    if (!this.timerInterval) {
      this.timerInterval = setInterval(() => {
        this.timer.tick();
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.timerInterval);
  }

  onTick() {
    this.view.updateTime(this.timer.value);
  }
}
