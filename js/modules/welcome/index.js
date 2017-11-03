import App from '../../App';
import View from './view';
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
}

export default new WelcomePresenter();
