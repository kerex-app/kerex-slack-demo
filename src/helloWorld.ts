/**
 * A simple hello world function that returns a greeting message
 * @param name - Optional name to include in the greeting. Defaults to "World"
 * @returns A greeting message string
 */
export function helloWorld(name: string = "World"): string {
  return `Hello, ${name}!`;
}

/**
 * A hello world function that prints the greeting to console
 * @param name - Optional name to include in the greeting. Defaults to "World"
 */
export function printHelloWorld(name?: string): void {
  console.log(helloWorld(name));
}