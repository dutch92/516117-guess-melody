import AbstractView from '../abstract-view';
import {getPluralForm} from '../../utils';
import config from '../../game-config';

const Forms = {
  count: [`раз`, `раза`, `раз`],
  minutes: [`минуту`, `минуты`, `минут`],
  seconds: [`секунду`, `секунды`, `секунд`]
};

export default class WelcomeView extends AbstractView {
  get template() {
    const secInMin = 60;
    const min = Math.floor(config.GAME_TIME / secInMin);
    const sec = config.GAME_TIME - (min * secInMin);
    const attempts = config.MAX_ATTEMPTS - 1;

    return `<section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play" >Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">Правила просты — за
        ${min} ${getPluralForm(min, Forms.minutes)}
        ${sec !== 0 ? ` ${sec} ${getPluralForm(sec, Forms.seconds)}` : ``}
        ответить на все вопросы.<br>
        Ошибиться можно ${attempts} ${getPluralForm(attempts, Forms.count)}.<br>
        Удачи!
      </p>
    </section>`;
  }

  bind() {
    const button = this.element.querySelector(`.main-play`);

    button.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onStart();
    });
  }

  onStart() {

  }
}
