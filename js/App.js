import config from './gameConfig';
import welcome from './modules/welcome/index';

class App {
  constructor() {
    this.config = config;
    this.container = document.querySelector(`div.app > section.main`);
  }

  init() {
    welcome.init();
  }

  startGame() {

  }

  // static showArtist(state, question, currentPlayer) {
  //   new LevelArtist(state, question, currentPlayer).init();
  // }
  //
  // static showLevelGenre(state, question, currentPlayer) {
  //   new LevelGenre(state, question, currentPlayer).init();
  // }
  //
  // static showWinResult(maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers) {
  //   new WinResult(maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers).init();
  // }
  //
  // static showFailResult(state) {
  //   new FailResult(state).init();
  // }
}

export default new App();
