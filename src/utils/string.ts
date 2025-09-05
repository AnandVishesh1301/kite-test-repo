/**
 * Converts a string to PascalCase.
 * Added for webhook testing.
 */
export function pascalCase(str: string): string {
  return str
    .replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase())
    .replace(/\s/g, '');
}

