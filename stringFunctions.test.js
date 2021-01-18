import { TestScheduler } from "jest";
import { capitalize, reverseString } from "./stringFunctions";

test("capitalize alex should be Alex", () => {
  expect(capitalize("alex")).toBe("Alex");
});

test("capitalize little should be Little", () => {
  expect(capitalize("little")).toBe("Little");
});

test("reverseString alex should be xela", () => {
  expect(capitalize("alex")).toBe("xela");
});
