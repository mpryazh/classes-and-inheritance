import { IntBuilder } from "/IntBuilder.js";
import { StringBuilder } from "/StringBuilder.js";

let min = 10;
let max = 100;
console.log(`Random number between ${min} and ${max}: ` + IntBuilder.random(10, 100));

let intBuilder = new IntBuilder(10); // 10;
console.log("\nIntBuilder:");
intBuilder
  .plus(2, 3, 2)           .get()       // 17;
  .minus(1, 2)             .get()       // 14;
  .multiply(2)             .get()       // 28;
  .divide(4)               .get()       // 7;
  .mod(3)                               // 1;
  .get();                               // -> 1;



let strBuilder = new StringBuilder('Hello'); // 'Hello';
console.log("\nStringBuilder:")
strBuilder
  .plus(' all', '!')       .get()       // 'Hello all!'
  .minus(4)                .get()       // 'Hello '
  .multiply(3)             .get()       // 'Hello Hello Hello '
  .divide(4)               .get()       // 'Hell';
  .remove('l')             .get()       // 'He';
  .sub(1,1)                             // 'e';
  .get();                               // -> 'e';
