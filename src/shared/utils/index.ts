/**
 * Utility functions for the application
 */

/**
 * Format a date string using the Intl API
 * @param {Date | string | number} date The date to format
 * @param {string} locale The locale to use for formatting
 * @param {Intl.DateTimeFormatOptions} options Formatting options
 * @returns {string} The formatted date
 */
export function formatDate(
  date: Date | string | number,
  locale = "en",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Debounce a function to limit how often it can be called
 * @param {Function} fn The function to debounce
 * @param {number} delay The delay in milliseconds
 * @returns {Function} The debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: Parameters<T>): void {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Truncate a string to a maximum length and add ellipsis if necessary
 * @param {string} str The string to truncate
 * @param {number} maxLength The maximum length
 * @returns {string} The truncated string
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}
