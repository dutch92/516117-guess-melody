import render from '../render.js';
import getWelcomeScreen from '../screens/welcome/main.js';
import initialState from '../data/initialState.js';

export default () => {
  render(getWelcomeScreen(initialState));
};
