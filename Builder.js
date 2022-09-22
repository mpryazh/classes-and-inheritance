function Builder(x) {
  this.x = x;
}

Builder.prototype.get = function () {
  console.log(this.x);
  return this;
};

Builder.prototype.plus = function (...n) {
  this.x += this.sumArray(...n);
  return this;
};

Builder.prototype.sumArray = function (...n) {
  return n.reduce((sum, next) => (sum += next));
};

export { Builder };
