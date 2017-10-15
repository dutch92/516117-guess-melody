const TIMEOUT_MESSAGE = `Время вышло`;

const getTimer = (time) => {
  return {
    value: time,
    tick() {
      return (time === 0) ? TIMEOUT_MESSAGE : getTimer(time - 1);
    }
  };
};

export {TIMEOUT_MESSAGE, getTimer};
