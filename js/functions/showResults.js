const MESSAGES = {
  win: (place, playersCount, worseResults) => {
    return `Вы заняли ${place}-ое место из ${playersCount} игроков. Это лучше чем у ${worseResults}% игроков`;
  },
  attemptsOut: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  overTime: `Время вышло! Вы не успели отгадать все мелодии`
};

const showResults = (allScores, player) => {
  if (player.time === 0) {
    return MESSAGES.overTime;
  } else if (player.attemptsLeft === 0) {
    return MESSAGES.attemptsOut;
  }

  const currentScore = player.score;
  allScores.push(currentScore);
  let scores = allScores.slice();
  scores.sort((a, b) => {
    return b - a;
  });

  const place = scores.indexOf(currentScore) + 1;
  const playersCount = scores.length;
  let worseResults = ((playersCount - place) / playersCount) * 100;
  worseResults = Math.round(worseResults);

  return MESSAGES.win(place, playersCount, worseResults);
};

export {MESSAGES, showResults};
