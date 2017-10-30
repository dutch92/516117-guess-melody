import config from './gameConfig';
import welcome from './modules/welcome';
import game from './modules/game';

class App {
  constructor() {
    this.config = config;
    this.container = document.querySelector(`div.app > section.main`);
  }

  init() {
    welcome.init();
  }

  startGame() {
    game.init();
  }

  showResult() {

  }
}

export default new App();
