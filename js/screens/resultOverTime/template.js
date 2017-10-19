import {getLogoTmpl, getReplayBtnTmpl} from '../common/main.js';

export default () => {
  return (
    `<section class="main main--result">
      ${getLogoTmpl()}

      <h2 class="title">Увы и ах!</h2>
      <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
      ${getReplayBtnTmpl()}
    </section>`
  );
}
