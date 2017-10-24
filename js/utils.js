export const createElement = (tmpl) => {
  const div = document.createElement(`div`);
  div.innerHTML = tmpl;

  return div.firstChild;
};
