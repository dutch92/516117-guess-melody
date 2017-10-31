import welcome from './modules/welcome';
import game from './modules/game';
import result from './modules/result';

export default class App {
  init() {
    welcome.init();
  }

  startGame() {
    game.init();
  }

  showResult(gameResult) {
    result.init(gameResult);
  }
}
