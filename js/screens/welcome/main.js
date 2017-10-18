import createNode from '../../utils/createNode';
import tmpl from './template';

export default (state) => {
  const node = createNode(tmpl);
  const playBtn = node.querySelector(`.main-play`);

  const onPlayBtnClick = () => {
    controlGame(state);
  };

  playBtn.addEventListener(`click`, onPlayBtnClick);

  return node;
};
