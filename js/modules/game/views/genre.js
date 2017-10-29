import AbstractView from '../../AbstractView';

export default class GameGenreView extends AbstractView {
  constructor(question) {
    super();

    this._question = question;
  }

  static _getOptionHTML(option, i) {
    return (
      `<div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio src="${option.songSrc}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="${option.name}" id="a-${i}">
      <label class="genre-answer-check" for="a-${i}"></label>
    </div>`
    );
  }


  get template() {
    return (
      `<div class="main-wrap">
        <h2 class="title">${this._question.title}</h2>
        <form class="genre">
          ${this._question.options.map((opt, i) => this._getOptionHTML(opt, i)).join(``)}
          <button class="genre-answer-send" disabled type="submit">Ответить</button>
        </form>
      </div>`
    );
  }

  bind() {
    this.element.addEventListener(`click`, (evt) => {
      const btn = evt.target;
      if (btn.classList.contains(`player-control`)) {
        evt.preventDefault();
        const playerEl = btn.closest(`.player`);
        const closestAudioEl = playerEl.querySelector(`audio`);
        btn.classList.toggle(`player-control--pause`);
        btn.classList.toggle(`player-control--play`);
        if (closestAudioEl.paused) {
          closestAudioEl.play();
        } else {
          closestAudioEl.pause();
        }
      }
    });

    this.element.querySelectorAll(`input[name="answer"]`).forEach((el, i, arr) => {
      el.onchange = () => {
        this.element.querySelector(`button.genre-answer-send`).disabled = !Array.from(arr).some((n) => n.checked);
      };
    });

    this.element.querySelector(`button:not([attr="disabled"]).genre-answer-send`).onclick = (evt) => {
      evt.preventDefault();

      const answers = Array.from(this.element.querySelectorAll(`input[type="checkbox"]:checked`)).map((el) => el.value);

      this.onSubmit(this._checkAnswer(answers));
    };
  }

  _checkAnswer(answers) {
    return answers.every((ans) => this._question.correctAnswer.includes(ans));
  }

  onSubmit() {}
}
