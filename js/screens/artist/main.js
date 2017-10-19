import createNode from '../../utils/createNode.js';
import getArtistTmpl from './template.js';
import {checkState, checkAnswer} from '../../functions/gameCheck.js';

export default (state) => {
  const artistElement = createNode(getArtistTmpl(state));

  artistElement.querySelectorAll(`label.main-answer`).forEach((el) => {
    el.onclick = (evt) => {
      const answer = evt.target.closest(`.js-main-answer-r`).value;

      checkAnswer(state, answer);
      checkState(state);
    };
  });
};
