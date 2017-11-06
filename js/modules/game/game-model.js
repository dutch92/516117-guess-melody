import Observer from '../observer';
import {loadQuestions} from '../../functions/server';
import config from '../../game-config';
import countScore from '../../functions/count-score';

export default class GameModel extends Observer {
  constructor() {
    super();

    this.mistakesCount = 0;
    this.currentAnswerTime = 0;
  }

  init() {
    this._answers = [];

    loadQuestions().then((questions) => {
      this._questions = questions;
      this._nextQuestion();
    });
  }

  pushAnswer(isCorrect) {
    this._answers.push({isCorrect, time: this.currentAnswerTime});

    if (!isCorrect) {
      this.mistakesCount++;
      this.fire(`makeMistake`, this.mistakesCount);
    }

    this._nextQuestion();
  }

  _nextQuestion() {
    const nextQuestionIndex = this._answers.length;
    if (nextQuestionIndex < this._questions.length) {
      this.currentQuestion = this._questions[nextQuestionIndex];
      this.fire(`nextQuestion`, this.currentQuestion);
      this.currentAnswerTime = 0;
    } else {
      this.fire(`questionsOver`);
    }
  }

  getFastAnswersCount() {
    let fastAnswersCount = 0;
    this._answers.forEach((ans) => {
      if (ans.isCorrect && ans.time <= config.FAST_TIME) {
        fastAnswersCount++;
      }
    });
  }

  calculateScore() {
    return countScore(this._answers, config.MAX_ATTEMPTS - this.mistakesCount - 1);
  }
}
