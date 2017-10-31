import AbstractView from '../AbstractView';
import ArtistView from './views/artist';
import GenreView from './views/genre';
import TimerView from './views/timer';
import {formatTime} from '../../utils';

export default class GameView extends AbstractView {
  get template() {
    return (
      `<section class="main main--level">
        <div>
          <div class="time-container"></div>
          <div class="main-mistakes"></div>
        </div>
        <div class="game-container"></div>
       </section>`
    );
  }

  bind() {
    this._timeContainerElement = this.element.querySelector(`.time-container`);
    this._gameContainerElement = this.element.querySelector(`.game-container`);
    this._mistakesContainerElement = this.element.querySelector(`.main-mistakes`);
  }

  updateMistakes(mistakesCount) {
    this._mistakesContainerElement.innerHTML = this._getMistakesHTML(mistakesCount);
  }

  updateTimer(time) {
    this._timeContainerElement.innerHTML = this._getTimerHTML(time);
  }

  updateGameContainer(question) {
    const gameScreenElement = this._gameContainerElement.querySelector(`.main-wrap`);
    if (gameScreenElement) {
      this._gameContainerElement.removeChild(gameScreenElement);
    }
    switch (question.type) {
      case `artist`:
        this._questionTypeView = new ArtistView(question);
        this._questionTypeView.onChange = this.onAnswer;
        break;
      case `genre`:
        this._questionTypeView = new GenreView(question);
        this._questionTypeView.onSubmit = this.onAnswer;
        break;
    }
    this._gameContainerElement.appendChild(this._questionTypeView.element);
  }

  _getMistakesHTML(mistakesCount) {
    const mistakeHTML = `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;

    return (
      `<div class="main-mistakes">
        ${new Array(mistakesCount).fill(mistakeHTML).join(``)}
      </div>`
    );
  }

  _getTimerHTML(time) {
    const {min, sec} = formatTime(time);

    return (
      `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      </svg>
      <div class="timer-value${time < config.WARNING_TIME ? ` timer-value--time-danger` : ``}">
        <span class="timer-value-mins">${min}</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">${sec}</span>
      </div>`
    );
  }

  onAnswer() {

  }
}
