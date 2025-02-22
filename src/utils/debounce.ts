export function debounce(
  callback: (...args: any[]) => void, // The function to debounce
  wait: number, // Time to wait before executing the function
  immediate: boolean = false // Whether to execute the function immediately on the first call
): (...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined; // Timer ID

  return function (this: any, ...args: any[]): void {
    const context = this; // Preserve the context (this) for the callback

    // If immediate is true and this is the first call, execute the callback
    if (immediate && !timeout) {
      callback.apply(context, args);
    }

    // Clear the previous timer
    clearTimeout(timeout);

    // Set a new timer to execute the callback after the specified wait time
    timeout = setTimeout(() => {
      callback.apply(context, args);
    }, wait);
  };
}
