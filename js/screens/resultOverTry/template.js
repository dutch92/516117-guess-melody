import {getResultTmpl} from '../common/main.js';

export default () => {
  const body = (
    `<h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`
  );

  return getResultTmpl(body);
}
