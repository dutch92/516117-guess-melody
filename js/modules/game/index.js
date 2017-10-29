import GameModel from './model';
import GameView from './view';

class GamePresenter {
  constructor(questions) {
    this._model = new GameModel(questions);
    this._view = new GameView(this._model);
  }
}
