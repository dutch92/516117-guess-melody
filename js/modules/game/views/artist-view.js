import AbstractView from '../../abstract-view';

export default class ArtistView extends AbstractView {
  constructor(question) {
    super();

    this._question = question;
  }

  get template() {
    return (
      `<div class="main-wrap">
        <h2 class="title main-title">${this._question.question}</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${this._question.src}"></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          ${this._question.answers.map((opt, i) => this._getOptionHTML(opt, i)).join(``)}
        </form>
      </div>`
    );
  }

  startPlay() {
    const audioElement = this.element.querySelector(`.player audio`);
    audioElement.play();
  }

  _checkAnswer(artistName) {
    const answer = this._question.answers.find((ans) => ans.title === artistName);
    if (answer) {
      return answer.isCorrect;
    }

    return false;
  }

  _getOptionHTML(option, i) {
    return (
      `<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="${option.title}"/>
      <label class="main-answer" for="answer-${i}">
        <img class="main-answer-preview" src="${option.image.url}" alt="${option.title}" width="134" height="134">
        ${option.title}
      </label>
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
        return audioElement.play();
      }

      audioElement.pause();
    });

    this.element.querySelectorAll(`.main-answer-r`).forEach((el) => {
      el.onchange = (evt) => {
        const artistName = evt.target.value;

        this.onAnswer(this._checkAnswer(artistName));
      };
    });
  }

  onAnswer() {}
}
