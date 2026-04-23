/**
 * Joins an array of strings with a specified separator, skipping empty, undefined, or null values.
 *
 * @param {Array<string | null | undefined>} strings - The array of strings to join.
 * @param {string} [separator=" "] - The separator to use between strings. Defaults to a single space.
 * @returns {string} The joined string, excluding any invalid values.
 *
 * @example
 * joinStrings(["hello", null, undefined, "world"], "/");
 * // Returns: "hello/world"
 *
 * @example
 * joinStrings([null, undefined, " ", "valid"], "-");
 * // Returns: "valid"
 *
 * @example
 * joinStrings([null, undefined]);
 * // Returns: ""
 */
export const joinStrings = (
  strings: (string | null | undefined)[],
  separator: string = ' '
): string =>
  strings
    .filter((str) => {
      const preparedStr = typeof str === 'number' ? String(str) : str;

      return typeof preparedStr === 'string' && preparedStr.trim() !== '';
    })
    .join(separator);

/**
 * Ensures that the provided pathname includes a language code.
 * If a language code (`uz`, `ru`, or `uzc` or `en`) is already present as the first segment of the path,
 * the pathname is returned unchanged. If not, it defaults to adding `uz` as the language prefix.
 *
 * @param {string} pathname - The pathname to check and update.
 * @returns {string} - The pathname with the language code, defaulting to `uz` if missing.
 *
 * @example
 * ensureLanguagePath('/broker/profile'); // Returns '/uz/broker/profile'
 * ensureLanguagePath('/uz/broker/profile'); // Returns '/uz/broker/profile'
 * ensureLanguagePath('/ru/broker/profile'); // Returns '/ru/broker/profile'
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const returnArray = (arg: any) => (Array.isArray(arg) ? arg : []);
