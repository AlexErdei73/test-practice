function isCharAlphabetic(char) {
  const code = char.charCodeAt(0);
  if (code > 96 && code < 123) return true;
  else return false;
}

function filterAlphaChars(string) {
  string = string.toLowerCase();
  const stringArr = string.split("");
  const filteredArr = stringArr.filter((char) => isCharAlphabetic(char));
  return filteredArr;
}

export function caesar(string, shift) {
  const stringArr = filterAlphaChars(string);
  const caesarArr = stringArr.map((char) => {
    const code = char.charCodeAt(0);
    const aCode = 97;
    const offset = (code - aCode + shift) % 26;
    let newCode = aCode + offset;
    if (offset < 0) newCode = newCode + 26;
    return String.fromCharCode(newCode);
  });
  return caesarArr.join("");
}
