import createNode from '../utils/createNode.js';
import getResultTmpl from './template.js';

export default () => {
  const resultElement = createNode(getResultTmpl());
  const replayBtn = resultElement.querySelector(`.main-replay`);

  replayBtn.onclick = () => {
    check(state);
  };

  return resultElement;
}
