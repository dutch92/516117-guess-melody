import {getTimerTmpl, getFailsTmpl} from '../common/main.js';
import questions from '../../data/questions.js';

const getOptionTmpl = (option, i) => {
  return (
    `<div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio src="${option.songSrc}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="${option.name}" id="a-${i}">
      <label class="genre-answer-check" for="a-${i}"></label>
    </div>`
  );
};

export default (state) => {
  const question = questions[state.level];

  return (
    `<section class="main main--level main--level-genre">
      ${getTimerTmpl(state)}
      ${getFailsTmpl(state)}
      <div class="main-wrap">
        <h2 class="title">${question.title}</h2>
        <form class="genre">
          ${question.options.map((opt, i) => getOptionTmpl(opt, i)).join(``)}
          <button class="genre-answer-send" disabled type="submit">Ответить</button>
        </form>
      </div>
    </section>`
  );
}
