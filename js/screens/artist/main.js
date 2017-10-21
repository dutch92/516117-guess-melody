import createNode from '../../utils/createNode.js';
import getArtistTmpl from './template.js';
import {checkState, checkAnswer} from '../../functions/gameCheck.js';

export default (state) => {
  const artistElement = createNode(getArtistTmpl(state));

  artistElement.querySelectorAll(`input.main-answer-r`).forEach((el) => {
    el.onchange = (evt) => {
      const answer = evt.target.value;

      checkAnswer(state, answer);
      checkState(state);
    };
  });

  return artistElement;
};
