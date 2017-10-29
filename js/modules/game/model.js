import Observer from '../Observer';

export default class GameModel extends Observer {
  constructor(questions) {
    super();

    this.questions = questions;
    this.currentQuestion = questions[0];
    this.answers = [];
  }

  get mistakesCount() {
    let count = 0;
    this.answers.forEach((ans) => {
      if (!ans.isCorrect) {
        count++;
      }
    });

    return count;
  }

  get passedTime() {
    let time = 0;
    this.answers.forEach((ans) => {
      time = ans.time;
    });

    return time;
  }
}
