import { caesar } from "./caesar";

test("ceasar abcdefghijklmnopqrstuvwxyz with shift 1 is bcdefghijklmnopqrstuvwxyza", () => {
  expect(caesar("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("ceasar abcdefghijklmnopqrstuvwxyz with shift -26 is abcdefghijklmnopqrstuvwxyz", () => {
  expect(caesar("abcdefghijklmnopqrstuvwxyz", -260)).toBe(
    "abcdefghijklmnopqrstuvwxyz"
  );
});

test("ceasar Defend the east wall of the castle! with shift 5 is ijkjsiymjjfxybfqqtkymjhfxyqj", () => {
  expect(caesar("Defend the east wall of the castle!", 5)).toBe(
    "ijkjsiymjjfxybfqqtkymjhfxyqj"
  );
});

test("ceasar ijkjsiymjjfxybfqqtkymjhfxyqj with shift -5 is defendtheeastwallofthecastle", () => {
  expect(caesar("ijkjsiymjjfxybfqqtkymjhfxyqj", -5)).toBe(
    "defendtheeastwallofthecastle"
  );
});
