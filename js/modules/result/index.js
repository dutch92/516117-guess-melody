import App from '../../App';
import ResultView from './view';
import {render} from '../../utils';

class ResultPresenter {
  init(gameResult) {
    this.view = new ResultView(gameResult);
    this._view.onReplayClick = () => {
      App.showGame();
    };
    render(this.view.element);
  }
}


export default new ResultPresenter();
