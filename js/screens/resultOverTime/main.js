import createNode from '../utils/createNode.js';
import getResultTmpl from './template.js';

export default () => {
  return createNode(getResultTmpl());
}
