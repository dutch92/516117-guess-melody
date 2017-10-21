import render from '../render.js';
import getWelcomeScreen from '../screens/welcome/main.js';

export default (state) => {
  state.reset();
  render(getWelcomeScreen(state));
};
