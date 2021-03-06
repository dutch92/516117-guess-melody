import {createElement} from '../utils';

export default class AbstractView {
  get template() {
    throw new Error(`AbstractView class doesn't implement template getter.`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }

  render() {
    return createElement(this.template);
  }

  bind() {

  }
}
