/**
 * Generates a simple random ID (not cryptographically secure).
 * Added for webhook test change.
 */
export function randomId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}
