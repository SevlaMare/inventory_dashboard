import { describe, it, expect } from 'vitest';

describe('Check setup', () => {
  it('should be equal to 2', () => {
    expect(1 + 1).toEqual(2);
  });
});

describe('localStorage tests', () => {
  it('should store data in localStorage', () => {
    localStorage.setItem('key', 'value');
    expect(localStorage.getItem('key')).toBe('value');
  });

  it('should remove data from localStorage', () => {
    localStorage.setItem('key', 'value');
    localStorage.removeItem('key');
    expect(localStorage.getItem('key')).toBeNull();
  });

  it('should clear all data from localStorage', () => {
    localStorage.setItem('key', 'value');
    localStorage.clear();
    expect(localStorage.getItem('key')).toBeNull();
  });
});
