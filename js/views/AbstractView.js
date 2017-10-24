import {createElement} from '../utils';

export default class AbstractView {
  get template() {
    throw new Error(`Not allowed in Abstract view class`);
  }

  render() {
    return createElement(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }
}
