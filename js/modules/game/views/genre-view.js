import AbstractView from '../../abstract-view';

export default class GenreView extends AbstractView {
  constructor(question) {
    super();

    this._question = question;
  }

  get template() {
    return (
      `<div class="main-wrap">
        <h2 class="title">${this._question.question}</h2>
        <form class="genre">
          ${this._question.answers.map((opt, i) => this._getOptionHTML(opt, i)).join(``)}
          <button class="genre-answer-send" disabled type="submit">Ответить</button>
        </form>
      </div>`
    );
  }

  _getOptionHTML(option, i) {
    return (
      `<div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio preload="auto" src="${option.src}"></audio>
          <button class="player-control player-control--play"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="${option.genre}" id="a-${i}">
      <label class="genre-answer-check" for="a-${i}"></label>
    </div>`
    );
  }

  _checkAnswer(answers) {
    return answers.every((ans) => this._question.genre === ans);
  }

  bind() {
    this.element.querySelectorAll(`.player-control`).forEach((el, i, arr) => {
      el.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        arr.forEach((item) => {
          if (item !== evt.target) {
            item.classList.toggle(`player-control--pause`, false);
            item.classList.toggle(`player-control--play`, true);

            const audio = item.previousElementSibling;
            if (audio) {
              audio.pause();
            }
          }
        });
        evt.target.classList.toggle(`player-control--play`);
        evt.target.classList.toggle(`player-control--pause`);

        const audio = evt.target.previousElementSibling;
        if (audio.paused) {
          return audio.play();
        }

        return audio.pause();
      });
    });

    this.element.querySelectorAll(`input[name="answer"]`).forEach((el, i, arr) => {
      el.addEventListener(`change`, () => {
        this.element.querySelector(`button.genre-answer-send`).disabled = !Array.from(arr).some((n) => n.checked);
      });
    });

    this.element.querySelector(`button:not([attr="disabled"]).genre-answer-send`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const answers = Array.from(this.element.querySelectorAll(`input[type="checkbox"]:checked`)).map((el) => el.value);

      this.onSubmit(this._checkAnswer(answers));
    });
  }

  onSubmit() {}
}
