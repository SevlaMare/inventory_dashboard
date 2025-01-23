export function Logger(
  message: string = '',
  error: Error | null = null,
  type: 'info' | 'warn' | 'error' = 'info'
): void {
  if (error) {
    console.error(`Error: ${error.message}`);
  }

  console[type](`Stack Trace: ${message}`);
}
