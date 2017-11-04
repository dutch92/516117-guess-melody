import App from '../../App';
import ResultView from './view';
import {render} from '../../utils';
import {loadResults, sendResult} from '../../functions/server';
import {resultStatus} from './helpers';

class ResultPresenter {
  init(gameResult) {
    loadResults().then((res) => {
      this.view = new ResultView(gameResult, res);
      this.view.onReplayClick = () => {
        App.showGame();
      };
      render(this.view.element);

      if (gameResult.status === resultStatus.WIN) {
        sendResult(gameResult);
      }
    });
  }
}


export default new ResultPresenter();
