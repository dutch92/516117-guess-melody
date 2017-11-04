import AbstractView from '../../AbstractView';

export default class ArtistView extends AbstractView {
  constructor(question) {
    super();

    this._question = question;
  }

  _getOptionHTML(option, i) {
    return (
      `<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="${option.artist}"/>
      <label class="main-answer" for="answer-${i}">
        <img class="main-answer-preview" src="${option.image}" alt="${option.artist}" width="134" height="134">
        ${option.artist}
      </label>
    </div>`
    );
  }

  get template() {
    return (
      `<div class="main-wrap">
        <h2 class="title main-title">${this._question.title}</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${this._question.songSrc}"></audio>
            <button class="player-control player-control--play"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          ${this._question.options.map((opt, i) => this._getOptionHTML(opt, i)).join(``)}
        </form>
      </div>`
    );
  }

  bind() {
    this.element.querySelector(`.player-control`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const audioElement = this.element.querySelector(`.player audio`);
      const btn = evt.target;
      btn.classList.toggle(`player-control--pause`);
      btn.classList.toggle(`player-control--play`);
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    });

    this.element.querySelectorAll(`.main-answer-r`).forEach((el) => {
      el.onchange = (evt) => {
        const artistName = evt.target.value;

        this.onAnswer(this._checkAnswer(artistName));
      };
    });
  }

  _checkAnswer(artistName) {
    return artistName === this._question.correctAnswer;
  }

  onPlayerControlClick() {}

  onAnswer() {}
}
