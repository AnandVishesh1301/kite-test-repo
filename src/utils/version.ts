/**
 * Simple semantic version parser (very light) for webhook test.
 */
export function parseVersion(v: string) {
  const [major, minor, patch] = v.split('.').map(n => parseInt(n, 10) || 0);
  return { major, minor, patch };
}

/**
 * Compares two semver-like version strings.
 * Returns -1 if a<b, 1 if a>b, 0 if equal.
 * Added for webhook test.
 */
export function compareVersions(a: string, b: string): -1 | 0 | 1 {
  const va = parseVersion(a);
  const vb = parseVersion(b);
  if (va.major !== vb.major) return va.major < vb.major ? -1 : 1;
  if (va.minor !== vb.minor) return va.minor < vb.minor ? -1 : 1;
  if (va.patch !== vb.patch) return va.patch < vb.patch ? -1 : 1;
  return 0;
}

/**
 * Returns a new version string with patch incremented.
 * Added for webhook test.
 */
export function bumpPatchVersion(v: string): string {
  const { major, minor, patch } = parseVersion(v);
  return `${major}.${minor}.${patch + 1}`;
}

/**
 * Normalizes a version string to 'major.minor.patch' form.
 * Added for webhook test.
 */
export function normalizeVersion(v: string): string {
  const { major, minor, patch } = parseVersion(v);
  return `${major}.${minor}.${patch}`;
}

/**
 * Returns a new version string with minor incremented and patch reset to 0.
 * Added for webhook test.
 */
export function bumpMinorVersion(v: string): string {
  const { major, minor } = parseVersion(v);
  return `${major}.${minor + 1}.0`;
}

/**
 * Returns a new version string with major incremented and minor/patch reset to 0.
 * Added for webhook test.
 */
export function bumpMajorVersion(v: string): string {
  const { major } = parseVersion(v);
  return `${major + 1}.0.0`;
}

/**
 * Checks if a string is a valid simple numeric dot version (x.y.z).
 * Added for webhook test.
 */
export function isValidVersion(v: string): boolean {
  return /^\d+\.\d+\.\d+$/.test(v);
}
