import {getTimerTmpl, getFailsTmpl} from '../common/main.js';
import questions from '../../data/questions.js';

const getOptionTmpl = (option, i) => {
  return (
    `<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="${option.artist}"/>
      <label class="main-answer" for="answer-${i}">
        <img class="main-answer-preview" src="${option.image}" alt="${option.artist}" width="134" height="134">
        ${option.artist}
      </label>
    </div>`
  );
};

export default (state) => {
  const question = questions[state.level];

  return (
    `<section class="main main--level main--level-artist">
      ${getTimerTmpl(state)}
      ${getFailsTmpl(state)}
      <div class="main-wrap">
        <h2 class="title main-title">${question.title}</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${question.songSrc}"></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          ${question.options.map((opt, i) => getOptionTmpl(opt, i)).join(``)}
        </form>
      </div>
    </section>`
  );
}
