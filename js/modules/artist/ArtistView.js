import AbstractView from '../AbstractView';
import TimerView from '../../timer/TimerView';
import {getMistakeTmpl} from '../components';

const getOptionTmpl = (option, i) => {
  return (
    `<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="${option.artist}"/>
      <label class="main-answer" for="answer-${i}">
        <img class="main-answer-preview" src="${option.image}" alt="${option.artist}" width="134" height="134">
        ${option.artist}
      </label>
    </div>`
  );
};

export default class ArtistView extends AbstractView {
  constructor(fails, question) {
    super();
    this.fails = fails;
    this.question = question;
    this.timerView = new TimerView();
  }
  get template() {
    return `<section class="main main--level main--level-artist">
      ${this.timerView.template}
      ${getMistakeTmpl(this.fails)}
      <div class="main-wrap">
        <h2 class="title main-title">${this.question.title}</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${this.question.songSrc}"></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          ${this.question.options.map((opt, i) => getOptionTmpl(opt, i)).join(``)}
        </form>
      </div>
    </section>`;
  }

  bind() {
    const playButton = this.element.querySelector(`.song-play`);
    const answersList = this.element.querySelector(`.main-list`);

    playButton.addEventListener(`click`, () => this.onPlayButtonClick(playButton));

    answersList.addEventListener(`click`, (evt) => this.onAnswersListClick(evt));
  }

  updateTime(seconds) {
    this.timerView.updateTime(seconds);
  }

  onPlay(playButton) {
    playButton.classList.toggle(`player-control--pause`);

    if (playButton.classList.contains(`player-control--pause`)) {
      playButton.previousElementSibling.play();
      return;
    }

    playButton.previousElementSibling.pause();
  }

  onAnswersListClick(evt) {
    if (evt.target.closest(`.main-answer-r`)) {
      const answer = evt.target.closest(`.main-answer-r`).value;

      this.onSendAnswer(answer);
    }
  }

  onSendAnswer() {

  }
}
