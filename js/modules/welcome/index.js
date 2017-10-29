import app from '../../App';
import View from './view';
import {render} from '../../utils';

class WelcomePresenter {
  constructor() {
    this.View = new View();
  }
  init() {
    render(app.container, this.View.element);

    this.View.onStart = () => {
      app.startGame();
    };
  }
}

export default new WelcomePresenter();
