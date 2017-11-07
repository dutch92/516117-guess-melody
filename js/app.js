import WelcomePresenter from './modules/welcome/welcome-presenter';
import GamePresenter from './modules/game/game-presenter';
import ResultPresenter from './modules/result/result-presenter';
import {loadQuestions} from './functions/server';

export default class App {
  static init(data) {
    this._data = data;
  }

  static showWelcome() {
    WelcomePresenter.init();
  }

  static showGame() {
    GamePresenter.init(this._data);
  }

  static showResult(result) {
    ResultPresenter.init(result);
  }
}

loadQuestions().then((data) => {
  App.init(data);
  WelcomePresenter.dataReady();
});
