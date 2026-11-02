import { pathToFileURL } from "node:url";

/** Returns the greeting printed by the compiled Hello World program. */
export function hello(): string {
  return "Hello, World!";
}

// This makes `node dist/hello.js` a runnable cross-platform Hello World program
// without printing during unit tests that import `hello`.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(hello());
}
