const t = document.querySelector("#templates");
const screens = t.content.querySelectorAll("section.main");

function renderScreen(n) {
  if(n >= screens.length || !screens[n]) return;

  const entry = document.querySelector("div.app > section.main");
  if(entry != null) {
    while (entry.firstChild) {
      entry.removeChild(entry.firstChild);
    }

    const scr = screens[n].cloneNode(true);
    entry.appendChild(scr);
  }
}

renderScreen(0);
