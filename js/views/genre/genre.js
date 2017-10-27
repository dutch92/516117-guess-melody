import createNode from '../../utils/createNode.js';
import getGenreTmpl from './template.js';
import {checkState, checkAnswer} from '../../functions/gameCheck.js';

export default (state) => {
  const genreElement = createNode(getGenreTmpl(state));

  genreElement.querySelectorAll(`input[name="answer"]`).forEach((el, i, arr) => {
    el.onchange = () => {
      genreElement.querySelector(`button.genre-answer-send`).disabled = !Array.from(arr).some((n) => n.checked);
    };
  });

  genreElement.querySelector(`button:not([attr="disabled"]).genre-answer-send`).onclick = (evt) => {
    evt.preventDefault();

    const answers = Array.from(genreElement.querySelectorAll(`input[type="checkbox"]:checked`)).map((el) => el.value);

    checkAnswer(state, answers);
    checkState(state);
  };

  return genreElement;
};