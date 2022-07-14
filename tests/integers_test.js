const assert = require("assert");
const getIntegers = require("../integers");
describe("Returning a list of integers", () => {
  it("should return an array of numbers", () => {
    const integers = getIntegers(100);
    assert.strictEqual(typeof integers, "object");
  });
  it("should return an array of 100 numbers", () => {
    const integers = getIntegers(100);
    assert.strictEqual(integers.length, 100);
  });
});
