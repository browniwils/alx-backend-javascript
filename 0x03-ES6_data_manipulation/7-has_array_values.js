/* Create a function named hasValuesFromArray that
returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a set (Set) and an array (Array). */

export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new TypeError(`${set} is not a valid set`);
  }
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not a valid array`);
  }

  const b = array.map((elem) => set.has(elem));
  return b.every((item) => Boolean(item));
}
