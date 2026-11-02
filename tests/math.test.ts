import { describe, expect, it } from "vitest";
import { add } from "../src/math.js";
import { hello } from "../src/hello.js";

describe("BasicAddition", () => {
  it("adds two positive integers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("Hello World", () => {
  it("returns the required greeting", () => {
    expect(hello()).toBe("Hello, World!");
  });
});
