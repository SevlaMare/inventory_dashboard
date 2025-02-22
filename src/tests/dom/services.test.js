import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getStorageItem } from '@/service/localStorage';

describe('getStorageItem', () => {
  const storeKey = 'testKey';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should return undefined when the key is not found', () => {
    const result = getStorageItem(storeKey);
    expect(result).toBeUndefined();
  });

  it('should return undefined when localStorage throws an error', () => {
    // Mock localStorage.getItem to throw an error
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const result = getStorageItem(storeKey);
    expect(result).toBeUndefined();

    // Restore the original implementation
    vi.restoreAllMocks();
  });
});
