export function capitalize(string) {
  const capitalized =
    string.charAt(0).toUpperCase() + string.slice(1, string.length);
  return capitalized;
}

export function reverseString(string) {
  let reversed = "";
  for (let i = string.length; i--; i >= 0) {
    reversed = reversed + string.charAt(i);
  }
  return reversed;
}
