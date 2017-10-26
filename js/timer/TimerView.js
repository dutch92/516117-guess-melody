import settings from '../data/settings';
import {formatTime} from '../utils';
import AbstractView from '../views/AbstractView';

export default class TimerView extends AbstractView {
  constructor(seconds) {
    super();


  }
  get template() {
    return (
      `<div class="timer-value">
        <span class="timer-value-mins"></span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs"></span>
      </div>`
    );
  }

  updateTime(seconds) {
    const time = formatTime(seconds);

    this.element.querySelector(`.timer-value-mins`).innerText = time.min;
    this.element.querySelector(`.timer-value-secs`).innerText = time.sec;

    if (seconds <= settings.WARNING_TIME) {
      this.element.querySelector(`.timer-value`).classList.add(`timer-value--time-danger`);
    }
  }
}
