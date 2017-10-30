import Model from './model';
import View from './view';
import {render} from '../../utils';

export default class TimerPresenter {
  constructor(dom, time) {
    this.Model = new Model(time);
    this.View = View;
    this.dom = dom;
  }

  init() {
    this.Model.on(`change`, () => {
      this.updateView(this.Model.timer.value);
    });

    this.Model.on(`done`, () => {
      this.handleStop();
    });
  }

  start() {
    this.handleStart();
  }

  updateView(time) {
    const view = new this.View(time);
    render(this.dom, view.element);
  }

  handleStart() {
    if (this.Model.timer <= 0 || this.interval) {
      return;
    }

    this.interval = setInterval(() => {
      this.model.tick();
      this.onTick(this.Model.timer.value);
    }, 1000);
  }

  handleStop() {
    if (!this.interval) {
      return;
    }

    clearInterval(this.interval);
    delete this.interval;
  }

  handleReset() {
    this.model.reset();
  }

  onTick() {

  }
}
