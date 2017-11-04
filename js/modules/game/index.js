import App from '../../App';
import GameModel from './model';
import GameView from './view';
import {render} from '../../utils';
import {countScore} from '../../functions/countScore';
import getTimer from '../../functions/timer';
import config from '../../gameConfig';
import {resultStatus} from '../result/helpers';

class GamePresenter {
  init() {
    this.model = new GameModel();
    this.view = new GameView();
    this.timer = getTimer(config.GAME_TIME);

    render(this.view.element);

    this.model.on(`makeMistake`, (mistakesCount) => {
      if (mistakesCount >= config.MAX_ATTEMPTS) {
        return App.showResult({status: resultStatus.OVER_ATTEMPTS});
      }
      return this.view.updateMistakes(mistakesCount);
    });

    this.model.on(`nextQuestion`, (nextQuestion) => {
      this.view.updateGameContainer(nextQuestion);
    });

    this.model.on(`questionsOver`, () => {
      const fastAnswersCount = this.model.answers.reduce((count, ans) => {
        if (ans.isCorrect && ans.time <= config.FAST_TIME) {
          count++;
        }
      }, 0);

      App.showResult({
        status: resultStatus.WIN,
        score: countScore(this.model.answers, config.MAX_ATTEMPTS - this.model.mistakesCount - 1),
        elapsedTime: config.GAME_TIME - this.timer.value,
        mistakesCount: this.model.mistakesCount,
        fastAnswersCount
      });
    });

    this.view.onAnswer = (isCorrect) => {
      this.model.pushAnswer(isCorrect);
    };

    const startGameTimer = () => {
      if(!this.interval) {
        this.interval = setInterval(() => {
          if (this.timer.tick()) {
            this.model.currentAnswerTime++;
            this.view.updateTimer(this.timer.value);
          } else {
            clearInterval(this.interval);
            App.showResult({status: resultStatus.OVER_TIME});
          }
        }, 1000);
      }
    };

    this.model.init();
    startGameTimer();
  }
}

export default new GamePresenter();
