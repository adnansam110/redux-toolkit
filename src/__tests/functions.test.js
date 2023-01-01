import { addNumbers, subtractNumbers } from "../utils";

test("Add two numbers", () => {
  expect(addNumbers(2, 3)).toBe(5);
});
test("Subtract two numbers", () => {
  expect(subtractNumbers(2, 3)).toBe(-1);
});
