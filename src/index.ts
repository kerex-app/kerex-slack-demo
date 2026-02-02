import { helloWorld, printHelloWorld } from './helloWorld';

// Export the functions for use as a module
export { helloWorld, printHelloWorld };

// If this file is run directly, execute the hello world function
if (require.main === module) {
  // Basic hello world
  printHelloWorld();
  
  // Hello world with a custom name
  printHelloWorld("TypeScript");
  
  // Using the return value
  const greeting = helloWorld("Developer");
  console.log(`Custom greeting: ${greeting}`);
}