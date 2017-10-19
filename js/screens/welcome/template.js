import {getLogoTmpl} from '../common/main.js';

const tmpl = (
  `<section class="main main--welcome">
    ${getLogoTmpl()}
    <button class="main-play" >Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">Правила просты — за 5 минут ответить на все вопросы.<br>Ошибиться можно 3 раза.<br>Удачи!</p>
  </section>`
);

export default tmpl;
