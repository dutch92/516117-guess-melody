import {getPluralForm} from '../../utils';

export const ResultStatus = {
  OVER_TIME: 1,
  OVER_ATTEMPTS: 2,
  WIN: 3
};

export const getTitle = ({status}) => {
  const TextMap = {
    [ResultStatus.OVER_TIME]: `Увы и ах!`,
    [ResultStatus.OVER_ATTEMPTS]: `Какая жалость!`,
    [ResultStatus.WIN]: `Вы настоящий меломан!`
  };
  return TextMap[status];
};

const Forms = {
  MINUTES: [`минуту`, `минуты`, `минут`],
  SECONDS: [`секунду`, `секунды`, `секунд`],
  SCORE: [`балл`, `балла`, `баллов`],
  MISTAKES: [`ошибку`, `ошибки`, `ошибок`],
  FAST_ANSWERS: [`быстрый`, `быстрых`, `быстрых`],
  PLAYERS: [`игрока`, `игроков`, `игроков`]
};

export const getStat = ({status, elapsedTime, score, fastAnswersCount, mistakesCount}) => {
  switch (status) {
    case ResultStatus.OVER_TIME:
      return `Время вышло!<br>Вы не успели отгадать все мелодии`;
    case ResultStatus.OVER_ATTEMPTS:
      return `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`;
    case ResultStatus.WIN:
      const minutes = Math.floor(elapsedTime / 60);
      const seconds = elapsedTime - (minutes * 60);

      return (
        `За ${minutes} ${getPluralForm(minutes, Forms.MINUTES)}
        и ${seconds} ${getPluralForm(seconds, Forms.SECONDS)}
        <br>вы набрали ${score} ${getPluralForm(score, Forms.SCORE)}
        (${fastAnswersCount} ${getPluralForm(fastAnswersCount, Forms.FAST_ANSWERS)})
        <br>совершив ${mistakesCount} ${getPluralForm(mistakesCount, Forms.MISTAKES)}`
      );
    default:
      return `Неизвестный статус`;
  }
};

export const getComparison = ({status, score}, allScores) => {
  if (status !== ResultStatus.WIN) {
    return ``;
  }

  const currentScore = score;
  allScores.push(currentScore);
  let scores = allScores.slice();
  scores.sort((a, b) => {
    return b - a;
  });

  const place = scores.indexOf(currentScore) + 1;
  const playersCount = scores.length;
  let worseResults = ((playersCount - place) / playersCount) * 100;
  worseResults = Math.round(worseResults);

  const playerForm = getPluralForm(playersCount, Forms.PLAYERS);
  const percentForm = getPluralForm(worseResults, Forms.PLAYERS);

  return (
    `<span class="main-comparison">
      Вы ${playersCount === 1 ? `, как единственный сыгравший,` : ``}
      заняли ${place} место
      ${playersCount !== 1 ? ` из ${playersCount} ${playerForm}` : ``}.
      ${playersCount - place !== 0 ? ` Это лучше, чем у ${worseResults}% ${percentForm}` : ``}
    </span>`
  );
};
