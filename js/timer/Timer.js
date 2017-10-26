import TimerView from '.TimerView';

export default class Timer {
  constructor(seconds) {
    this._seconds = seconds;
    this._view = new TimerView();
  }

  get seconds() {
    return this._seconds;
  }

  tick() {
    this._seconds -= 1;

    this.onTick();

    if (this._seconds <= 0) {
      this.stop();
    }
  }

  start() {
    if (!this.timerInterval) {
      this.timerInterval = setInterval(this.tick, 1000);
    }
  }

  stop() {
    clearInterval(this.timerInterval);
  }

  onTick() {
    this._view.updateTime(this._seconds);
  }
}
