# Hello World TypeScript

A simple TypeScript project with hello world functions.

## Features

- `helloWorld(name?)`: Returns a greeting message string
- `printHelloWorld(name?)`: Prints a greeting message to console

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run in development mode:
   ```bash
   npm run dev
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Run the built project:
   ```bash
   npm start
   ```

## Usage

### As a script
```bash
npm run dev
```

### As a module
```typescript
import { helloWorld, printHelloWorld } from './src/helloWorld';

// Get greeting string
const greeting = helloWorld("World");
console.log(greeting); // "Hello, World!"

// Print greeting directly
printHelloWorld("TypeScript"); // Prints "Hello, TypeScript!"
```