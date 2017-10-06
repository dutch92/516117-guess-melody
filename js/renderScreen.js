export default (screen) => {
  const entry = document.querySelector("div.app > section.main");
  entry.innerHTML = '';
  entry.appendChild(screen);
}
