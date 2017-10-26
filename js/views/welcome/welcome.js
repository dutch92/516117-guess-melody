import WelcomeView from './WelcomeView';
import {checkState} from '../../gamePlay';
import {render} from '../../utils';
import Timer from '../timer/timer';

export default class Welcome {
  constructor(state) {
    this.state = state;
    this.view = new WelcomeView();

    this.view.onStart() = () => {
      this.startGame();
    };
  }

  init() {
    render(this.view.element);
  }

  startGame() {
    this.state.timer = new Timer(this.state.time);
    this.state.timer.start();
    checkState(this.state);
  }
}
