import AbstractView from '../abstract-view';
import {getTitle, getStat, getComparison} from './helpers';

export default class ResultView extends AbstractView {
  constructor(gameResult, stats) {
    super();

    this.gameResult = gameResult;
    this.stats = stats.map((s) => s.score);
  }

  get template() {
    return (
      `<section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <h2 class="title">${getTitle(this.gameResult)}</h2>
        <div class="main-stat">${getStat(this.gameResult)}</div>
        ${getComparison(this.gameResult, this.stats)}
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
      </section>`
    );
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      this.onReplayClick();
    });
  }

  onReplayClick() {

  }
}
