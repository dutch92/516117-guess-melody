import App from '../../app';
import GameModel from './game-model';
import GameView from './game-view';
import {render} from '../../utils';
import getTimer from '../../functions/timer';
import config from '../../game-config';
import {ResultStatus} from '../result/helpers';

class GamePresenter {
  init() {
    this.model = new GameModel();
    this.view = new GameView();
    this.timer = getTimer(config.GAME_TIME);

    render(this.view.element);

    this._createHandlers();

    this.model.init();

    this._startGameTimer();
  }

  _createHandlers() {
    this.model.on(`makeMistake`, (mistakesCount) => {
      if (mistakesCount >= config.MAX_ATTEMPTS) {
        return App.showResult({status: ResultStatus.OVER_ATTEMPTS});
      }
      return this.view.updateMistakes(mistakesCount);
    });

    this.model.on(`nextQuestion`, (nextQuestion) => {
      this.view.updateGameContainer(nextQuestion);
    });

    this.model.on(`questionsOver`, () => {
      App.showResult({
        status: ResultStatus.WIN,
        score: this.model.calculateScore(),
        elapsedTime: config.GAME_TIME - this.timer.value,
        mistakesCount: this.model.mistakesCount,
        fastAnswersCount: this.model.getFastAnswersCount()
      });
    });

    this.view.onAnswer = (isCorrect) => {
      this.model.pushAnswer(isCorrect);
    };
  }

  _startGameTimer() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        if (this.timer.tick()) {
          this.model.currentAnswerTime++;
          this.view.updateTimer(this.timer.value);
        } else {
          clearInterval(this.interval);
          App.showResult({status: ResultStatus.OVER_TIME});
        }
      }, 1000);
    }
  }
}

export default new GamePresenter();
