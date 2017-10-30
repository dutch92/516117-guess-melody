import app from '../../App';
import GameModel from './model';
import GameView from './view';
import Timer from '../timer';
import {render} from '../../utils';
import questions from '../../data/questions';

class GamePresenter {
  constructor(questions) {
    this._model = new GameModel(questions);
    this._view = new GameView(this._model);
    this._gameTime = 0;
    this._timer = new Timer(this._view.element.querySelector(`.time-container`), app.config.GAME_TIME);
  }

  init() {
    render(app.container, this._view.element);

    this._model.on(`makeMistake`, (mistakesCount) => {
      if (mistakesCount >= app.config.MAX_ATTEMPTS) {
        return app.showResult({status: `attemptsOver`});
      }
      this._view.updateMistakes(mistakesCount);
    });
    this._model.on(`nextQuestion`, (nextQuestion) => {
      this._view.updateGameContainer(nextQuestion);
    });
    this._model.on(`questionsOver`, () => {
      const fastAnswersCount = this._model.answers.reduce((count, ans) => {
        ans.isCorrect && (ans.time <= app.config.FAST_TIME) && count++;
      }, 0);

      app.showResult({
        status: `win`,
        score: countScore(this._model.answers, app.config.MAX_ATTEMPTS - this._model.mistakesCount - 1),
        elapsedTime: this._gameTime,
        mistakesCount: this._model.mistakesCount,
        fastAnswersCount
      });
    });
    this._timer.onTick = (time) => {
      this._gameTime++;
      if (time <= 0) {
        app.showResult({status: `timeOver`});
      }
    };
    this._view.onAnswer = (isCorrect) => {
      this._model.pushAnswer(isCorrect, this._gameTime);
    };

    this._model.init();
    this._timer.start();
  }
}

export default new GamePresenter(questions);
