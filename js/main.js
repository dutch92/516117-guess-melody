import initialState from './data/initialState.js';
import getWelcomeScreen from './screens/welcome/main.js';
import render from './render.js';

render(getWelcomeScreen(initialState));
