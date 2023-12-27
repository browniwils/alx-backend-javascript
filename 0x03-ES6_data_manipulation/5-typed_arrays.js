/* Create a function named createInt8TypedArray that 
returns a new ArrayBuffer with an Int8 value at a specific position.

It should accept three arguments: length (Number), position (Number), and value (Number).

If adding the value is not possible the error Position 
outside range should be thrown. */

export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new Error('Position outside range');
  }
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const nView = new DataView(buff, 0, length);
  const arr = new Int8Array(buff);
  arr[position] = value;
  return nView;
}
