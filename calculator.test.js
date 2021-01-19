import Calculator from "./calculator";

test("adds 3 + 2 to equal 5", () => {
  expect(new Calculator().add(3, 2)).toBe(5);
});

test("substracts 2 - 3 to equal -1", () => {
  expect(new Calculator().sub(2, 3)).toBe(-1);
});

test("multiplis 3 * 2 to equal 6", () => {
  expect(new Calculator().mul(3, 2)).toBe(6);
});

test("divides 3 / 2 to equal 1.5", () => {
  expect(new Calculator().div(3, 2)).toBe(1.5);
});

test("divides 3 / 2 to equal 1.5", () => {
  expect(new Calculator().div(2, 3)).toBeCloseTo(0.666666666666);
});

test("divides 3 / 0 to be undefined", () => {
  expect(new Calculator().div(3, 0)).toBeUndefined();
});
