export function removeStorageItem(key: string): void {
  window.localStorage.removeItem(key);
}

export function clearStorage(): void {
  window.localStorage.clear();
}

export function getStorageItem<T>(key: string): T | null {
  const item = window.localStorage.getItem(key);

  if (item !== null) {
    return JSON.parse(item) as T;
  }

  return null;
}

export function setStorageItem<T>(key: string, value: T): void {
  const item = JSON.stringify(value);
  window.localStorage.setItem(key, item);
}
