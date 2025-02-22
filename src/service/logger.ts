export function Logger(
  message: string = '',
  obj: object | null = null,
  error: Error | null = null,
  type: 'info' | 'warn' | 'error' = 'info'
): void {
  if (error) {
    console.error(`Error: ${error.message}`);
  }

  // Log the message
  console[type](message);

  // Log the object if provided
  if (obj) {
    console[type](obj);
  }
}
