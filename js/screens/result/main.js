import createNode from '../utils/createNode.js';
import getResultTmpl from './template.js';
import reset from '../../functions/gameReset.js';

export default (titleType, mainStat, winPhrase) => {
  const resultElement = createNode(getResultTmpl(titleType, mainStat, winPhrase));
  const replayBtn = resultElement.querySelector(`.main-replay`);

  replayBtn.onclick = () => {
    reset();
  };

  return resultElement;
};
