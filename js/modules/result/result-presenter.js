import App from '../../app';
import ResultView from './result-view';
import {render} from '../../utils';
import {loadResults, sendResult} from '../../functions/server';
import {ResultStatus} from './helpers';

class ResultPresenter {
  init(gameResult) {
    loadResults().then((res) => {
      this.view = new ResultView(gameResult, res);
      this.view.onReplayClick = () => {
        App.showGame();
      };
      render(this.view.element);

      if (gameResult.status === ResultStatus.WIN) {
        sendResult(gameResult);
      }
    });
  }
}


export default new ResultPresenter();
