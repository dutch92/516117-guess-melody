const getTimerTmpl = () => {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>`
  );
};

const getFailsTmpl = (state) => {
  const failTmpl = `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;

  return (
    `<div class="main-mistakes">
      ${new Array(state.fails).fill(failTmpl).join(``)}
    </div>`
  );
};

const getLogoTmpl = () => {
  return `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>`;
};

const getReplayBtnTmpl = () => {
  return `<span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>`;
};

const getResultTmpl = (resultBody) => {
  return (
    `<section class="main main--result">
      ${getLogoTmpl()}

      ${resultBody}
      ${getReplayBtnTmpl()}
    </section>`
  );
};

export {getTimerTmpl, getFailsTmpl, getLogoTmpl, getReplayBtnTmpl, getResultTmpl};
