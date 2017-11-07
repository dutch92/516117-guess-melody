import App from '../../app';
import View from './welcome-view';
import {render} from '../../utils';

class WelcomePresenter {
  constructor() {
    this.view = new View();
  }
  init() {
    render(this.view.element);

    this.view.onStart = () => {
      App.showGame();
    };
  }
  dataReady() {
    this.view.activatePlayButton();
  }
}

export default new WelcomePresenter();
