/* Export a const instance of WeakMap and name it weakMap.

Export a new function named queryAPI. It should accept an endpoint argument like so:

  {
    protocol: 'http',
    name: 'getUsers',
  }
Track within the weakMap the number of times queryAPI is called for each endpoint.

When the number of queries is >= 5 throw an error with the message Endpoint load is high. */

export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  const total = weakMap.get(endPoint) || 0;
  weakMap.set(endPoint, total + 1);
  if (total >= 5) {
    throw new Error('Endpoint load is high');
  }
  return total;
}
