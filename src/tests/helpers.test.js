import { describe, it, expect } from 'vitest';
import { isEmailValid, isPasswordValid } from '../helpers/validation';

describe('isPasswordValid', () => {
  it('returns false for null password', () => {
    expect(isPasswordValid(null)).toBe(false);
  });

  it('returns false for undefined password', () => {
    expect(isPasswordValid(undefined)).toBe(false);
  });

  it('returns false for empty password', () => {
    expect(isPasswordValid('')).toBe(false);
  });

  it('returns false for password with less than 6 characters', () => {
    expect(isPasswordValid('abc12')).toBe(false);
  });

  it('returns false for password with non-alphanumeric characters', () => {
    expect(isPasswordValid('abc123!')).toBe(false);
  });

  it('returns true for password with at least 6 alphanumeric characters', () => {
    expect(isPasswordValid('abc1234')).toBe(true);
  });

  it('returns true for password with more than 6 alphanumeric characters', () => {
    expect(isPasswordValid('abcdefgh123456')).toBe(true);
  });
});

describe('isEmailValid', () => {
  it('returns false for null email', () => {
    expect(isEmailValid(null)).toBe(false);
  });

  it('returns false for undefined email', () => {
    expect(isEmailValid(undefined)).toBe(false);
  });

  it('returns false for empty email', () => {
    expect(isEmailValid('')).toBe(false);
  });

  it('returns false for email without @ symbol', () => {
    expect(isEmailValid('example')).toBe(false);
  });

  it('returns false for email without domain', () => {
    expect(isEmailValid('example@')).toBe(false);
  });

  it('returns false for email without top-level domain', () => {
    expect(isEmailValid('example@example')).toBe(false);
  });

  it('returns true for valid email', () => {
    expect(isEmailValid('example@example.com')).toBe(true);
  });

  it('returns true for email with subdomain', () => {
    expect(isEmailValid('example@subdomain.example.com')).toBe(true);
  });

  it('returns true for email with country code top-level domain', () => {
    expect(isEmailValid('example@example.co.uk')).toBe(true);
  });
});
