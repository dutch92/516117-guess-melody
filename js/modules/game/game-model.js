import Observer from '../observer';
import config from '../../game-config';
import countScore from '../../functions/count-score';

export default class GameModel extends Observer {
  constructor() {
    super();

    this._mistakesCount = 0;
    this._currentAnswerTime = 0;
  }

  init(questions) {
    this._answers = [];
    this._questions = questions;

    this._nextQuestion();
  }

  pushAnswer(isCorrect) {
    this._answers.push({isCorrect, time: this._currentAnswerTime});

    if (!isCorrect) {
      this._mistakesCount++;
      this.fire(`makeMistake`, this._mistakesCount);
    }

    this._nextQuestion();
  }

  getMistakesCount() {
    return this._mistakesCount;
  }

  getFastAnswersCount() {
    let fastAnswersCount = 0;
    this._answers.forEach((ans) => {
      if (ans.isCorrect && ans.time <= config.FAST_TIME) {
        fastAnswersCount++;
      }
    });

    return fastAnswersCount;
  }

  tickCurrentAnswerTime() {
    this._currentAnswerTime += 1;
  }

  calculateScore() {
    return countScore(this._answers, config.MAX_ATTEMPTS - this._mistakesCount - 1);
  }

  _nextQuestion() {
    const nextQuestionIndex = this._answers.length;
    if (nextQuestionIndex < this._questions.length) {
      this.currentQuestion = this._questions[nextQuestionIndex];
      this.fire(`nextQuestion`, this.currentQuestion);
      this._currentAnswerTime = 0;
    } else {
      this.fire(`questionsOver`);
    }
  }
}
