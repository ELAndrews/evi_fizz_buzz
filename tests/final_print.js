const assert = require("assert").strict;
const printFinalResult = require("../final_print");

describe("Given that the array is sent to the final print", () => {
  it("final print returns a string", () => {
    const testArray = [1, 2, "fizz", 4];
    const expectedString = "1,2,fizz,4";

    const resultString = printFinalResult(testArray);

    assert.deepEqual(resultString, expectedString);
  });
});
