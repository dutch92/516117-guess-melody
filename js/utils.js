import config from './game-config';

export const render = (element) => {
  const container = document.querySelector(`.app > .main`);
  container.innerHTML = ``;
  container.appendChild(element);
};

export const createElement = (tmpl) => {
  const div = document.createElement(`div`);
  div.innerHTML = tmpl;

  return div.firstChild;
};

const zeroed = (num) => {
  return num > 9 ? String(num) : `0${num}`;
};
export const formatTime = (seconds) => {
  const sec = zeroed(seconds % 60);
  const min = zeroed(Math.floor(seconds / 60));

  return {min, sec};
};

export const getPluralForm = (count, forms) => {
  if (isNaN(+count)) {
    throw new TypeError(`Count is not integer`);
  }
  if (!Array.isArray(forms)) {
    throw new TypeError(`Forms is not array`);
  }
  if (!forms.every((title) => typeof title === `string`)) {
    throw new TypeError(`Every element of forms must be a string type`);
  }
  const mod10 = count % 10;
  const mod100 = count % 100;
  if ((mod10 === 1) && (mod100 !== 11)) {
    return forms[0];
  } else if ((mod10 === 2 || mod10 === 3 || mod10 === 4) && !(mod100 === 12 || mod100 === 13 || mod100 === 14)) {
    return forms[1];
  } else {
    return forms[2];
  }
};

export const getDashProps = (seconds) => {
  const circleLength = Math.ceil(2 * Math.PI * config.CIRCLE_RADIUS);
  const ratio = seconds / config.GAME_TIME;
  const progress = circleLength * (1 - ratio);

  return {
    dashArrayValue: circleLength,
    dashOffsetValue: progress
  };
};
