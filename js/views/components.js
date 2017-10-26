const getMistakeTmpl = (count) => {
  const one = `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;

  return (
    `<div class="main-mistakes">
      ${new Array(count).fill(one).join(``)}
    </div>`
  );
};

const getLogoTmpl = () => {
  return `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>`;
};

const getReplayBtnTmpl = () => {
  return `<span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>`;
};

export {getTimerTmpl, getFailsTmpl, getLogoTmpl, getReplayBtnTmpl, getResultTmpl};
