import createNode from '../../utils/createNode.js';
import getResultTmpl from './template.js';
import reset from '../../functions/gameReset.js';
import {showResults} from '../../functions/showResults.js';
import {countScore} from '../../functions/countScore.js';
import {allScores} from '../../data/gameData.js';
import settings from '../../data/settings.js';

export default (state) => {
  const attemptsLeft = settings.MAX_ATTEMPTS - state.fails;
  const player = {
    time: state.time,
    score: countScore(state.answers, attemptsLeft),
    attemptsLeft
  };
  const mainStat = showResults(allScores, player);

  let titleType = `win`;
  if (state.time === 0) {
    titleType = `overTime`;
  } else if (state.fails === settings.MAX_ATTEMPTS) {
    titleType = `overTry`;
  }

  const resultElement = createNode(getResultTmpl(titleType, mainStat));
  const replayBtn = resultElement.querySelector(`.main-replay`);

  replayBtn.onclick = () => {
    reset(state);
  };

  return resultElement;
};
