import {getPluralForm} from '../../utils';
import {allScores} from '../../data/gameData';

export const resultStatus = {
  OVER_TIME: 1,
  OVER_ATTEMPTS: 2,
  WIN: 3
};

export const getTitle = ({status}) => {
  const textMap = {
    [resultStatus.OVER_TIME]: `Увы и ах!`,
    [resultStatus.OVER_ATTEMPTS]: `Какая жалость!`,
    [resultStatus.WIN]: `Вы настоящий меломан!`
  };
  return textMap[status];
};

const forms = {
  MINUTES: [`минуту`, `минуты`, `минут`],
  SECONDS: [`секунду`, `секунды`, `секунд`],
  SCORE: [`балл`, `балла`, `баллов`],
  MISTAKES: [`ошибку`, `ошибки`, `ошибок`],
  FAST_ANSWERS: [`быстрый`, `быстрых`, `быстрых`],
  PLAYERS: [`игрока`, `игроков`, `игроков`]
};

export const getStat = ({status, elapsedTime, score, fastAnswersCount, mistakesCount}) => {
  const textMap = {
    [resultStatus.OVER_TIME]: `Время вышло!<br>Вы не успели отгадать все мелодии`,
    [resultStatus.OVER_ATTEMPTS]: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`,
    [resultStatus.WIN]: () => {
      const minutes = Math.floor(result.elapsedTime / 60);
      const seconds = result.elapsedTime - (minutes * 60);

      return (
        `За ${minutes} ${getPluralForm(minutes, forms.MINUTES)}
        и ${seconds} ${getPluralForm(seconds, forms.SECONDS)}
        <br>вы набрали ${result.score} ${getPluralForm(result.score, forms.SCORE)}
        (${result.fastAnswersCount} ${getPluralForm(result.fastAnswersCount, forms.FAST_ANSWERS)})
        <br>совершив ${result.mistakesCount} ${getPluralForm(result.mistakesCount, forms.MISTAKES)}`
      );
    }
  };

  if (typeof textMap[status] === `function`) {
    return textMap[status]();
  } else {
    return textMap[status];
  }
};

export const getComparison = ({status, elapsedTime, score, fastAnswersCount, mistakesCount}) => {
  if (status !== resultStatus.WIN) {
    return ``;
  }

  const currentScore = result.score;
  allScores.push(currentScore);
  let scores = allScores.slice();
  scores.sort((a, b) => {
    return b - a;
  });

  const place = scores.indexOf(currentScore) + 1;
  const playersCount = scores.length;
  let worseResults = ((playersCount - place) / playersCount) * 100;
  worseResults = Math.round(worseResults);

  const playerForm = getPluralForm(playersCount, forms.PLAYERS);
  const percentForm = getPluralForm(worseResults, forms.PLAYERS);

  return (
    `<span class="main-comparison">
      Вы ${playersCount === 1 ? `, как единственный сыгравший,` : ``}
      заняли ${place} место
      ${playersCount !== 1 ? ` из ${playersCount} ${playerForm}` : ``}.
      ${playersCount - place !== 0 ? ` Это лучше, чем у ${worseResults}% ${percentForm}` : ``}
    </span>`
  );
};
