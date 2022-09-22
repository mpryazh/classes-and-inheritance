import { Builder } from "./builder.js";

function StringBuilder(str = "") {
  Builder.call(this, str);
  if (typeof str !== "string") {
    throw Error(`Not a string!`);
  }
}

StringBuilder.prototype = Object.create(Builder.prototype);

StringBuilder.prototype.minus = function (n) {
  this.x = this.x.slice(0,-n);
  return this;
};

StringBuilder.prototype.multiply = function (n) {
  this.x = this.x.repeat(n);
  return this;
};

StringBuilder.prototype.divide = function (n) {
  this.x = this.x.slice(0, Math.floor(this.x.length / n));
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.x = this.x.substr(from, n);
  return this;
};

StringBuilder.prototype.remove = function remove(str) {
  let index = this.x.indexOf(str);
  if (index !== -1) {
    this.x = this.x.slice(0, index) + this.x.slice(index + str.length);
    remove.call(this, str);
  }
  return this;
};

export { StringBuilder };
