import data from './data';

const tmpl = (
  `<section class="main main--welcome">
    <section class="logo" title="${data.gameTitle}"><h1>${data.gameTitle}</h1></section>
    <button class="main-play" >${data.playBtnText}</button>
    <h2 class="title main-title">${data.rulesTitle}</h2>
    <p class="text main-text">${data.rulesText}</p>
  </section>`
);

export default tmpl;
