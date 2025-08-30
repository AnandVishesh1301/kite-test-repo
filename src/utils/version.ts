/**
 * Simple semantic version parser (very light) for webhook test.
 */
export function parseVersion(v: string) {
  const [major, minor, patch] = v.split('.').map(n => parseInt(n, 10) || 0);
  return { major, minor, patch };
}
