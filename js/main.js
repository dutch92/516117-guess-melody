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

let nowScreen = 0;
renderScreen(nowScreen);

document.addEventListener('keyup', (event) => {
  if(event.altKey) {
    let direction = 0;
    if(event.keyCode == 39) { // arrow right
      direction = 1;
    } else if(event.keyCode == 37) { // arrow left
      direction = -1;
    }

    if(direction != 0) {
      const MOD = screens.length;
      nowScreen = (nowScreen + direction) % MOD;
      if(nowScreen < 0) nowScreen += MOD;
      renderScreen(nowScreen);
    }
  }
});
