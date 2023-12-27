/* Create a function named setFromArray
that returns a Set from an array.

It accepts an argument (Array, of
any kind of element). */

export default function setFromArray(inputArray) {
  if (Array.isArray(inputArray)) {
    return new Set(inputArray);
  }
  throw new TypeError(`${inputArray} is not exactly an array is it?`);
}
