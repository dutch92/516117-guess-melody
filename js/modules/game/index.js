import GameModel from './model';
import GameView from './view';

class GamePresenter {
  constructor(questions) {
    this.Model = new GameModel(questions);
    this.View = new GameView(this.Model);
  }
}
