import App from '../../app';
import GameModel from './game-model';
import GameView from './game-view';
import {render} from '../../utils';
import getTimer from '../../functions/timer';
import config from '../../game-config';
import {ResultStatus} from '../result/helpers';

class GamePresenter {
  init(data) {
    this.model = new GameModel();
    this.view = new GameView();
    this.timer = getTimer(config.GAME_TIME);

    render(this.view.element);

    this._createHandlers();

    this.model.init(data);

    this._startTimer();
  }

  _createHandlers() {
    this.model.on(`makeMistake`, (mistakesCount) => {
      if (mistakesCount >= config.MAX_ATTEMPTS) {
        this._stopTimer();

        return App.showResult({status: ResultStatus.OVER_ATTEMPTS});
      }
      return this.view.updateMistakes(mistakesCount);
    });

    this.model.on(`nextQuestion`, (nextQuestion) => {
      this.view.updateGameContainer(nextQuestion);
    });

    this.model.on(`questionsOver`, () => {
      this._stopTimer();

      App.showResult({
        status: ResultStatus.WIN,
        score: this.model.calculateScore(),
        elapsedTime: config.GAME_TIME - this.timer.value,
        mistakesCount: this.model.getMistakesCount(),
        fastAnswersCount: this.model.getFastAnswersCount()
      });
    });

    this.view.onAnswer = (isCorrect) => {
      this.model.pushAnswer(isCorrect);
    };
  }

  _startTimer() {
    if (!this.interval) {
      const everySecond = 1000;

      this.interval = setInterval(() => {
        if (this.timer.tick()) {
          this.model.tickCurrentAnswerTime();
          this.view.updateTimer(this.timer.value);
        } else {
          this._stopTimer();

          App.showResult({status: ResultStatus.OVER_TIME});
        }
      }, everySecond);
    }
  }

  _stopTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      delete this.interval;
    }
  }
}

export default new GamePresenter();
