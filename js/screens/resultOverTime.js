import renderScreen from '../renderScreen.js';
import welcome from './welcome.js';
import createElement from '../creator.js';

const resultOverTimeElement = createElement(`<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Увы и ах!</h2>
  <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
</section>`);

resultOverTimeElement.querySelector('.main-replay').onclick = () => {
  renderScreen(welcome);
};

export default resultOverTimeElement;
