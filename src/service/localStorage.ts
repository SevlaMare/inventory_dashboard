import { Logger } from './logger';

// T generic type, that HAS to be expecified at fx call.
export function getStorageItem<T>(storeKey: string): T | undefined {
  try {
    const serializedState = localStorage.getItem(storeKey);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState) as T; // Cast to type T
  } catch (err) {
    Logger('Could not load state:', err as Error, 'error');
    return undefined;
  }
}

export function setStorageItem<T>(storeKey: string, state: T): void {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storeKey, serializedState);
  } catch (err) {
    Logger('Could not save state:', err as Error, 'error');
    // Ignore
  }
}

export function cleanStorage() {
  window.localStorage.clear();
}

export function removeStorageItem(key: string): void {
  window.localStorage.removeItem(key);
}
