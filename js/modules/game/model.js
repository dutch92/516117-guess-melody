import Observer from '../Observer';

export default class GameModel extends Observer {
  constructor(questions) {
    super();

    this._questions = questions;
    this.mistakesCount = 0;
  }

  init() {
    this.answers = [];
    this._nextQuestion();
  }

  pushAnswer(isCorrect, time) {
    const answersCount = this.answers.length;
    const answer = {isCorrect, time: time - (answersCount > 0 ? this.answers[answersCount - 1] : 0)};

    this.answers.push(answer);

    if (!answer.isCorrect) {
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
    }

    this.fire(`questionsOver`);
  }
}
