import renderScreen from '../renderScreen.js';
import createElement from '../creator.js';
import artist from './artist.js';

const welcomeElement = createElement(`<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play" >Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!
  </p>
</section>`);

welcomeElement.querySelector(`button.main-play`).onclick = () => {
  renderScreen(artist);
};

export default welcomeElement;
