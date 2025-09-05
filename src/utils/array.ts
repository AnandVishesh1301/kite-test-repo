/**
 * Returns the first element of an array.
 * Added for webhook testing.
 */
export function head<T>(arr: T[]): T | undefined {
  return arr[0];
}

/**
 * Returns all but the first element of an array.
 * Added for webhook testing.
 */
export function tail<T>(arr: T[]): T[] {
  return arr.slice(1);
}

/**
 * Returns the last element of an array.
 * Added for webhook testing.
 */
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}
