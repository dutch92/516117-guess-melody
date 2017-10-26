import Welcome from './views/welcome/welcome';
// import LevelArtist from './level-artist/level-artist.js';
// import LevelGenre from './level-genre/level-genre.js';
// import WinResult from './result/win-result.js';
// import FailResult from './result/fail-result.js';

export default class App {
  static showWelcome(state) {
    new Welcome(state).init();
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
};
