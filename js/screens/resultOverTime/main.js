import createNode from '../utils/createNode.js';
import getResultTmpl from './template.js';
import reset from '../../functions/gameReset.js';

export default () => {
  const resultElement = createNode(getResultTmpl());
  const replayBtn = resultElement.querySelector(`.main-replay`);

  replayBtn.onclick = () => {
    reset();
  };

  return resultElement;
};
