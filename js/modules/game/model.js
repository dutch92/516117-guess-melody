import Observer from '../Observer';
import {loadQuestions} from '../../utils';
import config from '../../gameConfig';

export default class GameModel extends Observer {
  constructor() {
    super();

    this.mistakesCount = 0;
    this.currentAnswerTime = 0;
  }

  init() {
    this.answers = [];

    loadQuestions(config.SERVER_URL).then((questions) => {
      this._questions = questions;
      this._nextQuestion();
    });
  }

  pushAnswer(isCorrect) {
    this.answers.push({isCorrect, time: this.currentAnswerTime});

    if (!isCorrect) {
      this.mistakesCount++;
      this.fire(`makeMistake`, this.mistakesCount);
    }

    this._nextQuestion();
  }

  _nextQuestion() {
    const nextQuestionIndex = this.answers.length;
    if (nextQuestionIndex < this._questions.length) {
      this.currentQuestion = this._questions[nextQuestionIndex];
      this.fire(`nextQuestion`, this.currentQuestion);
      this.currentAnswerTime = 0;
    } else {
      this.fire(`questionsOver`);
    }
  }
}
