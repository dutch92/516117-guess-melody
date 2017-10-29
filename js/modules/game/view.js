import AbstractView from '../AbstractView';
import ArtistView from './views/artist';
import GenreView from './views/genre';

export default class GameView extends AbstractView {
  constructor(model) {
    super();

    this._model = model;
  }

  get template() {
    return (
      `<section class="main main--level">
        <div>
          <div class="time-container"></div>
          <div class="main-mistakes">${this._getMistakesHTML()}</div>
        </div>
        <div class="game-container"></div>
       </section>`
    );
  }

  _getMistakesHTML() {
    const mistakeHTML = `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;

    return (
      `<div class="main-mistakes">
        ${new Array(this._model.mistakesCount).fill(mistakeHTML).join(``)}
      </div>`
    );
  }

  bind() {
    this._gameContainerElement = this.element.querySelector(`.game-container`);
    this._mistakesContainerElement = this.element.querySelector(`.main-mistakes`);
  }

  updateMistakes() {
    this._mistakesContainerElement.innerHTML = this._getMistakesHTML();
  }

  updateGameContainer() {
    const gameScreenElement = this._gameContainerElement.querySelector(`.main-wrap`);
    if (gameScreenElement) {
      this._gameContainerElement.removeChild(gameScreenElement);
    }
    switch (this._model.currentQuestion.type) {
      case `artist`:
        this._questionTypeView = new ArtistView(this._model.currentQuestion);
        this._questionTypeView.onChange = this.onAnswer;
        break;
      case `genre`:
        this._questionTypeView = new GenreView(this._model.currentQuestion);
        this._questionTypeView.onSubmit = this.onAnswer;
        break;
    }
    this._gameContainerElement.appendChild(this._questionTypeView.element);
  }

  onAnswer() {

  }
}
