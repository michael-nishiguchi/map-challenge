//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/**
 * The map() method creates a new array
 * populated with the results
 * of calling a provided function on every element in the calling array.
 */

export function mapMe<T, U>(
  callback: (element: T, index: number, array: T[]) => U,
  arr: T[] // T is generic type to accept number, string, bool etc and turn them into U
): U[] {
  const mappedArray: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i], i, arr)); // transformer to turn element into U
  }
  return mappedArray;
}
