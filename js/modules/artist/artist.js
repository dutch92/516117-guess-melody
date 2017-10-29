import checkAnswer from '../../../data/check-answer.js';
import {render} from '../../utils';
import {checkState} from '../../gamePlay';
import ArtistView from './ArtistView';

export default class Artist {
  constructor(state, question) {
    this.state = state;
    this.question = question;
    this.view = new ArtistView(this.state.fails, this.question);
    this.answerTimerValue = 0;

    this.view.onSendAnswer = (answer) => {
      clearInterval(this.answerTimer);
      checkAnswer(this.state, this.question, answer, this.answerTimerValue, this.currentPlayer);
      checkState(this.state);
    };
  }

  init() {
    if (!this.interval) {
      this.interval = setInterval(() => this.answerTimerValue++, 1000);
    }

    this.state.timer.onTick = (seconds) => {
      this.view.updateTime(seconds);
    };

    render(this.view.element);
  }
}
