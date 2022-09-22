import { Builder } from "./Builder.js";

class IntBuilder extends Builder {
  constructor(int = 0) {
    super(int);
    if (typeof int !== "number") {
      throw Error(`Not a number!`);
    }
  }

  minus(...n) {
    this.x -= this.sumArray(...n);
    return this;
  }

  multiply(n) {
    this.x *= n;
    return this;
  };

  divide(n) {
    this.x = Math.floor(this.x / n);
    return this;
  }

  mod(n) {
    this.x = this.x % n;
    return this;
  }

  static random(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
}

export { IntBuilder };
