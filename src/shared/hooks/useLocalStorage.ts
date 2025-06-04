/**
 * Custom hook to manage state synchronized with localStorage.
 * @template T
 * @param {string} key The localStorage key.
 * @param {T | (() => T)} initialValue The initial state or function to generate it.
 * @returns {[T, (value: T) => void]} The state and setter function.
 */
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const getInitial = (): T => {
    if (typeof window === 'undefined') {
      return typeof initialValue === 'function'
        ? (initialValue as () => T)()
        : initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item
        ? (JSON.parse(item) as T)
        : typeof initialValue === 'function'
          ? (initialValue as () => T)()
          : initialValue;
    } catch {
      return typeof initialValue === 'function'
        ? (initialValue as () => T)()
        : initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getInitial);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // ignore write errors
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
