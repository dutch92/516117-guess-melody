import AbstractView from '../abstract-view';
import ArtistView from './views/artist-view';
import GenreView from './views/genre-view';
import {formatTime, getDashProps} from '../../utils';
import config from '../../game-config';

export default class GameView extends AbstractView {
  get template() {
    return (
      `<section class="main main--level">
        <div class="time-container"></div>
        <div class="main-mistakes"></div>
        <div class="game-container"></div>
       </section>`
    );
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
        this._questionTypeView.onAnswer = this.onAnswer;
        break;
      case `genre`:
        this._questionTypeView = new GenreView(question);
        this._questionTypeView.onSubmit = this.onAnswer;
        break;
    }
    this._gameContainerElement.appendChild(this._questionTypeView.element);

    if (question.type === `artist`) {
      this._questionTypeView.startPlay();
    }
  }

  _getMistakesHTML(mistakesCount) {
    const mistakeHTML = `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;

    return new Array(mistakesCount).fill(mistakeHTML).join(``);
  }

  _getTimerHTML(time) {
    const {min, sec} = formatTime(time);
    const circleData = getDashProps(time);

    return (
      `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          stroke-dasharray="${circleData.dashArrayValue}"
          stroke-dashoffset="${circleData.dashOffsetValue}"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      </svg>
      <div class="timer-value${time < config.WARNING_TIME ? ` timer-value--finished` : ``}">
        <span class="timer-value-mins">${min}</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">${sec}</span>
      </div>`
    );
  }

  bind() {
    this._timeContainerElement = this.element.querySelector(`.time-container`);
    this._gameContainerElement = this.element.querySelector(`.game-container`);
    this._mistakesContainerElement = this.element.querySelector(`.main-mistakes`);
  }

  onAnswer() {

  }
}
