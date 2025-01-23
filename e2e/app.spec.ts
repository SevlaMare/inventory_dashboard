import { test, expect } from '@playwright/test';

test.describe('Home', () => {
  // hook run before each test call
  test.beforeEach(async ({ page }) => {
    // homepage from playwright.config.ts
    await page.goto('');
  });

  test('load metadata', async ({ page }) => {
    await expect(page).toHaveTitle('App');
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
      'content',
      'width=device-width, initial-scale=1.0'
    );
  });

  test('has menu', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible();
  });
});
