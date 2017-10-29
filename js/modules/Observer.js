export default class Observer {
  constructor() {
    this._listeners = {};
  }

  on(eventName, cb) {
    if (!this._listeners[eventName]) {
      this._listeners[eventName] = [];
    }
    this._listeners[eventName].push(cb);
  }

  fire(eventName, ...args) {
    if (!this._listeners[eventName]) return;

    this._listeners[eventName].forEach(cb => cb(...args));
  }
}
