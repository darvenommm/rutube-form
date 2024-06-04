import { useState, useEffect } from 'react';

import type { Dispatch, SetStateAction } from 'react';

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    let currentValue: T;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue),
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
