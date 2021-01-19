export function analyze(array) {
  const len = array.length;
  const average = array.reduce((sum, number) => sum + number, 0) / len;
  const max = array.reduce((max, number) => {
    if (number > max) return number;
    else return max;
  }, array[0]);
  const min = array.reduce((min, number) => {
    if (number < min) return number;
    else return min;
  }, array[0]);
  return {
    average: average,
    min: min,
    max: max,
    length: len,
  };
}
