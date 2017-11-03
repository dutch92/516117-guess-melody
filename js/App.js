import welcome from './modules/welcome';
import game from './modules/game';
import result from './modules/result';

const router = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

const routes = {
  [router.WELCOME]: welcome,
  [router.GAME]: game,
  [router.RESULT]: result
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
    location.hash = router.WELCOME;
  }

  static showGame() {
    location.hash = router.GAME;
  }

  static showResult(gameResult) {
    location.hash = `${router.RESULT}?${marshal(gameResult)}`;
  }

  static changeRoute(id, data) {
    const presenter = routes[id];
    if (presenter) {
      presenter.init(unmarshal(data));
    }
  }
}

App.init();
