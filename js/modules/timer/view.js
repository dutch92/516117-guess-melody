import AbstractView from '../AbstractView';
import {formatTime} from '../../utils';
import config from '../../gameConfig';

export default class View extends AbstractView {
  constructor(time) {
    super();

    this.time = time;
  }

  get template() {
    const {min, sec} = formatTime(this.time);

    return (
      `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      </svg>
      <div class="timer-value${this.time < config.WARNING_TIME ? ` timer-value--time-danger` : ``}">
        <span class="timer-value-mins">${min}</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">${sec}</span>
      </div>`
    );
  }
}
