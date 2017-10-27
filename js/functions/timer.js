export default (time) => {
  return {
    value: time,
    tick() {
      if (this.value <= 0) {
        return false;
      }
      this.value -= 1;

      return true;
    }
  };
};
