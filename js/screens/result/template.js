import {getResultTmpl} from '../common/main.js';
import {titles} from './data.js';

export default (titleType, mainStat, winPhrase) => {
  const body = (
    `<h2 class="title">${titles[titleType]}</h2>
    <div class="main-stat">${mainStat}</div>
    ${winPhrase ? `<span class="main-comparison">${winPhrase}</span>` : ``}`
  );

  return getResultTmpl(body);
};
