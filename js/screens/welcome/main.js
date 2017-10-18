import createNode from '../../utils/createNode.js';
import tmpl from './template.js';
import check from '../../functions/checkState.js';

export default (state) => {
  const node = createNode(tmpl);
  const playBtn = node.querySelector(`.main-play`);

  const onPlayBtnClick = () => {
    check(state);
  };

  playBtn.addEventListener(`click`, onPlayBtnClick);

  return node;
};
