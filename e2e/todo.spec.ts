import { test, expect } from '@playwright/test';

// [] FINISH CRUD E2E TESTS
// [] SETUP UNIT TEST

test.describe('Todo panel', () => {
  // run once
  // test.beforeAll(async ({ page }) => {});

  // run before every test
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  const todoTitle = 'New Todo Item';

  test('can create a new todo, then read it', async ({ page }) => {
    // Locate the form using data-testid attribute
    const form = page.locator('[data-testid="form"]');
    // const form = page.locator('form'); // or just by element

    // Fill the input field
    const input = form.locator('input[type="text"]');
    await input.fill(todoTitle);

    // Click the submit button
    await form.locator('button[type="submit"]').click();

    // Verify that the form submission was successful
    await expect(page.locator(`text=${todoTitle}`)).toBeVisible();
  });

  test('can remove a todo', async ({ page }) => {
    // Select todo
    const currentTodoTitle = 'undo feature';

    // Locate the parent element <li> containing the todo title
    const todoItem = page.locator(`li:has-text("${currentTodoTitle}")`);

    // Verify that the todo item is visible
    await expect(todoItem).toBeVisible();

    // Locate the remove button inside the <li>
    const removeButton = todoItem.locator('button:has-text("del")');

    // Check if the button is visible
    await expect(removeButton).toBeVisible();

    // Click the remove button
    await removeButton.click();

    // Verify that the todo item is no longer visible
    await expect(todoItem).toBeHidden();
  });

  // test('can toggle todo completion status', async ({ page }) => {
  //   // Assuming there's at least one todo item present
  //   const todoItem = page.locator('li').first(); // Select the first todo item

  //   // Check the initial completion status
  //   const initialStatus = await todoItem.locator('span').nth(1).textContent();
  //   expect(initialStatus).toBe('false'); // Assuming the initial status is false

  //   // Click the toggle button
  //   await todoItem.locator('button:has-text("Toggle")').click();

  //   // Check the updated completion status
  //   const updatedStatus = await todoItem.locator('span').nth(1).textContent();
  //   expect(updatedStatus).toBe('true'); // Assuming the status changes to true
  // });

  // test('can edit a todo', async ({ page }) => {
  //   // Assuming there's at least one todo item present
  //   const todoItem = page.locator('li').first(); // Select the first todo item

  //   // Click the edit button
  //   await todoItem.locator('button:has-text("Edit")').click();

  //   // Change the input value
  //   const newTodoTitle = 'Updated Todo Title';
  //   await todoItem.locator('input').fill(newTodoTitle);

  //   // Click the save button
  //   await todoItem.locator('button:has-text("Save")').click();

  //   // Verify that the updated title is displayed
  //   await expect(todoItem.locator('span')).toHaveText(newTodoTitle);
  // });
});
