import createNode from '../../utils/createNode.js';
import tmpl from './template.js';
import {checkState} from '../../functions/gameCheck.js';

export default (state) => {
  const node = createNode(tmpl);
  const playBtn = node.querySelector(`.main-play`);

  const onPlayBtnClick = () => {
    checkState(state);
  };

  playBtn.addEventListener(`click`, onPlayBtnClick);

  return node;
};
