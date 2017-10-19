import {getResultTmpl} from '../common/main.js';

export default () => {
  const body = (
    `<h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`
  );

  return getResultTmpl(body);
}
