export const render = (screen) => {
  const entry = document.querySelector(`div.app > section.main`);
  entry.innerHTML = ``;
  entry.appendChild(screen);
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
