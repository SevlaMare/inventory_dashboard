import { useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '@/services/storage';
import { Logger } from '@/services/logger';

// TODO: sync with server
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = getStorageItem<T>(key);
      return item !== null ? item : initialValue;
    } catch (error: unknown) {
      Logger('Error retrieving data from localStorage.');
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      setStorageItem(key, storedValue);
    } catch (error) {
      Logger('Error setting data to localStorage.');
    }
  }, [key, storedValue]);

  const setValue = (value: T) => {
    setStoredValue(value);
  };

  return [storedValue, setValue];
}
