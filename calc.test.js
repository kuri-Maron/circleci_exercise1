// import { sum } from "./calc.js";
const calc = require("./calc2");

test("Sum test", () => {
  expect(calc.sum(1, 3)).toBe(4);
});
