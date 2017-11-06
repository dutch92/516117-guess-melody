import welcome from './modules/welcome/welcome-presenter';
import game from './modules/game/game-presenter';
import result from './modules/result/result-presenter';

const Router = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

const routes = {
  [Router.WELCOME]: welcome,
  [Router.GAME]: game,
  [Router.RESULT]: result
};

const marshal = (state) => {
  return JSON.stringify(state);
};

const unmarshal = (data) => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
};

export default class App {
  static init() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);

      this.changeRoute(id, data);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static showWelcome() {
    location.hash = Router.WELCOME;
  }

  static showGame() {
    location.hash = Router.GAME;
  }

  static showResult(gameResult) {
    location.hash = `${Router.RESULT}?${marshal(gameResult)}`;
  }

  static changeRoute(id, data) {
    const presenter = routes[id];
    if (presenter) {
      presenter.init(unmarshal(data));
    }
  }
}

App.init();
