# End-to-End (E2E) Testing

> Automated tests to validate the application's critical path as a user would, including all necessary integrated systems, such as APIs and databases.

## General considerations
- Require the `.env` file to read the application host and port.
- Configurations on `playwright.config.ts` file.
- Reports can be found in the `/test-results` folder.

- Each file will be run in a separated worker.
- Tests run in isolated context.

# Running the test suit
First run the application
```
yarn dev
```

Then run the tests
```
yarn e2e
```

# Debbuging Setup
Tests can be displayed on live preview at browser, follow the documentation:
https://playwright.dev/docs/debug
-HTML can be inspect directly on browser at debug mode.