import AbstractView from '../AbstractView';
import {getPluralForm} from '../../utils';
import config from '../../gameConfig';

const forms = {
  count: [`раз`, `раза`, `раз`],
  minutes: [`минуту`, `минуты`, `минут`],
  seconds: [`секунду`, `секунды`, `секунд`]
};

export default class WelcomeView extends AbstractView {
  get template() {
    const min = Math.floor(config.GAME_TIME / 60);
    const sec = config.GAME_TIME - (min * 60);
    const attempts = config.MAX_ATTEMPTS - 1;

    return `<section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play" >Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">Правила просты — за 
        ${min} ${getPluralForm(min, forms.minutes)}
        ${sec !== 0 ? ` ${sec} ${getPluralForm(sec, forms.seconds)}` : ``} 
        ответить на все вопросы.<br>
        Ошибиться можно ${attempts} ${getPluralForm(attempts, forms.count)}.<br>
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
